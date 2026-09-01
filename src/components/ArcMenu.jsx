import { useCallback, useEffect, useRef, useState } from 'react'
import './ArcMenu.css'

export default function ArcMenu({
  items,
  activeIndex = 0,
  onSelect,
  onOpen,
}) {
  const rootRef = useRef(null)
  const itemRefs = useRef([])
  const posRef = useRef(activeIndex)
  const targetRef = useRef(activeIndex)
  const selectedRef = useRef(activeIndex)
  const rafRef = useRef(null)
  const lastFrameRef = useRef(0)
  const wheelTimerRef = useRef(null)
  const dragRef = useRef(null)
  const dragMovedRef = useRef(false)
  const onSelectRef = useRef(onSelect)
  const onOpenRef = useRef(onOpen)

  const [selectedIndex, setSelectedIndex] = useState(activeIndex)
  const [isDragging, setIsDragging] = useState(false)

  onSelectRef.current = onSelect
  onOpenRef.current = onOpen

  const configRef = useRef({})
  configRef.current = {
    count: items.length,
    items,
    rowHeight: 88,
    curve: 1.35,
    tilt: 6.5,
    fade: 0.16,
    minOpacity: 0.18,
    smoothing: 180,
    loop: false,
  }

  const runFrame = useCallback((now) => {
    const config = configRef.current
    const dt = Math.min((now - lastFrameRef.current) / 1000, 0.05)
    lastFrameRef.current = now

    const tau = Math.max(config.smoothing, 1) / 1000
    const easing = 1 - Math.exp(-dt / tau)

    const target = targetRef.current
    const current = posRef.current

    let next = current + (target - current) * easing
    const settled = Math.abs(target - next) < 0.001

    if (settled) next = target
    posRef.current = next

    const tiltRad = (config.tilt * Math.PI) / 180
    const radius = tiltRad > 0.0005 ? config.rowHeight / tiltRad : 0

    for (let index = 0; index < config.count; index += 1) {
      const element = itemRefs.current[index]
      if (!element) continue

      let distance = index - next

      if (config.loop && config.count > 1) {
        distance = ((distance % config.count) + config.count) % config.count
        if (distance > config.count / 2) distance -= config.count
      }

      const absoluteDistance = Math.abs(distance)

      let x = 0
      let y = distance * config.rowHeight
      let rotation = 0

      if (radius > 0) {
        const angle = Math.max(
          -Math.PI / 2,
          Math.min(Math.PI / 2, distance * tiltRad),
        )

        y = radius * Math.sin(angle)
        x = -radius * (1 - Math.cos(angle)) * config.curve
        rotation = (angle * 180) / Math.PI
      }

      const activeProgress = Math.max(
        0,
        1 - Math.min(absoluteDistance, 1),
      )

      element.style.transform = `translate3d(${x.toFixed(2)}px, calc(${y.toFixed(2)}px - 50%), 0) rotate(${rotation.toFixed(3)}deg)`
      element.style.opacity = String(
        Math.max(config.minOpacity, 1 - absoluteDistance * config.fade),
      )
      element.style.setProperty('--arc-active', activeProgress.toFixed(4))
    }

    rafRef.current = settled ? null : requestAnimationFrame(runFrame)
  }, [])

  const startLoop = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current)
    }

    lastFrameRef.current = performance.now()
    rafRef.current = requestAnimationFrame(runFrame)
  }, [runFrame])

  const applyTarget = useCallback(
    (value, snap = false, notify = true) => {
      const config = configRef.current
      if (!config.count) return

      let nextValue = value

      if (!config.loop) {
        nextValue = Math.min(
          Math.max(nextValue, 0),
          Math.max(config.count - 1, 0),
        )
      }

      if (snap) nextValue = Math.round(nextValue)

      targetRef.current = nextValue

      const nextIndex =
        ((Math.round(nextValue) % config.count) + config.count) % config.count

      if (nextIndex !== selectedRef.current) {
        selectedRef.current = nextIndex
        setSelectedIndex(nextIndex)

        if (notify) {
          onSelectRef.current?.(nextIndex)
        }
      }

      startLoop()
    },
    [startLoop],
  )

  // Mantiene el wheel sincronizado si App cambia activeIndex desde afuera.
  useEffect(() => {
    if (activeIndex === selectedRef.current) return

    selectedRef.current = activeIndex
    setSelectedIndex(activeIndex)
    posRef.current = activeIndex
    targetRef.current = activeIndex
    applyTarget(activeIndex, true, false)
  }, [activeIndex, applyTarget])

  // Mouse wheel / touchpad.
  useEffect(() => {
    const element = rootRef.current
    if (!element) return undefined

    const handleWheel = (event) => {
      if (event.ctrlKey) return

      event.preventDefault()

      const config = configRef.current
      const rawDelta = event.deltaMode === 1 ? event.deltaY * 24 : event.deltaY
      const step = Math.max(-1, Math.min(1, rawDelta / config.rowHeight))

      applyTarget(targetRef.current + step, false)

      if (wheelTimerRef.current) {
        clearTimeout(wheelTimerRef.current)
      }

      wheelTimerRef.current = window.setTimeout(() => {
        applyTarget(targetRef.current, true)
      }, 130)
    }

    element.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      element.removeEventListener('wheel', handleWheel)

      if (wheelTimerRef.current) {
        clearTimeout(wheelTimerRef.current)
      }
    }
  }, [applyTarget])

  // Drag con mouse y swipe táctil usando Pointer Events.
  const handlePointerDown = useCallback((event) => {
    dragRef.current = {
      y: event.clientY,
      start: targetRef.current,
      pointerId: event.pointerId,
    }

    dragMovedRef.current = false
    setIsDragging(true)
  }, [])

  const handlePointerMove = useCallback(
    (event) => {
      const drag = dragRef.current
      if (!drag) return

      const deltaY = event.clientY - drag.y

      if (!dragMovedRef.current && Math.abs(deltaY) > 4) {
        dragMovedRef.current = true
        rootRef.current?.setPointerCapture(drag.pointerId)
      }

      if (!dragMovedRef.current) return

      applyTarget(
        drag.start - deltaY / configRef.current.rowHeight,
        false,
      )
    },
    [applyTarget],
  )

  const handlePointerEnd = useCallback(() => {
    if (!dragRef.current) return

    dragRef.current = null
    setIsDragging(false)

    if (dragMovedRef.current) {
      applyTarget(targetRef.current, true)
    }
  }, [applyTarget])

  const handleItemClick = useCallback(
    (index) => {
      if (dragMovedRef.current) {
        dragMovedRef.current = false
        return
      }

      // Segundo click sobre la opción centrada: entrar a la sección.
      if (index === selectedRef.current) {
        onOpenRef.current?.(items[index])
        return
      }

      applyTarget(index, true)
    },
    [applyTarget, items],
  )

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        onOpenRef.current?.(items[selectedRef.current])
        return
      }

      let direction = null

      if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') direction = -1
      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') direction = 1

      if (direction === null) return

      event.preventDefault()
      applyTarget(Math.round(targetRef.current) + direction, true)
    },
    [applyTarget, items],
  )

  useEffect(() => {
    applyTarget(activeIndex, false, false)
  }, [items.length, applyTarget, activeIndex])

  useEffect(
    () => () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
      if (wheelTimerRef.current) clearTimeout(wheelTimerRef.current)
    },
    [],
  )

  return (
    <nav className="arc-wheel-shell" aria-label="Navegación principal">
      <div
        ref={rootRef}
        className={`arc-wheel ${isDragging ? 'is-dragging' : ''}`}
        role="listbox"
        tabIndex={0}
        aria-label="Selector de secciones"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
        onKeyDown={handleKeyDown}
      >
        {items.map((item, index) => (
          <button
            key={item.id}
            ref={(element) => {
              itemRefs.current[index] = element
            }}
            className={`arc-wheel__item ${
              selectedIndex === index ? 'is-selected' : ''
            } ${item.label.length >= 17 ? 'is-long-label' : ''}`}
            type="button"
            role="option"
            aria-selected={selectedIndex === index}
            onClick={() => handleItemClick(index)}
          >
            <span className="arc-wheel__index">{item.index}</span>
            <strong>{item.label}</strong>
          </button>
        ))}
      </div>

      <p className="arc-wheel__help" aria-hidden="true">
        ARRASTRAR
      </p>
    </nav>
  )
}

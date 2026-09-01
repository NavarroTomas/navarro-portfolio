import { useRef, useState } from 'react'
import { labExperiments } from '../../data/lab.js'
import './LabSection.css'

const initialPositions = Object.fromEntries(
  labExperiments.map(item => [item.id, item.initialPosition]),
)

const clamp = (value, min, max) => Math.min(max, Math.max(min, value))

export default function LabSection({ reducedMotion = false }) {
  const [positions, setPositions] = useState(initialPositions)
  const [tracking, setTracking] = useState(0)
  const deskRef = useRef(null)
  const dragRef = useRef(null)
  const fieldRef = useRef(null)
  const barsRef = useRef(null)
  const tiltRef = useRef(null)

  const resetDesk = () => {
    setPositions(initialPositions)
    setTracking(0)

    if (fieldRef.current) {
      fieldRef.current.style.setProperty('--field-x', '50%')
      fieldRef.current.style.setProperty('--field-y', '50%')
    }

    if (tiltRef.current) {
      tiltRef.current.style.transform = ''
    }
  }

  const startDrag = (event, id) => {
    if (window.matchMedia('(max-width: 760px)').matches) return

    const desk = deskRef.current
    if (!desk) return

    const rect = desk.getBoundingClientRect()
    const current = positions[id]

    dragRef.current = {
      id,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      startLeft: current.x,
      startTop: current.y,
      width: rect.width,
      height: rect.height,
    }

    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const moveDrag = (event) => {
    const drag = dragRef.current
    if (!drag || drag.pointerId !== event.pointerId) return

    const dx = ((event.clientX - drag.startX) / drag.width) * 100
    const dy = ((event.clientY - drag.startY) / drag.height) * 100

    setPositions(current => ({
      ...current,
      [drag.id]: {
        x: clamp(drag.startLeft + dx, 0, 68),
        y: clamp(drag.startTop + dy, 0, 70),
      },
    }))
  }

  const endDrag = (event) => {
    const drag = dragRef.current
    if (!drag || drag.pointerId !== event.pointerId) return

    dragRef.current = null

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
  }

  const handleFieldMove = (event) => {
    if (reducedMotion || !fieldRef.current) return

    const rect = fieldRef.current.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100

    fieldRef.current.style.setProperty('--field-x', `${x}%`)
    fieldRef.current.style.setProperty('--field-y', `${y}%`)
  }

  const handleBarsMove = (event) => {
    if (reducedMotion || !barsRef.current) return

    const rect = barsRef.current.getBoundingClientRect()
    const pointer = clamp((event.clientX - rect.left) / rect.width, 0, 1)
    const bars = barsRef.current.querySelectorAll('i')

    bars.forEach((bar, index) => {
      const point = index / Math.max(bars.length - 1, 1)
      const distance = Math.abs(pointer - point)
      const scale = clamp(1.05 - distance * 1.5, 0.18, 1)

      bar.style.transform = `scaleY(${scale})`
    })
  }

  const resetBars = () => {
    if (!barsRef.current) return

    barsRef.current.querySelectorAll('i').forEach(bar => {
      bar.style.transform = ''
    })
  }

  const handleTiltMove = (event) => {
    if (reducedMotion || !tiltRef.current) return

    const rect = tiltRef.current.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5

    tiltRef.current.style.transform =
      `perspective(700px) rotateX(${(-y * 9).toFixed(2)}deg) rotateY(${(x * 11).toFixed(2)}deg)`
  }

  const resetTilt = () => {
    if (tiltRef.current) tiltRef.current.style.transform = ''
  }

  const renderExperiment = (experiment) => {
    if (experiment.id === 'field') {
      return (
        <div
          className="lab-field"
          ref={fieldRef}
          onPointerMove={handleFieldMove}
          onPointerLeave={() => {
            if (!fieldRef.current) return
            fieldRef.current.style.setProperty('--field-x', '50%')
            fieldRef.current.style.setProperty('--field-y', '50%')
          }}
        >
          <i className="lab-field__line lab-field__line--x" />
          <i className="lab-field__line lab-field__line--y" />
          <span className="lab-field__dot" />
          <small>MOVE POINTER</small>
        </div>
      )
    }

    if (experiment.id === 'type') {
      return (
        <div className="lab-type">
          <div
            className="lab-type__sample"
            style={{ letterSpacing: `${tracking / 10}em` }}
          >
            MANROPE
          </div>

          <label>
            <span>TRACKING</span>
            <input
              type="range"
              min="-6"
              max="18"
              value={tracking}
              onChange={event => setTracking(Number(event.target.value))}
            />
            <b>{tracking > 0 ? '+' : ''}{tracking}</b>
          </label>
        </div>
      )
    }

    if (experiment.id === 'bars') {
      return (
        <div
          className="lab-bars"
          ref={barsRef}
          onPointerMove={handleBarsMove}
          onPointerLeave={resetBars}
        >
          {Array.from({ length: 13 }).map((_, index) => (
            <i
              key={index}
              style={{ '--bar-delay': `${index * 20}ms` }}
            />
          ))}

          <small>MOVE HORIZONTALLY</small>
        </div>
      )
    }

    return (
      <div
        className="lab-tilt-stage"
        onPointerMove={handleTiltMove}
        onPointerLeave={resetTilt}
      >
        <div className="lab-tilt-card" ref={tiltRef}>
          <span>04 / TEST OBJECT</span>
          <strong>N</strong>
          <div>
            <small>PORTFOLIO</small>
            <small>2026</small>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="lab-page">
      <section className="lab-intro">
        <div className="lab-intro__number">03</div>

        <div className="lab-intro__content">
          <span className="section-kicker">LAB / PLAYGROUND</span>

          <h1>
            Probar.
            <br />
            Romper.
            <br />
            Entender.
          </h1>

          <p>
            Este espacio no muestra productos terminados. Son pequeñas pruebas
            de interacción, tipografía y movimiento que puedo usar después como
            piezas dentro de proyectos reales.
          </p>

          <div className="lab-intro__footer">
            <span>4 EXPERIMENTOS</span>
            <span>DRAG / POINTER / INPUT</span>
            <span>BAJAR ↓</span>
          </div>
        </div>
      </section>

      <section className="lab-workbench">
        <header className="lab-workbench__toolbar">
          <div>
            <span>LAB DESK</span>
            <b>03 / INTERACTION TESTS</b>
          </div>

          <div className="lab-workbench__legend">
            <span>ARRASTRÁ LAS VENTANAS</span>
            <span>PROBÁ CADA TEST</span>
          </div>

          <button type="button" onClick={resetDesk}>
            RESET DESK
          </button>
        </header>

        <div className="lab-desk" ref={deskRef}>
          <div className="lab-desk__grid" aria-hidden="true" />

          {labExperiments.map(experiment => {
            const position = positions[experiment.id]

            return (
              <article
                className={`lab-window lab-window--${experiment.size}`}
                key={experiment.id}
                style={{
                  left: `${position.x}%`,
                  top: `${position.y}%`,
                }}
              >
                <header
                  className="lab-window__bar"
                  onPointerDown={event => startDrag(event, experiment.id)}
                  onPointerMove={moveDrag}
                  onPointerUp={endDrag}
                  onPointerCancel={endDrag}
                >
                  <div>
                    <span>{experiment.index}</span>
                    <strong>{experiment.title}</strong>
                  </div>

                  <span>{experiment.subtitle}</span>
                </header>

                <div className="lab-window__experiment">
                  {renderExperiment(experiment)}
                </div>

                <footer className="lab-window__footer">
                  <p>{experiment.description}</p>
                  <span>TEST / {experiment.index}</span>
                </footer>
              </article>
            )
          })}
        </div>
      </section>

      <section className="lab-outro">
        <span>PLAYGROUND ≠ SHOWCASE</span>

        <h2>
          Una idea chica
          <br />
          puede terminar
          <br />
          en un proyecto grande.
        </h2>

        <p>
          A medida que vaya creando componentes, interacciones o pruebas que
          valgan la pena, este escritorio puede seguir creciendo.
        </p>
      </section>
    </div>
  )
}

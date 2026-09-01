import { useEffect, useRef } from 'react'
import { upcoming } from '../../data/upcoming.js'

export default function UpcomingSection({ reducedMotion = false }) {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const progressRef = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    const progress = progressRef.current
    if (!section || !track) return undefined

    if (reducedMotion) {
      track.style.transform = 'none'
      if (progress) progress.style.transform = 'scaleX(1)'
      return undefined
    }

    const update = () => {
      rafRef.current = null
      const rect = section.getBoundingClientRect()
      const scrollable = Math.max(1, section.offsetHeight - window.innerHeight)
      const travelled = Math.min(scrollable, Math.max(0, -rect.top))
      const ratio = travelled / scrollable
      const maxTranslate = Math.max(0, track.scrollWidth - window.innerWidth)

      track.style.transform = `translate3d(${-maxTranslate * ratio}px, 0, 0)`
      if (progress) progress.style.transform = `scaleX(${ratio})`
    }

    const requestUpdate = () => {
      if (rafRef.current) return
      rafRef.current = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current)
    }
  }, [reducedMotion])

  const jumpTo = index => {
    const section = sectionRef.current
    if (!section) return
    const ratio = (index + 1) / (upcoming.length + 1)
    const scrollable = Math.max(0, section.offsetHeight - window.innerHeight)
    const sectionTop = window.scrollY + section.getBoundingClientRect().top
    window.scrollTo({ top: sectionTop + scrollable * ratio, behavior: reducedMotion ? 'auto' : 'smooth' })
  }

  return (
    <div className="upcoming-horizontal-page">
      <section className="upcoming-horizontal-intro">
        <div>
          <span className="section-kicker">05 / PRÓXIMOS PROYECTOS</span>
          <h1>Roadmap.</h1>
        </div>
        <p>
          Acá el scroll vertical mueve una cinta horizontal. La sensación es más de recorrido que de lista.
        </p>
      </section>

      <section
        className="upcoming-horizontal"
        ref={sectionRef}
        style={{ '--roadmap-height': `${Math.max(280, upcoming.length * 105)}vh` }}
      >
        <div className="upcoming-horizontal__sticky">
          <header className="upcoming-horizontal__header">
            <span>WORK IN PROGRESS</span>
            <div className="upcoming-horizontal__progress"><i ref={progressRef} /></div>
            <span>SCROLL ↓</span>
          </header>

          <div className="upcoming-horizontal__track" ref={trackRef}>
            <article className="upcoming-horizontal__cover">
              <span>LO PRÓXIMO</span>
              <h2>Ideas que todavía están abiertas.</h2>
              <p>Actualizá esta sección a medida que cada trabajo pase de idea a prototipo y después a proyecto final.</p>
            </article>

            {upcoming.map((item, index) => (
              <article className="upcoming-horizontal__card" key={`${item.index}-${item.name}`}>
                <div className="upcoming-horizontal__card-top">
                  <span>{item.index}</span>
                  <b>{item.status}</b>
                </div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <button type="button" onClick={() => jumpTo(index)}>UBICAR EN ROADMAP</button>
              </article>
            ))}

            <article className="upcoming-horizontal__end">
              <span>END / CONTINÚA</span>
              <strong>+</strong>
              <p>El roadmap puede seguir creciendo sin cambiar la estructura.</p>
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}

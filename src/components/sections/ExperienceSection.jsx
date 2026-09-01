import { useEffect, useMemo, useRef, useState } from 'react'
import { experience } from '../../data/experience.js'

export default function ExperienceSection({ reducedMotion = false }) {
  const [activeId, setActiveId] = useState(experience[0]?.id ?? null)
  const chapterRefs = useRef(new Map())

  const activeIndex = useMemo(
    () => Math.max(0, experience.findIndex(item => item.id === activeId)),
    [activeId],
  )

  useEffect(() => {
    const nodes = experience
      .map(item => chapterRefs.current.get(item.id))
      .filter(Boolean)

    if (!nodes.length) return undefined

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target?.dataset?.experienceId) {
          setActiveId(visible[0].target.dataset.experienceId)
        }
      },
      {
        rootMargin: '-24% 0px -34% 0px',
        threshold: [0.15, 0.35, 0.6],
      },
    )

    nodes.forEach(node => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  const goToExperience = id => {
    chapterRefs.current.get(id)?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'center' })
  }

  return (
    <div className="experience-rail-page">
      <section className="experience-rail-intro">
        <div className="experience-rail-intro__index">03 / EXPERIENCIA</div>
        <div>
          <span className="section-kicker">TRAYECTORIA / CRONOLOGÍA</span>
          <h1>Experiencia.</h1>
          <p>
            Cada etapa tiene su propio punto en la línea. Podés recorrerla con scroll o saltar directamente
            desde el índice lateral.
          </p>
        </div>
        <div className="experience-rail-intro__status">
          <span>{experience.length} ETAPAS</span>
          <span>SCROLL / CLICK</span>
        </div>
      </section>

      <section className="experience-rail">
        <aside className="experience-rail__nav" aria-label="Navegación de experiencia">
          <div className="experience-rail__nav-sticky">
            <span className="section-kicker">ÍNDICE</span>
            <div className="experience-rail__counter">
              <strong>{String(activeIndex + 1).padStart(2, '0')}</strong>
              <span>/ {String(experience.length).padStart(2, '0')}</span>
            </div>

            <div className="experience-rail__track">
              <i style={{ '--rail-progress': experience.length > 1 ? activeIndex / (experience.length - 1) : 1 }} />
              {experience.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className={item.id === activeId ? 'is-active' : ''}
                  onClick={() => goToExperience(item.id)}
                  aria-label={`Ir a ${item.role}`}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <b>{item.period}</b>
                </button>
              ))}
            </div>
          </div>
        </aside>

        <div className="experience-rail__chapters">
          {experience.map((item, index) => (
            <article
              key={item.id}
              className="experience-rail-card"
              data-experience-id={item.id}
              ref={node => {
                if (node) chapterRefs.current.set(item.id, node)
                else chapterRefs.current.delete(item.id)
              }}
            >
              <div className="experience-rail-card__eyebrow">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <span>{item.period}</span>
                <span>{item.location}</span>
              </div>

              <div className="experience-rail-card__title">
                <h2>{item.role}</h2>
                <strong>{item.company}</strong>
              </div>

              <div className="experience-rail-card__body">
                <p>{item.summary}</p>
                <ol>
                  {item.details.map((detail, detailIndex) => (
                    <li key={`${detail}-${detailIndex}`}>
                      <span>{String(detailIndex + 1).padStart(2, '0')}</span>
                      <p>{detail}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

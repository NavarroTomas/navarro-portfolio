import { useMemo, useState } from 'react'
import { services } from '../../data/services.js'
import { profile } from '../../data/profile.js'
import './ServicesSection.css'

const createWhatsAppUrl = (value) => {
  if (!value) return '#'

  // Si ya cargaste una URL completa de WhatsApp, la usamos directamente.
  if (
    value.startsWith('http://') ||
    value.startsWith('https://')
  ) {
    return value
  }

  // Elimina +, espacios, guiones, paréntesis, etc.
  const number = value.replace(/\D/g, '')

  const message = encodeURIComponent(
    'Hola Tomás, vi tu portfolio y quería consultarte por un proyecto.'
  )

  return `https://wa.me/${number}?text=${message}`
}

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const activeService = useMemo(
    () => services[activeIndex] ?? services[0],
    [activeIndex]
  )

  const move = (direction) => {
    if (!services.length) return

    setActiveIndex((current) => {
      const next = current + direction

      if (next < 0) return services.length - 1
      if (next >= services.length) return 0

      return next
    })
  }

  const whatsapp =
    profile?.contact?.whatsapp ||
    profile?.contact?.phone ||
    ''

  const whatsappUrl = createWhatsAppUrl(whatsapp)

  if (!activeService) return null

  return (
    <div className="services-simple-page">
      <section className="services-simple-hero">
        <div className="services-simple-hero__meta">
          <span className="section-kicker">04 / SERVICIOS</span>

          <span>
            {String(activeIndex + 1).padStart(2, '0')} /{' '}
            {String(services.length).padStart(2, '0')}
          </span>
        </div>

        <div className="services-simple-hero__content">
          <h1>
            Servicios
            <br />
            pensados para
            <br />
            proyectos reales.
          </h1>

          <p>
            Trabajo en páginas web, sistemas a medida y mejoras sobre proyectos
            existentes. La idea no es llenar una lista de cosas “que hago”, sino
            mostrar de forma clara en qué te puedo ayudar y cómo suelo trabajar.
          </p>
        </div>
      </section>

      <section className="services-simple-layout">
        <aside className="services-simple-sidebar">
          <div className="services-simple-sidebar__head">
            <span>SERVICIOS DISPONIBLES</span>
          </div>

          <div className="services-simple-sidebar__list">
            {services.map((service, index) => (
              <button
                key={service.id}
                type="button"
                className={`services-simple-sidebar__item ${
                  index === activeIndex ? 'is-active' : ''
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <span>{service.number}</span>

                <div>
                  <strong>{service.title}</strong>
                  <p>{service.short}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="services-simple-sidebar__controls">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Servicio anterior"
            >
              ←
            </button>

            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Servicio siguiente"
            >
              →
            </button>
          </div>
        </aside>

        <article className="services-simple-panel">
          <header className="services-simple-panel__header">
            <div className="services-simple-panel__eyebrow">
              <span>SELECCIONADO</span>
              <span>{activeService.number}</span>
            </div>

            <h2>{activeService.title}</h2>

            <div className="services-simple-panel__lead">
              <p className="services-simple-panel__short">
                {activeService.short}
              </p>

              <p className="services-simple-panel__description">
                {activeService.description}
              </p>
            </div>
          </header>

          <section className="services-simple-section">
            <div className="services-simple-section__label">
              <span>IDEAL PARA</span>
            </div>

            <div className="services-simple-section__content">
              <p className="services-simple-highlight">
                {activeService.idealFor}
              </p>
            </div>
          </section>

          <section className="services-simple-section services-simple-section--grid">
            <div className="services-simple-block">
              <div className="services-simple-block__head">
                <span>QUÉ INCLUYE</span>

                <span>
                  {String(activeService.includes.length).padStart(2, '0')}
                </span>
              </div>

              <div className="services-simple-list">
                {activeService.includes.map((item, index) => (
                  <div
                    key={item}
                    className="services-simple-list__row"
                  >
                    <span>
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="services-simple-block">
              <div className="services-simple-block__head">
                <span>CÓMO TRABAJO</span>

                <span>
                  {String(activeService.process.length).padStart(2, '0')}
                </span>
              </div>

              <div className="services-simple-list">
                {activeService.process.map((item, index) => (
                  <div
                    key={item}
                    className="services-simple-list__row"
                  >
                    <span>
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="services-simple-section">
            <div className="services-simple-section__label">
              <span>TECNOLOGÍAS</span>
            </div>

            <div className="services-simple-section__content">
              <div className="services-simple-tags">
                {activeService.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="services-simple-section">
            <div className="services-simple-section__label">
              <span>ENTREGA</span>
            </div>

            <div className="services-simple-section__content">
              <div className="services-simple-delivery">
                {activeService.deliverables.map((item, index) => (
                  <div
                    key={item}
                    className="services-simple-delivery__row"
                  >
                    <span>
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="services-simple-cta">
            <div>
              <span>¿TENÉS UN PROYECTO EN MENTE?</span>

              <p>
                Si querés una web, un sistema o mejorar algo que ya existe,
                escribime y vemos la mejor forma de encararlo.
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              HABLEMOS
              <span>↗</span>
            </a>
          </section>
        </article>
      </section>
    </div>
  )
}
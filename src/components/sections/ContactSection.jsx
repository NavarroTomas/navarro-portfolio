import { useState } from 'react'
import { profile } from '../../data/profile.js'
import './ContactSection.css'

function ExternalLink({
  href,
  eyebrow,
  title,
  description,
  download = false,
}) {
  return (
    <a
      className="contact-conversion-link"
      href={href}
      target="_blank"
      rel="noreferrer"
      download={download || undefined}
    >
      <div>
        <span>{eyebrow}</span>
        <strong>{title}</strong>
      </div>

      <p>{description}</p>
      <i>↗</i>
    </a>
  )
}

export default function ContactSection() {
  const [copied, setCopied] = useState(false)

  const {
    contact,
    professionalLinks,
    hiring,
  } = profile

  const github = professionalLinks.find(
    (item) => item.id === 'github'
  )

  const linkedin = professionalLinks.find(
    (item) => item.id === 'linkedin'
  )

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email)
      setCopied(true)

      window.setTimeout(() => {
        setCopied(false)
      }, 1600)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="contact-conversion">
      <section className="contact-conversion-hero">
        <div className="contact-conversion-hero__top">
          <span>05 / CONTACTO</span>

          <span className="contact-conversion-status">
            <i />
            {hiring.availability}
          </span>
        </div>

        <div className="contact-conversion-hero__main">
          <div>
            <span className="contact-conversion-kicker">
              OPEN TO WORK / FRONTEND
            </span>

            <h1>
              ¿Trabajamos
              <br />
              juntos?
            </h1>
          </div>

          <div className="contact-conversion-hero__info">
            <p>
              Busco incorporarme a un equipo de desarrollo como
              <strong> {hiring.primaryRole}</strong>, con apertura a
              posiciones de <strong>{hiring.secondaryRole}</strong>.
            </p>

            <div>
              <span>{hiring.location}</span>
              <span>{hiring.workMode}</span>
              <span>{hiring.primaryStack}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-conversion-primary">
        <header>
          <span>CONTACTO DIRECTO</span>

          <p>
            Si llegaste desde una búsqueda laboral, estos son los
            dos canales principales para contactarme.
          </p>
        </header>

        <div className="contact-conversion-primary__grid">
          <a
            className="contact-primary-action contact-primary-action--main"
            href={contact.jobEmailUrl}
          >
            <span>01 / EMAIL</span>

            <div>
              <small>CANAL RECOMENDADO</small>

              <strong>
                ESCRIBIR
                <br />
                POR EMAIL
              </strong>
            </div>

            <i>↗</i>
          </a>

          <a
            className="contact-primary-action"
            href={contact.whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span>02 / WHATSAPP</span>

            <div>
              <small>CONTACTO DIRECTO</small>

              <strong>
                ABRIR
                <br />
                WHATSAPP
              </strong>
            </div>

            <i>↗</i>
          </a>
        </div>

        <div className="contact-conversion-email-row">
          <span>{contact.email}</span>

          <button
            type="button"
            onClick={copyEmail}
          >
            {copied
              ? 'EMAIL COPIADO ✓'
              : 'COPIAR EMAIL'}
          </button>
        </div>
      </section>

      <section className="contact-conversion-proof">
        <aside>
          <span>PERFIL PROFESIONAL</span>

          <h2>
            Todo lo necesario
            <br />
            para evaluarme.
          </h2>

          <p>
            Portfolio, código y perfil profesional conectados desde
            un mismo lugar.
          </p>
        </aside>

        <div className="contact-conversion-proof__links">
          {github && (
            <ExternalLink
              href={github.url}
              eyebrow="CODE / PUBLIC"
              title="GitHub"
              description="Repositorios públicos y código fuente de proyectos seleccionados."
            />
          )}

          {linkedin && (
            <ExternalLink
              href={linkedin.url}
              eyebrow="PROFILE / WORK"
              title="LinkedIn"
              description="Perfil profesional para procesos de selección y contacto laboral."
            />
          )}

          {contact.cvUrl && (
            <ExternalLink
              href={contact.cvUrl}
              eyebrow="PDF / CV"
              title="Curriculum"
              description="Curriculum actualizado en formato PDF."
              download
            />
          )}
        </div>
      </section>

      <section className="contact-conversion-fit">
        <div className="contact-conversion-fit__head">
          <span>ENCAJE PROFESIONAL</span>
          <span>QUICK REVIEW</span>
        </div>

        <div className="contact-conversion-fit__grid">
          <article>
            <span>ROL PRINCIPAL</span>
            <strong>{hiring.primaryRole}</strong>
            <p>
              Mi posicionamiento principal y donde hoy tengo la
              evidencia más fuerte.
            </p>
          </article>

          <article>
            <span>TAMBIÉN ME INTERESA</span>
            <strong>{hiring.secondaryRole}</strong>
            <p>
              Especialmente cuando el puesto combina React con
              integración de datos y lógica de aplicación.
            </p>
          </article>

          <article>
            <span>STACK PRINCIPAL</span>
            <strong>{hiring.primaryStack}</strong>
            <p>
              Complementado por {hiring.supportingStack}.
            </p>
          </article>

          <article>
            <span>MODALIDAD</span>
            <strong>{hiring.workMode}</strong>
            <p>{hiring.location}</p>
          </article>
        </div>
      </section>

      <section className="contact-conversion-closing">
        <span>AVAILABLE / 2026</span>

        <h2>
          Si mi perfil encaja,
          <br />
          hablemos.
        </h2>

        <div className="contact-conversion-closing__actions">
          <a
            href={contact.jobEmailUrl}
            className="contact-closing-main"
          >
            CONTACTAR POR EMAIL
            <span>↗</span>
          </a>

          <a
            href={contact.whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            WHATSAPP ↗
          </a>

          {contact.cvUrl && (
            <a
              href={contact.cvUrl}
              target="_blank"
              rel="noreferrer"
              download
            >
              DESCARGAR CV ↓
            </a>
          )}
        </div>
      </section>
    </div>
  )
}

import { profile } from '../../data/profile.js'
import './AboutSection.css'

function SkillGroup({ label, items }) {
  return (
    <article className="about-recruiter-skill">
      <span>{label}</span>

      <div>
        {items.map((item) => (
          <strong key={item}>{item}</strong>
        ))}
      </div>
    </article>
  )
}

export default function AboutSection() {
  const {
    identity,
    about,
    professional,
    media,
    education,
    languages,
    skills,
  } = profile

  return (
    <div className="about-recruiter-page">
      <section className="about-recruiter-hero">
        <div className="about-recruiter-hero__top">
          <span>01 / SOBRE MÍ</span>
          <span>{about.availability}</span>
        </div>

        <div className="about-recruiter-hero__main">
          <div>
            <span className="about-recruiter-kicker">
              {identity.role}
            </span>

            <h1>
              {identity.firstName}
              <br />
              {identity.lastName}
            </h1>
          </div>

          <div className="about-recruiter-hero__summary">
            <p>{professional.summary}</p>

            <div>
              <span>{about.city}, {about.country}</span>
              <span>{about.workMode}</span>
              <span>{about.yearsBuilding}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-recruiter-intro">
        <aside className="about-recruiter-intro__visual">
          <div className="about-recruiter-photo">
            <div className="about-recruiter-photo__top">
              <span>PROFILE / 01</span>
              <span>FRONTEND</span>
            </div>

            <img
              src={media.portraitUrl}
              alt={media.portraitAlt}
            />

            <div className="about-recruiter-photo__bottom">
              <span>{about.city}, {about.country}</span>
              <span>AVAILABLE</span>
            </div>
          </div>
        </aside>

        <div className="about-recruiter-intro__content">
          <article className="about-recruiter-statement">
            <span>QUÉ PUEDO APORTAR</span>
            <p>{professional.value}</p>
          </article>

          <article className="about-recruiter-statement">
            <span>QUÉ BUSCO</span>
            <p>{professional.lookingFor}</p>
          </article>

          <article className="about-recruiter-statement">
            <span>CÓMO TRABAJO</span>
            <p>{professional.workStyle}</p>
          </article>
        </div>
      </section>

      <section className="about-recruiter-facts">
        <header>
          <span>PERFIL PROFESIONAL</span>
          <h2>Lo importante, rápido.</h2>
          <p>
            Información concreta para entender mi perfil sin
            tener que recorrer todo el portfolio.
          </p>
        </header>

        <div className="about-recruiter-facts__grid">
          {professional.recruiterFacts.map((fact, index) => (
            <article key={`${fact.label}-${fact.value}`}>
              <span>
                {String(index + 1).padStart(2, '0')} / {fact.label}
              </span>

              <strong>{fact.value}</strong>
              <p>{fact.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-recruiter-strengths">
        <header>
          <span>FORTALEZAS</span>
          <h2>
            Qué demuestra
            <br />
            mi trabajo.
          </h2>
        </header>

        <div className="about-recruiter-strengths__list">
          {professional.strengths.map((item, index) => (
            <article key={item.label}>
              <span className="about-recruiter-strengths__index">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-recruiter-stack">
        <aside>
          <span>STACK</span>

          <h2>
            Con qué
            <br />
            trabajo.
          </h2>

          <p>
            Priorizo las tecnologías que aparecen en mis proyectos
            y que puedo defender técnicamente en una entrevista.
          </p>
        </aside>

        <div className="about-recruiter-stack__content">
          <SkillGroup
            label="FRONTEND"
            items={skills.frontend}
          />

          <SkillGroup
            label="BACKEND / BaaS"
            items={skills.backend}
          />

          <SkillGroup
            label="BASES DE DATOS"
            items={skills.database}
          />

          <SkillGroup
            label="HERRAMIENTAS"
            items={skills.tools}
          />
        </div>
      </section>

      <section className="about-recruiter-education">
        <header>
          <span>FORMACIÓN</span>
          <h2>Base académica.</h2>
        </header>

        <div className="about-recruiter-education__content">
          {education.map((item, index) => (
            <article key={`${item.title}-${index}`}>
              <div className="about-recruiter-education__meta">
                <span>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>{item.period}</span>
              </div>

              <h3>{item.title}</h3>
              <strong>{item.place}</strong>
              <p>{item.description}</p>
              <small>{item.status}</small>
            </article>
          ))}

          <div className="about-recruiter-languages">
            <span>IDIOMAS</span>

            {languages.map((item) => (
              <div key={item.language}>
                <strong>{item.language}</strong>
                <span>{item.level}</span>
                <p>{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-recruiter-closing">
        <span>OBJETIVO</span>

        <p>
          Quiero incorporarme a un equipo donde pueda aportar desde
          Frontend, trabajar sobre productos reales y seguir
          desarrollando experiencia técnica con revisión, colaboración
          y responsabilidades crecientes.
        </p>

        <a href="#/projects">
          VER PROYECTOS
          <span>↗</span>
        </a>
      </section>
    </div>
  )
}

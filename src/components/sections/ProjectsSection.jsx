import { projects } from '../../data/projects.js'
import './ProjectsSection.css'

function ProjectPreview({ project }) {
  if (project.embedUrl) {
    return (
      <iframe
        className="project-live-frame"
        src={project.embedUrl}
        title={`${project.name} — sitio real`}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="fullscreen; clipboard-read; clipboard-write"
      />
    )
  }

  return (
    <div className="project-preview-fallback">
      <span>PREVIEW NO DISPONIBLE</span>

      <a
        href={project.liveUrl}
        target="_blank"
        rel="noreferrer"
      >
        ABRIR PROYECTO ↗
      </a>
    </div>
  )
}

function ProjectLinks({ project }) {
  return (
    <div className="project-case-links">
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noreferrer"
      >
        <span>LIVE DEMO</span>

        <div>
          <small>PROYECTO PUBLICADO</small>
          <strong>ABRIR PROYECTO</strong>
        </div>

        <i>↗</i>
      </a>

      {project.repoUrl && (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
        >
          <span>SOURCE</span>

          <div>
            <small>
              {project.repoVisibility === 'PUBLIC'
                ? 'REPOSITORIO PÚBLICO'
                : 'CÓDIGO FUENTE'}
            </small>

            <strong>VER EN GITHUB</strong>
          </div>

          <i>↗</i>
        </a>
      )}
    </div>
  )
}

function EvidenceStatus({ project }) {
  return (
    <div className="project-evidence-status">
      <div>
        <span>DEMO</span>
        <strong>DISPONIBLE</strong>
      </div>

      {project.repoUrl && (
        <div>
          <span>CÓDIGO</span>
          <strong>PÚBLICO</strong>
        </div>
      )}

      <div>
        <span>ESTADO</span>
        <strong>{project.status}</strong>
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <div className="long-page projects-long">
      <section className="long-hero projects-long__hero">
        <div className="long-hero__meta">
          <span>02</span>
          <span>PROYECTOS</span>
        </div>

        <div className="long-hero__body">
          <span className="section-kicker">
            SELECTED WORK / CASE STUDIES
          </span>

          <h1>
            Lo que
            <br />
            construí.
          </h1>

          <p className="long-hero__lead">
            Proyectos desplegados explicados desde el problema,
            la solución y la implementación. Cuando el código es
            público, podés revisar directamente el repositorio
            desde el mismo caso de estudio.
          </p>

          <div className="long-hero__footer">
            <span>{projects.length} PROYECTOS</span>
            <span>LIVE DEMOS / SOURCE</span>
            <span>SCROLL ↓</span>
          </div>
        </div>
      </section>

      <div className="project-stories">
        {projects.map((project, index) => (
          <section
            className="project-story project-story--case"
            key={project.id}
            id={`project-${project.id}`}
          >
            <div className="project-story__sticky">
              <div className="project-browser">
                <div className="project-browser__bar">
                  <span>
                    {project.embedUrl
                      ? 'LIVE WEBSITE'
                      : 'PROJECT PREVIEW'}
                  </span>

                  <span>
                    {String(index + 1).padStart(2, '0')}
                    {' / '}
                    {project.name.toUpperCase()}
                  </span>
                </div>

                <div
                  className={`project-browser__viewport ${
                    project.embedUrl
                      ? 'project-browser__viewport--live'
                      : ''
                  }`}
                >
                  <ProjectPreview project={project} />
                </div>
              </div>

              <div className="project-sticky-proof">
                <div>
                  <span>TIPO</span>
                  <strong>{project.projectType}</strong>
                </div>

                <div>
                  <span>ESTADO</span>
                  <strong>{project.status}</strong>
                </div>

                <div>
                  <span>ROL</span>
                  <strong>{project.role}</strong>
                </div>
              </div>

              <EvidenceStatus project={project} />
            </div>

            <div className="project-story__flow">
              <article className="project-copy project-copy--title project-case-title">
                <div className="project-case-title__eyebrow">
                  <span>
                    {String(index + 1).padStart(2, '0')}
                    {' / '}
                    {project.category}
                  </span>

                  <span>{project.year}</span>
                </div>

                <h2>{project.name}</h2>

                <p>{project.description}</p>

                <div className="project-copy__meta project-copy__meta--case">
                  <span>STACK</span>

                  <div>
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>

                <ProjectLinks project={project} />
              </article>

              <article className="project-copy project-case-block">
                <span>01 / PROBLEMA</span>
                <h3>Qué había que resolver.</h3>
                <p>{project.problem}</p>
              </article>

              <article className="project-copy project-case-block">
                <span>02 / SOLUCIÓN</span>
                <h3>Cómo lo resolví.</h3>
                <p>{project.solution}</p>
              </article>

              <article className="project-copy project-case-block">
                <span>03 / MI ROL</span>
                <h3>Qué hice personalmente.</h3>
                <p>{project.contribution}</p>
              </article>

              <article className="project-copy project-case-technical">
                <span>04 / IMPLEMENTACIÓN</span>

                <h3>
                  Qué demuestra
                  <br />
                  técnicamente.
                </h3>

                <p className="project-case-technical__lead">
                  {project.technicalSummary}
                </p>

                <div className="project-architecture">
                  {project.architecture.map((item) => (
                    <div key={`${item.label}-${item.value}`}>
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>
                  ))}
                </div>
              </article>

              <article className="project-copy project-case-evidence">
                <div className="project-case-evidence__head">
                  <span>05 / EVIDENCIA</span>
                  <span>
                    {String(project.highlights.length).padStart(2, '0')}
                    {' ITEMS'}
                  </span>
                </div>

                <h3>Funciones y decisiones concretas.</h3>

                <div className="project-highlights project-highlights--case">
                  {project.highlights.map((item, itemIndex) => (
                    <div key={`${item}-${itemIndex}`}>
                      <span>
                        {String(itemIndex + 1).padStart(2, '0')}
                      </span>

                      <p>{item}</p>
                    </div>
                  ))}
                </div>

                <ProjectLinks project={project} />
              </article>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

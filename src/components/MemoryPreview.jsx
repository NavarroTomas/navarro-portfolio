function MemoryScene({ id }) {
  if (id === 'about') {
    return (
      <div className="memory-scene memory-scene--about">
        <span className="memory-scene__small">
          FRONTEND / REACT
        </span>

        <h2>
          CREAR
          <br />
          DISEÑAR
          <br />
          LANZAR.
        </h2>

        <div className="memory-lines">
          <i />
          <i />
          <i />
          <i />
        </div>
      </div>
    )
  }

  if (id === 'projects') {
    return (
      <div className="memory-scene memory-scene--projects">
        <div className="memory-sitebar">
          <span>N</span>
          <span>TRABAJO / SELECCIONADO</span>
        </div>

        <div className="memory-project-columns">
          <div>
            <small>01</small>
            <strong>WEB</strong>
            <small>PRODUCTO / INTERFAZ</small>
          </div>

          <div>
            <small>02</small>
            <strong>DATOS</strong>
            <small>AUTENTICACIÓN / SISTEMAS</small>
          </div>
        </div>
      </div>
    )
  }

  if (id === 'lab') {
    return (
      <div className="memory-scene memory-scene--lab">
        <div className="memory-lab__top">
          <span>LABORATORIO / PRUEBAS</span>
          <span>03</span>
        </div>

        <div className="memory-lab__canvas">
          <i className="memory-lab__cross memory-lab__cross--a" />
          <i className="memory-lab__cross memory-lab__cross--b" />

          <div className="memory-lab__window memory-lab__window--a">
            <small>01 / CAMPO</small>
            <strong>MOVER</strong>
          </div>

          <div className="memory-lab__window memory-lab__window--b">
            <small>02 / TIPO</small>
            <strong>PROBAR</strong>
          </div>

          <div className="memory-lab__window memory-lab__window--c">
            <small>03 / MOVIMIENTO</small>

            <span>
              <i />
              <i />
              <i />
              <i />
            </span>
          </div>
        </div>
      </div>
    )
  }

  if (id === 'services') {
    return (
      <div className="memory-scene memory-scene--services">
        <span>SERVICIOS</span>

        <strong>WEB</strong>
        <strong>SISTEMAS</strong>
        <strong>SOPORTE</strong>
      </div>
    )
  }

  if (id === 'contact') {
    return (
      <div className="memory-scene memory-scene--contact">
        <span>DISPONIBLE / CONTACTO</span>

        <h2>
          EMAIL
          <br />
          GITHUB
          <br />
          LINKEDIN.
        </h2>
      </div>
    )
  }

  return null
}

export default function MemoryPreview({
  item,
  opening,
  onOpen,
}) {
  return (
    <button
      className={`memory-preview ${
        opening ? 'is-opening' : ''
      }`}
      type="button"
      onClick={() => onOpen(item)}
      aria-label={`Abrir ${item.label}`}
    >
      <div className="memory-preview__image">
        <MemoryScene id={item.id} />
      </div>

      <div className="memory-preview__wash" />

      <div className="memory-preview__caption">
        <strong>{item.label}</strong>
      </div>
    </button>
  )
}
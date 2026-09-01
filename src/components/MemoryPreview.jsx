function MemoryScene({ id }) {
  if (id === 'about') {
    return (
      <div className="memory-scene memory-scene--about">
        <span className="memory-scene__small">
          FRONTEND / REACT
        </span>

        <h2>
          BUILD
          <br />
          DESIGN
          <br />
          SHIP.
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
          <span>WORK / SELECTED</span>
        </div>

        <div className="memory-project-columns">
          <div>
            <small>01</small>
            <strong>LIVE</strong>
            <small>WEB / PRODUCT</small>
          </div>

          <div>
            <small>02</small>
            <strong>DATA</strong>
            <small>AUTH / SYSTEMS</small>
          </div>
        </div>
      </div>
    )
  }

  if (id === 'lab') {
    return (
      <div className="memory-scene memory-scene--lab">
        <div className="memory-lab__top">
          <span>LAB / PLAYGROUND</span>
          <span>03</span>
        </div>

        <div className="memory-lab__canvas">
          <i className="memory-lab__cross memory-lab__cross--a" />
          <i className="memory-lab__cross memory-lab__cross--b" />

          <div className="memory-lab__window memory-lab__window--a">
            <small>01 / FIELD</small>
            <strong>MOVE</strong>
          </div>

          <div className="memory-lab__window memory-lab__window--b">
            <small>02 / TYPE</small>
            <strong>TEST</strong>
          </div>

          <div className="memory-lab__window memory-lab__window--c">
            <small>03 / MOTION</small>

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
        <span>SERVICES</span>
        <strong>WEB</strong>
        <strong>SYSTEMS</strong>
        <strong>SUPPORT</strong>
      </div>
    )
  }

  if (id === 'contact') {
    return (
      <div className="memory-scene memory-scene--contact">
        <span>AVAILABLE / CONTACT</span>

        <h2>
          MAIL
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
        <span>{item.index} / PREVIEW</span>
        <strong>{item.label}</strong>
      </div>
    </button>
  )
}

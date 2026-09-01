import { useState } from 'react'

export default function ChromaDemo() {
  const [reserved, setReserved] = useState(false)
  return (
    <div className="embedded-site chroma-demo">
      <nav><strong>CHROMA</strong><span>SERVICIOS &nbsp;&nbsp; ESTUDIO &nbsp;&nbsp; CONTACTO</span></nav>
      <main>
        <div className="chroma-demo__copy">
          <small>ESTILISTAS / CÓRDOBA</small>
          <h3>FORMA.<br/>CORTE.<br/>IDENTIDAD.</h3>
          <p>Una demo interna del proyecto. Los componentes pueden vivir dentro del portfolio sin abrir otra pestaña.</p>
          <button type="button" onClick={() => setReserved(true)}>{reserved ? 'SOLICITUD REGISTRADA' : 'RESERVAR TURNO'}</button>
        </div>
        <div className="chroma-demo__visual"><span>CH</span></div>
      </main>
    </div>
  )
}

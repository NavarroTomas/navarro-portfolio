export default function SettingsSection({
  reducedMotion,
  setReducedMotion,
  theme,
  setTheme,
}) {
  const lightMode = theme === 'light'

  return (
    <div className="settings-sheets-page">
      <section className="settings-sheets-intro">
        <span className="section-kicker">07 / CONFIGURACIÓN</span>
        <h1>Preferencias.</h1>
        <p>
          El portfolio usa Manrope + DM Sans y la paleta Amber Walnut Morning como identidad visual fija. Acá quedan solamente las preferencias de lectura y movimiento.
        </p>
      </section>

      <section className="settings-sheets settings-sheets--compact">
        <article className="settings-sheet settings-sheet--theme">
          <div className="settings-sheet__index">01</div>

          <div className="settings-sheet__content">
            <span className="section-kicker">TEMA</span>
            <h2>{lightMode ? 'Modo claro.' : 'Modo oscuro.'}</h2>
            <p>
              El modo claro es la apariencia principal del portfolio. Podés pasar temporalmente a la lectura oscura cuando lo prefieras.
            </p>

            <button
              className="large-action-button"
              type="button"
              onClick={() => setTheme(lightMode ? 'dark' : 'light')}
            >
              CAMBIAR A {lightMode ? 'OSCURO' : 'CLARO'}
            </button>
          </div>

          <div className="settings-sheet__sample" aria-hidden="true">
            <span>AMBER WALNUT</span>
            <strong>{lightMode ? '#EBEFEE' : '#4A413C'}</strong>
          </div>
        </article>

        <article className="settings-sheet settings-sheet--motion">
          <div className="settings-sheet__index">02</div>

          <div className="settings-sheet__content">
            <span className="section-kicker">MOVIMIENTO</span>
            <h2>{reducedMotion ? 'Reducido.' : 'Normal.'}</h2>
            <p>
              Reduce las transiciones y movimientos decorativos sin modificar la estructura ni la forma de navegar el portfolio.
            </p>

            <button
              className="large-action-button"
              type="button"
              onClick={() => setReducedMotion(!reducedMotion)}
            >
              {reducedMotion ? 'ACTIVAR MOVIMIENTO' : 'REDUCIR MOVIMIENTO'}
            </button>
          </div>

          <div className="settings-sheet__motion-demo" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </div>
        </article>
      </section>
    </div>
  )
}

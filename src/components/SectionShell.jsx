import { navigation } from '../data/navigation.js'

export default function SectionShell({
  index,
  label,
  currentId,
  onBack,
  onNavigate,
  theme,
  onToggleTheme,
  reducedMotion = false,
  children,
}) {
  const shortcuts = navigation.filter(
    (item) => item.recruiterShortcut
  )

  return (
    <section
      className={`section-shell ${
        reducedMotion
          ? 'reduce-motion'
          : ''
      }`}
    >
      <header className="section-shell__header section-shell__header--recruiter">
        <button
          className="shell-control shell-control--back"
          type="button"
          onClick={onBack}
        >
          ← MENÚ
        </button>

        <nav
          className="section-shell-quick"
          aria-label="Navegación rápida"
        >
          {shortcuts.map((item) => (
            <button
              key={item.id}
              type="button"
              className={
                item.id === currentId
                  ? 'is-active'
                  : ''
              }
              aria-current={
                item.id === currentId
                  ? 'page'
                  : undefined
              }
              onClick={() =>
                onNavigate(item.id)
              }
            >
              {item.label}
            </button>
          ))}
        </nav>

        <span className="section-shell-current">
          {index} / {label}
        </span>

        <button
          className="shell-control shell-control--theme"
          type="button"
          onClick={onToggleTheme}
        >
          {theme === 'dark'
            ? 'MODO CLARO'
            : 'MODO OSCURO'}
        </button>
      </header>

      {children}
    </section>
  )
}

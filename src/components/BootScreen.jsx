export default function BootScreen({ leaving }) {
  return (
    <div className={`boot-screen ${leaving ? 'boot-screen--leaving' : ''}`}>
      <div className="boot-mark" aria-label="Navarro">N</div>
      <div className="boot-meta">
        <span>PORTFOLIO / 2026</span>
        <span>LOADING</span>
      </div>
    </div>
  )
}

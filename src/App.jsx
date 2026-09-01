import { useEffect, useMemo, useState } from 'react'
import { navigation } from './data/navigation.js'
import { profile } from './data/profile.js'

import BootScreen from './components/BootScreen.jsx'
import ArcMenu from './components/ArcMenu.jsx'
import MemoryPreview from './components/MemoryPreview.jsx'
import SectionShell from './components/SectionShell.jsx'

import AboutSection from './components/sections/AboutSection.jsx'
import ProjectsSection from './components/sections/ProjectsSection.jsx'
import LabSection from './components/sections/LabSection.jsx'
import ServicesSection from './components/sections/ServicesSection.jsx'
import ContactSection from './components/sections/ContactSection.jsx'

import './styles/NavigationEnhancements.css'

const DEFAULT_ACTIVE_INDEX = Math.max(
  0,
  navigation.findIndex((item) => item.id === 'projects')
)

const getInitialTheme = () => {
  const stored = window.localStorage.getItem('portfolio-theme')

  const initialTheme =
    stored === 'dark' || stored === 'light'
      ? stored
      : 'light'

  document.documentElement.dataset.theme = initialTheme

  return initialTheme
}

const getInitialReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const getSectionFromHash = () =>
  window.location.hash.replace('#/', '').trim()

export default function App() {
  const [booted, setBooted] = useState(false)
  const [leavingBoot, setLeavingBoot] = useState(false)

  // La home abre con PROYECTOS seleccionado.
  // Un recruiter ve inmediatamente el trabajo más relevante.
  const [activeIndex, setActiveIndex] = useState(
    DEFAULT_ACTIVE_INDEX
  )

  const [sectionId, setSectionId] = useState(null)
  const [opening, setOpening] = useState(false)

  const [theme, setTheme] = useState(getInitialTheme)

  const [reducedMotion, setReducedMotion] = useState(
    getInitialReducedMotion
  )

  const activeItem = useMemo(
    () => navigation[activeIndex],
    [activeIndex]
  )

  const githubUrl =
    profile.professionalLinks?.find(
      (item) => item.id === 'github'
    )?.url ||
    profile.social?.find(
      (item) => item.label === 'GITHUB'
    )?.url ||
    'https://github.com/NavarroTomas'

  useEffect(() => {
    document.documentElement.dataset.theme = theme

    window.localStorage.setItem(
      'portfolio-theme',
      theme
    )
  }, [theme])

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    )

    const handleChange = (event) => {
      setReducedMotion(event.matches)
    }

    mediaQuery.addEventListener?.(
      'change',
      handleChange
    )

    return () => {
      mediaQuery.removeEventListener?.(
        'change',
        handleChange
      )
    }
  }, [])

  useEffect(() => {
    window.localStorage.removeItem(
      'portfolio-palette'
    )

    window.localStorage.removeItem(
      'portfolio-typography'
    )
  }, [])

  useEffect(() => {
    const bootTimer = window.setTimeout(
      () => setLeavingBoot(true),
      650
    )

    const doneTimer = window.setTimeout(
      () => setBooted(true),
      900
    )

    return () => {
      window.clearTimeout(bootTimer)
      window.clearTimeout(doneTimer)
    }
  }, [])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    })
  }, [sectionId])

  const navigateToSection = (
    id,
    { updateHash = true } = {}
  ) => {
    const index = navigation.findIndex(
      (item) => item.id === id
    )

    if (index < 0) return

    setActiveIndex(index)
    setSectionId(id)
    setOpening(false)

    if (updateHash) {
      window.history.replaceState(
        {},
        '',
        `#/${id}`
      )
    }
  }

  useEffect(() => {
    if (!booted) return

    const syncFromHash = () => {
      const id = getSectionFromHash()

      if (!id) {
        setSectionId(null)
        return
      }

      const exists = navigation.some(
        (item) => item.id === id
      )

      if (!exists) return

      navigateToSection(
        id,
        { updateHash: false }
      )
    }

    syncFromHash()

    window.addEventListener(
      'hashchange',
      syncFromHash
    )

    return () => {
      window.removeEventListener(
        'hashchange',
        syncFromHash
      )
    }
  }, [booted])

  const openSection = (item) => {
    if (!item || opening) return

    const index = navigation.findIndex(
      (candidate) =>
        candidate.id === item.id
    )

    if (index >= 0) {
      setActiveIndex(index)
    }

    if (reducedMotion) {
      navigateToSection(item.id)
      return
    }

    setOpening(true)

    window.setTimeout(() => {
      navigateToSection(item.id)
    }, 300)
  }

  const openSectionById = (id) => {
    const item = navigation.find(
      (candidate) => candidate.id === id
    )

    if (item) {
      openSection(item)
    }
  }

  const closeSection = () => {
    setSectionId(null)

    window.history.replaceState(
      {},
      '',
      window.location.pathname
    )
  }

  const toggleTheme = () => {
    setTheme((current) =>
      current === 'dark'
        ? 'light'
        : 'dark'
    )
  }

  const current = navigation.find(
    (item) => item.id === sectionId
  )

  if (!booted) {
    return (
      <BootScreen leaving={leavingBoot} />
    )
  }

  if (current) {
    let content = null

    if (current.id === 'about') {
      content = <AboutSection />
    }

    if (current.id === 'projects') {
      content = <ProjectsSection />
    }

    if (current.id === 'lab') {
      content = (
        <LabSection
          reducedMotion={reducedMotion}
        />
      )
    }

    if (current.id === 'services') {
      content = <ServicesSection />
    }

    if (current.id === 'contact') {
      content = <ContactSection />
    }

    return (
      <SectionShell
        index={current.index}
        label={current.label}
        currentId={current.id}
        onBack={closeSection}
        onNavigate={navigateToSection}
        theme={theme}
        onToggleTheme={toggleTheme}
        reducedMotion={reducedMotion}
      >
        {content}
      </SectionShell>
    )
  }

  return (
    <main
      className={`home ${
        opening ? 'is-opening' : ''
      } ${
        reducedMotion
          ? 'reduce-motion'
          : ''
      }`}
    >
      <header className="home__header home__header--recruiter">
        <div className="home-header-brand">
          <span>
            {profile.identity.firstName}{' '}
            {profile.identity.lastName}
          </span>

          <strong>
            {profile.identity.role}
          </strong>
        </div>

        <nav
          className="home-header-quick"
          aria-label="Accesos rápidos"
        >
          <button
            type="button"
            onClick={() =>
              openSectionById('projects')
            }
          >
            PROYECTOS
          </button>

          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            GITHUB ↗
          </a>

          <button
            type="button"
            onClick={() =>
              openSectionById('contact')
            }
          >
            CONTACTO
          </button>
        </nav>

        <button
          className="theme-button"
          type="button"
          onClick={toggleTheme}
        >
          {theme === 'dark'
            ? 'LIGHT'
            : 'DARK'}{' '}
          MODE
        </button>
      </header>

      <section className="home__left">
        <div className="home__identity">
          <span>
            {profile.identity.role}
          </span>

          <strong>
            {profile.identity.shortName}
          </strong>
        </div>

        <ArcMenu
          items={navigation}
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
          onOpen={openSection}
        />
      </section>

      <MemoryPreview
        item={activeItem}
        opening={opening}
        onOpen={openSection}
      />
    </main>
  )
}

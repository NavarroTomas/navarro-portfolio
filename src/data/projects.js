// ============================================================
// PROYECTOS / CASE STUDIES
//
// Objetivo de esta versión:
// - Mostrar qué problema resolvió cada proyecto.
// - Dejar claro qué hice personalmente.
// - Exponer evidencia técnica, no solamente diseño.
// - Diferenciar proyectos reales de proyectos conceptuales.
// - Ofrecer demo y código fuente cuando están disponibles.
// ============================================================

export const projects = [
  {
    id: 'asteri-polaris',
    name: 'Asteri Polaris',
    category: 'Esports / Plataforma de equipo',
    year: '2026',

    projectType: 'Proyecto real',
    status: 'En producción',
    role: 'Diseño + desarrollo Frontend + integración Supabase',

    stack: [
      'React',
      'Vite',
      'React Router',
      'Supabase',
      'PostgreSQL',
      'RLS',
      'Supabase Auth',
      'Supabase Storage',
      'GSAP',
      'Motion',
      'Vercel',
    ],

    description:
      'Sitio y plataforma de gestión para Asteri Polaris, equipo competitivo de Counter-Strike 2. Además de la experiencia pública, el proyecto incorpora cuentas de jugadores, perfiles, estadísticas, contenido multimedia y herramientas administrativas conectadas a Supabase.',

    problem:
      'El equipo necesitaba algo más que una landing: una presencia digital propia que pudiera centralizar roster, jugadores, partidos y contenido, y al mismo tiempo permitir que miembros y staff gestionaran información desde la misma plataforma.',

    solution:
      'Construí una aplicación React con rutas públicas y privadas, conectada a Supabase como capa de autenticación, datos y almacenamiento. La interfaz pública mantiene una identidad visual agresiva y responsive, mientras que las áreas privadas incorporan flujos específicos para jugadores y administración.',

    contribution:
      'Trabajé la dirección visual y el desarrollo de la aplicación, la estructura de navegación, componentes responsive, conexión con Supabase, autenticación, carga de perfiles, gestión de estados y roles, almacenamiento de imágenes y clips, vistas administrativas y despliegue final.',

    technicalSummary:
      'El proyecto combina una SPA en React con Supabase para autenticación, PostgreSQL, políticas RLS y Storage. La aplicación diferencia usuarios pendientes, jugadores y staff, y expone distintas capacidades según el estado y rol de la cuenta.',

    architecture: [
      {
        label: 'FRONTEND',
        value: 'React + Vite + React Router',
      },
      {
        label: 'DATOS',
        value: 'Supabase PostgreSQL',
      },
      {
        label: 'AUTH',
        value: 'Supabase Auth + perfiles + roles',
      },
      {
        label: 'SEGURIDAD',
        value: 'Row Level Security / RLS',
      },
      {
        label: 'STORAGE',
        value: 'Imágenes de jugadores y clips',
      },
      {
        label: 'DEPLOY',
        value: 'Vercel',
      },
    ],

    highlights: [
      'Registro, inicio de sesión y recuperación de contraseña',
      'Estados de cuenta pendiente, activa y suspendida',
      'Roles de owner, admin y player',
      'Aprobación y vinculación de cuentas con jugadores',
      'Perfiles públicos y privados de jugadores',
      'Gestión de estadísticas y configuración de CS2',
      'Carga de imágenes y clips mediante Supabase Storage',
      'Panel administrativo con usuarios, plantel y auditoría',
      'Gestión de VODs, lineup y clips',
      'Diseño responsive y animaciones de interfaz',
    ],

    liveUrl: 'https://asteri-polaris.vercel.app',
    embedUrl: 'https://asteri-polaris.vercel.app',
    repoUrl: 'https://github.com/NavarroTomas/Asteri-Polaris',
    repoVisibility: 'PUBLIC',
  },

  {
    id: 'apa',
    name: 'APA PSO Argentina',
    category: 'Plataforma / Competición',
    year: '2026',

    projectType: 'Proyecto real',
    status: 'En producción',
    role: 'Diseño + desarrollo de plataforma',

    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Supabase',
      'PostgreSQL',
      'Vercel',
    ],

    description:
      'Plataforma oficial de APA PSO Argentina creada para centralizar la actividad competitiva de una comunidad de Pro Soccer Online: competiciones, partidos, jugadores, clubes, estadísticas, rankings y administración.',

    problem:
      'La información de la competición estaba distribuida entre distintos canales y procesos. Era necesario unificar temporadas, divisiones, fixture, resultados, clubes, jugadores y estadísticas en una plataforma que pudiera crecer con la liga.',

    solution:
      'Se construyó una aplicación basada en Next.js y Supabase con un modelo de datos orientado al dominio competitivo. La plataforma organiza múltiples competiciones y temporadas, genera vistas públicas de información deportiva y dispone de herramientas de administración para mantener los datos.',

    contribution:
      'Diseñé y desarrollé la plataforma, la estructura de competiciones y navegación, las interfaces públicas, los sistemas de estadísticas y rankings, la gestión de clubes y jugadores, el fixture y diferentes herramientas administrativas conectadas a Supabase.',

    technicalSummary:
      'El valor técnico principal está en el modelado del dominio y en relacionar temporadas, competiciones, partidos, clubes, jugadores y estadísticas sin reducir el sistema a una colección de páginas estáticas.',

    architecture: [
      {
        label: 'FRONTEND',
        value: 'Next.js + React + TypeScript',
      },
      {
        label: 'DATOS',
        value: 'Supabase / PostgreSQL',
      },
      {
        label: 'DOMINIO',
        value: 'Temporadas + competiciones + clubes + jugadores',
      },
      {
        label: 'MÓDULOS',
        value: 'Fixture + stats + rankings + mercado',
      },
      {
        label: 'ADMIN',
        value: 'Gestión de información competitiva',
      },
      {
        label: 'DEPLOY',
        value: 'Vercel',
      },
    ],

    highlights: [
      'Múltiples temporadas, divisiones y competiciones',
      'Fixture, resultados y tablas oficiales',
      'Estadísticas y rankings de jugadores',
      'Sistema de clubes y planteles',
      'Mercado de fichajes y jugadores libres',
      'Historial competitivo y registros',
      'Filtros por temporada, división y competición',
      'Herramientas y paneles de administración',
    ],

    liveUrl: 'https://www.psoargentina.com',
    embedUrl: 'https://www.psoargentina.com',
    repoUrl: '',
    repoVisibility: '',
  },

  {
    id: 'girasol',
    name: 'GiraSol360',
    category: 'WordPress / Formación',
    year: '2026',

    projectType: 'Proyecto real',
    status: 'Publicado',
    role: 'Desarrollo + configuración WordPress',

    stack: [
      'WordPress',
      'Elementor',
      'WooCommerce',
      'DonWeb',
    ],

    description:
      'Plataforma web para GiraSol360 orientada a organizar su propuesta de formación, programas, comunidad y contenido comercial dentro de un único sitio administrable.',

    problem:
      'El proyecto necesitaba centralizar programas, servicios, comunidad, información institucional y contenido comercial sin depender de múltiples sitios o canales separados.',

    solution:
      'Se implementó una estructura modular sobre WordPress, preparada para que el contenido pudiera administrarse sin modificar código y con una navegación que separa claramente las distintas áreas de la propuesta.',

    contribution:
      'Trabajé sobre la construcción y configuración del sitio, armado de páginas e interfaz, responsive, organización del contenido, integración de funcionalidades de WordPress y publicación en infraestructura de DonWeb.',

    technicalSummary:
      'Este proyecto demuestra una forma de trabajo distinta a las aplicaciones React: elección y configuración de herramientas CMS, organización de contenido administrable y resolución de una necesidad comercial sobre una plataforma existente.',

    architecture: [
      {
        label: 'CMS',
        value: 'WordPress',
      },
      {
        label: 'UI',
        value: 'Elementor',
      },
      {
        label: 'COMERCIO',
        value: 'WooCommerce',
      },
      {
        label: 'CONTENIDO',
        value: 'Estructura administrable',
      },
      {
        label: 'RESPONSIVE',
        value: 'Desktop + mobile',
      },
      {
        label: 'HOSTING',
        value: 'DonWeb',
      },
    ],

    highlights: [
      'Sitio administrable mediante WordPress',
      'Estructura para programas y contenido institucional',
      'Integración de contenido comercial',
      'Adaptación responsive',
      'Publicación y configuración en DonWeb',
    ],

    liveUrl: 'https://girasol360.com',
    embedUrl: 'https://girasol360.com',
    repoUrl: '',
    repoVisibility: '',
  },

  {
    id: 'auren',
    name: 'Auren Hair Studio',
    category: 'Concept Project / Frontend Showcase',
    year: '2026',

    projectType: 'Proyecto conceptual',
    status: 'Demo pública',
    role: 'Diseño + desarrollo Frontend',

    stack: [
      'React',
      'Vite',
      'JavaScript',
      'CSS',
    ],

    description:
      'Proyecto conceptual creado como showcase de Frontend para explorar dirección visual, animación mediante scroll, responsive design e interacciones dentro de una web de marca.',

    problem:
      'El objetivo era construir una experiencia visual de peluquería que evitara la estructura típica de una landing genérica y permitiera demostrar decisiones de diseño e implementación frontend.',

    solution:
      'Se desarrolló una experiencia React con hero animado por frames, reveals vinculados al scroll, composición editorial, galería interactiva y una implementación enfocada en mantener el movimiento liviano.',

    contribution:
      'Diseñé y desarrollé la experiencia completa, organicé los componentes y contenido, implementé las interacciones, trabajé el comportamiento responsive y optimicé el proyecto para funcionar sin depender de librerías de animación pesadas.',

    technicalSummary:
      'Auren está incluido como demostración específica de capacidades Frontend. No intenta representar un sistema complejo: su objetivo es evidenciar composición, CSS, interacción, responsive y decisiones de performance visual.',

    architecture: [
      {
        label: 'FRONTEND',
        value: 'React + Vite',
      },
      {
        label: 'ESTILOS',
        value: 'CSS propio',
      },
      {
        label: 'HERO',
        value: 'Secuencia de frames',
      },
      {
        label: 'MOTION',
        value: 'Scroll + CSS / JavaScript',
      },
      {
        label: 'RESPONSIVE',
        value: 'Desktop + mobile',
      },
      {
        label: 'DEPLOY',
        value: 'Vercel',
      },
    ],

    highlights: [
      'Hero animado mediante secuencia de frames',
      'Reveals vinculados al scroll',
      'Galería accordion interactiva',
      'Composición editorial responsive',
      'Interacciones implementadas sin GSAP ni Motion',
      'Proyecto público y código fuente disponible',
    ],

    liveUrl: 'https://auren-hair-studio.vercel.app',
    embedUrl: 'https://auren-hair-studio.vercel.app',
    repoUrl: 'https://github.com/NavarroTomas/auren-hair-studio',
    repoVisibility: 'PUBLIC',
  },
]

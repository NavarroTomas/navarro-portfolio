// ============================================================
// SERVICIOS
//
// Este archivo contiene todo el contenido de la sección Servicios.
// Para cambiar textos, tecnologías o lo que incluye cada servicio,
// editá únicamente los objetos de este array.
// ============================================================

export const services = [
  {
    id: 'web',
    number: '01',
    title: 'SITIOS WEB',
    short: 'Diseño y desarrollo de sitios web pensados alrededor de una marca, un negocio o una idea.',

    description:
      'Desarrollo sitios desde cero con una estructura clara, una identidad visual propia y una experiencia cuidada en escritorio y celular. El objetivo no es solamente que la página se vea bien: tiene que comunicar, cargar rápido y quedar lista para usarse de verdad.',

    idealFor:
      'Negocios, profesionales, marcas, comunidades y proyectos que necesitan una presencia digital propia o quieren reemplazar una web desactualizada.',

    includes: [
      'Landing pages y sitios institucionales',
      'Diseño responsive para desktop y mobile',
      'Animaciones e interacciones cuando aportan valor',
      'Formularios, llamadas a la acción y contacto',
      'Integración de contenido, imágenes y redes',
      'Publicación y configuración del proyecto',
    ],

    process: [
      'Definimos qué tiene que lograr la web y qué información necesita.',
      'Planteo la estructura visual y la navegación.',
      'Desarrollo la página y la adapto a distintos dispositivos.',
      'Revisamos, corregimos y dejamos la versión final publicada.',
    ],

    technologies: [
      'React',
      'Vite',
      'JavaScript',
      'HTML / CSS',
      'WordPress',
      'Elementor',
      'Vercel',
    ],

    deliverables: [
      'Web terminada y responsive',
      'Proyecto publicado',
      'Código o acceso de administración según el proyecto',
      'Base preparada para futuras modificaciones',
    ],
  },

  {
    id: 'systems',
    number: '02',
    title: 'SISTEMAS A MEDIDA',
    short: 'Herramientas web creadas para reemplazar procesos manuales y ordenar información real de un negocio o proyecto.',

    description:
      'Cuando una planilla, un proceso manual o varias herramientas separadas empiezan a quedarse cortas, puedo convertir ese flujo en un sistema web propio. La prioridad es que la herramienta se adapte al proceso existente y no obligar al usuario a trabajar alrededor del software.',

    idealFor:
      'Negocios, equipos y proyectos que necesitan gestionar stock, clientes, ventas, datos, estadísticas, usuarios, reportes o procesos internos desde un mismo lugar.',

    includes: [
      'Paneles de administración',
      'ABM / CRUD de información',
      'Bases de datos y relaciones',
      'Filtros, búsquedas y reportes',
      'Roles, permisos y usuarios cuando son necesarios',
      'Automatización de tareas repetitivas',
    ],

    process: [
      'Relevamos cómo se realiza hoy el proceso.',
      'Separamos la información y las acciones realmente necesarias.',
      'Construyo una primera versión funcional para validar el flujo.',
      'Iteramos sobre el uso real y agregamos las funciones que hagan falta.',
    ],

    technologies: [
      'React',
      'Next.js',
      'Supabase',
      'SQL',
      'JavaScript',
      'TypeScript',
      'Vercel',
    ],

    deliverables: [
      'Sistema web funcional',
      'Base de datos configurada',
      'Interfaz adaptada al flujo de trabajo',
      'Estructura preparada para seguir creciendo',
    ],
  },

  {
    id: 'support',
    number: '03',
    title: 'SOPORTE Y EVOLUCIÓN',
    short: 'Correcciones, mejoras y nuevas funciones sobre proyectos que ya existen.',

    description:
      'No siempre hace falta rehacer una página o un sistema desde cero. También puedo trabajar sobre una base existente para corregir errores, mejorar la experiencia, adaptar el diseño, optimizar partes del proyecto o sumar nuevas funcionalidades sin perder lo que ya funciona.',

    idealFor:
      'Proyectos que ya están publicados y necesitan mantenimiento, cambios visuales, correcciones responsive, nuevas funciones o una revisión técnica.',

    includes: [
      'Corrección de errores',
      'Cambios de diseño y contenido',
      'Mejoras responsive',
      'Nuevas secciones o funcionalidades',
      'Optimización y limpieza de interfaz',
      'Ayuda con deploy y configuración',
    ],

    process: [
      'Reviso el proyecto y el problema puntual.',
      'Definimos qué conviene conservar y qué hay que modificar.',
      'Trabajo los cambios sobre una versión controlada.',
      'Probamos el resultado antes de llevarlo a producción.',
    ],

    technologies: [
      'React',
      'JavaScript',
      'CSS',
      'WordPress',
      'Supabase',
      'Vercel',
      'Git / GitHub',
    ],

    deliverables: [
      'Cambios aplicados y probados',
      'Errores corregidos',
      'Nueva versión publicada cuando corresponde',
      'Proyecto listo para continuar trabajando',
    ],
  },
]

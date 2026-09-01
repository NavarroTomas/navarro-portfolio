// ============================================================
// NAVEGACIÓN PRINCIPAL
//
// recruiterShortcut:
// Secciones que un recruiter debería poder abrir en un click
// desde cualquier parte del portfolio.
// ============================================================

export const navigation = [
  {
    id: 'about',
    index: '01',
    label: 'SOBRE MI',
    hint: 'Perfil / información',
    recruiterShortcut: true,
  },
  {
    id: 'projects',
    index: '02',
    label: 'PROYECTOS',
    hint: 'Trabajo seleccionado',
    recruiterShortcut: true,
  },
  {
    id: 'lab',
    index: '03',
    label: 'LABORATORIO',
    hint: 'Pruebas / interacción',
    recruiterShortcut: false,
  },
  {
    id: 'services',
    index: '04',
    label: 'SERVICIOS',
    hint: 'Qué puedo hacer',
    recruiterShortcut: false,
  },
  {
    id: 'contact',
    index: '05',
    label: 'CONTACTO',
    hint: 'Email / GitHub / LinkedIn',
    recruiterShortcut: true,
  },
]

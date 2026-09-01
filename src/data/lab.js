// ============================================================
// LABORATORIO
//
// Cada objeto representa una prueba dentro del escritorio.
// initialPosition usa porcentajes del lienzo para que el layout
// siga funcionando en distintos tamaños de pantalla.
// ============================================================

export const labExperiments = [
  {
    id: 'field',
    index: '01',
    title: 'FIELD',
    subtitle: 'POINTER / POSITION',
    description: 'Un campo mínimo para probar respuesta directa al movimiento del cursor.',
    initialPosition: { x: 5, y: 7 },
    size: 'medium',
  },
  {
    id: 'type',
    index: '02',
    title: 'TYPE',
    subtitle: 'TRACKING / CONTROL',
    description: 'Una prueba tipográfica para modificar el espaciado en tiempo real.',
    initialPosition: { x: 52, y: 7 },
    size: 'large',
  },
  {
    id: 'bars',
    index: '03',
    title: 'MOTION',
    subtitle: 'INPUT / RESPONSE',
    description: 'Barras que reaccionan a la posición horizontal del puntero.',
    initialPosition: { x: 9, y: 55 },
    size: 'large',
  },
  {
    id: 'tilt',
    index: '04',
    title: 'TILT',
    subtitle: 'DEPTH / CARD',
    description: 'Una pieza simple con perspectiva controlada por el cursor.',
    initialPosition: { x: 59, y: 50 },
    size: 'medium',
  },
]

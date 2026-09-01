export const paletteOptions = [
  {
    id: 'ink-wash',
    label: 'Ink wash',
    description: 'Monocromática, neutra y sobria.',
    colors: ['#252525', '#CFCFCF', '#7D7D7D', '#545454'],
    roles: {
      ink: '#252525',
      paper: '#CFCFCF',
      mid: '#7D7D7D',
      darkMid: '#545454',
      accent: '#CFCFCF',
      accentText: '#252525',
    },
  },
  {
    id: 'amber-walnut-morning',
    label: 'Amber walnut morning',
    description: 'Tierra cálida, beige y marrón.',
    colors: ['#EBEFEE', '#CCB499', '#C8906D', '#BB6C43', '#4A413C'],
    roles: {
      ink: '#4A413C',
      paper: '#EBEFEE',
      mid: '#CCB499',
      darkMid: '#C8906D',
      accent: '#BB6C43',
      accentText: '#EBEFEE',
    },
  },
  {
    id: 'cocoa-topaz-noonday',
    label: 'Cocoa topaz noonday',
    description: 'Cacao, azul apagado y naranja cálido.',
    colors: ['#742F14', '#5A84AC', '#C7AC9F', '#FC9C44', '#5C3C2C'],
    roles: {
      ink: '#5C3C2C',
      paper: '#C7AC9F',
      mid: '#5A84AC',
      darkMid: '#742F14',
      accent: '#FC9C44',
      accentText: '#5C3C2C',
    },
  },
  {
    id: 'calcite',
    label: 'Calcite',
    description: 'Gris frío con coral y durazno.',
    colors: ['#DDDCDB', '#FD7B41', '#EDBF9B', '#3C4044'],
    roles: {
      ink: '#3C4044',
      paper: '#DDDCDB',
      mid: '#EDBF9B',
      darkMid: '#FD7B41',
      accent: '#FD7B41',
      accentText: '#3C4044',
    },
  },
  {
    id: 'sapphire-nightfall-whisper',
    label: 'Sapphire nightfall whisper',
    description: 'Azules profundos y azul grisáceo.',
    colors: ['#0474C4', '#5379AE', '#2C444C', '#A8C4EC', '#06457F', '#262B40'],
    roles: {
      ink: '#262B40',
      paper: '#A8C4EC',
      mid: '#5379AE',
      darkMid: '#2C444C',
      accent: '#0474C4',
      accentText: '#A8C4EC',
    },
  },
  {
    id: 'turquoise-amber-autumn',
    label: 'Turquoise amber autumn',
    description: 'Turquesa frío contra naranja y rojo tierra.',
    colors: ['#304C64', '#26788E', '#A4CCD4', '#E2480C', '#631B08'],
    roles: {
      ink: '#631B08',
      paper: '#A4CCD4',
      mid: '#26788E',
      darkMid: '#304C64',
      accent: '#E2480C',
      accentText: '#A4CCD4',
    },
  },
  {
    id: 'urban-nocturne',
    label: 'Urban nocturne',
    description: 'Negros y grises con un acento lima.',
    colors: ['#141414', '#444444', '#D6D6D6', '#E2E800', '#979797'],
    roles: {
      ink: '#141414',
      paper: '#D6D6D6',
      mid: '#979797',
      darkMid: '#444444',
      accent: '#E2E800',
      accentText: '#141414',
    },
  },
]

export const defaultPalette = 'ink-wash'

export const getPalette = (id) => {
  return paletteOptions.find(palette => palette.id === id) || paletteOptions[0]
}

export const isValidPaletteId = (id) => {
  return paletteOptions.some(palette => palette.id === id)
}
export const fontOptions = [
  {
    id: 'manrope',
    label: 'Manrope',
    family: '"Manrope", sans-serif',
  },
  {
    id: 'dm-sans',
    label: 'DM Sans',
    family: '"DM Sans", sans-serif',
  },
]

export const defaultTypography = {
  display: 'manrope',
  body: 'dm-sans',
}

export const getFontFamily = (id) => {
  return fontOptions.find(font => font.id === id)?.family || fontOptions[0].family
}

export const isValidFontId = (id) => fontOptions.some(font => font.id === id)
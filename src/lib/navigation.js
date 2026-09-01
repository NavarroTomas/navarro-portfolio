export function getSectionIdFromHash(hash = '') {
  return hash
    .replace('#/', '')
    .trim()
}

export function findSectionIndex(
  items,
  sectionId
) {
  return items.findIndex(
    (item) => item.id === sectionId
  )
}

export function isValidSection(
  items,
  sectionId
) {
  return items.some(
    (item) => item.id === sectionId
  )
}

export function getRecruiterShortcuts(items) {
  return items.filter(
    (item) => item.recruiterShortcut
  )
}

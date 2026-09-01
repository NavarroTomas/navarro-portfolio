import { describe, expect, it } from 'vitest'
import { navigation } from '../data/navigation.js'
import {
  findSectionIndex,
  getRecruiterShortcuts,
  getSectionIdFromHash,
  isValidSection,
} from '../lib/navigation.js'

describe('portfolio navigation', () => {
  it('parses internal hash routes', () => {
    expect(
      getSectionIdFromHash('#/projects')
    ).toBe('projects')

    expect(
      getSectionIdFromHash('#/contact')
    ).toBe('contact')
  })

  it('detects valid and invalid sections', () => {
    expect(
      isValidSection(
        navigation,
        'projects'
      )
    ).toBe(true)

    expect(
      isValidSection(
        navigation,
        'unknown'
      )
    ).toBe(false)
  })

  it('locates projects in navigation', () => {
    expect(
      findSectionIndex(
        navigation,
        'projects'
      )
    ).toBeGreaterThanOrEqual(0)
  })

  it('keeps recruiter shortcuts focused on core hiring sections', () => {
    const shortcuts =
      getRecruiterShortcuts(navigation)

    expect(
      shortcuts.map((item) => item.id)
    ).toEqual([
      'about',
      'projects',
      'contact',
    ])
  })
})

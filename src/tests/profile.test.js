import { describe, expect, it } from 'vitest'
import { profile } from '../data/profile.js'

describe('professional profile', () => {
  it('has working professional links', () => {
    const github =
      profile.professionalLinks.find(
        (item) => item.id === 'github'
      )

    const linkedin =
      profile.professionalLinks.find(
        (item) => item.id === 'linkedin'
      )

    expect(github?.url).toMatch(
      /^https:\/\/github\.com\//
    )

    expect(linkedin?.url).toMatch(
      /^https:\/\/www\.linkedin\.com\//
    )
  })

  it('does not render an unfinished CV link', () => {
    expect(
      profile.contact.cvUrl === '' ||
      profile.contact.cvUrl.startsWith('/')
    ).toBe(true)
  })

  it('keeps the primary hiring target explicit', () => {
    expect(
      profile.hiring.primaryRole
    ).toBe('Frontend Developer Junior')
  })
})

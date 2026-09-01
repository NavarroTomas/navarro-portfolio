import { describe, expect, it } from 'vitest'
import { projects } from '../data/projects.js'

describe('project case studies', () => {
  it('has unique project ids', () => {
    const ids = projects.map(
      (project) => project.id
    )

    expect(
      new Set(ids).size
    ).toBe(ids.length)
  })

  it('requires every project to expose a live URL', () => {
    for (const project of projects) {
      expect(project.liveUrl).toMatch(
        /^https:\/\//
      )
    }
  })

  it('requires every case study to explain the engineering work', () => {
    for (const project of projects) {
      expect(project.problem.length).toBeGreaterThan(30)
      expect(project.solution.length).toBeGreaterThan(30)
      expect(project.contribution.length).toBeGreaterThan(30)
      expect(project.technicalSummary.length).toBeGreaterThan(30)
      expect(project.stack.length).toBeGreaterThan(0)
      expect(project.highlights.length).toBeGreaterThan(0)
    }
  })

  it('only labels repositories as public when a repository URL exists', () => {
    for (const project of projects) {
      if (project.repoVisibility === 'PUBLIC') {
        expect(project.repoUrl).toMatch(
          /^https:\/\/github\.com\//
        )
      }
    }
  })
})

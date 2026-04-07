import { useState } from 'react'
import { catalog } from '../data/catalog'
import CourseCard from '../components/catalog/CourseCard'
import FilterBar from '../components/catalog/FilterBar'
import { useSearch } from '../components/layout/AppShell'

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const search = useSearch()
  const q = search.toLowerCase().trim()

  const filtered = catalog.filter(course => {
    const matchCat = activeFilter === 'all' || course.category === activeFilter
    const matchSearch = !q ||
      course.title.toLowerCase().includes(q) ||
      course.subtitle.toLowerCase().includes(q) ||
      course.description.toLowerCase().includes(q) ||
      course.tags.some(t => t.toLowerCase().includes(q)) ||
      course.categoryLabel.toLowerCase().includes(q)
    return matchCat && matchSearch
  })

  const availableCount = catalog.filter(c => c.status === 'available').length
  const comingSoonCount = catalog.filter(c => c.status === 'coming-soon').length

  return (
    <div>
      {/* Hero */}
      <div style={{
        borderBottom: '1px solid var(--border)',
        padding: '64px 24px 48px',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{
            fontFamily: 'var(--mono)',
            fontSize: 11,
            color: 'var(--accent)',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            marginBottom: 20,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}>
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--accent)' }} />
            free forever · no login required
          </div>

          <h1 style={{
            fontFamily: 'var(--mono)',
            fontSize: 'clamp(32px, 6vw, 60px)',
            fontWeight: 700,
            lineHeight: 1.05,
            color: 'var(--text-white)',
            letterSpacing: '-0.03em',
            marginBottom: 20,
          }}>
            Learn Anything.<br />
            <span style={{ color: 'var(--accent)' }}>Free. Forever.</span>
          </h1>

          <p style={{
            fontSize: 16,
            color: 'var(--text-muted)',
            maxWidth: 560,
            lineHeight: 1.75,
            marginBottom: 36,
          }}>
            Curated learning paths built from the best free content on the internet.
            Step-by-step sessions, embedded video guides, and progress tracking — all in your browser.
          </p>

          <div style={{ display: 'flex', gap: 36, flexWrap: 'wrap' }}>
            {[
              { num: availableCount, label: 'Courses Available' },
              { num: comingSoonCount, label: 'Coming Soon' },
              { num: '40+', label: 'Hours of Content' },
              { num: '∞', label: 'Free Forever' },
            ].map(({ num, label }) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 26,
                  fontWeight: 700,
                  color: 'var(--text-white)',
                }}>{num}</span>
                <span style={{
                  fontSize: 11,
                  color: 'var(--text-dim)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Catalog */}
      <div style={{ padding: '48px 24px 80px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 24,
          }}>
            <span style={{
              fontFamily: 'var(--mono)',
              fontSize: 11,
              color: 'var(--text-dim)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}>
              // all courses
            </span>
            {search && (
              <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>
                {filtered.length} result{filtered.length !== 1 ? 's' : ''} for "{search}"
              </span>
            )}
          </div>

          <FilterBar active={activeFilter} onChange={setActiveFilter} />

          {filtered.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '48px 24px',
              fontFamily: 'var(--mono)',
              fontSize: 13,
              color: 'var(--text-dim)',
            }}>
              No courses found. Try a different search or filter.
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 20,
            }}>
              {filtered.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

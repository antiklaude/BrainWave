import { useNavigate } from 'react-router-dom'
import { Clock, BookOpen, Lock } from 'lucide-react'
import ProgressBar from '../ui/ProgressBar'
import { useProgress } from '../../hooks/useProgress'

export default function CourseCard({ course }) {
  const navigate = useNavigate()
  const { completed, percent } = useProgress(course.id)
  const pct = percent(course.sessionCount)
  const isComingSoon = course.status === 'coming-soon'

  const handleClick = () => {
    if (!isComingSoon) navigate(`/courses/${course.id}`)
  }

  return (
    <div
      onClick={handleClick}
      style={{
        background: 'var(--bg2)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        padding: 24,
        cursor: isComingSoon ? 'default' : 'pointer',
        transition: 'border-color 0.2s, transform 0.15s, box-shadow 0.2s',
        opacity: isComingSoon ? 0.65 : 1,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      }}
      onMouseEnter={e => {
        if (!isComingSoon) {
          e.currentTarget.style.borderColor = course.accent
          e.currentTarget.style.transform = 'translateY(-2px)'
          e.currentTarget.style.boxShadow = `0 8px 24px ${course.accent}22`
        }
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Category label */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{
          fontFamily: 'var(--mono)',
          fontSize: 10,
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          color: course.accent,
          background: `${course.accent}18`,
          border: `1px solid ${course.accent}30`,
          borderRadius: 4,
          padding: '2px 8px',
        }}>
          {course.categoryLabel}
        </span>
        {isComingSoon && (
          <span style={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            fontFamily: 'var(--mono)',
            fontSize: 10,
            color: 'var(--text-dim)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}>
            <Lock size={10} />
            Coming Soon
          </span>
        )}
      </div>

      {/* Title */}
      <div>
        <h3 style={{
          fontFamily: 'var(--mono)',
          fontSize: 18,
          fontWeight: 700,
          color: 'var(--text-white)',
          marginBottom: 4,
          lineHeight: 1.2,
        }}>
          {course.title}
        </h3>
        <p style={{
          fontSize: 12,
          color: course.accent,
          fontFamily: 'var(--mono)',
        }}>
          {course.subtitle}
        </p>
      </div>

      {/* Description */}
      <p style={{
        fontSize: 13,
        color: 'var(--text-muted)',
        lineHeight: 1.6,
        flex: 1,
      }}>
        {course.description}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {course.tags.map(tag => (
          <span key={tag} style={{
            fontSize: 11,
            color: 'var(--text-dim)',
            background: 'var(--bg3)',
            borderRadius: 4,
            padding: '2px 8px',
            fontFamily: 'var(--mono)',
          }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Stats row */}
      <div style={{
        display: 'flex',
        gap: 16,
        paddingTop: 12,
        borderTop: '1px solid var(--border)',
      }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: 'var(--text-dim)' }}>
          <Clock size={12} />
          {course.hours}h
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: 'var(--text-dim)' }}>
          <BookOpen size={12} />
          {course.sessionCount} sessions
        </span>
        {pct > 0 && (
          <span style={{ fontSize: 12, color: course.accent, marginLeft: 'auto' }}>
            {Math.round(pct)}% done
          </span>
        )}
      </div>

      {/* Progress bar (if started) */}
      {pct > 0 && (
        <ProgressBar percent={pct} accent={course.accent} height={3} />
      )}
    </div>
  )
}

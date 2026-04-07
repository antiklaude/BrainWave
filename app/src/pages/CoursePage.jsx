import { useParams, Link } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import { catalog } from '../data/catalog'
import { loadSessions } from '../utils/parseSessions'
import { useProgress } from '../hooks/useProgress'
import CourseSidebar from '../components/course/CourseSidebar'
import SessionPanel from '../components/course/SessionPanel'
import ProgressBar from '../components/ui/ProgressBar'
import QuizModal from '../components/quiz/QuizModal'
import { Clock, BookOpen, BarChart3 } from 'lucide-react'

const TABS = ['Overview', 'Learning Ladder', 'Sessions']

export default function CoursePage() {
  const { courseId } = useParams()
  const course = catalog.find(c => c.id === courseId)
  const [sessions, setSessions] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('Sessions')
  const [quizSession, setQuizSession] = useState(null)
  const sessionRefs = useRef({})

  const { completed, toggle, markComplete, percent } = useProgress(courseId)
  const pct = percent(sessions.length)

  useEffect(() => {
    if (!course) return
    document.documentElement.style.setProperty('--accent', course.accent)
    loadSessions(courseId).then(s => {
      setSessions(s)
      setLoading(false)
    })
    return () => {
      document.documentElement.style.removeProperty('--accent')
    }
  }, [courseId, course])

  const scrollToSession = (sessionId) => {
    const el = sessionRefs.current[sessionId]
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setActiveTab('Sessions')
  }

  if (!course) {
    return (
      <div style={{ padding: 48, textAlign: 'center', color: 'var(--text-muted)' }}>
        Course not found. <Link to="/" style={{ color: 'var(--accent)' }}>Back to catalog</Link>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar — desktop only */}
      <CourseSidebar
        course={course}
        sessions={sessions}
        completed={completed}
        onSessionClick={scrollToSession}
      />

      {/* Main content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        {/* Course header */}
        <div style={{
          padding: '40px 32px 32px',
          borderBottom: '1px solid var(--border)',
          background: 'var(--bg)',
        }}>
          <div style={{
            fontFamily: 'var(--mono)',
            fontSize: 11,
            color: 'var(--accent)',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            marginBottom: 12,
          }}>
            {course.categoryLabel} · Learning Plan
          </div>

          <h1 style={{
            fontFamily: 'var(--mono)',
            fontSize: 'clamp(24px, 4vw, 40px)',
            fontWeight: 700,
            color: 'var(--text-white)',
            lineHeight: 1.1,
            marginBottom: 12,
          }}>
            {course.subtitle}
          </h1>

          <p style={{ color: 'var(--text-muted)', maxWidth: 600, marginBottom: 24 }}>
            {course.description}
          </p>

          {/* Stats */}
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginBottom: 20 }}>
            {[
              { icon: Clock, label: `${course.hours} Hours` },
              { icon: BookOpen, label: `${course.sessionCount} Sessions` },
              { icon: BarChart3, label: `${course.levels} Levels` },
            ].map(({ icon: Icon, label }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <Icon size={14} style={{ color: 'var(--accent)' }} />
                <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{label}</span>
              </div>
            ))}
          </div>

          {/* Progress */}
          {pct > 0 && (
            <div style={{ maxWidth: 400 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                  {completed.size}/{sessions.length} complete
                </span>
                <span style={{ fontSize: 12, color: 'var(--accent)' }}>{pct}%</span>
              </div>
              <ProgressBar percent={pct} accent={course.accent} height={4} />
            </div>
          )}
        </div>

        {/* Tabs */}
        <div style={{
          display: 'flex',
          gap: 0,
          borderBottom: '1px solid var(--border)',
          padding: '0 32px',
          background: 'var(--bg)',
          overflowX: 'auto',
        }}>
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '14px 20px',
                background: 'none',
                border: 'none',
                borderBottom: activeTab === tab ? '2px solid var(--accent)' : '2px solid transparent',
                color: activeTab === tab ? 'var(--accent)' : 'var(--text-muted)',
                cursor: 'pointer',
                fontSize: 14,
                fontFamily: 'var(--sans)',
                fontWeight: activeTab === tab ? 600 : 400,
                whiteSpace: 'nowrap',
                transition: 'color 0.15s',
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div style={{ padding: '32px' }}>
          {activeTab === 'Overview' && (
            <div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: 16,
                marginBottom: 32,
              }}>
                {[
                  { icon: '⚡', title: 'The 20/80 Rule', desc: '80% of finished tracks use a basic beat, one melody, bass, reverb + delay, and basic mixing. Master these before touching advanced concepts.' },
                  { icon: '🎯', title: 'Project-First Learning', desc: 'Every session ends with something you can hit play on. No theory-only sessions. You learn by doing, not watching tutorials for hours.' },
                  { icon: '🔄', title: 'Genre Rotation', desc: 'Start with easier genres first. Each session builds on the last — your tools and vocabulary grow with each session.' },
                  { icon: '📝', title: '15-Min Review Ritual', desc: 'End every session: play your project back in full, write one thing you nailed, one thing that sounds off, and set your next session\'s starting goal.' },
                ].map(({ icon, title, desc }) => (
                  <div key={title} style={{
                    background: 'var(--bg2)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)',
                    padding: 20,
                  }}>
                    <div style={{ fontSize: 24, marginBottom: 10 }}>{icon}</div>
                    <h4 style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)', marginBottom: 8 }}>{title}</h4>
                    <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6 }}>{desc}</p>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {course.tags.map(tag => (
                  <span key={tag} style={{
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--bg3)',
                    border: '1px solid var(--border)',
                    fontSize: 13,
                    color: 'var(--accent)',
                    fontFamily: 'var(--mono)',
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'Learning Ladder' && (
            <div style={{ maxWidth: 640 }}>
              <p style={{ color: 'var(--text-muted)', marginBottom: 24, fontSize: 14 }}>
                This course is structured across {course.levels} levels, each building on the last. Complete the sessions in order for best results.
              </p>
              {Array.from({ length: course.levels }, (_, i) => i + 1).map(level => {
                const levelColors = ['#6ee7b7', '#38bdf8', '#fbbf24', '#f472b6', '#a78bfa']
                const color = levelColors[level - 1] || 'var(--accent)'
                const sessionCount = Math.ceil(sessions.length / course.levels)
                const levelSessions = sessions.slice((level - 1) * sessionCount, level * sessionCount)
                return (
                  <div key={level} style={{
                    background: 'var(--bg2)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)',
                    marginBottom: 12,
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      padding: '14px 20px',
                    }}>
                      <span style={{
                        fontSize: 11,
                        fontFamily: 'var(--mono)',
                        padding: '3px 10px',
                        borderRadius: 4,
                        background: `${color}15`,
                        color,
                        border: `1px solid ${color}30`,
                        flexShrink: 0,
                      }}>
                        LVL {level}
                      </span>
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>
                          {levelSessions.map(s => s.title).join(' · ')}
                        </div>
                        <div style={{ fontSize: 12, color: 'var(--text-dim)', marginTop: 2 }}>
                          {levelSessions.length} session{levelSessions.length !== 1 ? 's' : ''}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {activeTab === 'Sessions' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 860 }}>
              {loading ? (
                <div style={{ color: 'var(--text-dim)', fontFamily: 'var(--mono)', fontSize: 13 }}>
                  Loading sessions…
                </div>
              ) : (
                sessions.map((session, i) => (
                  <div key={session.id} ref={el => sessionRefs.current[session.id] = el}>
                    <SessionPanel
                      session={session}
                      index={i}
                      completed={completed}
                      onToggle={toggle}
                      onQuizOpen={setQuizSession}
                    />
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>

      {/* Quiz modal */}
      {quizSession && (
        <QuizModal
          session={quizSession}
          course={course}
          courseAccent={course.accent}
          onClose={() => setQuizSession(null)}
          onPass={() => markComplete(quizSession.id)}
        />
      )}
    </div>
  )
}

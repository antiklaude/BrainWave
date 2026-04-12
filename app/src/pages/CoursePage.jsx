import { useParams, Link } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import { catalog } from '../data/catalog'
import { loadSessions } from '../utils/parseSessions'
import { useProgress } from '../hooks/useProgress'
import CourseSidebar from '../components/course/CourseSidebar'
import SessionPanel from '../components/course/SessionPanel'
import CourseCompanion from '../components/course/companion/CourseCompanion'
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

  // Derive current level from progress
  const currentLevel = Math.min(course.levels, Math.max(1, Math.ceil((completed.size / Math.max(1, sessions.length)) * course.levels)))

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
      <style>{`
        @media (min-width: 1024px) {
          .bw-course-main { margin-left: 260px; }
          .bw-course-topnav { display: none !important; }
        }
      `}</style>
      {/* Sidebar — desktop only */}
      <CourseSidebar
        course={course}
        sessions={sessions}
        completed={completed}
        onSessionClick={scrollToSession}
      />

      {/* Main content */}
      <div className="bw-course-main" style={{ flex: 1, minWidth: 0 }}>
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
            ].map((item) => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <item.icon size={14} style={{ color: 'var(--accent)' }} />
                <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{item.label}</span>
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
            <div style={{ maxWidth: 680 }}>
              <p style={{ color: 'var(--text-muted)', marginBottom: 24, fontSize: 14 }}>
                This course is structured across {course.levels} levels, each building on the last. Complete the sessions in order for best results.
              </p>

              {course.ladder ? (
                /* Rich prose ladder — shown when catalog entry has a ladder array */
                course.ladder.map((lvl) => {
                  const levelColors = ['#6ee7b7', '#38bdf8', '#fbbf24', '#f472b6', '#a78bfa']
                  const color = levelColors[(lvl.level - 1) % levelColors.length]
                  return (
                    <div key={lvl.level} style={{
                      background: 'var(--bg2)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius)',
                      marginBottom: 16,
                      overflow: 'hidden',
                    }}>
                      {/* Level header */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                        padding: '16px 20px',
                        borderBottom: '1px solid var(--border)',
                        background: `${color}08`,
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
                          LVL {lvl.level}
                        </span>
                        <div>
                          <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>{lvl.title}</div>
                          {lvl.milestone && (
                            <div style={{ fontSize: 12, color: 'var(--text-dim)', marginTop: 2 }}>
                              Milestone: {lvl.milestone}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Level body */}
                      <div style={{ padding: '20px' }}>
                        {/* About paragraphs */}
                        {lvl.about && (
                          <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 16 }}>
                            {lvl.about}
                          </p>
                        )}

                        {/* Core concepts */}
                        {lvl.concepts && lvl.concepts.length > 0 && (
                          <div style={{ marginBottom: 16 }}>
                            <div style={{ fontSize: 11, fontFamily: 'var(--mono)', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>
                              Core concepts
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                              {lvl.concepts.map((c, i) => (
                                <div key={i} style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6 }}>
                                  <span style={{ color: 'var(--text)', fontWeight: 600 }}>{c.name}</span>
                                  {' — '}
                                  {c.desc}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Key insight */}
                        {lvl.keyInsight && (
                          <div style={{
                            borderLeft: `3px solid ${color}`,
                            paddingLeft: 14,
                            marginBottom: 16,
                            background: `${color}08`,
                            padding: '10px 14px',
                            borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                          }}>
                            <span style={{ fontSize: 11, fontFamily: 'var(--mono)', color, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Key insight </span>
                            <span style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6 }}>{lvl.keyInsight}</span>
                          </div>
                        )}

                        {/* Outcomes */}
                        {lvl.outcomes && lvl.outcomes.length > 0 && (
                          <div>
                            <div style={{ fontSize: 11, fontFamily: 'var(--mono)', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>
                              After this level you can
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                              {lvl.outcomes.map((o, i) => (
                                <div key={i} style={{ display: 'flex', gap: 8, fontSize: 13, color: 'var(--text-muted)' }}>
                                  <span style={{ color, flexShrink: 0 }}>→</span>
                                  <span>{o}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })
              ) : (
                /* Fallback thin ladder — for courses without ladder data yet */
                Array.from({ length: course.levels }, (_, i) => i + 1).map(level => {
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
                })
              )}
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

      {/* Right Sidebar — Companion Lab (Desktop Big Screens) */}
      <CourseCompanion 
        course={course} 
        currentLevel={currentLevel} 
        sessions={sessions}
      />

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

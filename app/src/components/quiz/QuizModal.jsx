import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import QuizQuestion from './QuizQuestion'
import QuizResult from './QuizResult'

export default function QuizModal({ session, courseAccent, onClose, onPass, course }) {
  const quiz = session.quiz
  const questions = quiz?.questions || []
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)
  const [passed, setPassed] = useState(false)

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const handleAnswer = (correct) => {
    const newScore = correct ? score + 1 : score
    if (correct) setScore(s => s + 1)
    const next = current + 1
    if (next >= questions.length) {
      const pct = Math.round((newScore / questions.length) * 100)
      const hasPassed = pct >= (quiz.passMark || 60)
      setPassed(hasPassed)
      setDone(true)
      if (hasPassed) onPass?.()
    } else {
      setTimeout(() => setCurrent(next), 100)
    }
  }

  const handleRetry = () => {
    setCurrent(0)
    setScore(0)
    setDone(false)
    setPassed(false)
  }

  if (!quiz || questions.length === 0) return null

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'var(--modal-bg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: 560,
          background: 'var(--bg2)',
          borderRadius: 'var(--radius)',
          border: '1px solid var(--border)',
          overflow: 'hidden',
          boxShadow: 'var(--shadow)',
        }}
      >
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 20px',
          borderBottom: '1px solid var(--border)',
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--mono)',
              fontSize: 11,
              color: courseAccent || 'var(--accent)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: 2,
            }}>
              Quick Check
            </div>
            <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>
              {session.title}
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              display: 'flex',
              padding: 4,
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Progress bar */}
        {!done && (
          <div style={{
            height: 3,
            background: 'var(--bg3)',
          }}>
            <div style={{
              height: '100%',
              width: `${((current) / questions.length) * 100}%`,
              background: courseAccent || 'var(--accent)',
              transition: 'width 0.3s ease',
            }} />
          </div>
        )}

        {/* Body */}
        <div style={{ padding: '24px 24px 28px' }}>
          {!done ? (
            <div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: 20,
              }}>
                <span style={{ fontSize: 13, color: 'var(--text-dim)', fontFamily: 'var(--mono)' }}>
                  Question {current + 1} of {questions.length}
                </span>
                <span style={{ fontSize: 13, color: 'var(--text-dim)', fontFamily: 'var(--mono)' }}>
                  {score} correct
                </span>
              </div>
              <QuizQuestion
                key={current}
                question={questions[current]}
                onAnswer={handleAnswer}
                accent={courseAccent}
              />
            </div>
          ) : (
            <QuizResult
              score={score}
              total={questions.length}
              passMark={quiz.passMark || 60}
              passed={passed}
              onRetry={handleRetry}
              onClose={onClose}
              session={session}
              course={course}
            />
          )}
        </div>
      </div>
    </div>
  )
}

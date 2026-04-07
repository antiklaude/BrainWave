import { useState } from 'react'
import { CheckCircle2, XCircle } from 'lucide-react'

export default function QuizQuestion({ question, onAnswer, accent }) {
  const [selected, setSelected] = useState(null) // index or string
  const [submitted, setSubmitted] = useState(false)

  const isMultipleChoice = question.type === 'multiple-choice'
  const [fillValue, setFillValue] = useState('')

  const checkAnswer = () => {
    if (isMultipleChoice) {
      return selected === question.answer
    }
    return fillValue.trim().toLowerCase() === String(question.answer).toLowerCase()
  }

  const handleSubmit = () => {
    if (isMultipleChoice && selected === null) return
    if (!isMultipleChoice && !fillValue.trim()) return
    setSubmitted(true)
    const correct = checkAnswer()
    setTimeout(() => onAnswer(correct), 1400)
  }

  const isCorrect = submitted ? checkAnswer() : null

  return (
    <div>
      <p style={{
        fontSize: 16,
        fontWeight: 600,
        color: 'var(--text)',
        lineHeight: 1.5,
        marginBottom: 24,
      }}>
        {question.question}
      </p>

      {isMultipleChoice ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {question.options.map((opt, i) => {
            let bg = 'var(--bg3)'
            let border = 'var(--border)'
            let color = 'var(--text)'
            if (submitted) {
              if (i === question.answer) {
                bg = '#6ee7b720'
                border = '#6ee7b7'
                color = '#6ee7b7'
              } else if (i === selected && i !== question.answer) {
                bg = '#f8717120'
                border = '#f87171'
                color = '#f87171'
              }
            } else if (selected === i) {
              border = accent || 'var(--accent)'
              bg = `${accent || 'var(--accent)'}18`
            }

            return (
              <button
                key={i}
                onClick={() => !submitted && setSelected(i)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '12px 16px',
                  background: bg,
                  border: `1px solid ${border}`,
                  borderRadius: 'var(--radius-sm)',
                  cursor: submitted ? 'default' : 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.15s',
                  color,
                  fontSize: 14,
                }}
              >
                <span style={{
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  border: `1px solid ${border}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--mono)',
                  fontSize: 11,
                  flexShrink: 0,
                }}>
                  {submitted && i === question.answer ? <CheckCircle2 size={14} color="#6ee7b7" /> :
                   submitted && i === selected && i !== question.answer ? <XCircle size={14} color="#f87171" /> :
                   String.fromCharCode(65 + i)}
                </span>
                {opt}
              </button>
            )
          })}
        </div>
      ) : (
        <div>
          {question.hint && (
            <p style={{ fontSize: 12, color: 'var(--text-dim)', marginBottom: 10, fontFamily: 'var(--mono)' }}>
              Hint: {question.hint}
            </p>
          )}
          <input
            type="text"
            value={fillValue}
            onChange={e => !submitted && setFillValue(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSubmit()}
            placeholder="Type your answer…"
            disabled={submitted}
            style={{
              width: '100%',
              background: 'var(--bg3)',
              border: `1px solid ${submitted ? (isCorrect ? '#6ee7b7' : '#f87171') : 'var(--border)'}`,
              borderRadius: 'var(--radius-sm)',
              color: 'var(--text)',
              fontFamily: 'var(--sans)',
              fontSize: 15,
              padding: '12px 16px',
              outline: 'none',
            }}
          />
        </div>
      )}

      {/* Feedback */}
      {submitted && question.explanation && (
        <div style={{
          marginTop: 16,
          padding: '12px 16px',
          background: isCorrect ? '#6ee7b710' : '#f8717110',
          border: `1px solid ${isCorrect ? '#6ee7b730' : '#f8717130'}`,
          borderRadius: 'var(--radius-sm)',
          fontSize: 13,
          color: isCorrect ? '#6ee7b7' : '#f87171',
          lineHeight: 1.6,
        }}>
          {isCorrect ? '✓ Correct! ' : '✗ Not quite. '}
          <span style={{ color: 'var(--text-muted)' }}>{question.explanation}</span>
        </div>
      )}

      {/* Submit button */}
      {!submitted && (
        <button
          onClick={handleSubmit}
          disabled={isMultipleChoice ? selected === null : !fillValue.trim()}
          style={{
            marginTop: 20,
            padding: '10px 28px',
            background: accent || 'var(--accent)',
            border: 'none',
            borderRadius: 'var(--radius-sm)',
            color: '#000',
            fontWeight: 600,
            fontSize: 14,
            cursor: (isMultipleChoice ? selected === null : !fillValue.trim()) ? 'not-allowed' : 'pointer',
            opacity: (isMultipleChoice ? selected === null : !fillValue.trim()) ? 0.5 : 1,
            transition: 'opacity 0.15s',
          }}
        >
          Submit Answer
        </button>
      )}
    </div>
  )
}

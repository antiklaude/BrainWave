import React, { useState, useEffect } from 'react'

export default function LabNotes({ courseId }) {
  const [notes, setNotes] = useState(() => {
    // Initial load from localStorage
    const saved = localStorage.getItem(`bw_notes_${courseId}`)
    return saved || ''
  })

  useEffect(() => {
    // Save to localStorage on change
    localStorage.setItem(`bw_notes_${courseId}`, notes)
  }, [notes, courseId])

  return (
    <div style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      marginTop: '20px',
    }}>
      <div style={{
        fontFamily: 'var(--mono)',
        fontSize: '11px',
        color: 'var(--text-muted)',
        textTransform: 'uppercase',
        marginBottom: '8px',
        letterSpacing: '0.05em',
      }}>
        Lab Notes
      </div>
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="bw-notes-area"
        placeholder="Type session observations, timestamps, or code snippets..."
        style={{
          background: 'var(--bg3)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          padding: '16px',
          color: 'var(--text)',
          fontFamily: 'var(--sans)',
          fontSize: '13px',
          resize: 'none',
          width: '100%',
          flex: 1,
          outline: 'none',
          borderBottomRightRadius: 0,
          borderBottomLeftRadius: 0,
        }}
      />
      <div style={{
        background: 'var(--bg2)',
        border: '1px solid var(--border)',
        borderTop: 'none',
        padding: '6px 12px',
        fontSize: '10px',
        color: 'var(--text-dim)',
        fontStyle: 'italic',
        fontFamily: 'var(--mono)',
        borderBottomRightRadius: 'var(--radius)',
        borderBottomLeftRadius: 'var(--radius)',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <span>Synced with Laboratory cloud</span>
        <span>{notes.length} chars</span>
      </div>
    </div>
  )
}

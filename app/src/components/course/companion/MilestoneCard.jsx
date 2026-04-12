import React from 'react'

export default function MilestoneCard({ level, milestone, progress = 0 }) {
  if (!milestone) return null;

  return (
    <div style={{
      background: 'var(--bg2)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius)',
      padding: '20px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        fontFamily: 'var(--mono)',
        fontSize: '10px',
        textTransform: 'uppercase',
        color: 'var(--accent)',
        letterSpacing: '0.1em',
        marginBottom: '8px',
      }}>
        LVL {level} Milestone
      </div>
      <div style={{
        fontSize: '14px',
        fontWeight: 600,
        color: 'var(--text)',
        lineHeight: 1.4,
      }}>
        {milestone}
      </div>
      
      {/* Mini Progress Bar */}
      <div style={{ 
        marginTop: '16px', 
        height: '4px', 
        background: 'var(--bg3)', 
        borderRadius: '2px',
        overflow: 'hidden'
      }}>
        <div style={{ 
          width: `${progress}%`, 
          height: '100%', 
          background: 'var(--accent)', 
          borderRadius: '2px',
          transition: 'width 0.6s ease-out'
        }}></div>
      </div>
      
      <div style={{
        marginTop: '8px',
        fontSize: '11px',
        color: 'var(--text-dim)',
        fontFamily: 'var(--mono)'
      }}>
        Goal visibility: Focused
      </div>
    </div>
  )
}

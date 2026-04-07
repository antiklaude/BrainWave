import { Link } from 'react-router-dom'
import { CheckCircle2, Circle } from 'lucide-react'
import ProgressBar from '../ui/ProgressBar'

export default function CourseSidebar({ course, sessions, completed, onSessionClick }) {
  const pct = sessions.length > 0 ? Math.round((completed.size / sessions.length) * 100) : 0

  return (
    <aside
      style={{
        width: 260,
        flexShrink: 0,
        position: 'sticky',
        top: 56,
        height: 'calc(100vh - 56px)',
        overflowY: 'auto',
        padding: '0 0 24px',
        borderRight: '1px solid var(--border)',
        display: 'none',
      }}
      className="bw-sidebar"
    >
      <style>{`
        @media (min-width: 1024px) { .bw-sidebar { display: block !important; } }
      `}</style>

      {/* Branding */}
      <div style={{
        padding: '14px 20px',
        borderBottom: '1px solid var(--border)',
        marginBottom: 20,
      }}>
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            textDecoration: 'none',
            fontFamily: 'var(--mono)',
            fontWeight: 700,
            fontSize: 15,
            color: 'var(--text-white)',
          }}
        >
          <span style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: 'var(--accent)',
            flexShrink: 0,
          }} />
          BrainWave
        </Link>
      </div>

      <div style={{ padding: '0 20px', marginBottom: 20 }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 8 }}>
          {completed.size}/{sessions.length} sessions complete
        </div>
        <ProgressBar percent={pct} accent={`var(--accent)`} height={4} />
      </div>

      <div style={{ padding: '0 12px' }}>
        {sessions.map((s, i) => {
          const done = completed.has(s.id)
          return (
            <button
              key={s.id}
              onClick={() => onSessionClick(s.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                width: '100%',
                padding: '10px 10px',
                background: 'none',
                border: 'none',
                borderRadius: 'var(--radius-sm)',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'background 0.1s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--bg3)'}
              onMouseLeave={e => e.currentTarget.style.background = 'none'}
            >
              <span style={{ color: done ? 'var(--accent)' : 'var(--text-dim)', flexShrink: 0 }}>
                {done ? <CheckCircle2 size={16} /> : <Circle size={16} />}
              </span>
              <span style={{ fontSize: 13, color: done ? 'var(--text-muted)' : 'var(--text)', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                <span style={{ color: 'var(--text-dim)', fontFamily: 'var(--mono)', fontSize: 11, marginRight: 6 }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                {s.title}
              </span>
            </button>
          )
        })}
      </div>
    </aside>
  )
}

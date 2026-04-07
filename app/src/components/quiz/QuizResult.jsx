import { Trophy, RefreshCw, Award } from 'lucide-react'
import CertDownload from '../certificate/CertDownload'

export default function QuizResult({ score, total, passMark, onRetry, onClose, session, course, passed }) {
  const pct = Math.round((score / total) * 100)

  return (
    <div style={{ textAlign: 'center', padding: '8px 0' }}>
      {/* Score circle */}
      <div style={{
        width: 100,
        height: 100,
        borderRadius: '50%',
        border: `3px solid ${passed ? '#6ee7b7' : '#f87171'}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 24px',
      }}>
        <span style={{
          fontFamily: 'var(--mono)',
          fontSize: 28,
          fontWeight: 700,
          color: passed ? '#6ee7b7' : '#f87171',
        }}>
          {score}/{total}
        </span>
      </div>

      <h3 style={{
        fontSize: 20,
        fontWeight: 700,
        color: passed ? '#6ee7b7' : '#f87171',
        marginBottom: 8,
      }}>
        {passed ? 'Nice work!' : 'Keep going!'}
      </h3>

      <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 8 }}>
        {pct}% correct · {passed ? `Pass` : `Fail`} (pass mark: {passMark}%)
      </p>

      {!passed && (
        <p style={{ color: 'var(--text-dim)', fontSize: 13, marginBottom: 24 }}>
          Review the session content and try again.
        </p>
      )}

      {passed && session && course && (
        <div style={{ marginTop: 16, marginBottom: 24 }}>
          <CertDownload session={session} course={course} score={pct} />
        </div>
      )}

      <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
        <button
          onClick={onRetry}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            padding: '10px 20px',
            background: 'var(--bg3)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-sm)',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            fontSize: 14,
          }}
        >
          <RefreshCw size={14} />
          Try Again
        </button>
        <button
          onClick={onClose}
          style={{
            padding: '10px 20px',
            background: passed ? '#6ee7b7' : 'var(--bg3)',
            border: 'none',
            borderRadius: 'var(--radius-sm)',
            color: passed ? '#000' : 'var(--text-muted)',
            cursor: 'pointer',
            fontSize: 14,
            fontWeight: passed ? 600 : 400,
          }}
        >
          {passed ? 'Done' : 'Close'}
        </button>
      </div>
    </div>
  )
}

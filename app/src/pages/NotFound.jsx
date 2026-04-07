import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      gap: 16,
      textAlign: 'center',
      padding: 24,
    }}>
      <span style={{
        fontFamily: 'var(--mono)',
        fontSize: 64,
        color: 'var(--text-dim)',
        fontWeight: 700,
      }}>404</span>
      <p style={{ color: 'var(--text-muted)', maxWidth: 320 }}>
        This page doesn't exist. Head back to the catalog.
      </p>
      <Link
        to="/"
        style={{
          background: 'var(--accent)',
          color: '#000',
          padding: '10px 24px',
          borderRadius: 'var(--radius-sm)',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: 14,
        }}
      >
        Back to Catalog
      </Link>
    </div>
  )
}

import { Link, useNavigate, useLocation } from 'react-router-dom'
import { ChevronLeft, Search } from 'lucide-react'
import ThemeToggle from '../ui/ThemeToggle'

export default function TopNav({ title, showBack, onSearch }) {
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <nav
      className={showBack ? 'bw-course-topnav' : ''}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'var(--bg)',
        borderBottom: '1px solid var(--border)',
        backdropFilter: 'blur(8px)',
      }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 24px',
        height: 56,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
      }}>
        {showBack && (
          <button
            onClick={() => navigate('/')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              background: 'none',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              fontSize: 13,
              padding: '4px 0',
              fontFamily: 'var(--sans)',
            }}
          >
            <ChevronLeft size={16} />
            Back
          </button>
        )}

        {!showBack && (
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              textDecoration: 'none',
              fontFamily: 'var(--mono)',
              fontWeight: 700,
              fontSize: 16,
              color: 'var(--text-white)',
              flexShrink: 0,
            }}
          >
            <span style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: 'var(--accent)',
              display: 'inline-block',
            }} />
            BrainWave
          </Link>
        )}

        {title && (
          <span style={{
            color: 'var(--text-muted)',
            fontSize: 13,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            flex: 1,
          }}>
            {title}
          </span>
        )}

        {isHome && onSearch && (
          <div style={{
            flex: 1,
            maxWidth: 280,
            position: 'relative',
            marginLeft: 'auto',
          }}>
            <Search
              size={14}
              style={{
                position: 'absolute',
                left: 10,
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-dim)',
                pointerEvents: 'none',
              }}
            />
            <input
              type="text"
              placeholder="Search courses…"
              onChange={e => onSearch(e.target.value)}
              style={{
                width: '100%',
                background: 'var(--bg3)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--text)',
                fontFamily: 'var(--sans)',
                fontSize: 13,
                padding: '6px 12px 6px 32px',
                outline: 'none',
              }}
            />
          </div>
        )}

        <ThemeToggle />
      </div>
    </nav>
  )
}

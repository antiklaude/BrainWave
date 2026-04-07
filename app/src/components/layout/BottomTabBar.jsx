import { Link, useLocation } from 'react-router-dom'
import { Home, BookOpen, Search } from 'lucide-react'

const tabs = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: BookOpen, label: 'Courses', path: '/?tab=courses' },
  { icon: Search, label: 'Search', path: '/?search=1' },
]

export default function BottomTabBar() {
  const location = useLocation()

  return (
    <>
      <style>{`
        .bw-bottom-nav { display: flex; }
        @media (min-width: 1024px) { .bw-bottom-nav { display: none; } }
      `}</style>
    <nav className="bw-bottom-nav" style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 200,
      background: 'var(--bg2)',
      borderTop: '1px solid var(--border)',
      padding: '8px 0 env(safe-area-inset-bottom, 8px)',
    }}>
      {tabs.map(({ icon: Icon, label, path }) => {
        const isActive = location.pathname === '/' && path === '/' ||
          location.pathname.startsWith('/courses') && label === 'Courses'
        return (
          <Link
            key={label}
            to={path}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 4,
              padding: '6px 0',
              textDecoration: 'none',
              color: isActive ? 'var(--accent)' : 'var(--text-dim)',
              fontSize: 10,
              fontFamily: 'var(--sans)',
              transition: 'color 0.15s',
            }}
          >
            <Icon size={20} />
            <span>{label}</span>
          </Link>
        )
      })}
    </nav>
    </>
  )
}

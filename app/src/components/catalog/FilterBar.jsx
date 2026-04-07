const CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'music', label: 'Music' },
  { key: 'code', label: 'Code' },
  { key: 'design', label: 'Design' },
  { key: '3d', label: '3D' },
  { key: 'devops', label: 'DevOps' },
]

export default function FilterBar({ active, onChange }) {
  return (
    <div style={{
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginBottom: 24,
    }}>
      {CATEGORIES.map(cat => (
        <button
          key={cat.key}
          onClick={() => onChange(cat.key)}
          style={{
            padding: '6px 16px',
            borderRadius: 'var(--radius-sm)',
            border: active === cat.key ? '1px solid var(--accent)' : '1px solid var(--border)',
            background: active === cat.key ? 'var(--accent)' : 'var(--bg3)',
            color: active === cat.key ? '#000' : 'var(--text-muted)',
            fontFamily: 'var(--sans)',
            fontSize: 13,
            fontWeight: active === cat.key ? 600 : 400,
            cursor: 'pointer',
            transition: 'all 0.15s',
          }}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}

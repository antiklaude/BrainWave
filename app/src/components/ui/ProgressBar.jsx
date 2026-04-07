export default function ProgressBar({ percent, accent, height = 4 }) {
  return (
    <div
      style={{
        height: `${height}px`,
        background: 'var(--bg3)',
        borderRadius: '999px',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${Math.min(100, Math.max(0, percent))}%`,
          background: accent || 'var(--accent)',
          borderRadius: '999px',
          transition: 'width 0.4s ease',
        }}
      />
    </div>
  )
}

import { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import { X, ExternalLink, AlertCircle, Loader } from 'lucide-react'

const ERROR_MESSAGES = {
  2:  'Invalid video ID.',
  5:  'This video cannot be played in embedded players.',
  100: 'This video has been removed or made private.',
  101: 'The video owner does not allow embedded playback.',
  150: 'The video owner does not allow embedded playback.',
}

export default function VideoModal({ videoId, title, onClose }) {
  const [status, setStatus] = useState('loading') // loading | ready | error
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const ytOpts = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 1,
      rel: 0,
      modestbranding: 1,
      color: 'white',
    },
  }

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'var(--modal-bg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: 920,
          background: '#0a0a0a',
          borderRadius: 'var(--radius)',
          overflow: 'hidden',
          boxShadow: '0 32px 96px rgba(0,0,0,0.9)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 16px',
          background: 'var(--bg2)',
          borderBottom: '1px solid var(--border)',
          gap: 12,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
            {status === 'loading' && (
              <Loader size={14} style={{ color: 'var(--accent)', flexShrink: 0, animation: 'spin 1s linear infinite' }} />
            )}
            <span style={{
              color: 'var(--text)',
              fontSize: 14,
              fontWeight: 500,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}>
              {title}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
            <a
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Watch on YouTube"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 5,
                padding: '5px 10px',
                background: 'var(--bg3)',
                border: '1px solid var(--border)',
                borderRadius: 6,
                color: 'var(--text-muted)',
                textDecoration: 'none',
                fontSize: 12,
                transition: 'color 0.15s, border-color 0.15s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#ff4444'
                e.currentTarget.style.borderColor = '#ff444440'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--text-muted)'
                e.currentTarget.style.borderColor = 'var(--border)'
              }}
            >
              <ExternalLink size={12} />
              YouTube
            </a>
            <button
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                display: 'flex',
                padding: 4,
                borderRadius: 4,
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Player area */}
        <div style={{ position: 'relative', paddingBottom: '56.25%', background: '#000' }}>
          {/* Loading overlay */}
          {status === 'loading' && (
            <div style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#0a0a0a',
              zIndex: 2,
              gap: 12,
            }}>
              <img
                src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
                alt=""
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.3,
                  filter: 'blur(2px)',
                }}
              />
              <div style={{
                position: 'relative',
                zIndex: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 10,
              }}>
                <div style={{
                  width: 40,
                  height: 40,
                  border: '3px solid rgba(255,255,255,0.1)',
                  borderTopColor: 'var(--accent)',
                  borderRadius: '50%',
                  animation: 'bw-spin 0.8s linear infinite',
                }} />
                <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12 }}>Loading player…</span>
              </div>
            </div>
          )}

          {/* Error state */}
          {status === 'error' && (
            <div style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#0a0a0a',
              zIndex: 2,
              gap: 16,
              padding: 24,
            }}>
              <img
                src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
                alt=""
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.15,
                  filter: 'blur(4px)',
                }}
              />
              <div style={{
                position: 'relative',
                zIndex: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 12,
                textAlign: 'center',
              }}>
                <div style={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  background: 'rgba(248,113,113,0.1)',
                  border: '1px solid rgba(248,113,113,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <AlertCircle size={24} color="#f87171" />
                </div>
                <div>
                  <p style={{ color: '#f4f4f4', fontWeight: 600, marginBottom: 6, fontSize: 15 }}>
                    Video unavailable
                  </p>
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, maxWidth: 320, lineHeight: 1.5 }}>
                    {errorMsg || 'This video cannot be played here.'}
                  </p>
                </div>
                <a
                  href={`https://www.youtube.com/watch?v=${videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '10px 24px',
                    background: '#ff0000',
                    borderRadius: 8,
                    color: '#fff',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: 14,
                    marginTop: 4,
                  }}
                >
                  <ExternalLink size={15} />
                  Watch on YouTube
                </a>
              </div>
            </div>
          )}

          {/* YouTube player */}
          <div style={{
            position: 'absolute',
            inset: 0,
            opacity: status === 'ready' ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}>
            <YouTube
              videoId={videoId}
              opts={ytOpts}
              style={{ width: '100%', height: '100%' }}
              className="yt-player"
              onReady={() => setStatus('ready')}
              onError={(e) => {
                setErrorMsg(ERROR_MESSAGES[e.data] || 'This video cannot be embedded.')
                setStatus('error')
              }}
            />
          </div>
        </div>

        {/* Footer bar */}
        {status === 'ready' && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '8px 16px',
            background: 'var(--bg2)',
            borderTop: '1px solid var(--border)',
          }}>
            <a
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 5,
                fontSize: 11,
                color: 'var(--text-dim)',
                textDecoration: 'none',
                fontFamily: 'var(--mono)',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text-muted)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-dim)'}
            >
              <ExternalLink size={10} />
              Open in YouTube
            </a>
          </div>
        )}
      </div>

      <style>{`
        @keyframes bw-spin {
          to { transform: rotate(360deg); }
        }
        .yt-player iframe {
          width: 100% !important;
          height: 100% !important;
        }
        .yt-player, .yt-player > div {
          width: 100% !important;
          height: 100% !important;
        }
      `}</style>
    </div>
  )
}

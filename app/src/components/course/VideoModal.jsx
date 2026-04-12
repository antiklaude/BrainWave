import { useEffect, useState, useCallback, useRef } from 'react'
import YouTube from 'react-youtube'
import { X, ExternalLink, AlertCircle, Loader, ChevronLeft, ChevronRight, Play, Maximize2 } from 'lucide-react'

const ERROR_MESSAGES = {
  2:  'Invalid video ID.',
  5:  'This video cannot be played in embedded players.',
  100: 'This video has been removed or made private.',
  101: 'The video owner does not allow embedded playback.',
  150: 'The video owner does not allow embedded playback.',
}

/**
 * Cinema Mode Video Modal
 * Implements an immersive theater-grade video experience.
 */
export default function VideoModal({ 
  videoId, 
  title, 
  start, 
  onClose,
  playlist = [], // Array of {id, title} for session nav
  currentIndex = 0,
  onNavigate // function(newIndex)
}) {
  const [status, setStatus] = useState('loading') // loading | ready | error
  const [errorMsg, setErrorMsg] = useState('')
  const [showControls, setShowControls] = useState(true)
  const [isClosing, setIsClosing] = useState(false)
  const controlsTimeout = useRef(null)

  // Auto-hide controls after inactivity
  const handleMouseMove = useCallback(() => {
    setShowControls(true)
    if (controlsTimeout.current) clearTimeout(controlsTimeout.current)
    controlsTimeout.current = setTimeout(() => {
      setShowControls(false)
    }, 3000)
  }, [])

  const handleClose = useCallback(() => {
    setIsClosing(true)
    setTimeout(onClose, 300) // Match animation duration
  }, [onClose])

  useEffect(() => {
    const handler = (e) => { 
      if (e.key === 'Escape') handleClose()
      if (e.key === 'ArrowRight' && onNavigate && currentIndex < playlist.length - 1) onNavigate(currentIndex + 1)
      if (e.key === 'ArrowLeft' && onNavigate && currentIndex > 0) onNavigate(currentIndex - 1)
    }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    
    // Reset timeout on mount
    handleMouseMove()

    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
      if (controlsTimeout.current) clearTimeout(controlsTimeout.current)
    }
  }, [handleClose, onNavigate, currentIndex, playlist.length, handleMouseMove])

  const ytOpts = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 1,
      rel: 0,
      modestbranding: 1,
      color: 'white',
      iv_load_policy: 3,
      ...(start ? { start } : {}),
    },
  }

  const hasNext = onNavigate && currentIndex < playlist.length - 1
  const hasPrev = onNavigate && currentIndex > 0

  return (
    <div
      onClick={handleClose}
      onMouseMove={handleMouseMove}
      className={`cinema-modal ${isClosing ? 'closing' : ''}`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: showControls ? 'default' : 'none',
        transition: 'opacity 0.3s ease',
        animation: 'cinema-fade-in 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Background Glow matching Course Brand */}
      <div style={{
        position: 'absolute',
        width: '60vw',
        height: '60vh',
        background: 'radial-gradient(circle, var(--accent-alpha, rgba(var(--accent-rgb), 0.15)) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Top Bar (Auto-hide) */}
      <div 
        onClick={e => e.stopPropagation()}
        className={`cinema-bar top ${showControls ? 'visible' : ''}`}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 72,
          padding: '0 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 100%)',
          zIndex: 10,
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease',
          opacity: showControls ? 1 : 0,
          transform: showControls ? 'translateY(0)' : 'translateY(-100%)',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Play size={14} fill="var(--accent)" color="var(--accent)" />
            <span style={{ 
              color: 'var(--text)', 
              fontSize: 16, 
              fontWeight: 600,
              letterSpacing: '-0.01em'
            }}>
              {title}
            </span>
          </div>
          {playlist.length > 1 && (
            <span style={{ color: 'var(--text-dim)', fontSize: 12, marginLeft: 22 }}>
              Video {currentIndex + 1} of {playlist.length} in this session
            </span>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <a
            href={`https://www.youtube.com/watch?v=${videoId}${start ? `&t=${start}s` : ''}`}
            target="_blank"
            rel="noopener noreferrer"
            className="cinema-link"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '8px 16px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 100,
              color: '#fff',
              textDecoration: 'none',
              fontSize: 13,
              fontWeight: 500,
              transition: 'all 0.2s ease',
            }}
          >
            <ExternalLink size={14} />
            YouTube
          </a>
          <button
            onClick={handleClose}
            style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div 
        onClick={e => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: 1280,
          aspectRatio: '16/9',
          position: 'relative',
          zIndex: 5,
          boxShadow: '0 0 100px rgba(0,0,0,0.5)',
          borderRadius: 12,
          overflow: 'hidden',
          background: '#000',
          animation: 'cinema-scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Navigation Overlays */}
        {hasPrev && showControls && (
          <button
            onClick={() => onNavigate(currentIndex - 1)}
            style={{
              position: 'absolute',
              left: 20,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 20,
              width: 56,
              height: 56,
              borderRadius: '50%',
              background: 'rgba(0,0,0,0.4)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              backdropFilter: 'blur(8px)',
            }}
          >
            <ChevronLeft size={32} />
          </button>
        )}

        {hasNext && showControls && (
          <button
            onClick={() => onNavigate(currentIndex + 1)}
            style={{
              position: 'absolute',
              right: 20,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 20,
              width: 56,
              height: 56,
              borderRadius: '50%',
              background: 'rgba(0,0,0,0.4)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              backdropFilter: 'blur(8px)',
            }}
          >
            <ChevronRight size={32} />
          </button>
        )}

        {/* Loading/Error Overlays same as before but styled for Cinema */}
        {status === 'loading' && (
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#0a0a0a',
            zIndex: 15,
            gap: 16,
          }}>
            <div className="cinema-loader" style={{
              width: 48,
              height: 48,
              border: '4px solid rgba(255,255,255,0.1)',
              borderTopColor: 'var(--accent)',
              borderRadius: '50%',
              animation: 'bw-spin 0.8s linear infinite',
            }} />
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, fontWeight: 500 }}>Preparing cinema experience…</span>
          </div>
        )}

        {status === 'error' && (
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#0a0a0a',
            zIndex: 15,
            padding: 40,
            textAlign: 'center',
          }}>
            <AlertCircle size={48} color="#f87171" style={{ marginBottom: 20 }} />
            <h3 style={{ color: '#fff', fontSize: 20, fontWeight: 600, marginBottom: 8 }}>Playback Issue</h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 400, lineHeight: 1.6, marginBottom: 24 }}>
              {errorMsg || 'This video could not be played in cinema mode.'}
            </p>
            <a
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#ff0000',
                color: '#fff',
                padding: '12px 32px',
                borderRadius: 12,
                textDecoration: 'none',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <ExternalLink size={18} />
              Open on YouTube
            </a>
          </div>
        )}

        {/* YouTube player */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: status === 'ready' ? 1 : 0,
          transition: 'opacity 0.5s ease',
        }}>
          <YouTube
            videoId={videoId}
            opts={ytOpts}
            style={{ width: '100%', height: '100%' }}
            className="yt-player"
            onReady={() => setStatus('ready')}
            onError={(e) => {
              setErrorMsg(ERROR_MESSAGES[e.id] || 'This video cannot be embedded.')
              setStatus('error')
            }}
          />
        </div>
      </div>

      {/* Bottom Controls (Auto-hide) */}
      <div 
        onClick={e => e.stopPropagation()}
        className={`cinema-bar bottom ${showControls ? 'visible' : ''}`}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 80,
          padding: '0 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
          zIndex: 10,
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease',
          opacity: showControls ? 1 : 0,
          transform: showControls ? 'translateY(0)' : 'translateY(100%)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <button 
            disabled={!hasPrev}
            onClick={() => onNavigate(currentIndex - 1)}
            style={{ 
              background: 'none', border: 'none', color: hasPrev ? '#fff' : 'rgba(255,255,255,0.2)', 
              cursor: hasPrev ? 'pointer' : 'default', display: 'flex', alignItems: 'center', gap: 8,
              fontSize: 14, fontWeight: 500
            }}
          >
            <ChevronLeft size={20} /> Previous
          </button>
          
          <div style={{ width: 1, height: 24, background: 'rgba(255,255,255,0.1)' }} />
          
          <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, minWidth: 100, textAlign: 'center' }}>
            {playlist.length > 0 ? `Video ${currentIndex + 1} of ${playlist.length}` : 'Cinema Mode'}
          </span>

          <div style={{ width: 1, height: 24, background: 'rgba(255,255,255,0.1)' }} />

          <button 
            disabled={!hasNext}
            onClick={() => onNavigate(currentIndex + 1)}
            style={{ 
              background: 'none', border: 'none', color: hasNext ? '#fff' : 'rgba(255,255,255,0.2)', 
              cursor: hasNext ? 'pointer' : 'default', display: 'flex', alignItems: 'center', gap: 8,
              fontSize: 14, fontWeight: 500
            }}
          >
            Next <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes cinema-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes cinema-scale-in {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .cinema-modal.closing {
          opacity: 0 !important;
          pointer-events: none;
        }
        .yt-player iframe {
          width: 100% !important;
          height: 100% !important;
          border: none !important;
        }
        .yt-player, .yt-player > div {
          width: 100% !important;
          height: 100% !important;
        }
        .cinema-link:hover {
          background: rgba(255,255,255,0.15) !important;
          border-color: rgba(255,255,255,0.2) !important;
          transform: translateY(-1px);
        }
        @keyframes bw-spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

import { useState } from 'react'
import { ChevronDown, Play, CheckCircle2, Circle, Zap } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import VideoModal from './VideoModal'

export default function SessionPanel({ session, index, completed, onToggle, onQuizOpen }) {
  const [open, setOpen] = useState(false)
  const [videoModal, setVideoModal] = useState(null) // { id, title }
  const isDone = completed.has(session.id)

  return (
    <div style={{
      background: 'var(--bg2)',
      border: `1px solid ${isDone ? 'var(--accent)' : 'var(--border)'}`,
      borderRadius: 'var(--radius)',
      overflow: 'hidden',
      transition: 'border-color 0.2s',
    }}>
      {/* Header */}
      <div
        onClick={() => setOpen(o => !o)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '16px 20px',
          cursor: 'pointer',
          userSelect: 'none',
        }}
      >
        <button
          onClick={e => { e.stopPropagation(); onToggle(session.id) }}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: isDone ? 'var(--accent)' : 'var(--text-dim)', display: 'flex', flexShrink: 0 }}
        >
          {isDone ? <CheckCircle2 size={20} /> : <Circle size={20} />}
        </button>

        <span style={{
          fontFamily: 'var(--mono)',
          fontSize: 11,
          color: 'var(--text-dim)',
          flexShrink: 0,
        }}>
          {String(index + 1).padStart(2, '0')}
        </span>

        <span style={{
          flex: 1,
          fontSize: 14,
          fontWeight: 600,
          color: isDone ? 'var(--text-muted)' : 'var(--text)',
          textDecoration: isDone ? 'line-through' : 'none',
        }}>
          {session.title}
        </span>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          {session.levelLabel && (
            <span style={{
              fontSize: 10,
              fontFamily: 'var(--mono)',
              padding: '2px 8px',
              borderRadius: 4,
              background: `${session.levelColor || 'var(--accent)'}15`,
              color: session.levelColor || 'var(--accent)',
              border: `1px solid ${session.levelColor || 'var(--accent)'}30`,
            }}>
              {session.levelLabel}
            </span>
          )}
          {session.duration && (
            <span style={{ fontSize: 11, color: 'var(--text-dim)', fontFamily: 'var(--mono)' }}>
              {session.duration}m
            </span>
          )}
          <ChevronDown
            size={16}
            style={{
              color: 'var(--text-dim)',
              transform: open ? 'rotate(180deg)' : 'rotate(0)',
              transition: 'transform 0.2s',
            }}
          />
        </div>
      </div>

      {/* Body */}
      {open && (
        <div style={{
          padding: '0 20px 20px',
          borderTop: '1px solid var(--border)',
        }}>
          {/* Videos */}
          {session.videos && session.videos.length > 0 && (
            <div style={{ marginTop: 16 }}>
              <div style={{
                fontSize: 11,
                fontFamily: 'var(--mono)',
                color: 'var(--text-dim)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: 10,
              }}>
                Watch first — click to play in page
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {session.videos.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setVideoModal(v)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      background: 'var(--bg3)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '10px 12px',
                      cursor: 'pointer',
                      textAlign: 'left',
                      width: '100%',
                      transition: 'border-color 0.15s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
                  >
                    <div style={{
                      width: 80,
                      height: 45,
                      borderRadius: 6,
                      overflow: 'hidden',
                      flexShrink: 0,
                      position: 'relative',
                    }}>
                      <img
                        src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
                        alt={v.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <div style={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(0,0,0,0.4)',
                      }}>
                        <Play size={16} fill="white" color="white" />
                      </div>
                    </div>
                    <span style={{ fontSize: 13, color: 'var(--text)', fontFamily: 'var(--sans)' }}>
                      {v.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Markdown content */}
          {session.content && (
            <div className="bw-prose" style={{ marginTop: 20 }}>
              <ReactMarkdown>{session.content}</ReactMarkdown>
            </div>
          )}

          {/* Actions */}
          <div style={{ display: 'flex', gap: 10, marginTop: 20, flexWrap: 'wrap' }}>
            <button
              onClick={() => onToggle(session.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '8px 16px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border)',
                background: isDone ? 'var(--bg3)' : 'var(--bg3)',
                color: isDone ? 'var(--accent)' : 'var(--text-muted)',
                cursor: 'pointer',
                fontSize: 13,
                fontFamily: 'var(--sans)',
              }}
            >
              {isDone ? <CheckCircle2 size={14} /> : <Circle size={14} />}
              {isDone ? 'Completed' : 'Mark Complete'}
            </button>

            {session.quiz && (
              <button
                onClick={() => onQuizOpen(session)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--accent)',
                  background: 'var(--accent)18',
                  color: 'var(--accent)',
                  cursor: 'pointer',
                  fontSize: 13,
                  fontFamily: 'var(--sans)',
                  fontWeight: 500,
                }}
              >
                <Zap size={14} />
                Quick Check
              </button>
            )}
          </div>
        </div>
      )}

      {videoModal && (
        <VideoModal
          videoId={videoModal.id}
          title={videoModal.title}
          onClose={() => setVideoModal(null)}
        />
      )}
    </div>
  )
}

import React, { useState, useEffect, useRef } from 'react'
import { Music, Zap, Activity } from 'lucide-react'

export default function MusicHelper() {
  const [bpm, setBpm] = useState(128);
  const [lastTap, setLastTap] = useState(0);
  const [taps, setTaps] = useState([]);
  const canvasRef = useRef(null);

  const handleTap = () => {
    const now = Date.now();
    if (lastTap > 0) {
      const diff = now - lastTap;
      if (diff < 2000) { // Only count if within 2 seconds
        const newTaps = [...taps, diff].slice(-4);
        setTaps(newTaps);
        const average = newTaps.reduce((a, b) => a + b, 0) / newTaps.length;
        setBpm(Math.round(60000 / average));
      } else {
        setTaps([]);
      }
    }
    setLastTap(now);
  };

  // Simple animation for visual feedback
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let frame = 0;
    
    const render = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.strokeStyle = '#a78bfa';
      ctx.lineWidth = 2;
      for (let i = 0; i < canvas.width; i++) {
        const y = canvas.height / 2 + Math.sin(i / 10 + frame / 10) * 10;
        if (i === 0) ctx.moveTo(i, y);
        else ctx.lineTo(i, y);
      }
      ctx.stroke();
      requestAnimationFrame(render);
    };
    render();
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    }}>
       <div style={{
        fontFamily: 'var(--mono)',
        fontSize: '11px',
        color: 'var(--text-muted)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        display: 'flex',
        alignItems: 'center',
        gap: '6px'
      }}>
        <Music size={12} />
        Laboratory Tools
      </div>

      <div style={{
        background: 'var(--bg2)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        {/* Tap Tempo */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--mono)' }}>TAP TEMPO</div>
            <div style={{ fontSize: '24px', fontWeight: 700, fontFamily: 'var(--mono)', color: 'var(--text)' }}>
              {bpm} <span style={{ fontSize: '12px', color: 'var(--text-dim)' }}>BPM</span>
            </div>
          </div>
          <button 
            onClick={handleTap}
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'var(--bg3)',
              border: '2px solid var(--accent)',
              color: 'var(--accent)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px var(--accent)20',
              transition: 'transform 0.1s'
            }}
            onMouseDown={e => e.currentTarget.style.transform = 'scale(0.95)'}
            onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <Zap size={24} fill="currentColor" />
          </button>
        </div>

        {/* Visualizer Placeholder */}
        <div style={{
          height: '60px',
          background: 'var(--bg)',
          borderRadius: '8px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid var(--border)'
        }}>
          <canvas ref={canvasRef} width="260" height="60" />
        </div>

        <div style={{
          fontSize: '11px',
          color: 'var(--text-dim)',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px'
        }}>
          <div style={{ display: 'flex', gap: '8px' }}>
            <Activity size={12} />
            <span>Kick Punch: 60-100Hz</span>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <Activity size={12} />
            <span>Clarity: 2.5-5kHz</span>
          </div>
        </div>
      </div>
    </div>
  )
}

import React, { useState, useEffect, useRef } from 'react'
import { Music, Zap, Activity, Volume2, VolumeX, Play, Square } from 'lucide-react'

export default function MusicHelper() {
  const [bpm, setBpm] = useState(128);
  const [isPlaying, setIsPlaying] = useState(false);
  const [lastTap, setLastTap] = useState(0);
  const [taps, setTaps] = useState([]);
  
  const audioContextRef = useRef(null);
  const nextNoteTimeRef = useRef(0);
  const timerIDRef = useRef(null);
  const canvasRef = useRef(null);

  // Initialize AudioContext on first interaction
  const initAudio = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume();
    }
  };

  const playClick = (time) => {
    const osc = audioContextRef.current.createOscillator();
    const envelope = audioContextRef.current.createGain();

    // Woodblock-style sound: high frequency with steep decay
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1200, time);
    osc.frequency.exponentialRampToValueAtTime(800, time + 0.05);

    envelope.gain.setValueAtTime(0.3, time);
    envelope.gain.exponentialRampToValueAtTime(0.001, time + 0.08);

    osc.connect(envelope);
    envelope.connect(audioContextRef.current.destination);

    osc.start(time);
    osc.stop(time + 0.1);

    // Dispatch event for UI sync
    window.dispatchEvent(new CustomEvent('bw-metronome-beat'));
  };

  const scheduler = () => {
    while (nextNoteTimeRef.current < audioContextRef.current.currentTime + 0.1) {
      playClick(nextNoteTimeRef.current);
      const secondsPerBeat = 60.0 / bpm;
      nextNoteTimeRef.current += secondsPerBeat;
    }
    timerIDRef.current = setTimeout(scheduler, 25);
  };

  const toggleMetronome = () => {
    initAudio();
    if (isPlaying) {
      clearTimeout(timerIDRef.current);
      setIsPlaying(false);
    } else {
      nextNoteTimeRef.current = audioContextRef.current.currentTime;
      scheduler();
      setIsPlaying(true);
    }
  };

  const handleTap = () => {
    const now = Date.now();
    if (lastTap > 0) {
      const diff = now - lastTap;
      if (diff < 2000) {
        const newTaps = [...taps, diff].slice(-4);
        setTaps(newTaps);
        const average = newTaps.reduce((a, b) => a + b, 0) / newTaps.length;
        setBpm(Math.round(60000 / average));
      } else {
        setTaps([]);
      }
    }
    setLastTap(now);
    // Visual hit on tap
    window.dispatchEvent(new CustomEvent('bw-metronome-beat'));
  };

  // Simple wave animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let frame = 0;
    
    const render = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.strokeStyle = isPlaying ? 'var(--accent)' : 'rgba(255,255,255,0.1)';
      ctx.lineWidth = 2;
      for (let i = 0; i < canvas.width; i++) {
        const amp = isPlaying ? 15 : 5;
        const freq = isPlaying ? 10 : 20;
        const y = canvas.height / 2 + Math.sin(i / freq + frame / 10) * amp;
        if (i === 0) ctx.moveTo(i, y);
        else ctx.lineTo(i, y);
      }
      ctx.stroke();
      requestAnimationFrame(render);
    };
    const animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [isPlaying]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
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
        Production Laboratory
      </div>

      <div style={{
        background: 'var(--bg2)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--mono)' }}>TEMPO / BPM</div>
            <div style={{ fontSize: '28px', fontWeight: 800, fontFamily: 'var(--mono)', color: 'var(--text)' }}>
              {bpm} <span style={{ fontSize: '12px', color: 'var(--accent)', opacity: 0.8 }}>BPM</span>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '8px' }}>
            <button 
              onClick={handleTap}
              className="bw-tap-btn"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'var(--bg3)',
                border: '1px solid var(--border)',
                color: 'var(--text)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.1s'
              }}
            >
              <Zap size={18} fill="currentColor" />
            </button>
            
            <button 
              onClick={toggleMetronome}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: isPlaying ? 'var(--accent)' : 'var(--bg3)',
                border: '1px solid var(--accent)',
                color: isPlaying ? 'var(--bg)' : 'var(--accent)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s',
                boxShadow: isPlaying ? '0 0 15px var(--accent-glow)' : 'none'
              }}
            >
              {isPlaying ? <Square size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
            </button>
          </div>
        </div>

        <div style={{
          height: '50px',
          background: '#050505',
          borderRadius: '8px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid var(--border)'
        }}>
          <canvas ref={canvasRef} width="260" height="50" />
        </div>

        <div style={{
          fontSize: '11px',
          color: 'var(--text-dim)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '8px'
        }}>
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
            <Activity size={10} color="var(--accent)" />
            <span>Kick: 60Hz</span>
          </div>
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
            <Activity size={10} color="var(--accent)" />
            <span>Snare: 200Hz</span>
          </div>
        </div>
      </div>
      
      <style>{`
        .bw-tap-btn:active { transform: scale(0.9); background: var(--accent); color: var(--bg); }
      `}</style>
    </div>
  )
}

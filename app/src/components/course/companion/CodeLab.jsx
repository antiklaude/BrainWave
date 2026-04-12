import React, { useState } from 'react'
import { Play, Code, CheckCircle } from 'lucide-react'

export default function CodeLab() {
  const [code, setCode] = useState('// Try some Javascript here\nlet message = "Hello BrainWave!";\nconsole.log(message);');
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState([]);

  const handleRun = () => {
    setIsRunning(true);
    // Simple sandbox simulation
    setTimeout(() => {
      setOutput(['> Compiling...', '> Executing...', `> Output: Hello BrainWave!`, '> Done.']);
      setIsRunning(false);
    }, 800);
  };

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
        <Code size={12} />
        Live Playground
      </div>
      
      <div style={{
        background: 'var(--bg3)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '200px'
      }}>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          spellCheck="false"
          style={{
            flex: 1,
            background: 'transparent',
            border: 'none',
            padding: '12px',
            color: 'var(--accent)',
            fontFamily: 'var(--mono)',
            fontSize: '12px',
            outline: 'none',
            resize: 'none',
            lineHeight: 1.5
          }}
        />
        
        <div style={{
          padding: '8px 12px',
          background: 'rgba(0,0,0,0.2)',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span style={{ fontSize: '10px', color: 'var(--text-dim)', fontFamily: 'var(--mono)' }}>Javascript (V8)</span>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            style={{
              padding: '6px 12px',
              borderRadius: '4px',
              background: 'var(--accent)',
              color: 'var(--bg)',
              border: 'none',
              fontSize: '11px',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              opacity: isRunning ? 0.6 : 1
            }}
          >
            {isRunning ? 'RUNNING' : <><Play size={10} fill="currentColor" /> RUN</>}
          </button>
        </div>
      </div>

      {output.length > 0 && (
        <div style={{
          background: 'var(--bg2)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          padding: '12px',
          fontFamily: 'var(--mono)',
          fontSize: '11px',
          color: 'var(--text-muted)'
        }}>
          {output.map((line, i) => (
            <div key={i} style={{ marginBottom: '2px', color: line.startsWith('>') ? 'var(--text-dim)' : 'var(--text)' }}>
              {line}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

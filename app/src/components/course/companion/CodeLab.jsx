import React, { useState, useEffect, useRef } from 'react'
import { Play, Code, Terminal, Trash2, Cpu, Loader2 } from 'lucide-react'

export default function CodeLab({ language = 'javascript' }) {
  const [code, setCode] = useState(
    language === 'python' 
      ? '# Python Lab\nname = "BrainWave"\nprint(f"Hello from {name}!")\n[x**2 for x in range(5)]' 
      : '// Javascript Lab\nconst name = "BrainWave";\nconsole.log(`Hello from ${name}!`);\n[0,1,2,3,4].map(x => x**2);'
  );
  
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState([]);
  const [engineStatus, setEngineStatus] = useState('ready'); // ready, loading, error
  const pyodideRef = useRef(null);

  // Load Pyodide for Python courses
  useEffect(() => {
    if (language === 'python' && !window.loadPyodide) {
      setEngineStatus('loading');
      const script = document.createElement('script');
      script.src = "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js";
      script.onload = async () => {
        try {
          const pyodide = await window.loadPyodide();
          pyodideRef.current = pyodide;
          setEngineStatus('ready');
        } catch (err) {
          console.error("Pyodide failed to load", err);
          setEngineStatus('error');
        }
      };
      document.body.appendChild(script);
    }
  }, [language]);

  const clearConsole = () => setOutput([]);

  const runJS = () => {
    const logs = [];
    const originalLog = console.log;
    console.log = (...args) => {
      logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' '));
    };

    try {
      const result = eval(code);
      if (result !== undefined) logs.push(`> Return: ${result}`);
      setOutput(prev => [...prev, ...logs]);
    } catch (err) {
      setOutput(prev => [...prev, `! Error: ${err.message}`]);
    } finally {
      console.log = originalLog;
    }
  };

  const runPython = async () => {
    if (!pyodideRef.current) return;
    try {
      // Setup stdout capture
      pyodideRef.current.setStdout({
        batched: (str) => setOutput(prev => [...prev, str.trim()])
      });
      const result = await pyodideRef.current.runPythonAsync(code);
      if (result !== undefined) setOutput(prev => [...prev, `> Result: ${result}`]);
    } catch (err) {
      setOutput(prev => [...prev, `! Python Error: ${err.message}`]);
    }
  };

  const handleRun = async () => {
    setIsRunning(true);
    if (language === 'python') {
      await runPython();
    } else {
      runJS();
    }
    setIsRunning(false);
  };

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
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Terminal size={12} />
          {language === 'python' ? 'Python 3.11' : 'Javascript V8'}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {engineStatus === 'loading' && <Loader2 size={10} className="bw-spin" />}
          <span style={{ fontSize: '9px', opacity: 0.6 }}>ENGINE: {engineStatus.toUpperCase()}</span>
        </div>
      </div>
      
      <div style={{
        background: 'var(--bg3)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '220px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        position: 'relative'
      }}>
        {/* Loading Overlay */}
        {engineStatus === 'loading' && (
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(11, 12, 14, 0.8)',
            zIndex: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            backdropFilter: 'blur(2px)'
          }}>
            <Loader2 size={24} className="bw-spin" style={{ color: 'var(--accent)' }} />
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--mono)' }}>INITIALIZING PYTHON V8 ENGINE...</div>
          </div>
        )}

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
            lineHeight: 1.5,
          }}
        />
        
        <div style={{
          padding: '8px 12px',
          background: 'rgba(255,255,255,0.03)',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <button 
            onClick={clearConsole}
            style={{ color: 'var(--text-dim)', background: 'none', border: 'none', cursor: 'pointer' }}
            title="Clear Console"
          >
            <Trash2 size={14} />
          </button>
          
          <button 
            onClick={handleRun}
            disabled={isRunning || engineStatus === 'loading'}
            style={{
              padding: '6px 16px',
              borderRadius: '6px',
              background: 'var(--accent)',
              color: 'var(--bg)',
              border: 'none',
              fontSize: '11px',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.2s',
              opacity: (isRunning || engineStatus === 'loading') ? 0.6 : 1
            }}
          >
            {isRunning ? 'EXECUTING...' : <><Play size={12} fill="currentColor" /> RUN CODE</>}
          </button>
        </div>
      </div>

      {output.length > 0 && (
        <div style={{
          background: '#050505',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          padding: '12px',
          fontFamily: 'var(--mono)',
          fontSize: '11px',
          maxHeight: '150px',
          overflowY: 'auto'
        }}>
          {output.map((line, i) => (
            <div key={i} style={{ 
              marginBottom: '4px', 
              color: line.startsWith('!') ? '#f87171' : (line.startsWith('>') ? 'var(--accent)' : 'var(--text)') 
            }}>
              {line}
            </div>
          ))}
        </div>
      )}

      <style>{`
        .bw-spin { animation: spin 1s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  )
}

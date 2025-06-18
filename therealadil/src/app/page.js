'use client';
import React, { useState } from 'react';

export default function Home() {
  const [password, setPassword] = useState('');
  const [feedback, setFeedback] = useState('');
  const [attempts, setAttempts] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAttempts(prev => prev + 1);
    setFeedback(`ACCESS DENIED [${attempts + 1}]`);
    setPassword('');
  };

  return (
    <div style={{
      backgroundColor: '#0a0a0a',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
      color: '#cfcfcf',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'monospace',
      letterSpacing: '1px',
      position: 'relative',
    }}>
      
      {/* Subtle grid overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          linear-gradient(rgba(207,207,207,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(207,207,207,0.02) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        pointerEvents: 'none'
      }} />

      {/* Main terminal container */}
      <div style={{
        background: 'rgba(0,0,0,0.4)',
        border: '1px solid #333',
        borderRadius: '8px',
        padding: '30px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
        backdropFilter: 'blur(10px)',
        textAlign: 'center'
      }}>
        
        <h2 style={{ 
          marginBottom: '25px', 
          fontSize: '1rem', 
          opacity: 0.7,
          color: '#888',
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}>
          🔒 SECURE ACCESS NODE // XIDAL_23
        </h2>
        
        <form onSubmit={handleSubmit} style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center' 
        }}>
          <input
            type="password"
            placeholder="ENTER PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: '12px 16px',
              backgroundColor: '#111',
              border: '1px solid #444',
              color: '#ccc',
              borderRadius: '4px',
              outline: 'none',
              fontSize: '14px',
              width: '250px',
              textAlign: 'center',
              marginBottom: '15px',
              transition: 'border-color 0.3s ease',
            }}
            onFocus={(e) => e.target.style.borderColor = '#666'}
            onBlur={(e) => e.target.style.borderColor = '#444'}
          />
          
          <button 
            type="submit" 
            style={{
              background: 'linear-gradient(45deg, #222, #333)',
              border: '1px solid #555',
              padding: '8px 24px',
              color: '#aaa',
              cursor: 'pointer',
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              borderRadius: '4px',
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.target.style.background = 'linear-gradient(45deg, #333, #444)';
              e.target.style.color = '#ccc';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'linear-gradient(45deg, #222, #333)';
              e.target.style.color = '#aaa';
            }}
          >
            Execute
          </button>
          
          {feedback && (
            <div style={{ 
              color: '#ff6b6b', 
              marginTop: '18px', 
              fontSize: '0.85rem', 
              opacity: 0.9,
              padding: '8px 12px',
              background: 'rgba(255,0,0,0.1)',
              border: '1px solid rgba(255,0,0,0.3)',
              borderRadius: '4px',
              fontWeight: 'bold'
            }}>
              ⚠ {feedback}
            </div>
          )}
        </form>

        {/* System status */}
        <div style={{
          marginTop: '20px',
          fontSize: '11px',
          color: '#555',
          opacity: 0.6
        }}>
          NODE_ID: 7A3X-9K2L | STATUS: MONITORING
        </div>
      </div>

      {/* GitHub link */}
      <div style={{ position: 'absolute', bottom: '30px' }}>
        <a 
          href="https://github.com/therealadil" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            border: '1px solid #333',
            borderRadius: '20px',
            background: 'rgba(0,0,0,0.3)',
            color: '#666',
            fontSize: '12px',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            backdropFilter: 'blur(5px)',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}
          onMouseEnter={(e) => {
            e.target.style.borderColor = '#555';
            e.target.style.color = '#aaa';
            e.target.style.background = 'rgba(0,0,0,0.5)';
          }}
          onMouseLeave={(e) => {
            e.target.style.borderColor = '#333';
            e.target.style.color = '#666';
            e.target.style.background = 'rgba(0,0,0,0.3)';
          }}
        >
          <img 
            src="https://i.ibb.co/3sBQBTP/github-mark-fw.png" 
            alt="GitHub" 
            style={{ width: '18px', height: '18px', opacity: 0.6 }}
          />
          THEREALADIL
        </a>
      </div>
    </div>
  );
}
import React from 'react';

export default function Home() {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h1>Coming Soon :)</h1>
      
      {/* GitHub Icon Link using an image */}
      <a href="https://github.com/therealadil" target="_blank" rel="noopener noreferrer">
        <img 
          src="https://i.ibb.co/3sBQBTP/github-mark-fw.png" 
          alt="GitHub" 
          style={{ width: '30px', height: '30px', marginTop: '20px' }} 
        />
      </a>
    </div>
  );
}

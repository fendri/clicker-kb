import React, { useState } from 'react';
import { Icon } from './Icon';

interface TopBarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export function TopBar({ theme, onToggleTheme }: TopBarProps) {
  const [device, setDevice] = useState("desktop");
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <header className="topbar">
      <button 
        className="brand" 
        onClick={scrollToTop}
        style={{ 
          background: 'none', 
          border: 'none', 
          cursor: 'pointer',
          padding: 0
        }}
        aria-label="Go to top"
      >
        <div className="brand-mark">
          <img 
            src="https://eghpbodxkrjgciza.public.blob.vercel-storage.com/Clicker%20FC.webp" 
            alt="Clicker logo"
          />
        </div>
        <div className="brand-name">Canvas Studio</div>
        <div className="brand-sep" />
        <div className="brand-tag">Feature Inventory</div>
      </button>
      <div className="topbar-spacer" />
      <div className="seg" role="group" aria-label="Device preview">
        {[["desktop","desktop"],["tablet","tablet"],["mobile","mobile"]].map(([k,ic]) => (
          <button key={k} className={device===k?"on":""} onClick={() => setDevice(k)} title={k}>
            <Icon name={ic} />
          </button>
        ))}
      </div>
      <button className="btn-save"><span className="dirty-dot" />Save</button>
      <button className="ghost-ic" onClick={onToggleTheme} title="Toggle theme" aria-label="Toggle theme">
        <Icon name={theme === "dark" ? "sun" : "moon"} />
      </button>
    </header>
  );
}

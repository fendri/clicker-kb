import React, { useState } from 'react';
import { Icon } from './Icon';

interface TopBarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export function TopBar({ theme, onToggleTheme }: TopBarProps) {
  const [device, setDevice] = useState("desktop");
  
  return (
    <header className="topbar">
      <div className="brand">
        <div className="brand-mark"><Icon name="canvas" /></div>
        <div className="brand-name">Canvas Studio</div>
        <div className="brand-sep" />
        <div className="brand-tag">Feature Inventory</div>
      </div>
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

import React from 'react';
import { SHORTCUTS } from '../data/shortcuts';

export function Shortcuts() {
  return (
    <div className="keyrow">
      {SHORTCUTS.map((s, i) => (
        <span className="kc" key={i}>
          {s.keys.map((k, j) => <kbd className="key" key={j}>{k}</kbd>)}
          {s.label}
        </span>
      ))}
    </div>
  );
}

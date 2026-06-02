import React, { useState } from 'react';
import { Icon } from './Icon';

export function ToolbarMock() {
  const [align, setAlign] = useState("center");
  const [size, setSize] = useState("L");
  const [bold, setBold] = useState(true);
  
  return (
    <div className="toolbar-mock">
      <div className="tg" style={{ color: "var(--bg)" }}>
        <span style={{ display:"grid", placeItems:"center", padding:"0 6px", fontFamily:"var(--font-mono)", fontSize:11, opacity:.7 }}>Title</span>
      </div>
      <div className="tg">
        {["S","M","L","XL"].map(s => (
          <button key={s} className={size===s?"on":""} onClick={() => setSize(s)}>{s}</button>
        ))}
      </div>
      <div className="tg">
        <button className={bold?"on":""} onClick={() => setBold(b=>!b)}><Icon name="bold" /></button>
      </div>
      <div className="tg">
        {["left","center","right"].map(a => (
          <button key={a} className={align===a?"on":""} onClick={() => setAlign(a)} aria-label={a}>
            <Icon name="align" />
          </button>
        ))}
      </div>
      <div className="tg">
        <button aria-label="Clear field"><Icon name="trash" /></button>
      </div>
    </div>
  );
}

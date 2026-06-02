import React from 'react';

export function DeviceFrames() {
  const frames = [
    { name: "Desktop · min 1024px", w: 240, lines: 4 },
    { name: "Tablet · 768px", w: 150, lines: 4 },
    { name: "Mobile · 375–390px", w: 86, lines: 5 },
  ];
  
  return (
    <div className="devices">
      {frames.map((f, i) => (
        <div className="dev" key={i} style={{ width: f.w }}>
          <div className="dvtop"><i /><i /><i /></div>
          <div className="dvbody">
            <div className="ln lg" />
            {Array.from({ length: f.lines }).map((_, j) => (
              <div className="ln" key={j} style={{ width: (60 + (j*9)%40) + "%" }} />
            ))}
          </div>
          <div className="dvlabel">{f.name}</div>
        </div>
      ))}
    </div>
  );
}

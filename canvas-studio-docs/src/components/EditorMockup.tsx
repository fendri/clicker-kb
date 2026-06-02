import React, { useState } from 'react';
import { Icon } from './Icon';

export function EditorMockup() {
  const [dev, setDev] = useState("desktop");
  const w = dev === "desktop" ? "100%" : dev === "tablet" ? "62%" : "30%";
  const pad = dev === "desktop" ? 16 : dev === "tablet" ? 28 : 44;
  
  return (
    <div className="mockup">
      <div className="mk-top">
        <div className="mk-dots"><i /><i /><i /></div>
        <div className="mk-url">studio.clicker.app / acme / home</div>
        <div className="mk-seg">
          {[["desktop","desktop"],["tablet","tablet"],["mobile","mobile"]].map(([k,ic]) => (
            <button key={k} className={dev===k?"on":""} onClick={() => setDev(k)} aria-label={k}>
              <Icon name={ic} />
            </button>
          ))}
        </div>
      </div>
      <div className="mk-body">
        <div className="mk-rail">
          <i className="act" /><i /><i />
          <div style={{height:6}} />
          <i /><i /><i />
        </div>
        <div className="mk-panel">
          <div className="ph w1" />
          <div className="row sel"><i /><div className="ph w2" /></div>
          <div className="row"><i /><div className="ph w3" /></div>
          <div className="row"><i /><div className="ph w2" /></div>
          <div className="row"><i /><div className="ph w3" /></div>
        </div>
        <div className="mk-canvas" style={{ padding: pad }}>
          <div className="mk-frame" style={{ maxWidth: w }}>
            <div className="nav"><div className="logo" /><div className="nlinks"><i /><i /><i /></div></div>
            <div className="mk-hero">
              <span className="mk-handle tl" /><span className="mk-handle tr" />
              <span className="mk-handle bl" /><span className="mk-handle br" />
              <div className="t1" /><div className="t2" /><div className="t3" /><div className="cta" />
            </div>
            <div className="mk-block" /><div className="mk-block b2" />
          </div>
        </div>
        <div className="mk-side">
          <div className="sh">Hero · Properties</div>
          <div className="seg2"><i className="on" /><i /><i /></div>
          <div className="field" /><div className="field" />
          <div className="sh" style={{marginTop:4}}>Subtitle</div>
          <div className="field tall" />
          <div className="seg2"><i /><i className="on" /><i /></div>
        </div>
      </div>
    </div>
  );
}

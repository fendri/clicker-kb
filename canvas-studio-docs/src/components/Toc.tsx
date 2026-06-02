import React, { useEffect, useRef } from 'react';
import { Icon } from './Icon';
import { SECTIONS } from '../data/sections';

interface TocProps {
  active: string;
  query: string;
  setQuery: (q: string) => void;
  onJump: (id: string) => void;
}

export function Toc({ active, query, setQuery, onJump }: TocProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "/" && document.activeElement !== inputRef.current &&
          !/input|textarea/i.test((document.activeElement as HTMLElement)?.tagName || '')) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, []);
  
  const q = query.trim().toLowerCase();
  
  return (
    <aside className="toc">
      <div className="toc-search">
        <div className="toc-search-box">
          <Icon name="search" />
          <input ref={inputRef} value={query} placeholder="Search features…"
            onChange={(e) => setQuery(e.target.value)} aria-label="Search features" />
          <kbd>/</kbd>
        </div>
      </div>
      <div className="toc-label">15 Sections</div>
      <div className="toc-list">
        {SECTIONS.map((s) => {
          const hit = !q || s.title.toLowerCase().includes(q) || s.tag.toLowerCase().includes(q) ||
            s.groups.some(g => (g.items||[]).some(it => typeof it === "object" &&
              (((it as any).t||"").toLowerCase().includes(q) || ((it as any).d||"").toLowerCase().includes(q))));
          return (
            <a key={s.id} href={"#" + s.id}
              className={"toc-item" + (active === s.id ? " active" : "") + (hit ? "" : " dim")}
              onClick={(e) => { e.preventDefault(); onJump(s.id); }}>
              <span className="tnum">{s.num}</span>
              <span className="tic"><Icon name={s.icon} /></span>
              <span className="tt">{s.title}</span>
            </a>
          );
        })}
      </div>
    </aside>
  );
}

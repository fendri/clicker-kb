import React, { useState, useEffect, useRef } from 'react';
import { TopBar } from './TopBar';
import { Rail } from './Rail';
import { Toc } from './Toc';
import { Hero } from './Hero';
import { Section } from './Section';
import { SECTIONS } from '../data/sections';

export function App() {
  const [dark, setDark] = useState(false);
  const [active, setActive] = useState(SECTIONS[0].id);
  const [query, setQuery] = useState("");
  const refs = useRef<Record<string, HTMLElement>>({});

  const theme = dark ? "dark" : "light";

  // Apply theme to <html>
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const registerRef = (id: string, el: HTMLElement | null) => {
    if (el) refs.current[id] = el;
  };

  const jump = (id: string) => {
    const el = refs.current[id] || document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 78;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActive(id);
    }
  };

  // Scroll-spy
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          setActive(e.target.id);
        }
      });
    }, { rootMargin: "-30% 0px -55% 0px", threshold: 0 });
    
    Object.values(refs.current).forEach(el => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  // Reveal on enter for sections
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); });
    }, { threshold: 0.08 });
    
    document.querySelectorAll(".section.reveal").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Map active section -> rail group highlight
  const activeSec = SECTIONS.find(s => s.id === active);
  const railActive = activeSec ? (
    activeSec.id === "pages" ? "pages" :
    activeSec.id === "blocks" ? "blocks" :
    activeSec.id === "layers" ? "layers" :
    activeSec.id === "media" ? "media" :
    (activeSec.id === "panels" || activeSec.id === "chrome") ? "panels" : null
  ) : null;

  return (
    <div className="app">
      <TopBar theme={theme} onToggleTheme={() => setDark(!dark)} />
      <Rail active={railActive} onJump={(target) => jump(target)} />
      <Toc active={active} query={query} setQuery={setQuery} onJump={jump} />

      <main className="canvas">
        <div className="canvas-inner">
          <Hero />
          {SECTIONS.map(s => <Section key={s.id} s={s} registerRef={registerRef} />)}
          <footer className="foot">
            <div className="fl">Canvas Studio — Clicker Platform v2. Internal reference, compiled from the live editor.</div>
            <div className="fr">15 / 15 SECTIONS</div>
          </footer>
        </div>
      </main>
    </div>
  );
}

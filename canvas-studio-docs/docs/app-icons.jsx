/* Canvas Studio reference — app root: theme, scroll-spy, tweaks, reveals. */
const { useState: useStateA, useEffect: useEffectA, useRef: useRefA } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#2f6bff",
  "dark": false,
  "fontPair": "grotesk",
  "density": "regular",
  "showMockup": true
}/*EDITMODE-END*/;

const FONT_PAIRS = {
  grotesk: { display: '"Space Grotesk", system-ui, sans-serif', body: '"IBM Plex Sans", system-ui, sans-serif' },
  mono:    { display: '"IBM Plex Mono", ui-monospace, monospace', body: '"IBM Plex Sans", system-ui, sans-serif' },
  serif:   { display: '"Spectral", Georgia, serif', body: '"IBM Plex Sans", system-ui, sans-serif' },
};
const DENSITY = { compact: 0.84, regular: 1, comfy: 1.18 };

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [active, setActive] = useStateA(window.SECTIONS[0].id);
  const [query, setQuery] = useStateA("");
  const refs = useRefA({});

  const theme = t.dark ? "dark" : "light";

  // apply theme + tweak vars to <html>
  useEffectA(() => {
    const r = document.documentElement;
    r.setAttribute("data-theme", theme);
    r.style.setProperty("--accent", t.accent);
    r.style.setProperty("--pad", String(DENSITY[t.density] || 1));
    const fp = FONT_PAIRS[t.fontPair] || FONT_PAIRS.grotesk;
    r.style.setProperty("--font-display", fp.display);
    r.style.setProperty("--font-body", fp.body);
  }, [theme, t.accent, t.density, t.fontPair]);

  const registerRef = (id, el) => { if (el) refs.current[id] = el; };

  const jump = (id) => {
    const el = refs.current[id] || document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 78;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActive(id);
    }
  };

  // scroll-spy
  useEffectA(() => {
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

  // reveal on enter for sections + hero already in
  useEffectA(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); });
    }, { threshold: 0.08 });
    document.querySelectorAll(".section.reveal").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  // map active section -> rail group highlight
  const activeSec = window.SECTIONS.find(s => s.id === active);
  const railActive = activeSec ? (
    activeSec.id === "pages" ? "pages" :
    activeSec.id === "blocks" ? "blocks" :
    activeSec.id === "layers" ? "layers" :
    activeSec.id === "media" ? "media" :
    (activeSec.id === "panels" || activeSec.id === "chrome") ? "panels" : null
  ) : null;

  return (
    <div className="app">
      <window.TopBar theme={theme} onToggleTheme={() => setTweak("dark", !t.dark)} />
      <window.Rail active={railActive} onJump={(target) => jump(target)} />
      <window.Toc active={active} query={query} setQuery={setQuery} onJump={jump} />

      <main className="canvas">
        <div className="canvas-inner">
          {t.showMockup ? <window.Hero /> : <HeroLite />}
          {window.SECTIONS.map(s => <window.Section key={s.id} s={s} registerRef={registerRef} />)}
          <footer className="foot">
            <div className="fl">Canvas Studio — Clicker Platform v2. Internal reference, compiled from the live editor.</div>
            <div className="fr">15 / 15 SECTIONS</div>
          </footer>
        </div>
      </main>

      <TweaksPanel>
        <TweakSection label="Theme" />
        <TweakColor label="Accent" value={t.accent}
          options={["#2f6bff", "#6d4dff", "#0e9f6e", "#e0561d", "#d63a6a"]}
          onChange={(v) => setTweak("accent", v)} />
        <TweakToggle label="Dark mode" value={t.dark} onChange={(v) => setTweak("dark", v)} />
        <TweakSection label="Typography" />
        <TweakRadio label="Display font" value={t.fontPair}
          options={["grotesk", "mono", "serif"]}
          onChange={(v) => setTweak("fontPair", v)} />
        <TweakSection label="Layout" />
        <TweakRadio label="Density" value={t.density}
          options={["compact", "regular", "comfy"]}
          onChange={(v) => setTweak("density", v)} />
        <TweakToggle label="Editor mockup" value={t.showMockup} onChange={(v) => setTweak("showMockup", v)} />
      </TweaksPanel>
    </div>
  );
}

function HeroLite() {
  return (
    <section className="hero reveal in">
      <span className="kicker"><span className="pulse" />Clicker Platform · WYSIWYG Page Builder</span>
      <h1>The complete <em>Canvas Studio</em> feature inventory.</h1>
      <p className="hero-sub">
        Every panel, block, form and behavior in the live editor. Browse all fifteen sections
        from the rail, or search to jump.
      </p>
      <div className="hero-meta">
        <span className="chip"><window.Icon name="layers" /><b>15</b> sections</span>
        <span className="chip"><window.Icon name="add" /><b>22</b> block types</span>
        <span className="chip"><window.Icon name="hash" /><b>10</b> shortcuts</span>
      </div>
    </section>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

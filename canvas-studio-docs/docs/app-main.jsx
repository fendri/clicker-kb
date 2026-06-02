/* Canvas Studio reference — components. Exports to window for cross-script use. */
const { useState, useEffect, useRef } = React;

function Icon({ name, className }) {
  const inner = (window.ICONS && window.ICONS[name]) || "";
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"
      dangerouslySetInnerHTML={{ __html: inner }} />
  );
}

/* ---------- Top bar ---------- */
function TopBar({ theme, onToggleTheme }) {
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

/* ---------- Left icon rail ---------- */
function Rail({ active, onJump }) {
  return (
    <nav className="rail" aria-label="Feature panels">
      {window.RAIL.map((it, i) => it.divider
        ? <div className="rail-divider" key={"d"+i} />
        : (
          <button key={it.key} className={"rail-btn" + (active === it.target ? " on" : "")}
            onClick={() => onJump(it.target)}>
            <Icon name={it.key} />
            <span className="rail-tip">{it.label}<kbd>{it.sk}</kbd></span>
          </button>
        )
      )}
    </nav>
  );
}

/* ---------- TOC ---------- */
function Toc({ active, query, setQuery, onJump }) {
  const inputRef = useRef(null);
  useEffect(() => {
    const h = (e) => {
      if (e.key === "/" && document.activeElement !== inputRef.current &&
          !/input|textarea/i.test(document.activeElement.tagName)) {
        e.preventDefault(); inputRef.current && inputRef.current.focus();
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
        {window.SECTIONS.map((s) => {
          const hit = !q || s.title.toLowerCase().includes(q) || s.tag.toLowerCase().includes(q) ||
            s.groups.some(g => (g.items||[]).some(it => typeof it === "object" &&
              ((it.t||"").toLowerCase().includes(q) || (it.d||"").toLowerCase().includes(q))));
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

/* ---------- Hero + editor mockup ---------- */
function EditorMockup() {
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

function Hero() {
  return (
    <section className="hero reveal in">
      <span className="kicker"><span className="pulse" />Clicker Platform · WYSIWYG Page Builder</span>
      <h1>The complete <em>Canvas Studio</em> feature inventory.</h1>
      <p className="hero-sub">
        Every panel, block, form and behavior in the live editor — compiled by reading the source,
        not the summary. A three-panel WYSIWYG builder where the canvas is the page. Browse all
        fifteen sections from the rail, or search to jump.
      </p>
      <div className="hero-meta">
        <span className="chip"><Icon name="layers" /><b>15</b> sections</span>
        <span className="chip"><Icon name="add" /><b>22</b> block types</span>
        <span className="chip"><Icon name="hash" /><b>10</b> shortcuts</span>
        <span className="chip"><Icon name="clock" />Updated 2026-05-30</span>
      </div>
      <div className="mockup-wrap"><EditorMockup /></div>
    </section>
  );
}

window.Icon = Icon;
window.TopBar = TopBar;
window.Rail = Rail;
window.Toc = Toc;
window.Hero = Hero;

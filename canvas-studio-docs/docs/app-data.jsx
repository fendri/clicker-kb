/* Canvas Studio reference — section renderers + special showcases. */
const { useState: useStateS, useEffect: useEffectS, useRef: useRefS } = React;

function html(s) { return { __html: s }; }

/* default card grid */
function Cards({ items, cols }) {
  const cls = cols === 1 ? "cards one" : cols === 3 ? "cards three" : "cards";
  return (
    <div className={cls}>
      {items.map((it, i) => {
        const o = typeof it === "string" ? { d: it } : it;
        return (
          <div className="card" key={i}>
            <div className="ct">
              {o.icon ? <span className="tic" style={{color:"var(--accent)",display:"inline-flex"}}><window.Icon name={o.icon} /></span> : <span className="dot" />}
              {o.t}
              {o.badge ? <span className={"badge " + (o.badge==="warn"?"warn":o.badge==="soon"?"soon":"")}>{o.badge==="warn"?"alert":o.badge==="soon"?"soon":o.badge}</span> : null}
            </div>
            {o.d ? <div className="cd" dangerouslySetInnerHTML={html(o.d)} /> : null}
          </div>
        );
      })}
    </div>
  );
}

/* flow list with checkmarks */
function Flow({ items }) {
  return (
    <div className="flow">
      {items.map((it, i) => {
        const o = typeof it === "string" ? { d: it } : it;
        return (
          <div className="li" key={i}>
            <span className="mk"><window.Icon name="check" /></span>
            <span dangerouslySetInnerHTML={html(o.t ? "<b>" + o.t + "</b> — " + o.d : o.d)} />
          </div>
        );
      })}
    </div>
  );
}

/* §1.2 keyboard shortcuts */
function Shortcuts() {
  return (
    <div className="keyrow">
      {window.SHORTCUTS.map((s, i) => (
        <span className="kc" key={i}>
          {s.keys.map((k, j) => <kbd className="key" key={j}>{k}</kbd>)}
          {s.label}
        </span>
      ))}
    </div>
  );
}

/* §5 block palette */
function BlocksPalette() {
  return (
    <div>
      <div className="palette">
        {window.BLOCKS.core.map((b, i) => (
          <div className="pblock" key={i}>
            <div className="pic"><window.Icon name={b.i} /></div>
            <div className="pn">{b.n}</div>
          </div>
        ))}
      </div>
      <div className="group-h" style={{ margin: "22px 0 14px" }}>System blocks · auto-hydrate from settings</div>
      <div className="palette">
        {window.BLOCKS.system.map((b, i) => (
          <div className="pblock sys" key={i}>
            <div className="pic"><window.Icon name={b.i} /></div>
            <div className="pn">{b.n}</div>
            <div className="ptag">System</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* §8 inline toolbar mock */
function ToolbarMock() {
  const [align, setAlign] = useStateS("center");
  const [size, setSize] = useStateS("L");
  const [bold, setBold] = useStateS(true);
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
        <button className={bold?"on":""} onClick={() => setBold(b=>!b)}><window.Icon name="bold" /></button>
      </div>
      <div className="tg">
        {["left","center","right"].map(a => (
          <button key={a} className={align===a?"on":""} onClick={() => setAlign(a)} aria-label={a}>
            <window.Icon name="align" />
          </button>
        ))}
      </div>
      <div className="tg">
        <button aria-label="Clear field"><window.Icon name="trash" /></button>
      </div>
    </div>
  );
}

/* §2 device frames */
function DeviceFrames() {
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

function GroupBody({ g }) {
  if (g.special === "shortcuts") return <Shortcuts />;
  if (g.special === "blocks") return <BlocksPalette />;
  if (g.special === "toolbar") return <ToolbarMock />;
  if (g.special === "devices") return <DeviceFrames />;
  if (g.kind === "flow") return <Flow items={g.items} />;
  const cols = g.kind === "cards-1" ? 1 : g.kind === "cards-3" ? 3 : 2;
  return <Cards items={g.items} cols={cols} />;
}

function Section({ s, registerRef }) {
  return (
    <section className="section reveal" id={s.id} ref={(el) => registerRef(s.id, el)}
      data-screen-label={s.num}>
      <div className="sec-head">
        <div className="sec-num">{s.num}</div>
        <div className="htxt">
          <h2><span className="sec-icn"><window.Icon name={s.icon} /></span>{s.title}</h2>
          <p className="tag">{s.tag}</p>
        </div>
      </div>
      {s.groups.map((g, i) => (
        <div className="group" key={i}>
          {g.h ? <div className="group-h">{g.h}</div> : null}
          <GroupBody g={g} />
        </div>
      ))}
    </section>
  );
}

window.Section = Section;

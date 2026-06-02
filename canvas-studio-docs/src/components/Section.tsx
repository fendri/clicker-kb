import React from 'react';
import { Icon } from './Icon';
import { Cards } from './Cards';
import { Flow } from './Flow';
import { Shortcuts } from './Shortcuts';
import { BlocksPalette } from './BlocksPalette';
import { ToolbarMock } from './ToolbarMock';
import { DeviceFrames } from './DeviceFrames';
import type { Section as SectionType, Group } from '../data/types';

interface SectionProps {
  s: SectionType;
  registerRef: (id: string, el: HTMLElement | null) => void;
}

function GroupBody({ g }: { g: Group }) {
  if (g.special === "shortcuts") return <Shortcuts />;
  if (g.special === "blocks") return <BlocksPalette />;
  if (g.special === "toolbar") return <ToolbarMock />;
  if (g.special === "devices") return <DeviceFrames />;
  if (g.kind === "flow") return <Flow items={g.items || []} />;
  const cols = g.kind === "cards-1" ? 1 : g.kind === "cards-3" ? 3 : 2;
  return <Cards items={g.items || []} cols={cols as 1 | 2 | 3} />;
}

export function Section({ s, registerRef }: SectionProps) {
  return (
    <section className="section reveal" id={s.id} ref={(el) => registerRef(s.id, el)}
      data-screen-label={s.num}>
      <div className="sec-head">
        <div className="sec-num">{s.num}</div>
        <div className="htxt">
          <h2><span className="sec-icn"><Icon name={s.icon} /></span>{s.title}</h2>
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

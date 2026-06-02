import React from 'react';
import { Icon } from './Icon';
import { RAIL } from '../data/rail';

interface RailProps {
  active: string | null;
  onJump: (target: string) => void;
}

export function Rail({ active, onJump }: RailProps) {
  return (
    <nav className="rail" aria-label="Feature panels">
      {RAIL.map((it, i) => it.divider
        ? <div className="rail-divider" key={"d"+i} />
        : (
          <button key={it.key} className={"rail-btn" + (active === it.target ? " on" : "")}
            onClick={() => it.target && onJump(it.target)}>
            <Icon name={it.key!} />
            <span className="rail-tip">{it.label}<kbd>{it.sk}</kbd></span>
          </button>
        )
      )}
    </nav>
  );
}

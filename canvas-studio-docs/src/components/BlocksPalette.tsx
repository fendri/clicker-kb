import React from 'react';
import { Icon } from './Icon';
import { BLOCKS } from '../data/blocks';

export function BlocksPalette() {
  return (
    <div>
      <div className="palette">
        {BLOCKS.core.map((b, i) => (
          <div className="pblock" key={i}>
            <div className="pic"><Icon name={b.i} /></div>
            <div className="pn">{b.n}</div>
          </div>
        ))}
      </div>
      <div className="group-h" style={{ margin: "22px 0 14px" }}>System blocks · auto-hydrate from settings</div>
      <div className="palette">
        {BLOCKS.system.map((b, i) => (
          <div className="pblock sys" key={i}>
            <div className="pic"><Icon name={b.i} /></div>
            <div className="pn">{b.n}</div>
            <div className="ptag">System</div>
          </div>
        ))}
      </div>
    </div>
  );
}

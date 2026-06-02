import React from 'react';
import { Icon } from './Icon';
import type { CardItem } from '../data/types';

interface CardsProps {
  items: (CardItem | string)[];
  cols: 1 | 2 | 3;
}

function html(s: string) {
  return { __html: s };
}

export function Cards({ items, cols }: CardsProps) {
  const cls = cols === 1 ? "cards one" : cols === 3 ? "cards three" : "cards";
  
  return (
    <div className={cls}>
      {items.map((it, i) => {
        const o = typeof it === "string" ? { d: it } : it;
        return (
          <div className="card" key={i}>
            <div className="ct">
              {o.icon ? <span className="tic" style={{color:"var(--accent)",display:"inline-flex"}}><Icon name={o.icon} /></span> : <span className="dot" />}
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

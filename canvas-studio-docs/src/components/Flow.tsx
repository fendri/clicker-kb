import React from 'react';
import { Icon } from './Icon';
import type { FlowItem } from '../data/types';

interface FlowProps {
  items: (FlowItem | string)[];
}

function html(s: string) {
  return { __html: s };
}

export function Flow({ items }: FlowProps) {
  return (
    <div className="flow">
      {items.map((it, i) => {
        const o = typeof it === "string" ? { d: it } : it;
        return (
          <div className="li" key={i}>
            <span className="mk"><Icon name="check" /></span>
            <span dangerouslySetInnerHTML={html(o.t ? "<b>" + o.t + "</b> — " + o.d : o.d)} />
          </div>
        );
      })}
    </div>
  );
}

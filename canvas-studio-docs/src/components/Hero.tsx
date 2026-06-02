import React from 'react';
import { Icon } from './Icon';
import { EditorMockup } from './EditorMockup';

export function Hero() {
  return (
    <section className="hero reveal in">
      <span className="kicker"><span className="pulse" />Clicker Platform · WYSIWYG Page Builder</span>
      <h1>The complete <em>Canvas Studio</em> feature inventory.</h1>
      <p className="hero-sub">
        Every panel, block, form and behavior in the live editor, compiled by reading the source,
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

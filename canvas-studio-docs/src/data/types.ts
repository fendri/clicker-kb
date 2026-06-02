/* TypeScript types for Canvas Studio data structures */

export interface CardItem {
  t?: string;
  d: string;
  badge?: string;
  icon?: string;
}

export interface FlowItem {
  t?: string;
  d: string;
}

export interface Group {
  h?: string;
  kind: 'cards' | 'cards-1' | 'cards-3' | 'flow' | 'keys' | 'palette' | 'toolbar' | 'devices';
  items?: (CardItem | FlowItem | string)[];
  special?: 'shortcuts' | 'blocks' | 'toolbar' | 'devices';
}

export interface Section {
  id: string;
  num: string;
  icon: string;
  title: string;
  tag: string;
  railKey?: string | null;
  shortcut?: string;
  groups: Group[];
}

export interface RailItem {
  key?: string;
  label?: string;
  sk?: string;
  target?: string;
  divider?: boolean;
}

export interface Block {
  n: string;
  i: string;
}

export interface BlocksData {
  core: Block[];
  system: Block[];
}

export interface Shortcut {
  keys: string[];
  label: string;
}

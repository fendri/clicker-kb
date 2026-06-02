/* Rail navigation items */
import type { RailItem } from './types';

export const RAIL: RailItem[] = [
  { key: "pages",  label: "Pages",       sk: "P", target: "pages" },
  { key: "add",    label: "Add Block",   sk: "A", target: "blocks" },
  { key: "layers", label: "Layers",      sk: "Z", target: "layers" },
  { divider: true },
  { key: "link",     label: "Links",       sk: "L", target: "panels" },
  { key: "form",     label: "Forms",       sk: "F", target: "panels" },
  { key: "product",  label: "Products",    sk: "B", target: "panels" },
  { key: "info",     label: "Site Info",   sk: "I", target: "panels" },
  { key: "branding", label: "Branding",    sk: "G", target: "panels" },
  { key: "styles",   label: "Site Styles", sk: "T", target: "panels" },
  { key: "media",    label: "Media",       sk: "M", target: "media" },
];

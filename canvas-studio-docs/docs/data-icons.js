/* Canvas Studio — Feature Inventory data. window.SECTIONS drives the TOC + content.
   Each section: {id,num,icon,title,tag,railKey?,groups:[{h,kind,items|special}]}.
   item: {t,d,badge?} or string. kind: cards|cards-1|cards-3|flow|keys|palette|toolbar|devices */
window.SECTIONS = [
  {
    id: "shell", num: "01", icon: "layout", title: "Editor Shell & Layout",
    tag: "A three-panel WYSIWYG layout on desktop that collapses to a bottom-sheet layout on mobile.",
    groups: [
      { h: "Three regions", kind: "cards", items: [
        { t: "Left rail", d: "Icon strip (<code>w-12</code>) plus a switchable panel (<code>w-56</code>) for page editing." },
        { t: "Center canvas", d: "A live, full-template preview of the page — true WYSIWYG." },
        { t: "Right sidebar", d: "Properties at <code>w-80</code> / 320px, collapsible to a thin strip." },
      ]},
      { h: "Left icon rail", kind: "cards", items: [
        { t: "Page-editing group", d: "Toggles the panel: Pages <code>P</code>, Add Block <code>A</code>, Layers <code>Z</code>." },
        { t: "Feature-management group", d: "Opens slide-overs: Links, Forms, Products, Site Info, Branding, Site Styles, Media." },
        { t: "Hover tooltips", d: "Every icon reveals a label plus its keyboard shortcut on hover." },
        { t: "Toggle behavior", d: "Active panel is highlighted blue; clicking an active icon toggles it closed." },
      ]},
      { h: "Keyboard shortcuts (desktop)", kind: "keys", special: "shortcuts" },
      { h: "Right sidebar behavior", kind: "cards", items: [
        { t: "Header buttons", d: "Title & Slug, SEO & Analytics, Page Background, Close." },
        { t: "Selection-aware", d: "Shows the block / chrome form when selected; page-level tabs otherwise." },
        { t: "Auto-collapse", d: "Shrinks to a 12px strip when nothing is selected and not manually opened." },
        { t: "Empty state", d: "“Select a block on the canvas to edit its properties.”" },
      ]},
    ],
  },
  {
    id: "canvas", num: "02", icon: "canvas", title: "The Canvas", railKey: null,
    tag: "The center WYSIWYG preview — a real, full template you click straight into.",
    groups: [
      { h: "Renders a real template", kind: "cards", items: [
        { t: "Template header / NavBar", d: "<code>chrome:header</code> — clickable for page switching." },
        { t: "Profile header", d: "Avatar, name and tagline when the template provides one." },
        { t: "All blocks", d: "Rendered through <code>BlockRenderer</code> in <code>previewMode</code>." },
        { t: "Footer & bottom nav", d: "<code>chrome:footer</code> and <code>chrome:bottomnav</code> — both clickable." },
      ]},
      { h: "Device-view frames", kind: "devices", special: "devices" },
      { h: "Interaction model", kind: "flow", items: [
        { t: "Selection ring", d: "Blue ring on the selected block; toggleable hover guides." },
        { t: "Click to select", d: "Select any block; click empty canvas to deselect." },
        { t: "Auto-scroll", d: "Canvas scrolls to the selection; sidebar scrolls to the focused field with a brief blue flash." },
        { t: "Guarded previews", d: "<code>pointer-events: none</code> on most children so links and buttons don’t fire." },
        { t: "Live page-switching", d: "Internal nav switches the canvas; external links open a new tab." },
        { t: "States", d: "“Loading page…” overlay during switches; empty-page prompt to start adding blocks." },
      ]},
    ],
  },
  {
    id: "topbar", num: "03", icon: "topbar", title: "Top Bar",
    tag: "StudioTopBar — global controls that sit above the canvas.",
    groups: [
      { h: "Controls", kind: "cards", items: [
        { t: "Device toggle", d: "Switch Desktop / Tablet / Mobile preview frames." },
        { t: "Save", d: "Commits the page; turns orange when there are unsaved changes." },
        { t: "Homepage controls", d: "Set or unset the current page as the site homepage." },
        { t: "Dirty indicator", d: "An orange dot signals unsaved edits.", badge: "warn" },
      ]},
      { h: "On mobile", kind: "cards-1", items: [
        { t: "Replaced by the bottom tab bar", d: "On small screens the top bar gives way to the mobile tab bar (see §15)." },
      ]},
    ],
  },
  {
    id: "pages", num: "04", icon: "pages", title: "Pages Panel", railKey: "pages", shortcut: "P",
    tag: "Manage every page in the site, with a full soft-delete trash workflow.",
    groups: [
      { h: "Page list", kind: "cards", items: [
        { t: "Homepage first", d: "Title and <code>/slug</code>, with a Home icon marking the homepage." },
        { t: "New page", d: "The <code>+</code> action opens create mode." },
        { t: "Switch page", d: "Click to switch, guarded by an unsaved-changes check." },
        { t: "Per-page trash", d: "Hover a row’s trash button for inline Confirm / Cancel." },
      ]},
      { h: "Trash drawer", kind: "cards", items: [
        { t: "Bulk actions", d: "Restore All, Empty Trash, with a live count badge." },
        { t: "Per-item", d: "Restore or Delete permanently, each behind a confirmation dialog." },
        { t: "Restored-slug notice", d: "Flags a renamed slug when a restore would collide." },
        { t: "Confirmations", d: "“Delete Permanently?” and “Empty Trash?” dialogs.", badge: "warn" },
      ]},
    ],
  },
  {
    id: "blocks", num: "05", icon: "add", title: "Add Blocks Panel", railKey: "add", shortcut: "A",
    tag: "The block library. Adding inserts after the selection, auto-selects, and jumps to Layers.",
    groups: [
      { h: "Core blocks", kind: "palette", special: "blocks" },
      { h: "Behavior", kind: "flow", items: [
        { t: "View toggle", d: "Switch the library between List and Grid (persisted)." },
        { t: "Smart insertion", d: "New blocks land after the selected block, or append when nothing is selected." },
        { t: "Module-contributed blocks", d: "Appear only when their module is enabled — e.g. Reservation, Digital Product Grid, POS Menu." },
      ]},
    ],
  },
  {
    id: "layers", num: "06", icon: "layers", title: "Layers / Navigator", railKey: "layers", shortcut: "Z",
    tag: "The page’s structural tree — reorder, rename, hide and nest every block.",
    groups: [
      { h: "Pinned chrome rows", kind: "cards-3", items: [
        { t: "Header Navigation", d: "Locked, not deletable." },
        { t: "Site Footer", d: "Locked, not deletable." },
        { t: "Bottom Navigation", d: "Locked, not deletable." },
      ]},
      { h: "Block tree", kind: "cards", items: [
        { t: "Drag to reorder", d: "DnD-kit: mouse, 200ms touch hold, and keyboard." },
        { t: "Rename", d: "Double-click a label — Enter commits, Esc cancels, clearing restores the default." },
        { t: "Show / Hide", d: "Hidden blocks dim to 40% in the tree and are omitted from the public page." },
        { t: "Delete", d: "Inline soft-red Confirm / Cancel button." },
        { t: "Expand / collapse", d: "Open nested containers — Columns, Grid, Feature Cards." },
        { t: "Collapse-all toggle", d: "Expand or collapse the whole tree from the title bar." },
      ]},
    ],
  },
  {
    id: "forms", num: "07", icon: "sliders", title: "Block Property Forms",
    tag: "The right sidebar — a tailored, field-level form for every block, with layout variants on top.",
    groups: [
      { h: "Layout variant pickers", kind: "cards", items: [
        { t: "Hero", d: "Centered — Split and Fullbleed marked “Soon”.", badge: "soon" },
        { t: "Text", d: "Prose · 2-Col · Boxed." },
        { t: "Image", d: "Standard · Full." },
        { t: "FAQ", d: "Accordion · Grid · List." },
        { t: "Map", d: "Embed · Card." },
      ]},
      { h: "Per-block forms", kind: "cards", items: [
        { t: "Hero", d: "Background mode, desktop + mobile image with drag focal-point picker, text-color mode, Tagline / Title / Subtitle, and two CTAs (URL / Page / Form targets)." },
        { t: "Heading", d: "Heading, size, align; optional subheading; vertical spacing; horizontal padding." },
        { t: "Text", d: "Rich-text editor; vertical spacing; horizontal padding." },
        { t: "Content Showcase", d: "Block settings plus repeatable rows — heading, media, rich-text, per-row layout, optional CTA." },
        { t: "Image", d: "Media field (image / video / lottie) and caption." },
        { t: "Button", d: "Text, open-in-new-tab, tier, size, alignment, optional secondary button." },
        { t: "Product List", d: "Section title and a multi-select that opens the Products slide-over." },
        { t: "Link Card", d: "Pick a saved link; override background and border color." },
        { t: "Social Embeds", d: "Section title, max embeds (1–12), repeatable URL + caption." },
        { t: "Marquee", d: "Repeatable label + icon items; speed, direction, icon size, gap." },
        { t: "Columns / Grid", d: "Nested-block containers with gaps, padding, stack-on-mobile, and drill-down editing." },
        { t: "System & module blocks", d: "Minimal title overrides plus a deep-link to the module’s settings." },
      ]},
    ],
  },
  {
    id: "toolbar", num: "08", icon: "toolbar", title: "Inline Edit Toolbar",
    tag: "A floating toolbar that portals above the focused Hero or Heading field, on the canvas itself.",
    groups: [
      { h: "The toolbar", kind: "toolbar", special: "toolbar" },
      { h: "Controls", kind: "cards", items: [
        { t: "Title / Heading", d: "Size: S · M · L · XL." },
        { t: "Subheading", d: "Size S–XL plus Bold and Underline." },
        { t: "Field label", d: "Indicates which field is being edited." },
        { t: "Alignment & clear", d: "Left / Center / Right, plus a trash action to clear the field." },
      ]},
    ],
  },
  {
    id: "chrome", num: "09", icon: "chrome", title: "Chrome Property Panels",
    tag: "Site-wide chrome — the header, footer and bottom navigation that wrap every page.",
    groups: [
      { h: "Panels", kind: "cards-3", items: [
        { t: "Header Navigation", d: "Style preset, variant, width, border, full typography overrides, scroll behavior, link type and button label." },
        { t: "Site Footer", d: "Footer text, saved on blur — a global setting.", badge: "" },
        { t: "Bottom Navigation", d: "Appearance, background, border-top, nav links (Page / Form / URL) and a center FAB button." },
      ]},
    ],
  },
  {
    id: "panels", num: "10", icon: "panel", title: "Slide-Over Feature Panels",
    tag: "Seven full-height managers for everything that lives beyond a single page.",
    groups: [
      { h: "The managers", kind: "cards", items: [
        { t: "Links", d: "Link-in-bio manager — add / edit (URL / Form / Page), icon selector, hide-on-home, drag-reorder, trash, RBAC-gated.", icon: "link", badge: "L" },
        { t: "Forms", d: "Form builder — title, button text, published toggle; fields with label, type, placeholder, required, options.", icon: "form", badge: "F" },
        { t: "Products", d: "Product manager — price, gallery, category, badge, URL / WhatsApp CTAs, hidden toggle.", icon: "product", badge: "B" },
        { t: "Site Info", d: "Identity with live Google preview, images with live social-share preview, tracking pixels, social media.", icon: "info", badge: "I" },
        { t: "Branding", d: "Display name, tagline, description, avatar / logo upload and the global background editor.", icon: "branding", badge: "G" },
        { t: "Site Styles", d: "Fonts (heading + body pack) and Buttons (style pack + colors). Colors & Forms — coming soon.", icon: "styles", badge: "T" },
        { t: "Media", d: "Browse the library grid; click to copy a URL (toast); “Manage” opens the media app.", icon: "media", badge: "M" },
      ]},
    ],
  },
  {
    id: "page-settings", num: "11", icon: "settings", title: "Page-Level Settings",
    tag: "Right-sidebar tabs shown when no block is selected — settings scoped to the page.",
    groups: [
      { h: "Tabs", kind: "cards-3", items: [
        { t: "Title & Slug", d: "Title with auto-slug for new pages; live URL preview <code>host/tenant/slug</code>." },
        { t: "SEO & Analytics", d: "Tracking pixels and SEO meta, each with a Use-Global / Overriding toggle and a noindex switch." },
        { t: "Page Background", d: "BackgroundMediaEditor with an inherit-from-global option." },
      ]},
    ],
  },
  {
    id: "media", num: "12", icon: "image", title: "Media Field & Picker",
    tag: "The shared media stack used by every block that holds an image, video or animation.",
    groups: [
      { h: "MediaField", kind: "cards", items: [
        { t: "Type tabs", d: "Image · Video · Lottie." },
        { t: "Display options", d: "Aspect ratio, object-fit and a poster image." },
        { t: "Size warning", d: "Warns when the upload is below the recommended resolution.", badge: "warn" },
        { t: "Used everywhere", d: "Image block, Content Showcase rows, rich-text inserts, background editors." },
      ]},
      { h: "MediaPicker", kind: "cards-3", items: [
        { t: "Library", d: "Pick from the existing media library." },
        { t: "Upload", d: "Drop in a new file." },
        { t: "URL", d: "Paste a remote URL." },
      ]},
    ],
  },
  {
    id: "richtext", num: "13", icon: "type", title: "Rich Text Editor",
    tag: "A Tiptap-powered editor with a full, active-state toolbar.",
    groups: [
      { h: "Toolbar groups", kind: "cards", items: [
        { t: "History", d: "Undo and Redo." },
        { t: "Structure", d: "Heading popover, bullet list, numbered list, blockquote." },
        { t: "Inline", d: "Bold, Italic, Underline, Strikethrough." },
        { t: "Color", d: "Text-color popover and highlight popover." },
        { t: "Typography", d: "Font-size and line-height popovers." },
        { t: "Alignment", d: "Left, Center, Right." },
        { t: "Embeds", d: "Link selector, image (via MediaPicker) and video embed." },
      ]},
    ],
  },
  {
    id: "state", num: "14", icon: "shield", title: "State, Save & Data Integrity",
    tag: "The engine underneath — two contexts, a single-owner selection model and resilient saving.",
    groups: [
      { h: "Architecture", kind: "cards", items: [
        { t: "Two contexts", d: "<code>EditorContext</code> for canvas state, <code>PageStudioContext</code> for pages, save and settings." },
        { t: "Single-owner selection", d: "A discriminated union (none / blocks / slots / chrome) prevents render loops." },
        { t: "Dirty tracking", d: "JSON-snapshot diff drives the orange-dot indicator." },
        { t: "Page cache", d: "An LRU of 10 pages for instant switches, with silent background refresh." },
      ]},
      { h: "Safety & save", kind: "cards", items: [
        { t: "Unsaved-changes guards", d: "<code>beforeunload</code> warning plus a Save & Switch / Discard / Cancel dialog." },
        { t: "Block hydration", d: "System and data blocks hydrate from settings via <code>hydratePageBlocks</code>." },
        { t: "Save validation", d: "Slug validation and uniqueness, auto-naming empties to “Untitled”, tenant-cache purge." },
        { t: "Legacy migration", d: "Auto-converts old HTML content pages and legacy homepage block order." },
      ]},
    ],
  },
  {
    id: "mobile", num: "15", icon: "mobile", title: "Mobile Experience",
    tag: "The whole studio, reflowed into bottom sheets and a persistent tab bar.",
    groups: [
      { h: "Mobile shell", kind: "cards", items: [
        { t: "Bottom tab bar", d: "Pages, Layers, Add, Properties (badge when a block is selected), More, and Save (orange when dirty)." },
        { t: "Bottom sheets", d: "Replace the sidebars; the Properties sheet has Page / SEO / Background sub-tabs." },
        { t: "“More” sheet", d: "Groups the feature panels — Links, Forms, Products, Site Info, Branding, Site Styles." },
        { t: "Full-width canvas", d: "The preview takes the full screen between the chrome." },
      ]},
    ],
  },
];

// Rail icons (page-editing group, divider, feature group) with labels + shortcuts.
window.RAIL = [
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

// Block palette for §5.
window.BLOCKS = {
  core: [
    { n: "Hero", i: "layout" }, { n: "Text", i: "text" }, { n: "Content Showcase", i: "columns" },
    { n: "Image", i: "image" }, { n: "Button", i: "button" }, { n: "Product List", i: "product" },
    { n: "FAQ", i: "faq" }, { n: "Link Card", i: "link" }, { n: "Map", i: "map" },
    { n: "Image Gallery", i: "grid" }, { n: "Social Embeds", i: "embed" }, { n: "Heading", i: "type" },
    { n: "Feature Cards", i: "grid" }, { n: "Columns", i: "columns" }, { n: "Grid", i: "grid" },
    { n: "Marquee", i: "marquee" }, { n: "Testimonials", i: "star" }, { n: "Inline Form", i: "form" },
  ],
  system: [
    { n: "Quick Actions", i: "bolt" }, { n: "Operating Hours", i: "clock" },
    { n: "Featured Product", i: "star" }, { n: "Branches", i: "map" },
  ],
};

window.SHORTCUTS = [
  { keys: ["P"], label: "Pages" }, { keys: ["A"], label: "Add Block" }, { keys: ["Z"], label: "Layers" },
  { keys: ["L"], label: "Links" }, { keys: ["F"], label: "Forms" }, { keys: ["B"], label: "Products" },
  { keys: ["I"], label: "Site Info" }, { keys: ["G"], label: "Branding" }, { keys: ["T"], label: "Site Styles" },
  { keys: ["M"], label: "Media" },
];

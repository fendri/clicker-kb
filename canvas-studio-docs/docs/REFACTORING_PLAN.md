# Canvas Studio Refactoring Plan - 100% Design Preservation

## Goal
Preserve 100% of the original design while modernizing the build architecture from standalone HTML to Astro + React + TypeScript.

## Architecture Overview
- **Build Tool**: Astro (for modern dev experience, HMR, TypeScript)
- **UI Framework**: React (preserve all original React components)
- **Language**: TypeScript (strict mode)
- **Styling**: Extract original CSS exactly as-is

## File Structure

```
src/
├── styles/
│   └── original.css          # Complete extracted CSS (no changes)
├── data/
│   ├── icons.ts              # ICONS object with SVG definitions
│   ├── sections.ts           # SECTIONS array (15 sections)
│   ├── rail.ts               # RAIL navigation data
│   ├── shortcuts.ts          # SHORTCUTS keyboard data
│   └── blocks.ts             # BLOCKS palette data
├── components/
│   ├── Icon.tsx              # SVG icon renderer
│   ├── TopBar.tsx            # Top navigation bar
│   ├── Rail.tsx              # Left icon rail
│   ├── Toc.tsx               # Table of contents panel
│   ├── Hero.tsx              # Hero section
│   ├── EditorMockup.tsx      # Interactive editor preview
│   ├── Section.tsx           # Section renderer
│   ├── Cards.tsx             # Card grid layouts
│   ├── Flow.tsx              # Flow list with checkmarks
│   ├── Shortcuts.tsx         # Keyboard shortcuts display
│   ├── BlocksPalette.tsx     # Block palette grid
│   ├── ToolbarMock.tsx       # Inline toolbar mockup
│   ├── DeviceFrames.tsx      # Device preview frames
│   ├── Tweaks.tsx            # Tweaks panel and controls
│   └── App.tsx               # Main app with state management
├── layouts/
│   └── Layout.astro          # Base HTML layout
└── pages/
    └── index.astro           # Entry point
```

## Implementation Steps

### Phase 1: Data Layer (TypeScript)
1. Create `src/data/icons.ts` - Export ICONS object
2. Create `src/data/sections.ts` - Export SECTIONS array
3. Create `src/data/rail.ts` - Export RAIL array
4. Create `src/data/shortcuts.ts` - Export SHORTCUTS array
5. Create `src/data/blocks.ts` - Export BLOCKS object

### Phase 2: Styling
1. Extract complete CSS from original-template.html
2. Save to `src/styles/original.css` (no modifications)
3. Import in Layout.astro

### Phase 3: React Components (TypeScript)
Convert each component from JSX to TSX while preserving exact structure:

1. **Icon.tsx** - SVG icon component
2. **TopBar.tsx** - Top bar with device toggle, save button, theme toggle
3. **Rail.tsx** - Left icon rail with tooltips
4. **Toc.tsx** - TOC panel with search
5. **Hero.tsx** - Hero section wrapper
6. **EditorMockup.tsx** - Interactive editor mockup
7. **Section.tsx** - Section renderer
8. **Cards.tsx** - Card grid component
9. **Flow.tsx** - Flow list component
10. **Shortcuts.tsx** - Keyboard shortcuts
11. **BlocksPalette.tsx** - Block palette
12. **ToolbarMock.tsx** - Inline toolbar
13. **DeviceFrames.tsx** - Device frames
14. **Tweaks.tsx** - Tweaks panel (simplified version)
15. **App.tsx** - Main app with:
    - Theme management (light/dark)
    - Scroll spy for active section
    - Intersection observers for reveals
    - State management

### Phase 4: Integration
1. Update `src/layouts/Layout.astro` to include original CSS
2. Create `src/pages/index.astro` to render App with `client:load`
3. Test that design is 100% identical

## Key Principles

1. **Zero Design Changes**: Every pixel, color, spacing, animation must match
2. **Preserve Structure**: Keep all React component logic intact
3. **Modern Build**: Use Astro for build tooling, not for converting to Astro components
4. **TypeScript**: Add types without changing behavior
5. **CSS Preservation**: Use original CSS exactly as extracted

## Testing Checklist

- [ ] Top bar matches original (brand, device toggle, save button, theme toggle)
- [ ] Left rail matches original (icons, tooltips, active states)
- [ ] TOC panel matches original (search, section list, active states)
- [ ] Canvas background (dotted pattern) matches
- [ ] Hero section matches (kicker, title, subtitle, chips, mockup)
- [ ] Editor mockup matches (top bar, rail, panel, canvas, sidebar, device switching)
- [ ] All 15 sections render correctly
- [ ] Card layouts match (2-col, 1-col, 3-col)
- [ ] Flow lists match
- [ ] Block palette matches
- [ ] Keyboard shortcuts display matches
- [ ] Toolbar mock matches
- [ ] Device frames match
- [ ] Theme switching works (light/dark)
- [ ] Scroll spy works (active section tracking)
- [ ] Reveal animations work
- [ ] Responsive behavior matches
- [ ] All hover states match
- [ ] All transitions match

## Current Status

✅ Analysis complete
✅ Data extracted
✅ CSS extracted
⏳ Starting implementation...

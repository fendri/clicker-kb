# Canvas Studio Docs - Quick Start

## What This Is

A refactored version of the Canvas Studio Feature Inventory that preserves **100% of the original design** while modernizing the build architecture.

**Original**: 4.5MB standalone HTML with embedded React + custom bundler  
**Refactored**: Astro + React + TypeScript with modern dev tooling

## Current Status

🟡 **IN PROGRESS** - Implementation started, data layer partially complete

See [IMPLEMENTATION_STATUS.md](./IMPLEMENTATION_STATUS.md) for detailed progress.

## Architecture

- **Build Tool**: Astro (modern dev server, HMR, optimized builds)
- **UI Framework**: React (all original components preserved)
- **Language**: TypeScript (strict mode)
- **Styling**: Original CSS extracted and preserved exactly

## Project Structure

```
src/
├── styles/
│   └── original.css          # Extracted CSS (no changes)
├── data/
│   ├── icons.ts              # ✅ DONE - SVG icon definitions
│   ├── sections.ts           # ⏳ TODO - 15 sections data
│   ├── rail.ts               # ⏳ TODO - Rail navigation
│   ├── shortcuts.ts          # ⏳ TODO - Keyboard shortcuts
│   └── blocks.ts             # ⏳ TODO - Block palette
├── components/
│   ├── Icon.tsx              # ⏳ TODO - Icon component
│   ├── TopBar.tsx            # ⏳ TODO - Top bar
│   ├── Rail.tsx              # ⏳ TODO - Left rail
│   ├── Toc.tsx               # ⏳ TODO - TOC panel
│   ├── Hero.tsx              # ⏳ TODO - Hero section
│   ├── EditorMockup.tsx      # ⏳ TODO - Editor mockup
│   ├── Section.tsx           # ⏳ TODO - Section renderer
│   ├── Cards.tsx             # ⏳ TODO - Card layouts
│   ├── Flow.tsx              # ⏳ TODO - Flow lists
│   ├── Shortcuts.tsx         # ⏳ TODO - Shortcuts display
│   ├── BlocksPalette.tsx     # ⏳ TODO - Block palette
│   ├── ToolbarMock.tsx       # ⏳ TODO - Toolbar mock
│   ├── DeviceFrames.tsx      # ⏳ TODO - Device frames
│   ├── Tweaks.tsx            # ⏳ TODO - Tweaks panel
│   └── App.tsx               # ⏳ TODO - Main app
├── layouts/
│   └── Layout.astro          # Base layout
└── pages/
    └── index.astro           # Entry point
```

## Reference Files

Original extracted files (for reference during refactoring):

- `app-main.jsx` - TopBar, Rail, Toc, Hero, EditorMockup components
- `app-data.jsx` - Section renderers, Cards, Flow, special showcases
- `app-icons.jsx` - App root with theme, scroll-spy, tweaks
- `data-sections.js` - ICONS object with SVG definitions
- `data-icons.js` - SECTIONS array with all 15 sections
- `original-template.html` - Complete CSS and HTML structure

## How to Run (Once Complete)

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Development Commands

```bash
npm run dev          # Start dev server at http://localhost:4321
npm run build        # Build for production
npm run preview      # Preview production build
npm run astro        # Run Astro CLI commands
```

## Key Principles

1. **100% Design Preservation** - Every pixel, color, spacing matches original
2. **No Functional Changes** - All interactions work exactly the same
3. **Modern Tooling** - Better DX with HMR, TypeScript, etc.
4. **Clean Architecture** - Separated data, components, styles

## What's Different from Original?

**Build System**:
- ✅ Modern dev server with HMR (vs. no dev server)
- ✅ TypeScript with strict types (vs. plain JSX)
- ✅ Optimized production builds (vs. single 4.5MB file)
- ✅ Separated concerns (data, components, styles)

**What's the Same**:
- ✅ Exact same visual design
- ✅ Same React components and logic
- ✅ Same CSS (extracted, not rewritten)
- ✅ Same user experience
- ✅ Same features and interactions

## Next Steps

See [REFACTORING_PLAN.md](./REFACTORING_PLAN.md) for the complete implementation plan.

## Testing

Once complete, compare side-by-side with original:

1. Open original: `Canvas Studio Reference (standalone).html`
2. Open refactored: `http://localhost:4321`
3. Verify pixel-perfect match:
   - Layout and spacing
   - Colors and typography
   - Animations and transitions
   - Hover states
   - Theme switching
   - Responsive behavior
   - Scroll behavior

## Documentation

- [REFACTORING_PLAN.md](./REFACTORING_PLAN.md) - Complete refactoring plan
- [IMPLEMENTATION_STATUS.md](./IMPLEMENTATION_STATUS.md) - Current progress
- [COMPARISON.md](./COMPARISON.md) - Original vs refactored comparison
- [MIGRATION.md](./MIGRATION.md) - Migration notes

## Questions?

Check the documentation files above or review the original extracted files for reference.

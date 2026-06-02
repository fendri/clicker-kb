# Plan: Preserve Original Design in Astro

## Current Situation
The original file is a sophisticated documentation site with:
- Complete design system (top bar, rail, TOC, canvas)
- 15 sections with various card layouts
- Interactive editor mockup
- Theme switcher
- Tweaks panel
- ~5KB of data (sections, icons, shortcuts, blocks)
- ~18KB of icon definitions

## Challenge
The original uses:
- React with hooks
- Window globals for cross-script communication
- Babel standalone for JSX transformation
- Complex state management
- Scroll spy and intersection observers

## Best Approach

Given the complexity, I recommend **keeping it as close to the original as possible** while using modern tooling:

### Option 1: Minimal Refactor (RECOMMENDED)
- Keep the React components almost identical
- Use Astro to serve the page with proper build
- Extract CSS to separate file
- Keep data in JS modules
- Use client:load for React components
- **Benefit**: Preserves 100% of original design and behavior

### Option 2: Full Astro Conversion
- Convert all React to Astro components
- Rewrite state management
- Reimplement all interactions
- **Downside**: Time-consuming, risk of breaking design

## Recommendation

**Go with Option 1** - It's faster, safer, and maintains the original design perfectly.

The refactoring value comes from:
- ✅ Modern build pipeline (Vite)
- ✅ Proper dependency management
- ✅ TypeScript support
- ✅ Hot module replacement
- ✅ Optimized production builds
- ✅ Maintainable file structure

NOT from rewriting working React code into Astro components.

## Next Steps

1. Create single-page Astro app
2. Import React components as-is
3. Extract and organize data files
4. Keep original CSS
5. Add TypeScript types
6. Test and verify

This preserves the original design 100% while modernizing the architecture.

# 01 — Color & Atmosphere (25 Skills)

## 1. Purple / Indigo → Blue Gradient
**Slop:** Hero or background uses violet→purple→indigo multi-stop gradients.  
**Why:** The single most recognized AI tell (2025–2026). Originates from Tailwind’s old indigo-500 default + training data loop.  
**When OK:** Brand is explicitly in that space with a unique, deliberate treatment (very rare).  
**Fix:** Solid background, single accent color derived from product/logo, or subtle noise/radial. Never multi-stop decorative gradients.

## 2. Gradient Text
**Slop:** `bg-gradient-to-r ... bg-clip-text text-transparent` on headlines.  
**Why:** Harder to read, looks cheap, overused.  
**When OK:** Almost never for important text.  
**Fix:** Solid color. Emphasize with weight, size, or one colored word (max once per page).

## 3. Glowing Orbs / Halos / Blurred Blobs
**Slop:** Large blurred color circles or radial glows behind the hero.  
**Why:** Decorative noise that signals “AI template”.  
**When OK:** Extremely subtle, tied to brand motion, not the main visual.  
**Fix:** Remove. Use real photography, product screenshots, or simple solid backgrounds.

## 4. Colored Left Border Stripe on Cards
**Slop:** Thick colored left border (`border-l-4`) on every card.  
**Why:** Originally for alerts; AI applies it to everything so it loses meaning.  
**When OK:** Status indicators only (error, warning, success).  
**Fix:** Remove. Use spacing, background shift, or a real icon/badge.

## 5. Default shadcn / Tailwind Palette
**Slop:** Gray scale + blue-500/600 with only the primary button changed.  
**Why:** No decision was made.  
**When OK:** Starting point that is then heavily customized.  
**Fix:** Define 5–7 intentional tokens: background, surface, text, muted, primary, accent, destructive.

## 6. Low Contrast Secondary Text
**Slop:** `text-gray-400` or lighter on light backgrounds.  
**Why:** Fails WCAG AA; looks clean in screenshots but unreadable in real use.  
**When OK:** Truly non-essential metadata.  
**Fix:** Minimum 4.5:1 for body. Use a proper muted token that passes contrast.

## 7. Pure Black / Pure White
**Slop:** `#000` and `#fff` with no nuance.  
**Why:** Harsh and digital.  
**When OK:** High-contrast branding or specific aesthetic.  
**Fix:** Off-black (`#0a0a0a`–`#111`) and off-white, or warm/cool tints that fit the brand.

## 8. Rainbow / Multi-Stop Decorative Gradients
**Slop:** Buttons or cards with 3+ color stops for no reason.  
**Why:** No semantic meaning.  
**When OK:** Data visualization or brand that owns vibrant color.  
**Fix:** Solid fills or subtle single-stop gradients that support hierarchy.

## 9. Neon Edges on Dark Themes
**Slop:** Bright cyan/magenta borders and glows on dark cards.  
**Why:** 2022 cyberpunk template look.  
**When OK:** Intentional neon aesthetic.  
**Fix:** Soft, desaturated borders or no border + elevation via background shift.

## 10. Inconsistent Accent Usage
**Slop:** Accent color appears randomly on borders, text, icons, and backgrounds.  
**Why:** No system.  
**When OK:** Never.  
**Fix:** Define clear roles: primary for main actions, accent for highlights, semantic colors for status.

## 11. Cream / Beige + Italic Serif “Luxury” Default
**Slop:** Warm beige background + Instrument Serif or similar italic headline.  
**Why:** The new “escape from purple” that itself became a cliché.  
**When OK:** Brand is actually warm, editorial, or craft-focused.  
**Fix:** Only if it matches the product. Otherwise choose a more specific direction.

## 12. Background Grid Lines or Dot Patterns
**Slop:** Faint CSS grid or dot pattern on dark hero.  
**Why:** Decorative filler.  
**When OK:** Technical products where the grid is meaningful (canvas, design tool).  
**Fix:** Remove unless it serves the content.

## 13. Overuse of Opacity / Glass
**Slop:** Every surface has `bg-white/10 backdrop-blur`.  
**Why:** Reduces contrast and performance.  
**When OK:** Overlays that actually sit on top of content (modals, sticky headers).  
**Fix:** Solid surfaces. Use blur only when necessary.

## 14. Status Colors Without Meaning
**Slop:** Green dots, purple badges, yellow pills everywhere.  
**Why:** Color language is broken.  
**When OK:** Consistent semantic system.  
**Fix:** Limit colors to a small set with clear meanings across the product.

## 15. No Dominant Color
**Slop:** Everything is equally muted or equally colorful.  
**Why:** No hierarchy or brand presence.  
**When OK:** Never for marketing pages.  
**Fix:** One clear primary color that owns important actions and key moments.

## 16. Gradient Buttons as Default
**Slop:** Primary CTA is a multi-stop gradient.  
**Why:** Overused and often reduces readability.  
**When OK:** Brand that owns gradient.  
**Fix:** Solid primary color with strong contrast.

## 17. Dark Mode by Default Without Reason
**Slop:** Dark theme applied even when the brand is light.  
**Why:** Common AI default.  
**When OK:** Intentional dark brand or user preference.  
**Fix:** Match the product’s real visual identity.

## 18. Over-Saturated Accents
**Slop:** Extremely bright, pure colors everywhere.  
**Why:** Looks digital and cheap.  
**When OK:** Playful brands.  
**Fix:** Slightly desaturated or carefully chosen brand colors.

## 19. Missing Semantic Color System
**Slop:** Success/warning/error colors are random.  
**Why:** Users can’t learn the interface.  
**When OK:** Never.  
**Fix:** Consistent success (green), warning (amber), error (red) across the product.

## 20. Background Texture Overuse
**Slop:** Heavy grain, noise, or paper textures on every section.  
**Why:** Can reduce readability.  
**When OK:** Subtle, brand-aligned texture.  
**Fix:** Use sparingly or remove.

## 21. Color Clashing with Images
**Slop:** UI colors fight with photography or screenshots.  
**Why:** Unprofessional.  
**When OK:** Never.  
**Fix:** Harmonize or use neutral UI around strong imagery.

## 22. Too Many Accent Colors
**Slop:** 4+ accent colors with no hierarchy.  
**Why:** Visual chaos.  
**When OK:** Never.  
**Fix:** 1 primary + 1 secondary accent maximum.

## 23. Low Contrast on Dark Backgrounds
**Slop:** Light gray text on dark gray.  
**Why:** Accessibility failure.  
**When OK:** Never for body text.  
**Fix:** Ensure 4.5:1 minimum.

## 24. Decorative Color Blocks with No Purpose
**Slop:** Random colored rectangles or shapes.  
**Why:** Noise.  
**When OK:** Intentional brand moments.  
**Fix:** Remove or give them meaning.

## 25. Ignoring Brand Colors
**Slop:** Completely different palette from the product’s existing brand.  
**Why:** Inconsistent.  
**When OK:** Never.  
**Fix:** Start from existing brand colors and extend thoughtfully.

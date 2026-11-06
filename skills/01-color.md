# 01 — Color & Atmosphere (15 Skills)

## 1. Purple / Indigo → Blue Gradient
**Slop:** Hero or background uses `from-violet-600 via-purple-600 to-indigo-700` or similar.  
**Why:** The single most recognized AI tell in 2025–2026. Traces back to Tailwind’s old indigo-500 default + training data.  
**When OK:** Brand is explicitly in that space and has a unique take (rare).  
**Fix:** Solid background, single accent color, or a subtle radial/noise texture. Use brand color derived from product or real-world reference.

## 2. Gradient Text
**Slop:** Headline has `bg-gradient-to-r ... bg-clip-text text-transparent`.  
**Why:** Harder to read, looks cheap, overused.  
**When OK:** Never for body or important text. Extremely rare for display.  
**Fix:** Solid color. Emphasize with weight, size, or a single colored word (once per page max).

## 3. Glowing Orbs / Halos / Blurred Blobs
**Slop:** Large blurred color circles behind the hero.  
**Why:** Decorative noise that signals “AI template”.  
**When OK:** Extremely subtle, tied to brand motion, not the main visual.  
**Fix:** Remove. Use real photography, product screenshots, or simple solid/gradient-free backgrounds.

## 4. Colored Left Border Stripe on Cards
**Slop:** Every card has a thick colored left border (`border-l-4 border-blue-500`).  
**Why:** Originally for alerts; AI applies it to everything so it loses meaning.  
**When OK:** Status indicators only (error, warning, success).  
**Fix:** Remove. Use spacing, background, or a real icon/badge for hierarchy.

## 5. Default shadcn / Tailwind Palette
**Slop:** Gray-50 to gray-900 + blue-500/600 with only the primary button changed.  
**Why:** No decision was made.  
**When OK:** Starting point that is then heavily customized.  
**Fix:** Define 5–7 intentional tokens: background, surface, text, muted, primary, accent, destructive.

## 6. Low Contrast Secondary Text
**Slop:** `text-gray-400` or lighter on white/light backgrounds.  
**Why:** Fails accessibility; looks “clean” in screenshots but unreadable in real use.  
**When OK:** Truly non-essential metadata that can be skipped.  
**Fix:** Minimum 4.5:1 for body text. Use a proper muted token (e.g. `text-muted-foreground` that actually passes).

## 7. Pure Black / Pure White
**Slop:** `#000` and `#fff` with no nuance.  
**Why:** Harsh and digital.  
**When OK:** High-contrast branding or specific aesthetic.  
**Fix:** Off-black (`#0a0a0a`–`#111`) and off-white (`#fafafa`–`#f5f5f5`), or warm/cool tints that fit the brand.

## 8. Rainbow / Multi-Stop Decorative Gradients
**Slop:** Buttons or cards with 3+ color stops for no reason.  
**Why:** No semantic meaning.  
**When OK:** Data visualization or brand that owns vibrant color.  
**Fix:** Solid fills or subtle single-stop gradients that support the hierarchy.

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

## 12. Background Grid Lines
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

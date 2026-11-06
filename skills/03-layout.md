# 03 — Layout & Spatial Composition (15 Skills)

## 1. Three Identical Feature Cards
**Slop:** `grid-cols-3` with icon + heading + 2 lines of text, repeated.  
**Why:** The default SaaS landing page template since 2020.  
**When OK:** Rarely, if the three items are truly equal and the rest of the page is distinctive.  
**Fix:** Asymmetric layout, one large featured item + supporting points, vertical stack, or bento with real variation.

## 2. Everything Centered
**Slop:** Hero, subhead, body, and features all `text-center`.  
**Why:** Safe but lifeless.  
**When OK:** Short hero moments or specific centered aesthetic.  
**Fix:** Mix left-aligned content with intentional centering. Create visual flow.

## 3. Pill Badge Above Headline
**Slop:** “✨ New · Powered by AI” or “Introducing” chip above the main title.  
**Why:** Almost every AI landing page has one.  
**When OK:** Genuine product announcement that matters.  
**Fix:** Remove or integrate the information into the headline or a single strong line.

## 4. Nested Cards / Cardocalypse
**Slop:** Cards inside cards inside sections, all with borders.  
**Why:** Visual noise; hierarchy collapses.  
**When OK:** Complex data dashboards with clear grouping.  
**Fix:** Use spacing and background shifts instead of borders. Flatten where possible.

## 5. Identical Border Radius Everywhere
**Slop:** `rounded-2xl` on buttons, cards, inputs, and images.  
**Why:** No differentiation between interactive and static elements.  
**When OK:** Strong, consistent design system that still varies slightly.  
**Fix:** Different radii for different roles (e.g. buttons tighter, cards softer, or sharp corners for a specific look).

## 6. Uniform Spacing
**Slop:** Every section has the same `py-20` or `gap-8`.  
**Why:** Monotonous.  
**When OK:** Never for long pages.  
**Fix:** Vary rhythm. Larger gaps between major sections, tighter inside groups.

## 7. Full-Width Body Text
**Slop:** Paragraphs that stretch across the entire viewport.  
**Why:** Hard to read.  
**When OK:** Never.  
**Fix:** Constrain text width (`max-w-prose` or similar).

## 8. Symmetrical Hero with Two Buttons
**Slop:** Centered headline + primary + secondary button, perfectly balanced.  
**Why:** Safe default.  
**When OK:** When the content is short and the visual is strong.  
**Fix:** Offset layout, single primary action, or more interesting composition.

## 9. Numbered Section Labels (01, 02, 03)
**Slop:** Tiny “01” next to every section title.  
**Why:** Decorative and often meaningless.  
**When OK:** Actual sequential process.  
**Fix:** Remove unless the sequence is important.

## 10. Overstuffed Hero
**Slop:** Badge + headline + subhead + two buttons + floating stats + image + extra links.  
**Why:** Competing elements; user doesn’t know where to look.  
**When OK:** Never.  
**Fix:** Headline, supporting line, one primary action, and one strong visual.

## 11. Equal Visual Weight
**Slop:** Every section and card has the same importance.  
**Why:** No hierarchy.  
**When OK:** Never.  
**Fix:** Make one thing dominant per viewport. Everything else supports it.

## 12. Edge-to-Edge Text
**Slop:** Text touching the viewport edges on mobile.  
**Why:** Feels broken.  
**When OK:** Never.  
**Fix:** Consistent horizontal padding (at least 16–24px on mobile).

## 13. Forced Bento Grids
**Slop:** Random boxes of different sizes that don’t form a meaningful composition.  
**Why:** Looks designed without being designed.  
**When OK:** When the content naturally varies in importance.  
**Fix:** Only use if the sizes reflect real content hierarchy.

## 14. Floating Elements Without Purpose
**Slop:** Stats, badges, or icons floating around the hero.  
**Why:** Decoration.  
**When OK:** When they communicate real product value.  
**Fix:** Remove or integrate into the layout.

## 15. No Breathing Room
**Slop:** Tight padding and margins throughout.  
**Why:** Feels cramped and unfinished.  
**When OK:** Dense data interfaces.  
**Fix:** Generous whitespace. Let elements breathe.

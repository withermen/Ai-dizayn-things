# 05 — Motion & Interaction (15 Skills)

## 1. Fade-Up on Every Section
**Slop:** Every block has `animate-fade-in-up` or Intersection Observer fade.  
**Why:** After the first two sections it becomes annoying and can hide content.  
**When OK:** One or two key moments.  
**Fix:** Show content immediately. Animate only what matters, under 300ms, respect `prefers-reduced-motion`.

## 2. Bounce / Elastic Easing Everywhere
**Slop:** Buttons and cards bounce on hover or load.  
**Why:** Feels cheap and dated.  
**When OK:** Playful brands, sparingly.  
**Fix:** Subtle ease-out or no animation.

## 3. Cards Lift on Hover Unnecessarily
**Slop:** Every card has `hover:-translate-y-1 hover:shadow-xl`.  
**Why:** Implies clickability when many aren’t clickable.  
**When OK:** Actual interactive cards.  
**Fix:** Only animate interactive elements. Prefer border or background change.

## 4. Infinite Marquee / Scrolling Logos
**Slop:** Auto-scrolling logo bar.  
**Why:** Often fake or low-value.  
**When OK:** Real, relevant partners with pause control.  
**Fix:** Static grid or remove.

## 5. Pulsing Elements
**Slop:** Pulsing dots, buttons, or badges.  
**Why:** Distracting.  
**When OK:** Real attention needed (live indicator).  
**Fix:** Remove or make static.

## 6. Cursor-Following Glow
**Slop:** Gradient or spotlight that follows the mouse.  
**Why:** Gimmicky.  
**When OK:** Specific interactive experiences.  
**Fix:** Remove for most sites.

## 7. Staggered Entrance Animations
**Slop:** Items appear one by one with delay.  
**Why:** Slows down reading.  
**When OK:** Short lists where sequence matters.  
**Fix:** Show everything at once or with very short stagger.

## 8. Layout Shift on Interaction
**Slop:** Hover or focus causes large layout changes.  
**Why:** Jarring.  
**When OK:** Never.  
**Fix:** Animate only properties that don’t affect layout (opacity, color, transform).

## 9. Long Animations
**Slop:** Transitions longer than 400–500ms.  
**Why:** Feels slow.  
**When OK:** Page transitions or intentional drama.  
**Fix:** 150–300ms for most UI.

## 10. No Reduced Motion Support
**Slop:** Animations ignore `prefers-reduced-motion`.  
**Why:** Accessibility failure.  
**When OK:** Never.  
**Fix:** Always include the media query.

## 11. Loading Spinners as Design
**Slop:** Fancy animated loaders used decoratively.  
**Why:** Should only appear when loading.  
**When OK:** Actual loading states.  
**Fix:** Simple, purposeful indicators.

## 12. Scroll-Jacking
**Slop:** Forced scroll animations that take control.  
**Why:** Frustrating.  
**When OK:** Almost never.  
**Fix:** Let users scroll normally.

## 13. Hover-Only Interactions
**Slop:** Important actions only available on hover.  
**Why:** Breaks on touch devices.  
**When OK:** Supplementary.  
**Fix:** Ensure all critical interactions work on touch and keyboard.

## 14. Excessive Micro-Interactions
**Slop:** Every element has a unique animation.  
**Why:** Overwhelming.  
**When OK:** Never.  
**Fix:** Consistent, minimal motion language.

## 15. Auto-Playing Video / Audio
**Slop:** Background video or sound that starts automatically.  
**Why:** Annoying and data-heavy.  
**When OK:** Muted, with clear controls, and relevant.  
**Fix:** User-initiated media.

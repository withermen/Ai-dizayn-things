# 05 — Motion & Interaction (25 Skills)

## 1. Fade-Up on Every Section
**Slop:** Every block has fade-in-up on scroll.  
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

## 16. Parallax Overuse
**Slop:** Heavy parallax on every element.  
**Why:** Can cause motion sickness.  
**When OK:** Subtle, intentional.  
**Fix:** Minimal or none.

## 17. Confusing Transitions
**Slop:** Animations that don’t communicate state change.  
**Why:** Confusing.  
**When OK:** Never.  
**Fix:** Motion should clarify, not decorate.

## 18. Missing Animation on Important State Changes
**Slop:** Sudden appearance/disappearance of content.  
**Why:** Jarring.  
**When OK:** Never.  
**Fix:** Subtle transitions for state changes.

## 19. Performance-Heavy Animations
**Slop:** Animations that cause jank or high CPU.  
**Why:** Poor experience.  
**When OK:** Never.  
**Fix:** Use transform and opacity; avoid layout-triggering properties.

## 20. Infinite Animations
**Slop:** Elements that animate forever.  
**Why:** Distracting.  
**When OK:** Rare loading or live indicators.  
**Fix:** Finite, purposeful motion.

## 21. Inconsistent Easing
**Slop:** Different easing functions everywhere.  
**Why:** No system.  
**When OK:** Never.  
**Fix:** Define 2–3 easing curves and stick to them.

## 22. Motion That Blocks Interaction
**Slop:** Animations that prevent clicking.  
**Why:** Frustrating.  
**When OK:** Never.  
**Fix:** Non-blocking motion.

## 23. Decorative Particle Effects
**Slop:** Floating particles or confetti without purpose.  
**Why:** Noise.  
**When OK:** Celebration moments.  
**Fix:** Remove.

## 24. No Motion Preference Respect
**Slop:** Ignoring user motion settings.  
**Why:** Accessibility.  
**When OK:** Never.  
**Fix:** Always check prefers-reduced-motion.

## 25. Animation Without Purpose
**Slop:** Motion that doesn’t improve understanding or feedback.  
**Why:** Distraction.  
**When OK:** Never.  
**Fix:** Every animation should have a clear reason.

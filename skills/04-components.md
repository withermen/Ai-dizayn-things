# 04 — Components & UI Elements (15 Skills)

## 1. Lucide / Feather Icons Only
**Slop:** Every icon comes from the same thin-line set (especially sparkles, zap, brain, rocket).  
**Why:** Generic and instantly recognizable.  
**When OK:** Consistent icon system is fine if the rest of the design is distinctive.  
**Fix:** Use a more unique icon set, custom illustrations, or fewer icons.

## 2. Icon in Rounded Square Above Every Heading
**Slop:** Colored circle or rounded square with an icon, then the title.  
**Why:** Extremely common AI pattern.  
**When OK:** Rare, meaningful visual.  
**Fix:** Integrate icons differently or remove them.

## 3. Frosted Glass Cards
**Slop:** `backdrop-blur` + semi-transparent background + thin border on static cards.  
**Why:** Looks trendy but reduces readability and performance.  
**When OK:** Overlays that actually float over content.  
**Fix:** Solid backgrounds with proper elevation or subtle borders.

## 4. Thin Border + Wide Soft Shadow
**Slop:** `border border-gray-200 shadow-lg` on every card.  
**Why:** Classic shadcn default look.  
**When OK:** Consistent design system.  
**Fix:** Choose one elevation method. Many cards need neither.

## 5. Pulsing Dot / “Live” Badge
**Slop:** Green pulsing dot with “Live” or “New” on features that aren’t.  
**Why:** Meaningless decoration.  
**When OK:** Real-time status.  
**Fix:** Remove or only use for genuine live data.

## 6. Giant Stat Numbers
**Slop:** Huge “10M+” or “99.9%” with tiny label underneath.  
**Why:** Often fake or inflated; looks templated.  
**When OK:** Real, verifiable metrics.  
**Fix:** Use real numbers with context, or remove.

## 7. Identical Button Styles
**Slop:** Primary and secondary buttons look almost the same.  
**Why:** No clear hierarchy.  
**When OK:** Never.  
**Fix:** Strong visual difference between primary, secondary, and tertiary actions.

## 8. Placeholder Avatars & Logos
**Slop:** Colored circles with initials, grey boxes for logos.  
**Why:** Looks unfinished.  
**When OK:** During development only.  
**Fix:** Use real photos, real logos, or omit the section.

## 9. Stock Button Hover (Scale or Glow)
**Slop:** Buttons grow or glow on hover with no other interaction design.  
**Why:** Generic.  
**When OK:** Subtle, consistent with the system.  
**Fix:** Prefer color, border, or background shifts. Keep motion minimal.

## 10. Over-Rounded Everything
**Slop:** `rounded-full` or very large radii on cards and containers.  
**Why:** Softens hierarchy.  
**When OK:** Specific soft aesthetic.  
**Fix:** Vary radius by component role.

## 11. Badge Overuse
**Slop:** Multiple colored pills on every card or section.  
**Why:** Noise.  
**When OK:** Rare, high-signal labels.  
**Fix:** Limit to truly important status or categories.

## 12. Empty State Neglect
**Slop:** Generic “No data yet” with no next action.  
**Why:** Missed opportunity.  
**When OK:** Never.  
**Fix:** Helpful empty states with clear next steps and personality.

## 13. Inconsistent Form Elements
**Slop:** Inputs, selects, and buttons have different radii, borders, and heights.  
**Why:** Feels unfinished.  
**When OK:** Never.  
**Fix:** Unified form component styles.

## 14. Decorative Dividers
**Slop:** Gradient lines or fancy separators between every section.  
**Why:** Unnecessary.  
**When OK:** Rare brand moments.  
**Fix:** Use spacing instead.

## 15. Tooltip / Popover Abuse
**Slop:** Important information hidden behind hover.  
**Why:** Bad for accessibility and mobile.  
**When OK:** Supplementary details.  
**Fix:** Show critical information visibly.

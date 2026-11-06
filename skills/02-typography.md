# 02 — Typography & Hierarchy (15 Skills)

## 1. Inter / Roboto / Geist Everywhere
**Slop:** Single neutral sans used for headlines, body, UI, and labels.  
**Why:** Statistically the most common choice in training data.  
**When OK:** Paired with a distinctive display face, or when the product is deliberately neutral.  
**Fix:** Choose a typeface with character (or a strong pair). At minimum, differentiate display and text.

## 2. Eyebrow Labels Above Every Heading
**Slop:** Small uppercase tracked label (“Features”, “How it works”) above every section title.  
**Why:** Adds noise; usually redundant.  
**When OK:** Rare, meaningful category or date.  
**Fix:** Remove. Fold important information into the heading.

## 3. Colored Italic Serif Accent Word
**Slop:** One word in the headline is italic serif + accent color.  
**Why:** Current shortcut for “premium”. Overused and often on the wrong word.  
**When OK:** Once per page, on the truly important word, if it fits the brand.  
**Fix:** Use weight, size, or a single solid color emphasis. Max once.

## 4. Extreme Font Weights
**Slop:** Headlines at 200–300 or 800–900 with no middle ground.  
**Why:** Looks either weak or shouty.  
**When OK:** Intentional display treatment.  
**Fix:** Use 500–700 for display, 400–500 for body. Let size do more of the work.

## 5. Em Dash Overuse
**Slop:** Em dashes (—) in headlines, buttons, and body text.  
**Why:** Strong AI writing tell.  
**When OK:** Proper punctuation use (rare).  
**Fix:** Prefer periods, commas, colons, or hyphens.

## 6. All-Caps Small Labels
**Slop:** `uppercase tracking-widest text-xs` on every section kicker.  
**Why:** Hurts readability and feels templated.  
**When OK:** Short, meaningful labels.  
**Fix:** Sentence case or title case. Reduce tracking.

## 7. Tight Negative Tracking on Everything
**Slop:** `tracking-tight` or `letter-spacing: -0.05em` on body text.  
**Why:** Makes text hard to read at normal sizes.  
**When OK:** Large display headlines only.  
**Fix:** Normal or slightly positive tracking for body. Tight only on big type.

## 8. Monospace for Non-Code
**Slop:** Labels, buttons, and tags in mono font.  
**Why:** “Developer aesthetic” applied everywhere.  
**When OK:** Code, terminal, or technical products.  
**Fix:** Use the main typeface. Reserve mono for actual code or numbers that need alignment.

## 9. Poor Type Scale
**Slop:** Arbitrary sizes (text-4xl, text-2xl, text-lg) with no system.  
**Why:** No rhythm.  
**When OK:** Never.  
**Fix:** Use a modular scale (e.g. 1.25 or 1.333). Define 5–7 sizes and stick to them.

## 10. Line Length Too Long or Too Short
**Slop:** Full-width paragraphs or extremely narrow columns.  
**Why:** Hard to read.  
**When OK:** Never for body text.  
**Fix:** 50–75 characters per line (roughly 60–75ch).

## 11. Insufficient Line Height
**Slop:** `leading-tight` on body text.  
**Why:** Cramped.  
**When OK:** Headlines only.  
**Fix:** 1.5–1.7 for body, 1.1–1.3 for large headlines.

## 12. Emoji in Headlines
**Slop:** 🚀 Fast, ✨ AI-powered, 🔒 Secure.  
**Why:** Looks like a pitch deck from 2019. Compensates for weak copy.  
**When OK:** Rare, playful brand.  
**Fix:** Remove. Write a better headline.

## 13. Numbers Spelled Out
**Slop:** “Three features”, “ten times faster”.  
**Why:** Slower to scan; AI tell.  
**When OK:** Never in UI.  
**Fix:** Use digits: 3, 10×.

## 14. Flat Hierarchy
**Slop:** Everything is roughly the same size and weight.  
**Why:** Nothing stands out.  
**When OK:** Never.  
**Fix:** Strong size and weight contrast between H1, H2, body, and captions.

## 15. Justified Text
**Slop:** `text-justify` on web pages.  
**Why:** Creates rivers and uneven spacing.  
**When OK:** Almost never on the web.  
**Fix:** Left-aligned (or right for RTL).

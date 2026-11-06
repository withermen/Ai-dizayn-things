# AI Things Skill — Anti-Slop Web Design Agent Instructions

You are now operating under the **AI Things** skill. Your goal is to eliminate AI slop from web designs and replace it with intentional, high-quality decisions.

## Activation

When the user says `/aithings`, “fix the AI slop”, “make this not look AI-generated”, or similar, follow this exact workflow.

## Core Workflow (Mandatory)

1. **Audit**  
   - First run the detector if available: `node detect-slop.js .` (or `--json`).
   - Also manually scan HTML/CSS/JS (or React/Vue/Svelte) against the 150 skills in the `skills/` folder.

2. **Propose**  
   Present a clear, prioritized list to the user:

   ### Proposed Changes
   **Critical (do these)**
   - [Category] Specific change → Why → Before / After idea

   **Important**
   - ...

   **Nice-to-have**
   - ...

   Always explain *why* it looks like AI slop and what the intentional alternative is.

3. **Wait for Approval**  
   Do **not** change any code until the user explicitly approves.

4. **Apply**  
   Make the approved changes. Prefer CSS variables, design tokens, and clean component structure.

5. **Screenshot & Self-Correct**  
   - Render the page (browser tools, Playwright, Puppeteer, or preview).
   - Take a full-page screenshot.
   - Analyze against the skills.
   - Fix remaining visual issues.
   - Repeat if necessary (max 2–3 iterations).
   - Show the user the final result.

## Absolute Rules

- Never use purple/indigo → blue gradients, gradient text, or glowing orbs unless the brand explicitly requires them.
- Never default to Inter, Roboto, or Geist as the sole typeface.
- Never use three identical feature cards with icons on top as the default layout.
- Never add decorative eyebrows, meaningless badges, or pulsing dots.
- Always prefer real content, real screenshots, and specific copy over generic placeholders.
- Respect `prefers-reduced-motion`.
- Maintain WCAG AA contrast minimums.

## Design Direction First

Before applying fixes, if the project has no clear aesthetic direction, ask the user (or propose 2–3 options):

> What should this feel like? Examples: editorial magazine, precise tool, warm craftsman, brutalist, quiet luxury, technical documentation, etc.

Then lock 3–5 design tokens and apply them consistently.

## Reference the Detailed Skills

Always consult:

- `skills/01-color.md` (25 skills)
- `skills/02-typography.md` (25 skills)
- `skills/03-layout.md` (25 skills)
- `skills/04-components.md` (25 skills)
- `skills/05-motion.md` (25 skills)
- `skills/06-copy.md` (25 skills)

Each contains specific, actionable rules with “When it’s OK”, “Why it’s slop”, and “How to fix”.

## Detector

Use `detect-slop.js` to automatically find common patterns before manual review.

## Final Output

After the screenshot loop, summarize what was fixed and remaining intentional choices.

Now begin the audit if the user has activated the skill.

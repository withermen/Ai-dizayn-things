# AI Things — Anti-AI-Slop Design Skill

**Apache License 2.0**

A high-quality, production-ready design skill for coding agents (Claude Code, Codex, Cursor, Aider, Continue, etc.).

When you type `/aithings` (or load this skill), the agent scans your current web project for classic **AI slop** patterns in web design, proposes specific, intentional fixes, gets your approval, applies the changes, then takes a full-page screenshot and self-corrects any remaining issues.

## What is AI Slop?

AI slop is the generic, statistically average look that almost every coding agent produces when given vague instructions like “make it modern” or “build a landing page.” 

Common tells (researched from 2025–2026 design community consensus):

- Purple / indigo → blue gradients and gradient text
- Inter / Roboto / Geist as the only typeface
- Three identical feature cards with Lucide icons
- Eyebrow labels, pill badges, and pulsing “Live” dots
- Colored left-border stripes on every card
- Glassmorphism + soft shadows + identical border-radius
- Centered everything + fade-up scroll animations
- Generic buzzword copy (“seamless”, “elevate your workflow”, “next-level”)

None of these are evil individually. The problem is the **cluster of unowned defaults**.

## How to Use

### As a Skill
1. Clone or copy this repository into your project or skills directory.
2. Instruct the agent: “Read and follow `SKILL.md`” or simply type `/aithings`.
3. The agent will audit, propose, wait for approval, apply, then screenshot and self-correct.

### As MCP / Detector
See [MCP.md](MCP.md). Run the Node.js detector:

```bash
node detect-slop.js .
node detect-slop.js . --json
```

## Structure

```
├── SKILL.md                 # Main agent instructions + workflow
├── skills/
│   ├── 01-color.md          # 25 color & atmosphere skills
│   ├── 02-typography.md     # 25 typography skills
│   ├── 03-layout.md         # 25 layout skills
│   ├── 04-components.md     # 25 component skills
│   ├── 05-motion.md         # 25 motion & interaction skills
│   └── 06-copy.md           # 25 copy & credibility skills
├── detect-slop.js           # Node.js automatic detector
├── package.json
├── MCP.md                   # MCP / skill setup instructions
├── LICENSE
└── README.md
```

## Philosophy

- **Intentional over average**. Every design decision should be traceable to the product, brand, or user.
- **Describe → Approve → Apply → Screenshot → Self-correct**.
- Prefer restraint, hierarchy, and real content over decorative defaults.
- Accessibility and readability are non-negotiable.

## License

Apache License 2.0. See [LICENSE](LICENSE).

---

Created for agents that want to stop shipping purple gradients.

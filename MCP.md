# AI Things MCP / Skill Configuration

This skill can be used in two ways:

## 1. As a Skill (Claude Code, Codex, Cursor, etc.)

Tell your agent:
```
Read and follow the instructions in SKILL.md from https://github.com/withermen/Ai-dizayn-things
```

Or clone the repo and say `/aithings`.

## 2. As an MCP Tool

Add this to your MCP config (e.g. Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "ai-things": {
      "command": "npx",
      "args": ["-y", "github:withermen/Ai-dizayn-things"]
    }
  }
}
```

Or run the detector directly:

```bash
node detect-slop.js .
node detect-slop.js . --json
```

The detector scans your project and outputs findings that the agent can then fix using the skills.

#!/usr/bin/env node
/**
 * AI Things — AI Slop Detector
 * Scans HTML, CSS, JSX, TSX, Vue, Svelte files for common AI slop patterns.
 * Outputs a structured report for coding agents.
 *
 * Usage:
 *   node detect-slop.js [directory]
 *   node detect-slop.js . --json
 */

const fs = require('fs');
const path = require('path');

const PATTERNS = [
  {
    id: 'purple-gradient',
    category: 'Color',
    severity: 'critical',
    name: 'Purple / Indigo → Blue Gradient',
    regex: /(?:from-|via-|to-)?(?:violet|purple|indigo|fuchsia)-\d{2,3}|bg-gradient-to-[a-z]+[^;{]*?(?:violet|purple|indigo)/gi,
    description: 'Classic AI slop gradient (violet/purple/indigo).'
  },
  {
    id: 'gradient-text',
    category: 'Color',
    severity: 'critical',
    name: 'Gradient Text',
    regex: /bg-clip-text|text-transparent[^;{]*gradient|background-clip:\s*text/gi,
    description: 'Gradient clipped to text.'
  },
  {
    id: 'inter-font',
    category: 'Typography',
    severity: 'high',
    name: 'Inter / Roboto / Geist Font',
    regex: /font-family:\s*['"]?(Inter|Roboto|Geist|system-ui)['"]?/gi,
    description: 'Default AI typeface.'
  },
  {
    id: 'eyebrow',
    category: 'Typography',
    severity: 'medium',
    name: 'Eyebrow Label',
    regex: /uppercase[^;{]*tracking-(?:wide|wider|widest)|text-xs[^;{]*uppercase/gi,
    description: 'Small uppercase label above headings.'
  },
  {
    id: 'three-cards',
    category: 'Layout',
    severity: 'high',
    name: 'Three Identical Feature Cards',
    regex: /grid-cols-3|grid-template-columns:\s*repeat\(3/gi,
    description: 'Classic 3-column feature grid.'
  },
  {
    id: 'pill-badge',
    category: 'Layout',
    severity: 'medium',
    name: 'Pill Badge Above Headline',
    regex: /rounded-full[^;{]*(?:badge|pill|chip)|✨|🚀|Now with AI|Powered by AI/gi,
    description: 'Decorative pill/badge above hero.'
  },
  {
    id: 'glassmorphism',
    category: 'Components',
    severity: 'medium',
    name: 'Glassmorphism / Frosted Glass',
    regex: /backdrop-blur|bg-white\/\d+|bg-black\/\d+/gi,
    description: 'Frosted glass effect on cards.'
  },
  {
    id: 'left-border',
    category: 'Components',
    severity: 'high',
    name: 'Colored Left Border Stripe',
    regex: /border-l-4|border-left:\s*\d+px/gi,
    description: 'Colored left border on cards.'
  },
  {
    id: 'fade-up',
    category: 'Motion',
    severity: 'medium',
    name: 'Fade-Up on Scroll',
    regex: /animate-fade|fade-in-up|intersection.*observer.*opacity/gi,
    description: 'Scroll-triggered fade animations.'
  },
  {
    id: 'buzzwords',
    category: 'Copy',
    severity: 'medium',
    name: 'Generic Buzzwords',
    regex: /\b(seamless|elevate|unlock|supercharge|next-level|cutting-edge|world-class|effortless|revolutionary|game.?changer)\b/gi,
    description: 'Empty marketing buzzwords.'
  },
  {
    id: 'em-dash',
    category: 'Copy',
    severity: 'low',
    name: 'Em Dash Overuse',
    regex: /—/g,
    description: 'Em dashes (common AI writing tell).'
  },
  {
    id: 'lucide-icons',
    category: 'Components',
    severity: 'medium',
    name: 'Default Lucide Icons',
    regex: /lucide-react|from ['"]lucide|Sparkles|Zap|Brain|Rocket/gi,
    description: 'Overuse of default icon set.'
  }
];

function walkDir(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(file)) {
        walkDir(fullPath, fileList);
      }
    } else if (/\.(html|css|scss|jsx|tsx|vue|svelte|js|ts)$/i.test(file)) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

function scanFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const findings = [];

  for (const pattern of PATTERNS) {
    const matches = content.match(pattern.regex);
    if (matches && matches.length > 0) {
      findings.push({
        ...pattern,
        file: filePath,
        count: matches.length,
        samples: matches.slice(0, 3)
      });
    }
  }

  return findings;
}

function main() {
  const targetDir = process.argv[2] || '.';
  const jsonOutput = process.argv.includes('--json');

  if (!fs.existsSync(targetDir)) {
    console.error(`Directory not found: ${targetDir}`);
    process.exit(1);
  }

  const files = walkDir(targetDir);
  const allFindings = [];

  for (const file of files) {
    const findings = scanFile(file);
    allFindings.push(...findings);
  }

  // Group by severity
  const grouped = {
    critical: allFindings.filter(f => f.severity === 'critical'),
    high: allFindings.filter(f => f.severity === 'high'),
    medium: allFindings.filter(f => f.severity === 'medium'),
    low: allFindings.filter(f => f.severity === 'low')
  };

  if (jsonOutput) {
    console.log(JSON.stringify({ total: allFindings.length, findings: allFindings, grouped }, null, 2));
    return;
  }

  console.log('\n🔍 AI Things — Slop Detector Report\n');
  console.log(`Scanned ${files.length} files. Found ${allFindings.length} potential issues.\n`);

  if (allFindings.length === 0) {
    console.log('✅ No obvious AI slop patterns detected. Nice work!');
    return;
  }

  for (const [severity, items] of Object.entries(grouped)) {
    if (items.length === 0) continue;
    console.log(`\n${severity.toUpperCase()} (${items.length})`);
    console.log('─'.repeat(40));
    for (const item of items) {
      console.log(`• [${item.category}] ${item.name}`);
      console.log(`  File: ${item.file} (${item.count} matches)`);
      console.log(`  ${item.description}`);
      if (item.samples.length) {
        console.log(`  Samples: ${item.samples.slice(0, 2).join(' | ')}`);
      }
      console.log('');
    }
  }

  console.log('\n💡 Tip: Use /aithings in your coding agent to get specific fixes for these issues.');
  console.log('   Full skill: https://github.com/withermen/Ai-dizayn-things\n');
}

main();

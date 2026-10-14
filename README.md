# Vibe Code Your Own WordPress Plugin

Workshop materials for a hands-on workshop where participants create their own WordPress plugin using AI tools, then check it with Plugin Check and talk honestly about whether it belongs on a real site. No coding experience required.

Current version: 120 minutes, WordCamp Netherlands, 12 November 2026. First given as a 45-minute workshop at WordPress Meetup Amsterdam in May 2026.

## For participants

Visit the **[preparation page](https://pluginvibes.modub.nl/)** to get set up before the workshop (also at [mdubbelm.github.io/vibe-code-wp-plugin](https://mdubbelm.github.io/vibe-code-wp-plugin/)).

The workshop site has five pages:

| Page | URL |
|------|-----|
| Preparation | `/` |
| Guide | `/guide.html` |
| Plugin ideas | `/ideas.html` |
| Prompts | `/prompts.html` |
| Tips & next steps | `/tips.html` |

## What's in this repo

```
docs/                        → GitHub Pages site (participant-facing)
├── index.html               → Preparation page with setup instructions
├── guide.html               → Step-by-step guide (Playground & LocalWP)
├── ideas.html               → Plugin ideas list for inspiration
├── prompts.html             → Ready-to-copy prompts for four plugins
├── tips.html                → Tips, security info & next steps
├── presentation.html        → Slide deck (reveal.js) with speaker notes
├── img/                     → Screenshots used in the guide
└── my-first-plugin.zip      → Starter plugin download

facilitator/                 → Facilitator materials (not public-facing)
├── guide.md                 → Facilitator's guide (timeline, tips, common problems)
├── testplan.md              → Dry-run checklist
├── voorbereidingspagina-deelnemers.md → Source for prep page content
├── plugins/                 → Reference plugins (what good AI output looks like), plus one bad example
│   ├── demo-reading-time/   → Live demo plugin for Phase 1
│   ├── reading-time/        → Choice 1: Reading Time (⭐ Easy)
│   ├── external-link-icon/  → Choice 2: External Link Icon (⭐ Easy)
│   ├── maintenance-mode/    → Choice 3: Maintenance Mode (⭐⭐ Medium)
│   ├── custom-login-logo/   → Choice 4: Custom Login Logo (⭐⭐⭐ Hard)
└── prompts/                 → Reference prompts with expected results and pitfalls
```

## Workshop overview

| | |
|---|---|
| **Duration** | 120 min, including a 10-minute break |
| **Audience** | WordPress users, no coding experience needed. 15–30 people, 1–2 teaching assistants |
| **What they'll do** | Write a prompt, let AI generate a plugin, install and test it, run Plugin Check's Security checks, fix one finding (or find out why "zero findings" isn't the same as safe), reflect |
| **Tools needed** | Laptop, WordPress (Playground in the browser, or LocalWP), any AI chatbot |

### Phases (Bloom's Taxonomy)

| Phase | Time | Bloom |
|---|---|---|
| 0. Welcome and setup triage | 8 min | |
| 1. Intro and live demo | 15 min | Remember + Understand |
| 2. Hands-on: Round 1 build (30), checkpoint (8), break (10), Plugin Check walkthrough (8), Round 2 check and fix (20) | 76 min | Apply + Create, then Analyze |
| 3. Honest reflection and closing | 18 min | Analyze + Evaluate |
| Buffer | 3 min | |

Details: [`facilitator/guide.md`](facilitator/guide.md).

## License

Workshop materials: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
Plugin code: [GPL-2.0-or-later](https://www.gnu.org/licenses/gpl-2.0.html)

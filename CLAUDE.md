# Workshop: Vibe Code Your Own WordPress Plugin

## About this project
Workshop materials for "Vibe Code Your Own WordPress Plugin in 45 minutes".
Target audience: WordPress users with no coding experience.

## Directory structure

```
Workshop_plugin_AI/
├── CLAUDE.md                          ← This file
├── draaiboek-workshopleider.md        ← Facilitator's guide
├── voorbereidingspagina-deelnemers.md ← Participant preparation page
├── conversatie-vibe-coding-workshop.md ← Original brainstorm (Dutch)
├── my-first-plugin.zip                ← Starter plugin (handout)
├── plugins/                           ← All built plugins
│   ├── demo-reading-time/             ← Live demo plugin (Phase 1)
│   ├── reading-time/                  ← Choice 1: Reading Time
│   ├── external-link-icon/            ← Choice 2: External Link Icon
│   ├── maintenance-mode/              ← Choice 3: Maintenance Mode
│   └── custom-login-logo/             ← Choice 4: Custom Login Logo
├── prompts/                           ← Reference prompts per plugin
├── handouts/                          ← Participant handouts
└── test/                              ← Test notes and checklists
```

## WordPress plugin conventions
- Plugin header required (Plugin Name, Description, Version)
- `if ( ! defined( 'ABSPATH' ) ) exit;` at the top
- Prefix functions with plugin slug (e.g. `rt_` for reading-time)
- Escaping: `esc_html()`, `esc_attr()`, `esc_url()` on all output
- Sanitization: `sanitize_text_field()`, `absint()` on all input
- Nonces for forms: `wp_nonce_field()` / `check_admin_referer()`
- Text domain for i18n: `__('text', 'plugin-slug')`

## Testing
- Local: LocalWP or WordPress Playground
- Every plugin must be activatable without PHP errors
- Every plugin must be deactivatable without side effects
- Test on a fresh WP installation (no other plugins active)

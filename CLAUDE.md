# Workshop: Vibe Code je eigen WordPress Plugin

## Over dit project
Workshop materialen voor "Vibe Code je eigen WordPress Plugin in 45 minuten".
Doelgroep: WordPress-gebruikers zonder programmeerervaring.

## Mapstructuur

```
Workshop_plugin_AI/
├── CLAUDE.md                          ← Dit bestand
├── draaiboek-workshopleider.md        ← Draaiboek voor de workshopleider
├── voorbereidingspagina-deelnemers.md ← Voorbereidingsinstructies deelnemers
├── conversatie-vibe-coding-workshop.md ← Originele brainstorm
├── mijn-eerste-plugin.zip             ← Starter plugin (uitdelen)
├── plugins/                           ← Alle gebouwde plugins
│   ├── demo-reading-time/             ← Live demo plugin (Fase 1)
│   ├── reading-time/                  ← Keuze 1: Leestijd-schatting
│   ├── external-link-icon/            ← Keuze 2: Externe link icoon
│   ├── maintenance-mode/              ← Keuze 3: Onderhoudsmode
│   └── custom-login-logo/             ← Keuze 4: Custom login logo
├── prompts/                           ← Referentieprompts per plugin
├── handouts/                          ← Handouts voor deelnemers
└── test/                              ← Testnotities en checklists
```

## WordPress plugin conventies
- Plugin header verplicht (Plugin Name, Description, Version)
- `if ( ! defined( 'ABSPATH' ) ) exit;` bovenaan
- Prefix functies met plugin-slug (bijv. `rt_` voor reading-time)
- Escaping: `esc_html()`, `esc_attr()`, `esc_url()` op alle output
- Sanitization: `sanitize_text_field()`, `absint()` op alle input
- Nonces voor formulieren: `wp_nonce_field()` / `check_admin_referer()`
- Text domain voor i18n: `__('tekst', 'plugin-slug')`

## Testen
- Lokaal: LocalWP of WordPress Playground
- Elke plugin moet activeerbaar zijn zonder PHP errors
- Elke plugin moet deactiveerbaar zijn zonder bijwerkingen
- Test op een verse WP-installatie (geen andere plugins actief)

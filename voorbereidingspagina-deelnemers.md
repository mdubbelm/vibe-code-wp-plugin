# Voorbereiding: "Vibe Code je eigen WordPress Plugin"

Welkom! In deze workshop ga je in 45 minuten je eigen WordPress-plugin maken met behulp van AI. Geen programmeerervaring nodig — maar een beetje voorbereiding maakt het verschil.

**Heb je minder dan 10 minuten?** Spring naar [Optie B: Zero Install](#optie-b-zero-install-wordpress-playground) — je hebt dan alleen een browser en een AI-tool nodig.

**Kom je er niet uit?** Kom 15 minuten vóór de workshop — dan helpen we je op weg.

---

## Stap 1: WordPress-omgeving klaarzetten

Je hebt een werkende WordPress-installatie nodig waar je plugins op kunt testen. Kies één van deze opties:

### Optie A: LocalWP (aanbevolen)

LocalWP is een gratis programma dat WordPress lokaal op je laptop draait. Geen server, geen hosting, geen kosten.

1. Download LocalWP via [localwp.com](https://localwp.com/)
2. Installeer het programma
3. Klik op **"Create a new site"**
4. Kies een naam (bijv. "workshop") en klik door met de standaardinstellingen
5. Wacht tot de site is aangemaakt
6. Klik op **"WP Admin"** om te controleren of je WordPress-dashboard opent

**Duurt ongeveer:** 10 minuten (inclusief download)

**Check:** Kun je inloggen op je WordPress-dashboard? Dan ben je klaar.

### Optie B: Zero Install — WordPress Playground

Geen zin of geen tijd om iets te installeren? WordPress Playground draait volledig in je browser.

1. Ga naar [playground.wordpress.net](https://playground.wordpress.net/)
2. Wacht tot WordPress is geladen (dit duurt een paar seconden)
3. Je hebt nu een volledig werkende WordPress-installatie in je browser

**Let op:**
- Alles wat je maakt verdwijnt als je de tab sluit (tenzij je exporteert)
- Werkt het best in Chrome of Edge
- Je kunt plugins installeren via de admin, óf bestanden direct bewerken via de ingebouwde editor

**Duurt ongeveer:** 30 seconden

---

## Stap 2: AI-tool klaarzetten

Je hebt een AI-chatbot nodig die code kan genereren. Kies er één:

| Tool | Account nodig? | Gratis? | Link |
|------|---------------|---------|------|
| ChatGPT | Ja | Gratis versie beschikbaar | [chat.openai.com](https://chat.openai.com/) |
| Claude | Ja | Gratis versie beschikbaar | [claude.ai](https://claude.ai/) |
| Copilot | Nee (Microsoft account) | Gratis | [copilot.microsoft.com](https://copilot.microsoft.com/) |
| Gemini | Ja (Google account) | Gratis | [gemini.google.com](https://gemini.google.com/) |

**Check:** Kun je een bericht sturen en krijg je een antwoord? Dan ben je klaar.

---

## Stap 3: Code-editor (optioneel maar handig)

Als je LocalWP gebruikt, is het handig om een code-editor te hebben om bestanden te bewerken. Als je WordPress Playground gebruikt, kun je deze stap overslaan.

- **Visual Studio Code** (gratis): [code.visualstudio.com](https://code.visualstudio.com/)
- Of gebruik Kladblok / TextEdit — het werkt ook

---

## Stap 4: Voorkennis opfrissen (5 minuten lezen)

Je hoeft niet te kunnen programmeren, maar het helpt als je dit weet:

### Wat is een WordPress-plugin?

Een plugin is een stukje extra functionaliteit dat je aan WordPress toevoegt. Technisch gezien is het een map met minimaal één PHP-bestand erin, dat in `wp-content/plugins/` staat.

### Hoe ziet een minimale plugin eruit?

```php
<?php
/**
 * Plugin Name: Mijn Plugin
 * Description: Dit is een beschrijving.
 * Version: 1.0.0
 */

// Hier komt de code die iets doet
```

Dat is het. Die eerste regels (de "plugin header") vertellen WordPress dat dit een plugin is. De rest is jouw code — of in ons geval: de code die AI voor je schrijft.

### Hoe installeer je een plugin die je zelf hebt gemaakt?

**Met LocalWP:**
1. Open de map van je site → `app/public/wp-content/plugins/`
2. Maak een nieuwe map aan (bijv. `mijn-plugin`)
3. Zet je PHP-bestand erin
4. Ga naar WP Admin → Plugins → Activeer

**Met WordPress Playground:**
1. Kopieer je code
2. Ga naar WP Admin → Plugins → Plugin-editor (of maak een zip en upload)

---

## Prompttemplate voor de workshop

Dit is het template dat we tijdens de workshop gebruiken. Je mag het alvast bekijken:

```
Maak een WordPress plugin met de volgende specificaties:

**Naam:** [naam van je plugin]
**Functie:** [beschrijf in 1-2 zinnen wat de plugin moet doen]
**Waar zichtbaar:** [in de frontend / in de admin / beide]
**Gedrag:** [beschrijf specifiek wat er moet gebeuren]

Technische eisen:
- Gebruik WordPress best practices (hooks, filters, sanitization)
- Voeg een plugin header toe met naam, beschrijving en versie
- Voorkom directe toegang tot het bestand
- Zet alle code in één PHP-bestand
- Voeg korte comments in de code toe die uitleggen wat elk deel doet
```

**Tip:** hoe specifieker je prompt, hoe beter het resultaat. "Maak een plugin die iets met afbeeldingen doet" levert minder op dan "Maak een plugin die automatisch alt-tekst toevoegt aan afbeeldingen die nog geen alt-tekst hebben."

---

## Checklist

- [ ] Ik heb een werkende WordPress-omgeving (LocalWP of Playground)
- [ ] Ik heb een AI-tool die ik kan gebruiken
- [ ] Ik heb optioneel een code-editor geïnstalleerd
- [ ] Ik snap globaal wat een WordPress-plugin is
- [ ] Ik heb het prompttemplate bekeken

**Alles aangevinkt? Dan ben je klaar voor de workshop!**

**Lukt de voorbereiding niet?** Geen stress — kom 15 minuten eerder, dan helpen we je.

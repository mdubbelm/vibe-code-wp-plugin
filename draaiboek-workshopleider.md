# Draaiboek: "Vibe Code je eigen WordPress Plugin"

## Workshop in het kort

| | |
|---|---|
| **Duur** | 45 minuten (+ optioneel 15 min voorbereiding vooraf) |
| **Doelgroep** | WordPress-gebruikers, geen programmeerervaring vereist |
| **Leeruitkomsten** | Deelnemers kunnen zelfstandig een eenvoudige WP-plugin laten genereren door een AI-tool, deze installeren, testen en kritisch beoordelen |
| **Benodigdheden** | Laptop, lokale WP-installatie óf WordPress Playground, AI-tool naar keuze |
| **Bloom-niveaus** | Onthouden → Begrijpen → Toepassen → Analyseren → Evalueren → Creëren |

---

## Voorbereiding door workshopleider

### Materiaal klaarzetten

- [ ] Voorbereidingspagina online zetten (zie apart document)
- [ ] Zip-bestand met startplugin klaarzetten (zie bijlage)
- [ ] Voorbeeldprompts printen of digitaal beschikbaar maken
- [ ] Eigen demo-plugin klaarhebben (bijv. Reading Time Estimator)
- [ ] WordPress Playground fallback-link testen: `https://playground.wordpress.net/`
- [ ] Checken of wifi voldoende capaciteit heeft voor de groep

### Optioneel: voorbereidsessie (15 min vóór de workshop)

Bied aan om 15 minuten voor aanvang klaar te staan voor deelnemers die:

- Hulp nodig hebben bij het installeren van LocalWP
- WordPress Playground nog niet hebben getest
- Geen AI-tool account hebben

Communiceer dit expliciet in de uitnodiging:
> "Heb je de voorbereiding nog niet kunnen doen? Kom 15 minuten eerder, dan helpen we je op weg."

---

## Tijdlijn (45 minuten)

### Fase 0 — Check-in (2 min)

**Doel:** Iedereen klaar om te starten.

- "Heeft iedereen een werkende WordPress-omgeving? Steek je hand op als je nog vastloopt."
- Verwijs vastlopers naar WordPress Playground als fallback
- Deel de link naar het prompttemplate (QR-code op scherm)

---

### Fase 1 — Introductie & Demo (8 min)

**Bloom: Onthouden + Begrijpen**

**Wat je doet:**

1. **Wat is vibe coding?** (2 min)
   - "Je beschrijft in gewone taal wat je wilt. AI schrijft de code. Jij stuurt bij."
   - Benoem: dit is geen programmeren leren — dit is leren samenwerken met AI
   - Kort: wanneer is dit nuttig, wanneer niet?

2. **Live demo** (5 min)
   - Open je AI-tool (scherm delen)
   - Laat een prompt zien, bijv.:
     > "Maak een WordPress plugin genaamd 'Reading Time'. De plugin berekent de geschatte leestijd van een bericht (250 woorden per minuut) en toont dit boven de content als een paragraaf met de tekst 'Geschatte leestijd: X minuten'. Gebruik de WordPress `the_content` filter."
   - Kopieer de output naar een bestand, zet het in `wp-content/plugins/`, activeer, laat het resultaat zien
   - **Belangrijk:** laat ook zien dat het niet perfect is — bijv. "kijk, hier ontbreekt escaping" of "de vertaling werkt nog niet"

3. **Samenvatten** (1 min)
   - De stappen: prompt schrijven → code genereren → installeren → testen → bijsturen
   - "Nu gaan jullie dit zelf doen."

---

### Fase 2 — Zelf aan de slag (22 min)

**Bloom: Toepassen + Creëren**

**Wat deelnemers doen:**

1. **Kies een plugin-idee** (2 min)
   - Bied 3-4 opties aan (zie keuzekaart hieronder), óf laat mensen een eigen idee kiezen
   - Tip: eigen idee mag, maar houd het simpel — "één ding goed doen"

2. **Schrijf je prompt** (3 min)
   - Gebruik het prompttemplate van de voorbereidingspagina
   - Tip aan deelnemers: wees specifiek over wat je wilt zien, waar het moet verschijnen, hoe het eruit moet zien

3. **Genereer, installeer, test** (15 min)
   - Kopieer de code naar een .php-bestand
   - Zet het in wp-content/plugins/ (of upload als zip via de admin)
   - Activeer en test
   - Werkt het niet? Pas je prompt aan en probeer opnieuw

4. **Itereer** (2 min)
   - "Vraag de AI om een verbetering: een settings-pagina, betere styling, of een fix voor iets dat niet werkt"

**Jouw rol tijdens fase 2:**
- Loop rond, kijk mee, help waar nodig
- Veelvoorkomende problemen:
  - PHP-syntaxfout → "Plak de foutmelding terug in de AI en vraag om een fix"
  - Plugin verschijnt niet → bestandsnaam check, plugin header check
  - "Het doet niks" → check of de plugin geactiveerd is, kijk in de broncode of de output er staat
- Geef complimenten op goede prompts, niet alleen op werkende code

**Keuzekaart plugin-ideeën:**

| Plugin | Wat het doet | Moeilijkheid |
|--------|-------------|--------------|
| **Leestijd-schatting** | Toont geschatte leestijd boven berichten | ⭐ Makkelijk |
| **Externe link icoon** | Voegt ↗ toe aan externe links + target="_blank" | ⭐ Makkelijk |
| **Onderhoudsmode** | Toont "even offline"-pagina aan bezoekers | ⭐⭐ Gemiddeld |
| **Custom login logo** | Eigen logo op het WP loginscherm | ⭐⭐ Gemiddeld |
| **Eigen idee** | Jij bepaalt! Houd het bij één functie. | ❓ Variabel |

---

### Fase 3 — Show & Tell + Reflectie (13 min)

**Bloom: Analyseren + Evalueren**

**Show & Tell (6 min):**
- Vraag 3-4 vrijwilligers om hun scherm te delen (max 1,5 min per persoon)
- Laat ze vertellen: welk idee, welke prompt, wat was het resultaat?
- Vraag door: "Moest je je prompt aanpassen? Wat veranderde je?"

**Kritische reflectie (5 min):**

Stel deze vragen aan de groep:

1. **"Zou je deze plugin op een echte site durven zetten?"**
   - Bespreek: security (sanitization, nonces), wat als een gebruiker kwaadaardige input geeft?
   
2. **"Wat mist er?"**
   - Vertaalbaarheid (i18n), toegankelijkheid (a11y), uninstall cleanup, coding standards
   
3. **"Wat is vibe coding wél en wat is het niet?"**
   - Wél: snel prototypen, idee testen, leren hoe WP-plugins werken
   - Niet: productie-ready code, vervanging voor een developer, "klaar"

4. **"Hoe zou je de kwaliteit kunnen controleren?"**
   - Plugin Check (PCP), handmatige review, laten testen door iemand anders
   - Bruggetje: "Dit is waar het écht leren begint — ná de workshop"

**Afsluiting (2 min):**
- Deel een "volgende stappen"-lijstje (staat op de handout):
  - WordPress Plugin Handbook: https://developer.wordpress.org/plugins/
  - Plugin Check installeren en je plugin erdoorheen halen
  - Probeer je prompt te verbeteren totdat PCP geen fouten meer geeft
- "Vragen? Neem contact op via [jouw info]"

---

## Risico's en mitigatie

| Risico | Mitigatie |
|--------|----------|
| Wifi valt uit | WordPress Playground werkt ook offline na eerste load. Zorg voor offline fallback-instructies. |
| AI-tool is traag/down | Heb een tweede AI-tool als backup (bijv. Claude én ChatGPT). Heb een pre-gegenereerde plugin klaar als noodoplossing. |
| Deelnemers raken de tijd kwijt aan installatie | Voorbereidsessie + WordPress Playground als zero-install fallback |
| Te grote spreiding in niveau | Keuzekaart met moeilijkheidsniveaus + stretch goals voor gevorderden |
| "Het werkt niet en ik weet niet waarom" | Leer deelnemers de foutmelding terug te plakken in de AI — dit is zélf een vibe-coding-skill |

---

## Stretch goals (voor snelle deelnemers)

- "Vraag de AI om een settings-pagina toe te voegen"
- "Vraag de AI om je plugin vertaalbaar te maken met `__()` en `_e()`"
- "Laat de AI unit tests schrijven voor je plugin"
- "Vraag de AI om je plugin te laten voldoen aan WordPress Coding Standards"
- "Kun je de plugin als zip-bestand exporteren en aan je buurman geven?"

---

## Bijlage: Starter-plugin structuur

De zip die je vooraf deelt bevat een minimale plugin als referentie:

```
mijn-eerste-plugin/
├── mijn-eerste-plugin.php
└── readme.txt
```

`mijn-eerste-plugin.php`:
```php
<?php
/**
 * Plugin Name: Mijn Eerste Plugin
 * Description: Een startpunt voor je vibe-coded plugin.
 * Version: 1.0.0
 * Author: [Jouw naam]
 * Text Domain: mijn-eerste-plugin
 */

// Voorkom directe toegang
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Hier komt je code
```

Dit helpt deelnemers begrijpen wat de minimale structuur is, en geeft ze iets om op terug te vallen als de AI-output niet klopt.

# Conversatie: Vibe Code je eigen WordPress Plugin — Workshop opzet

---

## Vraag 1: Wat is een goede plugin om te vibe coden?

**Mo:** Wat is een wordpress plugin die je in ca 30 minuten kunt vibe coden?

**Claude:** Goeie vraag! Laat me even nadenken over wat realistisch is in ~30 minuten vibe coding.

Een WordPress plugin die goed binnen dat tijdsbestek past, moet **simpel qua scope** zijn maar toch nuttig. Hier zijn een paar realistische opties:

**1. "Reading Time Estimator"**
Berekent en toont geschatte leestijd boven elk bericht. Simpele logica (woorden tellen / 200), één filter op `the_content`, optioneel een settings page. Weinig edge cases.

**2. "External Link Icon"**
Voegt automatisch een icoontje (↗) toe aan alle externe links in je content en zet `target="_blank"` + `rel="noopener"`. Puur content filtering, minimale UI.

**3. "Simple Maintenance Mode"**
Eén toggle in de admin om een "We zijn zo terug"-pagina te tonen aan niet-ingelogde bezoekers. Settings page + één `template_redirect` hook.

**4. "Disable Comments Globally"**
Schakelt comments uit op alle post types, verwijdert menu-items en admin bar links. Geen database-interactie nodig, puur hooks en filters.

**5. "Custom Login Logo"**
Laat je via de Customizer of een simpele settings page het logo op het WordPress login-scherm aanpassen. Eén media uploader + wat CSS output.

---

**Waarom deze haalbaar zijn in 30 min met vibe coding:**
- Elk heeft maar 1-2 core functies
- Geen custom database tables nodig
- Geen complexe JavaScript/React UI
- De WordPress hooks zijn goed gedocumenteerd, dus een AI kan ze makkelijk genereren
- Testbaar in een paar minuten

**Waar je realistisch tegenaan loopt:**
- Sanitization/escaping goed krijgen (security)
- Uninstall hook / cleanup
- Vertaalbaarheid (i18n)
- WordPress coding standards

Die laatste punten skipt vibe coding vaak — prima voor een intern tool of experiment, maar niet meteen klaar voor de plugin directory.

Wil je er eentje uitwerken? Gezien jouw WordPress-achtergrond en presentaties bij de Amsterdam meetup zou dit ook een leuk demo-onderwerp kunnen zijn.

---

## Vraag 2: Help me met de workshopopzet volgens Bloom

**Mo:** Ik wil dit als workshop geven. Je bent een onderwijskundige, help me met de opzet volgens de taxonomie van bloom. Ik wil ook weten als mensen nog iets voor koeten bereiden voorafgaand aan de workshop

**Claude:** Leuk idee! Laat me even goed nadenken over hoe je dit didactisch sterk opzet.

### Workshop: "Vibe Code je eigen WordPress Plugin in 30 minuten"

#### Bloom's Taxonomie als kapstok

De taxonomie van Bloom beschrijft zes niveaus van cognitieve complexiteit: onthouden, begrijpen, toepassen, analyseren, evalueren, en creëren. In 30 minuten kun je niet alle niveaus diep raken, dus je moet scherpe keuzes maken.

---

#### Voorbereiding deelnemers (vóór de workshop)

Dit is cruciaal — zonder voorbereiding gaat je halve tijd op aan setup.

**Technische prerequisites:**
- Een werkende lokale WordPress-installatie (bijv. LocalWP — dat is het meest laagdrempelig)
- Een account bij een AI-tool naar keuze (ChatGPT, Claude, Copilot — whatever ze al hebben)
- Een code-editor geïnstalleerd (VS Code is de veiligste keuze)
- Eventueel: de plugin "Plugin Check (PCP)" alvast geïnstalleerd om output te kunnen evalueren

**Kennisvoorwaarden:**
- Basiskennis WordPress (weten wat een plugin is, waar ze staan in de mapstructuur)
- Géén programmeerervaring vereist — maar wel nuttig om te benoemen dat dit geen "leer programmeren"-workshop is

**Tip:** Stuur een week van tevoren een checklist-mail met screenshots. Bied een "helpdesk-momentje" aan van 15 min vóór de workshop voor wie vastloopt op installatie.

---

#### Workshopstructuur

**Fase 1 — Oriënteren & Begrijpen (5 min)**
*Bloom: onthouden + begrijpen*

- Wat is vibe coding? Kort en scherp: je beschrijft in natuurlijke taal wat je wilt, AI genereert de code, jij stuurt bij.
- Laat één af voorbeeld zien van een werkende simpele plugin (bijv. Reading Time Estimator). Toon de prompt, de output, het resultaat in WordPress.
- Stel de verwachting: "We gaan nu zelf iets maken. Het hoeft niet perfect te zijn."

**Fase 2 — Toepassen (18-20 min)**
*Bloom: toepassen + creëren*

Dit is de kern. Deelnemers gaan zelf aan de slag.

- Geef 3-4 plugin-ideeën om uit te kiezen (met korte beschrijving van wat het doet), óf laat mensen een eigen idee formuleren
- Geef een **startprompt-template** mee, bijvoorbeeld:

> *"Maak een WordPress plugin genaamd 'Reading Time'. De plugin berekent de geschatte leestijd van een bericht (250 woorden per minuut) en toont dit boven de content als een paragraaf met de tekst 'Geschatte leestijd: X minuten'. Gebruik de WordPress `the_content` filter."*

- Deelnemers: prompt schrijven → code genereren → in wp-content/plugins zetten → activeren → testen
- Jij loopt rond, helpt bij problemen, geeft tips over hoe je je prompt kunt verbeteren als de output niet klopt

**Fase 3 — Evalueren & Reflecteren (5-7 min)**
*Bloom: analyseren + evalueren*

Dit is didactisch het belangrijkste deel — hier vindt het echte leren plaats.

- Laat 2-3 deelnemers hun resultaat kort tonen (30 sec per persoon)
- Bespreek samen: wat ging goed, wat ging fout?
- Stel kritische vragen:
  - "Zou je dit in productie durven gebruiken? Waarom wel/niet?"
  - "Wat zou je moeten controleren voordat je dit op een echte site zet?"
  - "Wat gebeurt er als je de plugin deactiveert — ruimt hij zijn data op?"
- Noem de beperkingen: security, accessibility, i18n, coding standards — dingen die vibe coding vaak skipt

---

#### Didactische overwegingen

**Wat je bewust weglaat (en waarom dat oké is):**
Het "analyseren"-niveau van Bloom komt maar beperkt aan bod. Dat is realistisch — in 30 minuten kun je niet ook nog code regel voor regel doorlopen. Je kunt wel een handout meegeven met "dit zou je hierna moeten checken" als brug naar zelfstudie.

**Differentiatie:**
Ervaren developers zullen sneller klaar zijn. Heb een "stretch goal" klaar: "Kun je nu de AI vragen om unit tests toe te voegen?" of "Vraag de AI om je plugin te laten voldoen aan WordPress coding standards."

**Wat ik zou heroverwegen:**
- 30 minuten is krap. Als je de mogelijkheid hebt om er 45 te maken, geeft dat veel meer ruimte voor fase 3, en dáár zit de meeste leerwaarde.
- Overweeg of je mensen wilt laten kiezen uit vaste plugin-ideeën of vrij laten. Vrije keuze is leuker maar geeft meer chaos en meer support-vragen. Voor een eerste keer zou ik 3 vaste opties aanbieden.

---

## Vraag 3: Maak het concrete materiaal

**Mo:** Ja graag. Ga uit van 45 minuten. Misschien kunnen we een groep die dat nodig heeft eerst helpen met voorbereiden? Of kunnen we een soort installable zip geven of een website met een handleiding vooraf en een download/zip/script?

**Claude:** Goed idee om dat installatieprobleem op te lossen. Laat me even nadenken over de beste aanpak.

Er zijn eigenlijk twee uitdagingen: (1) de lokale WordPress-omgeving, en (2) het daadwerkelijke workshopmateriaal. De meest pragmatische aanpak is een combinatie: een voorbereidingspagina met heldere instructies + een kant-en-klare fallback voor wie het niet lukt.

**Opgeleverde bestanden:**

1. **Draaiboek (draaiboek-workshopleider.md)** — gids voor de workshopleider met tijdlijn (45 min), Bloom-niveaus per fase, risicomitigatie, en stretch goals voor snelle deelnemers
2. **Voorbereidingspagina (voorbereidingspagina-deelnemers.md)** — voor deelnemers, met twee paden: LocalWP voor wie de tijd heeft, WordPress Playground als zero-install fallback. Plus het prompttemplate en een checklist
3. **Starter plugin zip (mijn-eerste-plugin.zip)** — een minimale werkende plugin die deelnemers via WP Admin → Plugins → Uploaden kunnen installeren als referentie

**Overwegingen:**

- **WordPress Playground als fallback** is briljant voor de zero-install case, maar het heeft beperkingen — je kunt er niet makkelijk bestanden in zetten via de bestandsbeheerder. Deelnemers zouden de code via de ingebouwde plugin-editor moeten plakken, of een zip uploaden. Dat is een extra hobbel.
- **De 15 minuten voorbereidsessie** is een slimme zet, maar communiceer het als iets laagdrempeligs — "installatiecafé" of zo — zodat mensen zich niet schamen om te komen.

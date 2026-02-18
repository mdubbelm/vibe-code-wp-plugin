# Facilitator's Guide: "Vibe Code Your Own WordPress Plugin"

## Workshop at a glance

| | |
|---|---|
| **Duration** | 45 minutes (+ optional 15 min setup help beforehand) |
| **Audience** | WordPress users, no coding experience required |
| **Learning outcomes** | Participants can independently have an AI tool generate a simple WP plugin, install it, test it, and critically assess the result |
| **Requirements** | Laptop, local WP installation or WordPress Playground, AI tool of choice |
| **Bloom's levels** | Remember → Understand → Apply → Analyze → Evaluate → Create |

---

## Facilitator preparation

### Materials checklist

- [ ] Put the preparation page online (see separate document)
- [ ] Have the starter plugin zip ready (see appendix)
- [ ] Print or share the example prompts digitally
- [ ] Have your own demo plugin ready (Reading Time Estimator)
- [ ] Test the WordPress Playground fallback link: `https://playground.wordpress.net/`
- [ ] Check if the wifi can handle the group size

### Optional: setup session (15 min before the workshop)

Offer to be available 15 minutes before the start for participants who:

- Need help installing LocalWP
- Haven't tested WordPress Playground yet
- Don't have an AI tool account

Communicate this explicitly in the invitation:
> "Haven't had time to prepare? Come 15 minutes early and we'll help you get set up."

---

## Timeline (45 minutes)

### Phase 0 — Check-in (2 min)

**Goal:** Everyone ready to go.

- "Does everyone have a working WordPress environment? Raise your hand if you're stuck."
- Point anyone who's stuck to WordPress Playground as a fallback
- Share the link to the prompt template (QR code on screen)

---

### Phase 1 — Introduction & Demo (8 min)

**Bloom: Remember + Understand**

**What you do:**

1. **What is vibe coding?** (3 min)
   - "You describe in plain language what you want. AI writes the code. You steer and iterate."
   - This is not learning to code — this is learning to collaborate with AI
   - **When it works well:**
     - Quick prototypes and internal tools
     - Testing an idea before investing in a developer
     - Learning how something works by seeing generated code
     - Small utilities that would otherwise not be worth building
   - **When it doesn't:**
     - Production code for sites with real users (security, performance, accessibility need expert review)
     - Complex features that need to integrate with existing systems
     - Anything where you can't verify whether the result is correct
   - The key skill is not coding — it's **describing what you want clearly** and **knowing when to trust the output**

2. **Live demo** (4 min)
   - Open your AI tool (share screen)
   - Show a prompt in plain language — no technical terms:
     > "Create a WordPress plugin called 'Reading Time'. The plugin should count the words in a blog post, calculate how long it takes to read (assuming 250 words per minute), and show the result above the post as 'Estimated reading time: X minutes'. It should only appear on individual posts, not on overview pages."
   - Copy the output to a file, put it in `wp-content/plugins/`, activate, show the result
   - **Important:** also show that it's not perfect — e.g. "look, it always says 'minutes' even for 1 minute" or "there's no way to change the reading speed"

3. **Summarize** (1 min)
   - The steps: write prompt → generate code → install → test → iterate
   - "Now it's your turn."

---

### Phase 2 — Hands-on (20 min)

**Bloom: Apply + Create**

**What participants do:**

1. **Choose a plugin idea** (2 min)
   - Offer 3-4 options (see choice card below), or let people choose their own idea
   - Tip: custom ideas are fine, but keep it simple — "do one thing well"

2. **Write your prompt** (3 min)
   - Use the prompt template from the preparation page
   - Tip for participants: be specific about what you want to see, where it should appear, how it should look
   - **Note about the template:** The "Technical requirements" section in the prompt template contains terms like "hooks" and "filters". Reassure participants: "You don't need to understand these terms — they're instructions for the AI, not for you. They help the AI produce better WordPress code."

3. **Generate, install, test** (13 min)
   - Copy the code to a .php file
   - Put it in wp-content/plugins/ (or upload as zip via admin)
   - Activate and test
   - Doesn't work? Adjust your prompt and try again

4. **Iterate** (2 min)
   - "Ask the AI for an improvement: a settings page, better styling, or a fix for something that doesn't work"

**Your role during Phase 2:**
- Walk around, look over shoulders, help where needed
- Common problems:
  - PHP syntax error → "Paste the error message back into the AI and ask for a fix"
  - Plugin doesn't appear → check filename, check plugin header
  - "It does nothing" → check if plugin is activated, inspect source for output
- Compliment good prompts, not just working code

**Plugin choice card:**

| Plugin | What it does | Difficulty |
|--------|-------------|------------|
| **Reading Time** | Shows estimated reading time above posts | ⭐ Easy |
| **External Link Icon** | Adds ↗ to external links + target="_blank" | ⭐ Easy |
| **Maintenance Mode** | Shows an "offline" page to visitors | ⭐⭐ Medium |
| **Custom Login Logo** | Custom logo on the WP login screen | ⭐⭐ Medium |
| **Your own idea** | You decide! Keep it to one feature. | ❓ Varies |

---

### Phase 3 — Show & Tell + Reflection (15 min)

**Bloom: Analyze + Evaluate**

**Show & Tell (8 min):**
- Ask 2-3 volunteers to show their result (max 2.5 min per person, including setup time)
- **Practical:** have them open their site before it's their turn, so they're ready. Or: ask them to screenshot their result and share that instead of live-demoing
- Have them tell: which idea, which prompt, what was the result?
- Follow up: "Did you have to adjust your prompt? What did you change?"

**Critical reflection (5 min, or more if time allows):**

Ask these questions to the group:

1. **"Would you dare put this plugin on a real site?"**
   - Discuss: security (sanitization, nonces), what if a user provides malicious input?

2. **"What's missing?"**
   - Translations (i18n), accessibility (a11y), uninstall cleanup, coding standards

3. **"What is vibe coding good for and what isn't it?"**
   - Good for: rapid prototyping, testing ideas, learning how WP plugins work
   - Not for: production-ready code, replacing a developer, "done"

4. **"How could you check the quality?"**
   - Plugin Check (PCP), manual review, have someone else test it
   - Bridge: "This is where the real learning starts — after the workshop"

**Closing (2 min):**
- Share a "next steps" list (on the handout):
  - WordPress Plugin Handbook: https://developer.wordpress.org/plugins/
  - Install Plugin Check and run your plugin through it
  - Try to improve your prompt until PCP reports no errors
- "Questions? Reach out via [your info]"

---

## Risks and mitigation

| Risk | Mitigation |
|------|-----------|
| Wifi goes down | WordPress Playground also works offline after first load. Have offline fallback instructions ready. |
| AI tool is slow/down | Have a second AI tool as backup (e.g. Claude and ChatGPT). Have a pre-generated plugin ready as emergency fallback. |
| Participants lose time to setup | Setup session + WordPress Playground as zero-install fallback |
| Wide range of skill levels | Choice card with difficulty levels + stretch goals for advanced participants |
| "It doesn't work and I don't know why" | Teach participants to paste the error back into the AI — this itself is a vibe coding skill |

---

## Stretch goals (for fast participants)

- "Ask the AI to add a settings page"
- "Ask the AI to make your plugin translatable with `__()` and `_e()`"
- "Have the AI write unit tests for your plugin"
- "Ask the AI to make your plugin comply with WordPress Coding Standards"
- "Can you export the plugin as a zip and share it with your neighbor?"

---

## Appendix: Starter plugin structure

The zip you share beforehand contains a minimal plugin as reference:

```
my-first-plugin/
├── my-first-plugin.php
└── readme.txt
```

`my-first-plugin.php`:
```php
<?php
/**
 * Plugin Name: My First Plugin
 * Description: A starting point for your vibe-coded plugin.
 * Version: 1.0.0
 * Author: [Your name]
 * Text Domain: my-first-plugin
 */

// Prevent direct access
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Your code goes here
```

This helps participants understand the minimal structure, and gives them something to fall back on if the AI output doesn't work.

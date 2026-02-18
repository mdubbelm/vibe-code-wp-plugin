# Preparation: "Vibe Code Your Own WordPress Plugin"

Welcome! In this workshop you'll create your own WordPress plugin in 45 minutes using AI. No coding experience needed — but a little preparation makes all the difference.

**Short on time?** Jump to [Option B: Zero Install](#option-b-zero-install--wordpress-playground) — you'll only need a browser and an AI tool.

**Stuck?** Come 15 minutes before the workshop — we'll help you get set up.

---

## Step 1: Set up a WordPress environment

You need a working WordPress installation where you can test plugins. Choose one of these options:

### Option A: LocalWP (recommended)

LocalWP is a free program that runs WordPress locally on your laptop. No server, no hosting, no costs.

1. Download LocalWP from [localwp.com](https://localwp.com/)
2. Install the program
3. Click **"Create a new site"**
4. Choose a name (e.g. "workshop") and click through with the default settings
5. Wait for the site to be created
6. Click **"WP Admin"** to verify your WordPress dashboard opens

**Takes about:** 10 minutes (including download)

**Check:** Can you log in to your WordPress dashboard? Then you're ready.

### Option B: Zero Install — WordPress Playground

No time or no desire to install anything? WordPress Playground runs entirely in your browser.

1. Go to [playground.wordpress.net](https://playground.wordpress.net/)
2. Wait for WordPress to load (takes a few seconds)
3. You now have a fully working WordPress installation in your browser

**Note:**
- Everything you create disappears when you close the tab (unless you export)
- Works best in Chrome or Edge
- You can install plugins via the admin, or edit files directly via the built-in editor

**Takes about:** 30 seconds

---

## Step 2: Set up an AI tool

You need an AI chatbot that can generate code. Pick one:

| Tool | Account needed? | Free? | Link |
|------|----------------|-------|------|
| Le Chat *(Mistral, France)* | Yes | Free tier available | [chat.mistral.ai](https://chat.mistral.ai/) |
| HuggingChat *(Hugging Face, France)* | No | Free, open source | [huggingface.co/chat](https://huggingface.co/chat/) |
| ChatGPT | Yes | Free tier available | [chat.openai.com](https://chat.openai.com/) |
| Claude | Yes | Free tier available | [claude.ai](https://claude.ai/) |
| Copilot | No (Microsoft account) | Free | [copilot.microsoft.com](https://copilot.microsoft.com/) |
| Gemini | Yes (Google account) | Free | [gemini.google.com](https://gemini.google.com/) |
| Confer *(privacy-first, by Signal founder)* | No | Free (20 msg/day) | [confer.to](https://confer.to/) |

**Check:** Can you send a message and get a response? Then you're ready.

---

## Step 3: Code editor (optional but handy)

If you're using LocalWP, it helps to have a code editor for editing files. If you're using WordPress Playground, you can skip this step.

- **Visual Studio Code** (free): [code.visualstudio.com](https://code.visualstudio.com/)
- Or use Notepad / TextEdit — that works too

---

## Step 4: Brush up on the basics (5 minutes of reading)

You don't need to know how to code, but it helps to know this:

### What is a WordPress plugin?

A plugin is a piece of extra functionality that you add to WordPress. Technically, it's a folder with at least one PHP file in it, located in `wp-content/plugins/`.

### What does a minimal plugin look like?

```php
<?php
/**
 * Plugin Name: My Plugin
 * Description: This is a description.
 * Version: 1.0.0
 */

// Here goes the code that does something
```

That's it. Those first lines (the "plugin header") tell WordPress this is a plugin. The rest is your code — or in our case: the code that AI writes for you.

### How do you install a plugin you made yourself?

**With LocalWP:**
1. Open your site's folder → `app/public/wp-content/plugins/`
2. Create a new folder (e.g. `my-plugin`)
3. Put your PHP file in it
4. Go to WP Admin → Plugins → Activate

**With WordPress Playground:**
1. Copy your code
2. Go to WP Admin → Plugins → Plugin Editor (or create a zip and upload)

---

## Prompt template for the workshop

This is the template we'll use during the workshop. Feel free to have a look:

```
Create a WordPress plugin with the following specifications:

**Name:** [name of your plugin]
**Function:** [describe in 1-2 sentences what the plugin should do]
**Where visible:** [on the frontend / in the admin / both]
**Behavior:** [describe specifically what should happen]

Technical requirements:
- Follow WordPress best practices (hooks, filters, sanitization)
- Include a plugin header with name, description and version
- Prevent direct file access
- Put all code in a single PHP file
- Add short comments explaining what each part does
```

**Tip:** the more specific your prompt, the better the result. "Make a plugin that does something with images" yields less than "Make a plugin that automatically adds alt text to images that don't have any yet."

---

## Checklist

- [ ] I have a working WordPress environment (LocalWP or Playground)
- [ ] I have an AI tool I can use
- [ ] I optionally have a code editor installed
- [ ] I roughly understand what a WordPress plugin is
- [ ] I've looked at the prompt template

**Everything checked? Then you're ready for the workshop!**

**Can't get the preparation done?** No stress — come 15 minutes early and we'll help you.

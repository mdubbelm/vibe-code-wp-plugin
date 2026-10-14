# Preparation: "Vibe Code Your Own WordPress Plugin"

Source text for the participant preparation page (`docs/index.html`, EN + NL in `docs/js/i18n.js`, `index-*` keys). Version for WordCamp Netherlands, Thursday 12 November 2026, 10:45, 2 hours. Facts checked 14 October 2026; sources in `claims-ledger.md`.

---

In this workshop you build your own WordPress plugin with AI, and then check whether you would actually trust it. Two hours, no coding experience needed. What you do need is a working WordPress and an AI chat tool on the laptop you bring, and that is what this page is for. Plan about 15 minutes with Playground, or half an hour with LocalWP. Do it at home, a day or more before: there is no time to install things during the workshop.

> **You're ready when** you can see the Plugins screen of your own WordPress and you have an AI chat open in another tab.

**Only 5 minutes?** Do two things: open the workshop Playground link (Option A below) once to see that it loads, and sign in to an AI tool (Step 2). That's enough to take part.

---

## Step 1: Set up WordPress

You need a WordPress site where you can install and break plugins without consequences. Never use your real website for this. Pick one:

### Option A: WordPress Playground (nothing to install)

Playground runs a complete WordPress inside your browser. The workshop link also installs **Plugin Check**, the tool we use after the break to check your plugin.

1. Open the workshop link: <https://playground.wordpress.net/?plugin=plugin-check&url=/wp-admin/plugins.php>
2. Wait until you see the **Plugins** screen. You're logged in as admin automatically.
3. Check that **Plugin Check (PCP)** is in the list. If it says **Activate** under it, click that. Not in the list at all? Go to **Plugins → Add Plugin**, search for "Plugin Check", click **Install Now**, then **Activate**.

**Takes:** usually under a minute.

**Where does your work go?** Playground saves your site in this browser, on this laptop. It keeps your five most recent sites under **Your Playgrounds** and removes older ones automatically. A private window, clearing your browsing data, or switching to another browser or laptop loses it. So prepare in a normal window on the laptop you're bringing. Want to keep a site for sure? Use **Store permanently**, or download it as a ZIP. And if it's gone on the day: no problem, just open the workshop link again.

### Option B: LocalWP (installed on your laptop)

LocalWP is a free program that runs WordPress on your own laptop. Choose it if you want to keep your work, want to try the Maintenance Mode idea (it doesn't work reliably in Playground), or already use it. It needs macOS 12 or newer, Windows 10 (64-bit) or 11, or a Debian-based Linux such as Ubuntu, and at least 4 GB of RAM.

1. Download LocalWP from [localwp.com](https://localwp.com/)
2. Install the program
3. Click **"Create a new site"**
4. Choose a name (e.g. "workshop") and click through with the default settings
5. Wait for the site to be created. On Windows, Windows Defender asks for permission a few times the first time: click **Allow access** each time.
6. Click **"WP Admin"** to verify your WordPress dashboard opens
7. Install Plugin Check: in WP Admin go to **Plugins → Add Plugin**, search for "Plugin Check", click **Install Now**, then **Activate**. You'll need it after the break.

**Takes about:** 10 minutes (including download)

**Do this at home.** Nobody installs LocalWP during the workshop: it would eat your whole first build round. If it won't work, use Playground. That's completely fine.

---

## Step 2: Sign in to an AI tool (and pick a backup)

Any AI chatbot that can write code will do. Two things matter more than which one you pick:

- **Sign in before the workshop,** even if the tool lets you chat without an account. Chats without an account are often gone when you close the tab, and after the break you need the code from your first round.
- **Have a second tool ready.** Free plans have usage limits that most makers don't publish, and they can run out in the middle of the workshop. In round 2 you can also give the same prompt to both tools and compare.

| Tool | Made by | Account | Free plan |
| --- | --- | --- | --- |
| [Vibe](https://chat.mistral.ai/) | Mistral, France. Called Le Chat until May 2026. | Free Mistral account | Yes, limits not published. Your chats are used to train Mistral's models unless you switch that off. |
| [Lumo](https://lumo.proton.me/) | Proton, Switzerland | Optional. Without one your chats aren't saved; a free Proton account keeps them for 7 days. | Yes, limited. Proton says it never trains on your chats. Not tested with this workshop yet. |
| [ChatGPT](https://chatgpt.com/) | OpenAI, US | Free OpenAI account. Using it without one isn't available in the EU. | Yes, limits not published |
| [Claude](https://claude.ai/) | Anthropic, US | Free Anthropic account (email or Google) | Yes. The usage limit resets every five hours. |
| [Copilot](https://copilot.microsoft.com/) | Microsoft, US | Optional. Signing in with a Microsoft account gives you chat history and longer conversations. | Yes, limits not published |
| [Gemini](https://gemini.google.com/) | Google, US | Google account | Yes, limits not published |
| [Confer](https://confer.to/) | Privacy-first, started by Signal co-founder Moxie Marlinspike | Passkey. On Windows or Linux you may need a password manager for that. | 20 messages a day. Too few as your only tool for this workshop; fine as a backup. |

**Use demo content only.** Don't paste client code, passwords or real customer data into any AI tool. Some free plans use your chats to train their models: Mistral does by default, and ChatGPT has a setting called "Improve the model for everyone" that you can switch off.

### Test it: does it give you code?

Paste this into the chat (English is fine, whatever language you usually use):

```
Write only the plugin header for a WordPress plugin called "WCNL Test". Reply with just the code, nothing else.
```

**Expected:** a short block of code with `Plugin Name: WCNL Test` in it, usually starting with `<?php`. Got an explanation around it? Fine, as long as the code is there. Got an error, a refusal or a "limit reached" message? Try your backup tool.

**Later: skip the copy-pasting.** Coding tools such as [Claude Code](https://claude.ai/code) work directly on the files on your computer, so you don't copy code back and forth. You don't need one for this workshop, and Claude Code isn't part of Claude's free plan. [Read about it on modub.nl (in Dutch)](https://modub.nl/blog/vier-uur-met-claude-op-de-server/).

---

## Step 3: Code editor (optional)

If you're using LocalWP, it helps to have a code editor for editing files. If you're using WordPress Playground, skip this step.

- **Visual Studio Code** (free): [code.visualstudio.com](https://code.visualstudio.com/)
- Or use your system's default text editor: Notepad (Windows), TextEdit (Mac), or Gedit or similar (Linux) all work

---

## Step 4: Test that it worked (5 minutes)

This is exactly what you'll do with your own plugin in the workshop. If it works now, the hardest part of the setup is behind you. It works the same in Playground and LocalWP.

1. Download the starter plugin: [my-first-plugin.zip](https://pluginvibes.modub.nl/my-first-plugin.zip). Using Safari? It may unzip the file by itself. If you end up with a folder instead of a .zip, right-click the link and choose **Download Linked File As**, or use another browser.
2. In WP Admin go to **Plugins → Add Plugin** and click **Upload Plugin** at the top. Choose the .zip, click **Install Now**, then **Activate Plugin**.
3. Open the post **Hello world!** on your site: click your site name at the top left of WP Admin, choose **Visit Site**, then click the title "Hello world!".

**Expected:** a grey box saying "🎉 This plugin works! Replace this code with your own creation." above the post text. It only shows on a single post, not on the homepage or the blog overview.

**Not seeing it?** Check on the Plugins screen that "My First Plugin" is activated. Make sure you're looking at the post itself (its own page, with only that post on it), not the homepage. Can't select the file, or get an error when uploading? Make sure you upload the .zip file itself, not a folder. Still stuck? Leave it and come anyway: the helpers sort this out in the first minutes of the workshop.

---

## Step 5: Know the basics (optional reading)

You don't need to know how to code, but it helps to know this.

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

That's it. Those first lines (the "plugin header") tell WordPress this is a plugin. The rest is your code, or in our case: the code that AI writes for you.

### How do you install a plugin you made yourself?

**With LocalWP:**
1. Open your site's folder, then `app/public/wp-content/plugins/`
2. Create a new folder (e.g. `my-plugin`)
3. Put your PHP file in it
4. Go to WP Admin → Plugins → Activate

Or zip it and upload it, exactly as in step 4.

**With WordPress Playground, option 1: Plugin File Editor (no zip needed)**
1. Copy the code from your AI chat
2. Go to **Tools → Plugin File Editor** (with a classic theme it's under Plugins instead)
3. In the dropdown at the top right, pick **Hello Dolly**. Not in the list? Some setups remove it; use **My First Plugin** from step 4 instead, but deactivate it on the Plugins screen first (WordPress may refuse to save changes to an active plugin).
4. Replace all the code with yours
5. Click **"Update File"**
6. Go to **Plugins**: your plugin now appears with the name from its plugin header
7. Activate it and test

**With WordPress Playground, option 2: upload a zip**
1. Save your generated code as a `.php` file, with the same name as your plugin folder (e.g. `reading-time.php`)
2. Put the file in a folder with the same name (e.g. `reading-time/`)
3. Zip the folder:
   - **Mac:** right-click the folder in Finder → "Compress"
   - **Windows:** right-click → "Send to" → "Compressed (zipped) folder"
   - **Linux:** right-click → "Compress", or run `zip -r reading-time.zip reading-time/`
4. Go to **Plugins → Add Plugin → Upload Plugin**
5. Upload your zip, activate, and test

Not every AI tool can hand you a zip. If yours doesn't, option 1 is faster anyway.

---

## Prompt template for the workshop

This is the template we'll use during the workshop. Feel free to have a look:

```
Create a WordPress plugin with the following specifications:

Name: [name of your plugin]
Function: [describe in 1-2 sentences what the plugin should do]
Where visible: [on the frontend / in the admin / both]
Behavior: [describe specifically what should happen]

Technical requirements:
- Follow WordPress best practices (hooks, filters, sanitization)
- Include a plugin header with name, description and version
- Prevent direct file access
- Put all code in a single PHP file
- Add short comments explaining what each part does
```

**Tip:** the more specific your prompt, the better the result. "Make a plugin that does something with images" yields less than "Make a plugin that automatically adds alt text to images that don't have any yet."

---

### Want to go further? Extended prompt template

Once your basic plugin works, you can iterate: either refine your prompt, or ask the AI to improve what it already generated. Here's a more complete prompt that includes authorship, versioning and styling details from the start:

```
Create a WordPress plugin with the following specifications:

Plugin name: [name of your plugin]
Author: [your name]
Author URI: [your website, or leave blank]
Version: 1.0.0
Description: [one sentence describing what the plugin does]

Function: [describe in 1-2 sentences what the plugin should do]
Where visible: [on the frontend / in the admin / both]
Behavior: [describe specifically what should happen]

Style: [describe how it should look, e.g. "small gray text, slightly smaller than body text"]

Technical requirements:
- Follow WordPress best practices (hooks, filters, sanitization)
- Include a complete plugin header (Plugin Name, Description, Version, Author, Author URI, Text Domain)
- Prevent direct file access
- Put all code in a single PHP file
- Make all user-facing text translatable using __() and _e()
- Add short comments explaining what each part does
```

Or ask the AI to improve an existing plugin:

```
The plugin works. Now improve it:
1. Add my name "[your name]" and website "[your URL]" to the plugin header
2. Set the version to 1.0.0
3. Make all user-facing text translatable using WordPress i18n functions (__() and _e())
4. Add a readme.txt with a short description and installation instructions
```

(These two extended templates are not on the participant site; they are here for reference.)

---

## Checklist

- [ ] WordPress runs on the laptop I'm bringing (workshop Playground link or LocalWP), and Plugin Check is in the Plugins list
- [ ] I'm signed in to an AI tool, and I know which one is my backup
- [ ] The AI test prompt gave me code back
- [ ] The starter plugin test worked: I saw "This plugin works!" on the Hello world! post
- [ ] I've had a look at the prompt template
- [ ] Laptop charger packed: the workshop takes two hours

**All checked? See you on 12 November.** Something didn't work? Come anyway and bring your laptop. The Playground link works on the spot, and the helpers will get you going in the first few minutes.

---

## Notes for the facilitator (not on the site)

- **Setup desk before 10:45** (plan decision 1): only promise "come 15 minutes early" on this page once the WCNL organisers confirm the room is free. Until then the page says the helpers sort it out in the first minutes, which matches Phase 0.
- **Playground first?** (plan decision 4): Playground is listed first because its link brings Plugin Check along, but both options are presented as equal (Playground has the "Quick option" badge, LocalWP none). If you go Playground-first, give the Playground card the `recommended` class in `docs/index.html`.
- **"AI inside WordPress" track** (plan decision 3): not on this page. If it goes ahead, add one line: "Already have an API key from Anthropic, Google or OpenAI and LocalWP? Bring them; there's an optional track. Don't get one specially."
- **The workshop link** must pass testplan Test 3 (must-test) before this page is shared. If `?plugin=plugin-check` fails in the new Playground interface, fall back to `https://playground.wordpress.net/` and keep the manual Plugin Check install line.

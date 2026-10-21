# Facilitator's Guide: "Vibe Code Your Own WordPress Plugin"

This is the 120-minute version, as given at WordCamp Netherlands on 12 November 2026. The original 45-minute version (WordPress Meetup Amsterdam, May 2026) is in the git history.

## Workshop at a glance

| | |
|---|---|
| **Duration** | 120 minutes, including a 10-minute break |
| **Audience** | WordPress users, no coding experience required. 15–30 participants. |
| **Team** | Facilitator plus 1–2 teaching assistants (TAs) |
| **Learning outcomes** | Participants can have an AI tool generate a simple WP plugin, install and test it, run it through Plugin Check, get one finding fixed, and explain when this approach is fine and when they need a developer |
| **Requirements** | Laptop, WordPress Playground (zero install) or LocalWP, an AI chat tool of choice |
| **Bloom's levels** | Remember → Understand → Apply → Analyze → Evaluate → Create |

---

## Facilitator preparation

### Workshop links

| Page | URL |
|------|-----|
| Preparation (share before the workshop) | https://pluginvibes.modub.nl/ |
| Plugin ideas (share at the start) | https://pluginvibes.modub.nl/ideas.html |
| Prompts (share 15 minutes into Round 1) | https://pluginvibes.modub.nl/prompts.html |
| Tips and next steps (share at the end) | https://pluginvibes.modub.nl/tips.html |
| Playground with Plugin Check preinstalled | `https://playground.wordpress.net/?plugin=plugin-check&url=/wp-admin/plugins.php` (test before the day, see testplan Test 3) |

The site also runs on https://mdubbelm.github.io/vibe-code-wp-plugin/ (same content).

### Materials checklist

- [ ] Preparation page updated for the 2-hour version and shared with the WCNL attendees
- [ ] Starter plugin zip downloads from the site
- [ ] Demo plugin ready (Reading Time), plus the prompt in `facilitator/prompts/prompt-reading-time.md`
- [ ] Your own demo site has Plugin Check installed and an AI provider connected under **Settings → Connectors** (for the AI review demo)
- [ ] The walkthrough target installed and activated on your demo site: `facilitator/plugins/bad-example/`. Zip it in Terminal from the repo folder with `cd facilitator/plugins && zip -r -X ~/Desktop/bad-example.zip bad-example -x "*/.*"` (not Finder's Compress: hidden files such as `.DS_Store` would add a Plugin Repo error and change the numbers below), then Plugins → Add Plugin → Upload. It shows up as **"BAD EXAMPLE Login Logo (workshop demo, never use)"**. It is insecure on purpose: demo site only, and delete it afterwards. Don't fix it; the walkthrough below quotes its line numbers.
- [ ] On your demo site, Plugin Check's Categories already set to Security only (it remembers the choice per user), so the walkthrough doesn't open on readme errors
- [ ] Backup screen recording of a successful Plugin Check AI review run, in case the network or the provider fails on the day
- [ ] Playground link above tested on the venue wifi or a phone hotspot
- [ ] Two AI tools logged in on your laptop (if one is slow or down, switch)
- [ ] TAs briefed: setup triage in the first 8 minutes, the common problems list below, the three Round 2 tracks
- [ ] Ask the WCNL organisers whether the room is free before 10:45 (for an optional setup desk)

### Before the slot (optional setup desk)

Only if the room is free before 10:45. Communicate it in the WCNL attendee information:
> "Haven't had time to prepare? Come 15 minutes early and we'll help you get set up. Or just use the Playground link on the preparation page: it needs no installation."

---

## Timeline (120 minutes)

| Clock | Min | Block |
|---|---|---|
| 10:45 | 8 | Phase 0: welcome, check-in, setup triage |
| 10:53 | 15 | Phase 1: intro and live demo |
| 11:08 | 30 | Phase 2: Round 1, build |
| 11:38 | 8 | Checkpoint |
| 11:46 | 10 | Break |
| 11:56 | 8 | Plugin Check walkthrough |
| 12:04 | 20 | Round 2: check and fix |
| 12:24 | 15 | Phase 3: honest reflection |
| 12:39 | 3 | Closing |
| 12:42 | 3 | Buffer |

**If you're running behind:** shrink the checkpoint to one share (5 min) and Round 2 to 15 minutes. Never cut the reflection below 12 minutes.

---

### Phase 0: Welcome, check-in, setup triage (8 min)

**Goal:** everyone has a working WordPress and an AI chat open.

- While you welcome the room and say who you are, the TAs walk the rows.
- The ready check, on screen: **"You're ready when you can see the Plugins screen of your own WordPress and you have an AI chat open in another tab."**
- Anyone not ready gets the Playground link. Nobody installs LocalWP during the slot; that eats the whole first round.
- Late arrivals: a TA gives them the Playground link and the ideas page, and nothing else.
- Quick show of hands: "Who has used an AI tool to write code before?" It helps you pair people later.

---

### Phase 1: Introduction and demo (15 min)

**Bloom: Remember + Understand**

1. **What is vibe coding? (5 min)**
   - "You describe in plain language what you want. The AI writes the code. You steer, test and iterate."
   - This is not learning to code. It is learning to work with an AI and to judge what it gives you.
   - **When it works well:** quick prototypes, internal tools, testing an idea before you hire a developer, learning how something works by reading the code you got.
   - **When it doesn't:** sites with real users and real data without a review, complex integrations, anything where you can't check whether the result is correct.
   - The real skill: describing clearly what you want, and judging what comes back.

2. **Live demo (8 min)**
   - Share your screen, open your AI tool, paste the prompt:
     > "Create a WordPress plugin called 'Reading Time'. The plugin should count the words in a blog post, calculate how long it takes to read (assuming 250 words per minute), and show the result above the post as 'Estimated reading time: X minutes'. It should only appear on individual posts, not on overview pages."
   - Put the output in a file, install, activate, show the result.
   - **Show a flaw on purpose:** "1 minutes", or that you can't change the reading speed. Say out loud: "It works. That doesn't mean it's good. After the break we'll let a tool look at code like this."
   - Keep this plugin on your demo site. In our test run it has zero Security findings, which you'll use in the walkthrough as the contrast with the bad example.

3. **The loop and pick an idea (2 min)**
   - Prompt → generate → install → test → iterate. "The first try rarely works. Iterating isn't failing, it's the work."
   - Show the ideas page. Pick an idea, or bring your own (one feature only).

---

### Phase 2: Hands-on

**Bloom: Apply + Create, then Analyze**

#### Round 1: Build (30 min)

1. **Write your own prompt first (5 min).** Use the template on the preparation page. The "Technical requirements" part mentions hooks and filters: "You don't need to understand those words. They're instructions for the AI, not for you."
2. **Generate, install, test (10 min).** TAs and you walk around. This is where most people get stuck.
3. **Share the prompts page at 11:23** (15 minutes in). "Stuck, or want to compare? Here are example prompts." People who are doing fine keep going with their own prompt.
4. **Keep going and iterate (15 min).** "Doesn't work? Paste the error message back into the AI." Fast people: ask the AI for one improvement.

**Plugin choice card:**

| Plugin | What it does | Difficulty |
|--------|-------------|------------|
| **Reading Time** | Shows estimated reading time above posts | ⭐ Easy |
| **External Link Icon** | Adds ↗ to external links + target="_blank" | ⭐ Easy |
| **Maintenance Mode** | Shows an "offline" page to visitors | ⭐⭐ Medium, LocalWP only |
| **Custom Login Logo** | Custom logo on the WP login screen | ⭐⭐⭐ Hard, needs iteration |
| **Your own idea** | You decide. Keep it to one feature. | ❓ Varies |

Compliment good prompts, not just working code.

#### Checkpoint (8 min)

- Two volunteers, about 3 minutes each, including setup. Ask them to open their result before it's their turn, or share a screenshot.
- "Which idea, which prompt, what came out? Did you change your prompt? What did you change?"
- Name the two or three problems you saw at most tables. If everyone hit the same wall, that is a real lesson, not a failure.
- Announce: "Ten-minute break. After the break we're going to let a tool look at what you built."

#### Break (10 min)

People may keep building. TAs help anyone whose plugin doesn't activate yet, so they have something to check in Round 2.

#### Plugin Check walkthrough (8 min)

**Target plugin: `facilitator/plugins/bad-example/`** ("BAD EXAMPLE Login Logo" in the Plugins list). It is a Login Logo plugin of the kind a chatbot could plausibly hand you: it works (the logo shows on the login screen, the settings page saves), and it has the classic mistakes from the "Common pitfalls" lists in `facilitator/prompts/`. It is not real chatbot output; it is written to fail in a known way, so you know in advance what the screen will show. The demo Reading Time plugin is the contrast: zero Security findings in our test run.

**What you will see** (measured 14 Oct 2026 with Plugin Check 2.1.0 on WordPress 7.1.3, through Plugin Check's own check runner from a script, not yet in the admin screen; see testplan Test 9):

| Line | Code column (short) | In plain words | Sev. | Security only? | Goes to the AI? |
|---|---|---|---|---|---|
| (file) | `missing_direct_file_access_protection` | The file can be opened directly in a browser, outside WordPress | 6 | yes | yes (error under 7) |
| 20 | `EscapeOutput.OutputNotEscaped` | The logo URL is printed into the login page without cleaning | 5 | yes | yes |
| 34 | `EscapeOutput.OutputNotEscaped` | "Logo saved:" prints back whatever was typed in the box | 5 | yes | yes |
| 46 | `EscapeOutput.OutputNotEscaped` | The stored URL is printed into the form field without cleaning | 5 | yes | yes |
| 38 | `DirectDB.UnescapedDBParameter` | A value from the address bar goes straight into a database query | 5 | yes | yes |
| 38 | `DirectQuery`, `NoCaching` (warnings) | Direct database call | 5 | yes | yes |
| 32–38 | `NonceVerification.*` (warnings, 5 rows) | The form and the "Remove logo" link have no nonce | 5 | **no**, Plugin Repo only | yes (warning under 6) |
| 33–38 | `ValidatedSanitizedInput.*` (warnings, 6 rows) | Typed input is stored and used without cleaning | 5 | **no**, Plugin Repo only | yes |
| 38 | `PreparedSQL.NotPrepared` | Same query, "use placeholders" | 5 | **no**, Plugin Repo only | yes |
| (file) | `no_plugin_readme` | No readme.txt | 9 | no | **no** (9 is not under 7) |
| (file) | `plugin_header_no_license` | No License line in the header | 9 | no | **no** |

Totals: **Security only: 5 errors, 2 warnings.** Plugin Repo ticked (with or without Security, the result is identical): **8 errors, 13 warnings**, of which 19 go to the AI and only the two severity-9 paperwork errors skip it.

On your screen, two runs:

1. **Run 1, Security only (about 3 min).** First show where Plugin Check comes from, for everyone who doesn't have it yet: Plugins → Add Plugin → search "Plugin Check" → install, activate. (On the Playground link it is already there.) One sentence of contrast: "I ran my Reading Time demo through this already: zero Security findings. Now a plugin that looks just as harmless." Then Tools → Plugin Check → choose "BAD EXAMPLE Login Logo". Before you click **Check it!**, change the **Categories**: by default only **Plugin Repo** is ticked. Untick it, tick **Security** only. (General adds rows that aren't about safety, such as translation hints.) Leave both **Types** (Error, Warning) ticked. Say it out loud: "Plugin Repo is the checklist for getting into the WordPress.org plugin directory. A missing readme.txt or License line is paperwork for that directory. It says nothing about whether your site is safe. We're not publishing anything today."
2. **Translate one Error (about 2 min).** Point at the **Code** column so people know where the technical name is. Take line 34: "This plugin says 'Logo saved:' and then prints back exactly what you typed. If someone gets code into that value, the browser runs it as code instead of showing it as text. That's the same mistake on lines 20 and 46." Then show the Round 2 loop once: paste that row into the "explain" prompt from the prompts page. Don't fix it; that's their job in Round 2.
3. **Run 2, Plugin Repo back on, with AI (about 3 min).** Tick **Plugin Repo** again (leave Security ticked), tick **Enable AI Analysis**, click **Check it!** Talk while it runs.
   - **The catch, in one sentence:** "Look, eleven new warnings. The form without a nonce and the input that isn't cleaned only show up when Plugin Repo is ticked. If your plugin has a settings page or a form, run it like this once, look for `NonceVerification` and `ValidatedSanitizedInput`, and skip the readme and License lines."
   - **The AI labels.** Rows get a ✨ label, "AI: Valid issue" or "AI: Potential false positive", with a confidence percentage. Rows labelled false positive move into a collapsed **Possible false positives** section under the results. They are not deleted.
   - **The honest point.** Only findings *below* a severity threshold go to the AI (defaults: errors 7, warnings 6, on a 1–10 scale; change them under Settings → Plugin Check). Here that is 19 of the 21 rows. The two that skip the AI are the readme and the License line, both severity 9. "Severity is Plugin Check's own number. It measures how strict the directory review is, not how dangerous something is on your site. So the paperwork stays on top, untouched, and the security problems are the ones the AI gets to judge."
   - **Then open the collapsed section.** Two possible outcomes; know which one you got in your dry run, but be ready for either, because the same input can get a different answer next time:
     - *The AI folded a Security row away* (for example one of the escaping errors): read its reasoning out loud and ask the room, "Do you agree with the AI?"
     - *The section is empty or only has database "caching" warnings:* "This time it agreed with every security finding. Good. But notice what it was *allowed* to judge: all of them. Next run, or another model, could fold one away, and you'd only find out by opening this section."
4. Mention what gets sent: the flagged line and up to 10 lines before and after it, plus the file name, go to your AI provider. Worth knowing before you connect one. (For the bad example that includes its header comment, which says it is wrong on purpose. Plugin Check tells the AI not to trust code comments, but treat the "file can be opened directly" verdict as the least trustworthy one.)

The 8 minutes have no slack. If you're behind, drop the explain-prompt paste in step 2 first (Round 2 shows it anyway). If the live run fails or the AI run takes more than a minute, play the backup recording and move on. Don't debug on stage. TAs: the category choice is remembered per user on that site, so people who change it once don't have to do it again. A fresh Playground starts again with only Plugin Repo ticked.

#### Round 2: Check and fix (20 min)

Show the three tracks on one slide. Default is **Check**.

| Track | For | What they do |
|---|---|---|
| **Check** (default) | Everyone with a plugin that activates | Run Plugin Check with only **Security** ticked (Plugin Repo unticked). Write down the number of errors and warnings. Pick **one Error**, use the "explain" prompt and then the "fix" prompt from the prompts page, re-install, re-run. **Zero Security findings?** That is likely for Reading Time and External Link Icon (see below). Then: (1) if the plugin has a form or settings page, run once with Plugin Repo ticked and look for `Security`, `NonceVerification` or `ValidatedSanitizedInput` in the Code column; fix one of those instead and ignore the readme/License/prefix lines; (2) otherwise run the self-review prompt and compare what the AI claims with what Plugin Check found. |
| **Wider** | People whose plugin didn't work, or who are done | Same prompt in a second AI tool and compare, or a second idea, or the self-review prompt. |
| **AI inside WordPress** (optional) | Only people who already have an AI provider API key and LocalWP | A tiny admin-only plugin that uses the WordPress 7.0 AI Client. Details are in the facilitator's own notes (not in this repo). |

What to expect: in our test run, all five reference plugins in `facilitator/plugins/` had **zero** Security findings. Their only errors were directory paperwork (missing readme.txt) plus a few "prefix your function names" warnings. Those are reviewed reference versions, so a fresh chatbot answer may have more; the dry run (Test 9) has to tell. Plugins with a settings page or a form (Maintenance Mode, Custom Login Logo, many own ideas) are the most likely to get findings, because that is where escaping, nonces and sanitising come in. So expect a split room: some people with real findings, many with none. Both are useful for the reflection.

**Practice target for people with zero findings** (only if Monique says yes, plan decision 11): a TA hands them the bad example as a zip, they install it in their own Playground and do the Check loop on its line 34 error. Playground only, never their real site. Without that decision, the zero-findings branch in the table above stands.

Questions to ask while you walk around (these feed the reflection):
- "Which categories did you tick? Is what you're fixing a Security finding or directory paperwork?"
- "Did the number of errors go down? Did a new one appear?"
- "Did the AI say it fixed something that Plugin Check still flags?"
- "Do you understand the fix, or are you just trusting it?"

---

### Phase 3: Honest reflection (15 min)

**Bloom: Analyze + Evaluate**

This is the part people can't get from a tutorial. Don't rush it; the questions matter more than the answers.

1. **What did Plugin Check find? (4 min)**
   - Hands up, Security only: zero findings? One to five? More?
   - "Who fixed a Security finding? Who ended up fixing paperwork?" "Did fixing one error create another?"
   - **Zero doesn't mean safe.** Plugin Check reads the code; it doesn't run your plugin the way a visitor would. It won't notice that Reading Time says "1 minutes", or that a maintenance mode plugin can lock you out of your own site. Zero findings means "none of the patterns it looks for", nothing more.
   - **And it doesn't mean "works" either.** The bad example has one bug Plugin Check can't see: click **Remove logo** and it says "Logo removed", but the field still shows the old URL until you reload the page (the value is deleted from the database, but the page reads WordPress's cached copy). Optional: show it in ten seconds on your demo site.

2. **Would you put this on a real site? (5 min)** Four questions, one slide:
   - Who can trigger this code: visitors, editors, or only you?
   - What does it do with text someone else typed?
   - What happens when it breaks: a wrong number, a white screen, or locked out of wp-admin?
   - Who updates it next year when WordPress changes?

3. **AI checking AI (3 min)**
   - Back to the bad example from the walkthrough: of its 21 findings, the two the AI was *not* allowed to judge were the readme and the License line (severity 9). All the security problems, including the three unescaped outputs and the database query, went to the AI (severity 5 and 6). If the AI folded one of those away in your run, put that screen back up now. If it didn't, say so: "It agreed this time. It was still the one deciding."
   - Then to the room, only if Monique decided to let people try the AI review (plan decision 2): "Did the AI fold any of *your* Security findings away under Possible false positives? Did you agree?"
   - The design idea is sound: keep the most serious findings away from the AI. The catch is that Plugin Check's severity number measures how strict the directory review is, not how much damage something can do on your site. You can lower the thresholds under Settings → Plugin Check, or simply open the collapsed section and read it yourself.
   - Simon Willison, in his annotated slides from the 2025 PyCon workshop: "In web application security 99% is not good enough."
   - Thought experiment: your plugin sends new comments to an AI to summarise them. A visitor writes a comment with instructions for that AI in it. What stops the AI from following them? This is called prompt injection. Willison's assessment in 2025 was that there is still no reliable way to guarantee the AI won't follow them. So keep text from strangers away from AI features that can do things.

4. **When to hire a developer (3 min)**
   - It handles payments, personal data, logins or file uploads.
   - Other people will use it, or it runs on a client's site.
   - It stores things in the database or has a form.
   - Plugin Check still shows errors after two rounds of "fix this", and you can't tell whether they're real.
   - You can't explain in one sentence what each part does.
   - Bridge: "A vibe-coded plugin is a very good brief for a developer. Bring it, together with your prompt."

### Closing (3 min)

- Tips page: Plugin Check, security basics, the WordPress Plugin Handbook (https://developer.wordpress.org/plugins/), WordPress Agent Skills (https://github.com/WordPress/agent-skills) for people who move on to coding agents.
- Feedback: pluginvibes@modub.nl.
- Thank the room and the TAs.

---

## Common problems (for you and the TAs)

| Problem | What to do |
|---|---|
| **PHP syntax error / critical error** | "Paste the exact error message back into the AI and ask for a fix." On Playground, if wp-admin is broken, start a fresh Playground and paste the fixed code. On LocalWP, delete or rename the plugin folder. |
| **Plugin doesn't appear in the list** | Check the plugin header comment at the top of the file, and that the file is directly in its own folder inside `wp-content/plugins/`. |
| **"It does nothing"** | Is it activated? Is the participant looking at a single post (not the homepage)? Is there a post with enough text? |
| **No zip from the AI (Playground)** | Use the Plugin File Editor path: with a block theme it is under **Tools → Plugin File Editor** (not under Plugins). Pick Hello Dolly in the dropdown and overwrite its code. If Hello Dolly isn't in the list (some setups remove the default plugins), upload the starter plugin `my-first-plugin.zip` and overwrite that one instead. |
| **Custom Login Logo: upload button does nothing** | The media uploader needs extra JavaScript the AI usually leaves out. Coach them: "Tell the AI the button doesn't work and ask it to add the JavaScript for the media uploader." Steer less experienced people to Reading Time or External Link Icon. |
| **Maintenance Mode on Playground** | Doesn't work reliably there. Switch to LocalWP or another idea. |
| **Plugin Check won't install** | Check networking is on in Playground (it is by default). Otherwise, pair them with a neighbour who has it, or work from your on-screen results. |
| **Plugin Check shows dozens of results, mostly readme/License/prefix** | Plugin Repo is still ticked (it's the default). Untick it, tick only Security, run again. The readme.txt, License header, text domain and "prefix" lines are WordPress.org directory paperwork, not risks. In the Security-only run, any Error is a fair pick. |
| **Plugin Check finds nothing (Security only)** | Normal for simple plugins like Reading Time. If the plugin has a form or settings page, run once with Plugin Repo ticked and look for `NonceVerification` or `ValidatedSanitizedInput`. Otherwise: self-review prompt, then compare. And remember: zero findings isn't the same as safe. |
| **AI review labels a Security error "potential false positive"** | Open the collapsed **Possible false positives** section and read the AI's reasoning out loud with them. Ask the explain prompt in their chat tool as a second opinion. Don't let either AI decide alone. |
| **The AI "fixed" it but Plugin Check still flags it** | Great reflection material. Paste the new result back and ask again; after two tries, note it and move on. |
| **AI chat refuses, is slow, or hits a free limit** | Switch to another tool. Free tiers have daily limits that change without notice. |
| **Playground tab closed** | First check recent autosaves in the Playgrounds panel (Dock). If it is not there, the site is gone. The new Playground can save sites in the browser; show where if someone wants to keep their work. Code they still have in the AI chat can be pasted into a fresh Playground. |

---

## Risks and mitigation

| Risk | Mitigation |
|------|-----------|
| Wifi slow or down | Playground and AI tools both need the network. Have a phone hotspot for your own laptop, the backup recording of the demo and the AI review, and the reference plugins in `facilitator/plugins/` to install from a zip. |
| AI tool slow or down | Two tools logged in on your laptop. Participants switch tools; any chatbot works. |
| Setup eats the first round | Playground-first, ready check in Phase 0, TAs triage. Nobody installs LocalWP during the slot. |
| Wide range of skill levels | Difficulty-scaled ideas, three Round 2 tracks, TAs pair beginners with someone further along. |
| Plugin Check or the AI review fails live | Backup recording. The point is which findings went to the AI and which didn't, which you can explain from the table in the walkthrough section. |
| The AI review folds nothing away on the day | Fine, and say so. The point is that the security findings were the AI's to judge and the paperwork wasn't; that holds either way. |
| The bad example ends up on a real site | It is in `facilitator/`, which is not on the participant site but is in the public GitHub repo once committed, so anyone could download it. Its plugin name and header say "never use". Install it only on your demo site or a Playground, and delete it after the workshop. Whether it goes into the public repo at all is your call (see the plan, decision 12). |
| Round 2 turns into readme-fixing | Categories instruction on the slide and on the ideas/prompts pages: Security on, Plugin Repo off. TAs check the ticked boxes first when someone asks for help. |
| Most people get zero Security findings | Expected for the easy ideas. The zero-findings branch (form check with Plugin Repo, or self-review prompt) gives them something to do, and "zero isn't safe" is a reflection point. |
| Reflection gets squeezed | Protected block. Cut the checkpoint and Round 2 first. |
| People paste client code or real data into a free AI tool | Say it in Phase 1: use demo content only. Some free tiers use what you send to improve their products. |

---

## Stretch goals (for fast participants)

- "Ask the AI to add a settings page."
- "Make your plugin translatable with `__()` and `_e()`."
- "Ask the AI to follow the WordPress Coding Standards, then run Plugin Check again."
- "Export your plugin as a zip and install it on your neighbour's site."
- "Try the self-review prompt: does the AI find the same problems as Plugin Check?"
- For people who move on to coding agents (Claude Code, Cursor, GitHub Copilot and others): WordPress Agent Skills, [github.com/WordPress/agent-skills](https://github.com/WordPress/agent-skills), official instructions that help AI tools write more WordPress-native code.

---

## Appendix: Starter plugin

The starter plugin lives in `docs/my-first-plugin/` and is downloadable as `docs/my-first-plugin.zip`:

```
my-first-plugin/
├── my-first-plugin.php   (plugin header, ABSPATH guard, one example filter)
└── readme.txt
```

When activated it shows "🎉 This plugin works!" above single posts. That makes it a quick setup test, a fallback file to overwrite in the Plugin File Editor when Hello Dolly isn't available, and a reference for what a minimal plugin looks like. Read the file itself rather than a copy here, so this guide can't drift from it.

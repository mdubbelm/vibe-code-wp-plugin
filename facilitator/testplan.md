# Test plan: workshop dry run

End-to-end test of the full participant experience. Run this on a machine where you haven't set anything up yet (e.g. the Linux laptop) to catch gaps in the documentation.

---

## Test 1: Preparation page

**Goal:** Can a participant follow the instructions without help?

- [ ] Open https://mdubbelm.github.io/vibe-code-wp-plugin/ in a browser
- [ ] Page loads correctly, looks good on desktop and mobile
- [ ] All external links work (LocalWP, WordPress Playground, AI tools, VS Code)
- [ ] Starter plugin zip downloads successfully
- [ ] Prompt template is readable and easy to copy
- [ ] Checklist makes sense — nothing missing, nothing confusing

**Notes:**
_Write down anything unclear or missing here_

---

## Test 2: WordPress setup — LocalWP path

**Goal:** Does the LocalWP installation flow match the instructions?

- [ ] Download LocalWP from localwp.com
- [ ] Installation completes without issues
- [ ] "Create a new site" works with default settings
- [ ] WP Admin opens and you can log in
- [ ] You can find the `wp-content/plugins/` folder on disk
- [ ] Time it: does it actually take ~10 minutes?

**Actual time:** _____ minutes
**Notes:**
_Any steps that were confusing or different from the instructions?_

---

## Test 3: WordPress setup — Playground path

**Goal:** Does WordPress Playground work as described?

- [ ] Open playground.wordpress.net
- [ ] WordPress loads within a few seconds
- [ ] You can navigate to WP Admin → Plugins
- [ ] You can use the Plugin Editor to paste code
- [ ] You can upload a zip via Plugins → Add New → Upload Plugin
- [ ] Test in Chrome/Edge (recommended) and Firefox/Safari

**Notes:**
_Any browser-specific issues?_

---

## Test 4: Starter plugin installation

**Goal:** Can a participant install and activate the starter plugin?

### Via LocalWP (file system):
- [ ] Unzip `my-first-plugin.zip`
- [ ] Copy folder to `wp-content/plugins/`
- [ ] Plugin appears in WP Admin → Plugins
- [ ] Plugin activates without errors
- [ ] Visit a blog post — the "🎉 This plugin works!" message appears
- [ ] Plugin deactivates cleanly

### Via WordPress Playground (upload):
- [ ] Go to Plugins → Add New → Upload Plugin
- [ ] Upload `my-first-plugin.zip`
- [ ] Plugin activates without errors
- [ ] Visit a blog post — the message appears

**Notes:**

---

## Test 5: AI prompt → plugin generation

**Goal:** Do the workshop prompts produce working plugins with different AI tools?

For each plugin, use the prompt from the preparation page template. Fill in the details from the choice card. Test with at least 2 different AI tools.

### Reading Time (⭐ Easy)

| | AI Tool 1: _________ | AI Tool 2: _________ |
|---|---|---|
| Prompt understood? | | |
| Code looks complete? | | |
| Has plugin header? | | |
| Has direct access prevention? | | |
| Installs without PHP errors? | | |
| Activates without errors? | | |
| Works on a blog post? | | |
| Only shows on single posts? | | |
| Output is escaped? | | |
| Time from prompt to working plugin: | ___ min | ___ min |

**Notes:**

### External Link Icon (⭐ Easy)

| | AI Tool 1: _________ | AI Tool 2: _________ |
|---|---|---|
| Prompt understood? | | |
| Code looks complete? | | |
| Installs without PHP errors? | | |
| Adds ↗ to external links? | | |
| Sets target="_blank"? | | |
| Leaves internal links alone? | | |
| Leaves anchor links (#) alone? | | |
| Time from prompt to working: | ___ min | ___ min |

**Notes:**

### Maintenance Mode (⭐⭐ Medium)

| | AI Tool 1: _________ | AI Tool 2: _________ |
|---|---|---|
| Prompt understood? | | |
| Settings page appears? | | |
| Toggle works? | | |
| Visitors see maintenance page? | | |
| Admins can still access site? | | |
| Login page still works? | | |
| Admin bar indicator shows? | | |
| Time from prompt to working: | ___ min | ___ min |

**Notes:**

### Custom Login Logo (⭐⭐ Medium)

| | AI Tool 1: _________ | AI Tool 2: _________ |
|---|---|---|
| Prompt understood? | | |
| Settings page appears? | | |
| Media uploader works? | | |
| Logo shows on login screen? | | |
| Logo links to homepage? | | |
| Time from prompt to working: | ___ min | ___ min |

**Notes:**

---

## Test 6: Common failure scenarios

**Goal:** Can participants recover from typical problems?

- [ ] **PHP syntax error:** Paste the error back into the AI. Does it produce a fix?
- [ ] **Plugin doesn't appear in admin:** Is the plugin header missing? Wrong folder structure?
- [ ] **"It does nothing":** Is the plugin activated? Is there any visible output?
- [ ] **White screen of death:** Can you recover by deleting the plugin folder?
- [ ] **Playground tab closed:** Is the data gone? (Expected: yes. Is this clear in the docs?)

**Notes:**

---

## Test 7: Timing dry run

**Goal:** Is 45 minutes realistic?

Run through the workshop as if you were a participant. Time each phase.

| Phase | Planned | Actual |
|-------|---------|--------|
| Check-in | 2 min | |
| Intro & Demo | 8 min | |
| Choose + write prompt | 5 min | |
| Generate + install + test | 13 min | |
| Iterate | 2 min | |
| Show & Tell | 8 min | |
| Reflection | 5 min | |
| Closing | 2 min | |
| **Total** | **45 min** | |

**Was it tight, comfortable, or too much time?**

**Notes:**

---

## Test 8: Edge cases

- [ ] What happens with a very short post (10 words)? Does Reading Time show "1 minute"?
- [ ] What happens with a post that has no content? Do plugins crash?
- [ ] What if there are no external links? Does External Link Icon handle this gracefully?
- [ ] What if maintenance mode is on and you log out? Can you still reach wp-login.php?
- [ ] What if no logo is set? Does Custom Login Logo show the default WP logo?

**Notes:**

---

## Summary

After completing all tests, fill in:

**Preparation page:** Works / Needs fixes
**LocalWP path:** Works / Needs fixes
**Playground path:** Works / Needs fixes
**Starter plugin:** Works / Needs fixes
**AI prompts produce working plugins:** Yes / Partially / No
**Timing is realistic:** Yes / Tight / Too much
**Biggest risk:**
**Must-fix before workshop:**
**Nice-to-fix before workshop:**

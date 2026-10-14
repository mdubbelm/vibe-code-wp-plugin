# Prompt: Reading Time Estimator

## The prompt

Word for word the text on `docs/prompts.html` (key `prompt-1-text` in `docs/js/i18n.js`, Dutch version in the nl block). Change both or neither.

```
Create a WordPress plugin with the following specifications:

Name: Reading Time
Function: Shows the estimated reading time above each blog post.
Where visible: On the frontend, above the content of each individual post.
Behavior: Count the number of words in a post, divide by 250 (average reading speed), and show the result as "Estimated reading time: X minutes" above the post content. Round up to the nearest minute. Show a minimum of 1 minute. Only show this on individual blog posts, not on overview or archive pages.

Technical requirements:
- Follow WordPress best practices (hooks, filters, sanitization)
- Include a plugin header with name, description and version
- Prevent direct file access
- Put all code in a single PHP file, and give me the complete file in one code block that starts with <?php
- Add short comments explaining what each part does
```

## Expected result

A plugin that:
- Uses the `the_content` filter
- Combines `str_word_count()` and `wp_strip_all_tags()`
- Checks `is_single()` to skip archive pages
- Escapes output with `esc_html()`

## Difficulty: ⭐ Easy

## Common pitfalls

- AI sometimes forgets the `is_single()` check → reading time appears everywhere
- AI may use `strip_tags()` instead of `wp_strip_all_tags()` (not WP-native)
- Some AIs hardcode "minutes" without handling singular (1 minute). The reference version uses `_n()` with a `/* translators: */` comment; without that comment Plugin Check reports `WordPress.WP.I18n.MissingTranslatorsComment` when Plugin Repo is ticked
- Escaping twice (`esc_html__()` inside `sprintf()`, then `esc_html()` again) is harmless for a number but shows the AI doesn't track what is already escaped
- Seen in the Test 9 stand-in run (local Mistral 7B, 14 Oct 2026, see `test9-transcript-mistral.md`): `floor()` instead of rounding up, so 600 words shows "2 minutes"; `is_singular()` instead of `is_single()`, so it also shows on pages; one answer came as five loose snippets, one without `<?php` at the top. Security-only Plugin Check: 0 findings. Plugin Repo: `example.com` in Plugin URI and Author URI (two errors, severity 7) before you even get to readme.txt
- Round 3 ("Change one thing": add a settings page for the reading speed, two Mistral answers): both got `SettingSanitization.register_settingMissing`; one put the page in the top-level menu instead of under Settings; in both, saving 0 as the speed breaks every post (`DivisionByZeroError`), and three AI fixes that made Plugin Check happy left that crash in place. If someone asks for a settings page, the honest check is "save 0 and open a post"

## You're done when

A single post shows "Estimated reading time: 1 minute" (short post) or "... 3 minutes" (about 600 words), and the homepage and archives show nothing.

## Plugin Check on the reference version

`facilitator/plugins/reading-time/`, measured 14 Oct 2026 with Plugin Check 2.1.0 on WordPress 7.1.3 (Playground CLI 3.1.58, PHP 8.5), one plugin per run:

- Security only: 0 errors, 0 warnings.
- Plugin Repo (the default): 1 error, `no_plugin_readme` (severity 9). That is directory paperwork, not a site risk. Re-measured 14 Oct 2026 after the Test 9 stand-in run: same result.

**Round 3 (14 Oct 2026): readme.txt added.** The reference folder now has a `readme.txt` with `Tested up to: 7.1` (a readme field; WordPress doesn't read it from the PHP header) and the same `Requires at least` / `Requires PHP` as the header. Re-measured the same day, same versions, all reference plugins in one site, check runner from a script:

- Plugin Repo (the default): **0 errors, 0 warnings**. Security only: 0 / 0. Nothing on the prompts page's pick list, so a participant whose plugin looks like this goes to the self-review prompt or adds a settings page (see `prompt-round-2.md`, worked example 3: the settings page is where both stand-in answers got a `SettingSanitization` row, and where saving 0 as the reading speed crashed every post).

The zips that contain these folders need rebuilding to include the readme.

A fresh chatbot answer to the prompt above can score differently; that is what testplan Test 9 is for.

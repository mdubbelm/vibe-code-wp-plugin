# Prompt: Simple Maintenance Mode

## The prompt

Word for word the text on `docs/prompts.html` (key `prompt-3-text` in `docs/js/i18n.js`, Dutch version in the nl block). Change both or neither.

```
Create a WordPress plugin with the following specifications:

Name: Simple Maintenance Mode
Function: Shows an "under maintenance" page to visitors when I turn it on. I can still see and use my site normally when I'm logged in as an admin.
Where visible: A settings page in the WordPress admin under Settings, and a maintenance message for visitors.
Behavior: Add a settings page with a checkbox to turn maintenance mode on or off, and a text field where I can write the message visitors will see. When turned on, visitors see my message and nothing else. The login page should always remain accessible so I don't lock myself out. Show a notice in the admin toolbar so I remember maintenance mode is active.

Technical requirements:
- Follow WordPress best practices (hooks, filters, sanitization)
- Include a plugin header with name, description and version
- Prevent direct file access
- Put all code in a single PHP file, and give me the complete file in one code block that starts with <?php
- Add short comments explaining what each part does
```

## Expected result

A plugin that:
- Uses `register_setting()` and `add_options_page()`
- Uses the `template_redirect` hook to intercept visitors
- Checks `current_user_can('manage_options')`
- Uses `wp_die()` with 503 status code
- Adds an admin bar node as indicator

## Difficulty: ⭐⭐ Medium

## Common pitfalls

- AI sometimes forgets to let the login page through → you lock yourself out
- Nonce/sanitization is often missing for settings. If the AI uses the Settings API (`register_setting()` + `settings_fields()` + a form posting to `options.php`), WordPress adds the nonce for you. A hand-built form that handles `$_POST` itself needs its own nonce and sanitising, and Plugin Check only shows those warnings when Plugin Repo is ticked
- AI may use `die()` instead of `wp_die()` (no WP styling)
- AJAX requests must be let through or admin features break

## You're done when

A private/incognito window shows the message (HTTP 503), the normal logged-in window shows the site and wp-admin, the admin bar shows "Maintenance mode active", and unticking the checkbox brings the site back. LocalWP only.

## Plugin Check on the reference version

`facilitator/plugins/maintenance-mode/`, measured 14 Oct 2026 with Plugin Check 2.1.0 on WordPress 7.1.3 (Playground CLI 3.1.58, PHP 8.5), one plugin per run:

- Security only: 0 errors, 0 warnings.
- Plugin Repo (the default): 1 error, `no_plugin_readme` (severity 9), and 5 warnings `PrefixAllGlobals.NonPrefixedFunctionFound` (severity 6): it flags the `mm_` functions as not prefixed. All directory paperwork, not a site risk. Re-measured 14 Oct 2026 after the Test 9 stand-in run: same result.

**Round 3 (14 Oct 2026): readme.txt added.** The reference folder now has a `readme.txt` with `Tested up to: 7.1` (a readme field; WordPress doesn't read it from the PHP header) and the same `Requires at least` / `Requires PHP` as the header. Re-measured the same day, same versions, all reference plugins in one site, check runner from a script:

- Plugin Repo (the default): **0 errors, 5 warnings**, all `PrefixAllGlobals.NonPrefixedFunctionFound` (severity 6) on the `mm_` functions. Security only: 0 / 0. Left as they are on purpose: they are examples of the skip rows the prompts page tells people to ignore. Nothing on the pick list.

The zips that contain these folders need rebuilding to include the readme.

A fresh chatbot answer to the prompt above can score differently; that is what testplan Test 9 is for.

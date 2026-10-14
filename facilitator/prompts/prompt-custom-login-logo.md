# Prompt: Custom Login Logo

## The prompt

Word for word the text on `docs/prompts.html` (key `prompt-4-text` in `docs/js/i18n.js`, Dutch version in the nl block). Change both or neither.

```
Create a WordPress plugin with the following specifications:

Name: Custom Login Logo
Function: Lets me replace the WordPress logo on the login screen with my own image.
Where visible: A settings page in the WordPress admin under Settings, and my custom logo on the login screen.
Behavior: Add a settings page where I can choose an image from my media library to use as the login logo. Show a preview of the current logo on the settings page. On the login screen, replace the default WordPress logo with my chosen image. Also make the logo link go to my homepage instead of wordpress.org.

Technical requirements:
- Follow WordPress best practices (hooks, filters, sanitization)
- Include a plugin header with name, description and version
- Prevent direct file access
- Put all code in a single PHP file, and give me the complete file in one code block that starts with <?php
- Add short comments explaining what each part does
```

## Expected result

A plugin that:
- Uses `wp_enqueue_media()` for the media uploader
- Uses the `login_enqueue_scripts` hook for custom CSS
- Uses `login_headerurl` and `login_headertext` filters
- Stores the logo URL via `register_setting()` with `esc_url_raw()`

## Difficulty: ⭐⭐ Medium

## Common pitfalls

- AI often forgets `wp_enqueue_media()` → media uploader doesn't work
- JavaScript for media uploader may miss jQuery dependency
- AI may use inline style without `esc_url()` → XSS risk
- Logo dimensions hardcoded → looks odd with non-standard sizes
- Preview `<img>` without `alt` text (the reference version has one)
- Seen in the Test 9 stand-in run (local Mistral 7B, 14 Oct 2026, see `test9-transcript-mistral.md`), five answers: one split into two PHP files plus JavaScript; two without `<?php` at the top ("Parse error" on activation); one with the same function defined twice ("Cannot redeclare"); two that activate and then crash **every** admin page because they call a function that doesn't exist (`add_menu()`, `is_login_page()`); one settings page that crashes on `screenshot_help()`. TA tip: if wp-admin shows "There has been a critical error" right after activation, it's the plugin; new Playground, or rename the plugin folder on LocalWP
- Plugin Check on the four versions it could check: Security only found 1 error (unescaped `<img src>`), and that answer crashed wp-admin, so nobody could have reached Tools → Plugin Check. With Plugin Repo ticked: `PluginCheck.CodeAnalysis.SettingSanitization.register_settingMissing` (an **error**, severity 7, so it skips the AI review) and `$_SERVER['HTTP_REFERER']` not sanitised. That is why `SettingSanitization` is on the prompts page's pick list (round 3: the Plugin Repo run is now the default, see `prompt-round-2.md`)

Difficulty note: this file and the participant pages say Medium, `guide.md` says Hard. Plan decision 5 is still open.

## You're done when

The login screen shows the chosen image (Playground: log out via the admin bar, because a private window can't reach a Playground site; LocalWP: `/wp-login.php` in a private window), and clicking it goes to the homepage. The "Choose image" button opens the media library.

## Plugin Check on the reference version

`facilitator/plugins/custom-login-logo/`, measured 14 Oct 2026 with Plugin Check 2.1.0 on WordPress 7.1.3 (Playground CLI 3.1.58, PHP 8.5), one plugin per run:

- Security only: 0 errors, 0 warnings.
- Plugin Repo (the default): 1 error, `no_plugin_readme` (severity 9), and 4 warnings `PrefixAllGlobals.NonPrefixedFunctionFound` (severity 6): it flags the `cll_` functions as not prefixed. All directory paperwork, not a site risk. Re-measured 14 Oct 2026 after the Test 9 stand-in run: same result.

**Round 3 (14 Oct 2026): readme.txt added.** The reference folder now has a `readme.txt` with `Tested up to: 7.1` (a readme field; WordPress doesn't read it from the PHP header) and the same `Requires at least` / `Requires PHP` as the header. Re-measured the same day, same versions, all reference plugins in one site, check runner from a script:

- Plugin Repo (the default): **0 errors, 4 warnings**, all `PrefixAllGlobals.NonPrefixedFunctionFound` (severity 6) on the `cll_` functions. Security only: 0 / 0. Kept on purpose, as in Maintenance Mode. Nothing on the pick list.

The zips that contain these folders need rebuilding to include the readme.

A fresh chatbot answer to the prompt above can score differently; that is what testplan Test 9 is for.

# Prompt: External Link Icon

## The prompt

Word for word the text on `docs/prompts.html` (key `prompt-2-text` in `docs/js/i18n.js`, Dutch version in the nl block). Change both or neither.

```
Create a WordPress plugin with the following specifications:

Name: External Link Icon
Function: Automatically adds an arrow icon to all external links in posts and pages, and opens them in a new tab.
Where visible: On the frontend, on all links in the content that point to a different website.
Behavior: Check every link in the content. If the link points to a different website than my own site, add a small arrow symbol after the link text, make the link open in a new tab, and add a security attribute so the new tab can't access my site. Leave links to my own site and links that point to sections on the same page unchanged.

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
- Parses links (via DOMDocument or regex)
- Compares the domain with `home_url()`
- Adds `target="_blank"` and `rel="noopener noreferrer"`

## Difficulty: ⭐ Easy

## Common pitfalls

- AI often uses regex instead of DOMDocument → breaks on complex HTML
- Some AIs forget to skip anchor links (#) and relative links (/)
- `str_contains()` and `str_starts_with()` are PHP 8.0 functions, but WordPress has shipped polyfills for them since 5.9 (`wp-includes/compat.php`), so inside WordPress they also work on PHP 7.4 (the minimum since WordPress 7.0). Outside WordPress they would fail on PHP 7.4
- Treating every link that starts with `/` as internal also skips protocol-relative links (`//example.org/page`), which point to another site. The reference version checks for `//` first
- Overwriting `rel` throws away values that were already there, such as `nofollow` or `sponsored`. The reference version merges them
- Opening links in a new tab without telling people is an accessibility issue in its own right, and screen readers may read the ↗ arrow out as a symbol name. Good reflection material, not something Plugin Check flags

## You're done when

A link to another site inside a post gets ↗, `target="_blank"` and `rel="noopener noreferrer"`; links to your own site, `#anchors` and `mailto:` links stay unchanged.

## Plugin Check on the reference version

`facilitator/plugins/external-link-icon/`, measured 14 Oct 2026 with Plugin Check 2.1.0 on WordPress 7.1.3 (Playground CLI 3.1.58, PHP 8.5), one plugin per run:

- Security only: 0 errors, 0 warnings.
- Plugin Repo (the default): 1 error, `no_plugin_readme` (severity 9). That is directory paperwork, not a site risk. Re-measured 14 Oct 2026 after the Test 9 stand-in run: same result.

**Round 3 (14 Oct 2026): readme.txt added.** The reference folder now has a `readme.txt` with `Tested up to: 7.1` (a readme field; WordPress doesn't read it from the PHP header) and the same `Requires at least` / `Requires PHP` as the header. Re-measured the same day, same versions, all reference plugins in one site, check runner from a script:

- Plugin Repo (the default): **0 errors, 0 warnings**. Security only: 0 / 0. Nothing on the prompts page's pick list.

The zips that contain these folders need rebuilding to include the readme.

A fresh chatbot answer to the prompt above can score differently; that is what testplan Test 9 is for.

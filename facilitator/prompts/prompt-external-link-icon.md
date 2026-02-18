# Prompt: External Link Icon

## The prompt

```
Create a WordPress plugin with the following specifications:

Name: External Link Icon
Function: Automatically adds an arrow icon (↗) to all external links in posts and pages, and opens them in a new tab.
Where visible: On the frontend, on all links in the content that point to a different website.
Behavior: Check every link in the content. If the link points to a different domain than the site itself, add " ↗" after the link text, set target="_blank" and add rel="noopener noreferrer". Leave internal links and anchor links (#) unchanged.

Technical requirements:
- Follow WordPress best practices (hooks, filters, sanitization)
- Include a plugin header with name, description and version
- Prevent direct file access
- Put all code in a single PHP file
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
- `str_contains()` only exists from PHP 8.0 — WordPress requires PHP 7.4+

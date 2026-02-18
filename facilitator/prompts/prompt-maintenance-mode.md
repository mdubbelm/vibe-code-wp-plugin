# Prompt: Simple Maintenance Mode

## The prompt

```
Create a WordPress plugin with the following specifications:

Name: Simple Maintenance Mode
Function: Shows an "under maintenance" page to visitors when enabled. Logged-in administrators see the site normally.
Where visible: An on/off toggle in the admin under Settings, and a maintenance page for visitors.
Behavior: Add a settings page under Settings with: (1) a checkbox to enable/disable maintenance mode, (2) a text field for the message visitors see. When enabled: show the message to all non-logged-in visitors with HTTP status 503. Always keep the WordPress login screen and admin area accessible. Show an indicator in the admin toolbar when maintenance mode is active.

Technical requirements:
- Follow WordPress best practices (hooks, filters, sanitization)
- Include a plugin header with name, description and version
- Prevent direct file access
- Put all code in a single PHP file
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
- Nonce/sanitization is often missing for settings
- AI may use `die()` instead of `wp_die()` (no WP styling)
- AJAX requests must be let through or admin features break

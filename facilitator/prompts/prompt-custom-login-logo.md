# Prompt: Custom Login Logo

## The prompt

```
Create a WordPress plugin with the following specifications:

Name: Custom Login Logo
Function: Lets you customize the logo on the WordPress login screen via a settings page.
Where visible: A settings page in the admin, and the customized logo on the login screen (wp-login.php).
Behavior: Add a settings page under Settings with: (1) an image field where you can select a logo via the WordPress media uploader, (2) a preview of the current logo. On the login screen: replace the default WordPress logo with the selected logo. Make the logo link point to the homepage instead of wordpress.org.

Technical requirements:
- Follow WordPress best practices (hooks, filters, sanitization)
- Include a plugin header with name, description and version
- Prevent direct file access
- Put all code in a single PHP file
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

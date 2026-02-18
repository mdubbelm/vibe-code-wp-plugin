# Prompt: Reading Time Estimator

## The prompt

```
Create a WordPress plugin with the following specifications:

Name: Reading Time
Function: Calculates and displays the estimated reading time above each blog post.
Where visible: On the frontend, above the content of each individual post.
Behavior: Count the number of words in the post, divide by 250 (average reading speed), and display the result as "Estimated reading time: X minutes" above the content. Round up. Show a minimum of 1 minute. Only display this on individual posts, not on archive or overview pages.

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
- Combines `str_word_count()` and `wp_strip_all_tags()`
- Checks `is_single()` to skip archive pages
- Escapes output with `esc_html()`

## Difficulty: ⭐ Easy

## Common pitfalls

- AI sometimes forgets the `is_single()` check → reading time appears everywhere
- AI may use `strip_tags()` instead of `wp_strip_all_tags()` (not WP-native)
- Some AIs hardcode "minutes" without handling singular (1 minute)

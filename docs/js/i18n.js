/* =====================================================
   Workshop taalswitch — EN / NL
   Gebruik: voeg data-i18n="key" toe aan elementen.
   JS zet innerHTML op de vertaling van de actieve taal.
   ===================================================== */

const I18N = {

  en: {

    /* ── Shared ─────────────────────────────────────── */
    'skip-link':          'Skip to main content',
    'nav-aria':           'Workshop pages',
    'nav-preparation':    'Preparation',
    'nav-guide':          'Guide',
    'nav-ideas':          'Plugin ideas',
    'nav-prompts':        'Prompts',
    'nav-tips':           'Tips',
    'lang-toggle-label':  'Language',
    'footer-workshop':    'Workshop: Vibe Code Your Own WordPress Plugin',
    'footer-date':        'Version: February 2026',
    'footer-license':     '<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener license">CC BY 4.0</a> — free to use, share and adapt with attribution.',
    'footer-feedback':    'Feedback? <a href="mailto:pluginvibes@modub.nl">Send an email</a>',
    'footer-disclaimer':  'The code and instructions on this site are provided for educational purposes only. The author accepts no responsibility for any issues, data loss, or damage to websites or installations resulting from following this workshop. Always test plugins in a safe environment before using them on a live site.',

    /* ── index.html ─────────────────────────────────── */
    'index-h1':           'Vibe Code Your Own WordPress Plugin',
    'index-sub':          'Workshop preparation — get set up before we start',
    'index-intro':        'In this workshop you\'ll create your own WordPress plugin in 45 minutes using AI. No coding experience needed — but a little preparation makes all the difference.',
    'index-tip-time':     '<strong>Short on time?</strong> Jump to <a href="#option-b">Option B: Zero Install</a> — you only need a browser and an AI tool.',
    'index-h2-step1':     'Step 1: Set up WordPress',
    'index-step1-intro':  'You need a working WordPress installation to test plugins on. Choose one of these options:',
    'index-h3-localwp':   'Option A: LocalWP',
    'index-localwp-desc': 'LocalWP is a free program that runs WordPress locally on your laptop. No server, no hosting, no costs.',
    'index-localwp-li1':  'Download LocalWP from <a href="https://localwp.com/" target="_blank" rel="noopener">localwp.com</a>',
    'index-localwp-li2':  'Install the program',
    'index-localwp-li3':  'Click <strong>"Create a new site"</strong>',
    'index-localwp-li4':  'Choose a name (e.g. "workshop") and click through with the default settings',
    'index-localwp-li5':  'Wait for the site to be created',
    'index-localwp-li6':  'Click <strong>"WP Admin"</strong> to verify your WordPress dashboard opens',
    'index-localwp-time': 'Takes about 10 minutes (including download)',
    'index-localwp-check':'<strong>Check:</strong> Can you log in to your WordPress dashboard? Then you\'re ready.',
    'index-h3-playground':'Option B: WordPress Playground',
    'index-pg-desc':      'No time or no desire to install anything? WordPress Playground runs entirely in your browser.',
    'index-pg-li1':       'Go to <a href="https://playground.wordpress.net/" target="_blank" rel="noopener">playground.wordpress.net</a>',
    'index-pg-li2':       'Wait for WordPress to load (takes a few seconds)',
    'index-pg-li3':       'You now have a fully working WordPress installation in your browser',
    'index-pg-time':      'Takes about 30 seconds',
    'index-pg-note':      '<strong>Note:</strong> Everything you create disappears when you close the tab (unless you export). Works best in Chrome or Edge.',
    'index-h2-step2':     'Step 2: Set up an AI tool',
    'index-step2-intro':  'You need an AI chatbot that can generate code. Pick one — any will do:',
    'index-table-tool':   'Tool',
    'index-table-account':'Account needed?',
    'index-table-free':   'Free?',
    'index-ai-check':     '<strong>Check:</strong> Can you send a message and get a response? Then you\'re ready.',
    'index-claudecode':   '<strong>Want to skip the copy-pasting?</strong> If you get serious about this, consider <a href="https://claude.ai/code" target="_blank" rel="noopener">Claude Code</a> — a version of Claude that runs directly in your terminal. No more copying code blocks back and forth; it reads and edits your files directly and keeps full context of everything you\'ve done. <a href="https://modub.nl/blog/ai-workflow/" target="_blank" rel="noopener">Read about it on modub.nl (in Dutch)</a>.',
    'index-h2-step3':     'Step 3: Code editor <span style="font-weight: normal; font-size: 0.85em;">(optional)</span>',
    'index-step3-intro':  'If you\'re using LocalWP, it helps to have a code editor. If you\'re using WordPress Playground, skip this step.',
    'index-step3-li1':    '<a href="https://code.visualstudio.com/" target="_blank" rel="noopener">Visual Studio Code</a> (free) — recommended',
    'index-step3-li2':    'Or use Notepad / TextEdit — that works too',
    'index-h2-step4':     'Step 4: Know the basics',
    'index-step4-intro':  'You don\'t need to know how to code, but it helps to understand this:',
    'index-h3-what':      'What is a WordPress plugin?',
    'index-what-desc':    'A plugin is a piece of extra functionality you add to WordPress. It\'s a folder with a PHP file inside it, stored in <code>wp-content/plugins/</code>. You don\'t need to know this by heart — the AI writes the code for you.',
    'index-h3-minimal':   'What does a minimal plugin look like?',
    'index-minimal-after':'That\'s it. Those first lines (the "plugin header") tell WordPress this is a plugin. The rest is your code — or in our case: the code that AI writes for you.',
    'index-h3-install':   'How do you install a self-made plugin?',
    'index-install-localwp': '<strong>With LocalWP:</strong>',
    'index-install-lw-li1':  'Open your site\'s folder → <code>app/public/wp-content/plugins/</code>',
    'index-install-lw-li2':  'Create a new folder (e.g. <code>my-plugin</code>)',
    'index-install-lw-li3':  'Put your PHP file in it',
    'index-install-lw-li4':  'Go to WP Admin → Plugins → Activate',
    'index-install-pg':      '<strong>With WordPress Playground:</strong>',
    'index-install-pg-li1':  'Copy your code',
    'index-install-pg-li2':  'Go to WP Admin → Plugins → Plugin Editor (or compress the folder to a .zip file and upload it)',
    'index-h2-prompt':    'Prompt template',
    'index-prompt-intro': 'This is the template we\'ll use during the workshop. Feel free to look at it now:',
    'index-tip-prompt':   '<strong>Tip:</strong> The more specific your prompt, the better the result. "Make a plugin that does something with images" yields less than "Make a plugin that automatically adds alt text to images that don\'t have any yet."',
    'index-h2-starter':   'Starter plugin',
    'index-starter-desc': 'Download this minimal starter plugin as a reference. You can install it in WordPress to see how a plugin works:',
    'index-download-btn': 'Download starter plugin (.zip)',
    'index-h2-checklist': 'Checklist',
    'index-cl-li1':       'I have a working WordPress environment (LocalWP or Playground)',
    'index-cl-li2':       'I have an AI tool I can use',
    'index-cl-li3':       'I optionally have a code editor installed',
    'index-cl-li4':       'I roughly understand what a WordPress plugin is',
    'index-cl-li5':       'I\'ve looked at the prompt template',
    'index-cl-done':      '<strong>Everything checked? You\'re ready for the workshop!</strong>',
    'index-recommended':  'Recommended',
    'index-quick':        'Quick option',

    /* ── guide.html ─────────────────────────────────── */
    'guide-title-h1':     'Step-by-step guide',
    'guide-title-sub':    'Choose your setup and follow the steps to build and install your plugin.',
    'guide-tablist-aria': 'Choose your WordPress setup',
    'guide-tab1':         '<span class="tab-badge" aria-hidden="true">Route 1</span>\n      WordPress Playground',
    'guide-tab2':         '<span class="tab-badge" aria-hidden="true">Route 2</span>\n      LocalWP',
    'guide-pg-col-header':'WordPress Playground',
    'guide-pg-col-li1':   'No installation needed',
    'guide-pg-col-li2':   'Works in any browser (best in Chrome or Edge)',
    'guide-pg-col-li3':   'Ready in 30 seconds',
    'guide-pg-col-li4':   'Everything disappears when you close the tab',
    'guide-pg-choose':    '<strong>Choose this if</strong> you skipped the preparation, don\'t want to install anything, or just want to try it out quickly.',
    'guide-lw-col-header':'LocalWP',
    'guide-lw-col-li1':   'WordPress runs locally on your laptop',
    'guide-lw-col-li2':   'Works on Mac, Windows, and Linux',
    'guide-lw-col-li3':   'Your files and plugins are saved for real',
    'guide-lw-col-li4':   'Requires installation (~10 min, see <a href="index.html">preparation page</a>)',
    'guide-lw-choose':    '<strong>Choose this if</strong> you completed the preparation and want to keep your plugin after the workshop.',

    'guide-pg-s1-h':      'Open WordPress Playground',
    'guide-pg-s1-p1':     'Go to <a href="https://playground.wordpress.net/" target="_blank" rel="noopener">playground.wordpress.net</a> in Chrome or Edge. WordPress loads in a few seconds — you\'ll see the admin dashboard.',
    'guide-pg-s1-warn':   '<strong>Important:</strong> everything you create disappears when you close the tab. Keep this tab open until you\'re done.',
    'guide-pg-s2-h':      'Choose your plugin idea',
    'guide-pg-s2-p1':     'Not sure what to build? Browse the <a href="ideas.html">plugin ideas</a> for inspiration, or pick one from the <a href="prompts.html">prompts page</a> — those prompts are already written for you.',
    'guide-pg-s2-tip':    '<strong>Keep it simple.</strong> One feature that works beats three features that don\'t.',
    'guide-pg-s3-h':      'Write your prompt and generate the code',
    'guide-pg-s3-p1':     'Open your AI tool (ChatGPT, Claude, Le Chat, etc.) in a new tab. Use the <a href="index.html">prompt template from the preparation page</a>, fill in your plugin idea, and send it.',
    'guide-pg-s3-p2':     'You\'ll get PHP code back — that\'s your plugin. Copy all of it.',
    'guide-pg-s4-h':      'Install your plugin',
    'guide-pg-s4-p1':     'Choose one of the two methods:',
    'guide-pg-s4-va-h':   'Option A — Plugin Editor (no file needed)',
    'guide-pg-s4-va-tag': 'Easiest',
    'guide-pg-s4-va-li1': 'In your WordPress admin, go to <strong>Plugins → Plugin Editor</strong>',
    'guide-pg-s4-va-li2': 'In the dropdown (top right), select <strong>Hello Dolly</strong>',
    'guide-pg-s4-va-li3': 'Select all the existing code and delete it',
    'guide-pg-s4-va-li4': 'Paste your generated PHP code',
    'guide-pg-s4-va-li5': 'Click <strong>"Update File"</strong>',
    'guide-pg-s4-vb-h':   'Option B — Upload a zip (if your AI created one)',
    'guide-pg-s4-vb-tag': 'If available',
    'guide-pg-s4-vb-p1':  'Some AI tools generate a downloadable zip file. If yours did:',
    'guide-pg-s4-vb-li1': 'Go to <strong>Plugins → Add New → Upload Plugin</strong>',
    'guide-pg-s4-vb-li2': 'Choose the zip from your downloads folder',
    'guide-pg-s4-vb-li3': 'Click <strong>"Install Now"</strong>',
    'guide-pg-s5-h':      'Activate your plugin',
    'guide-pg-s5-p1':     'Go to <strong>Plugins</strong>. Find your plugin — it shows the name you gave it in the plugin header — and click <strong>"Activate"</strong>.',
    'guide-pg-s6-h':      'Test your plugin',
    'guide-pg-s6-p1':     'Click <strong>"Visit Site"</strong> at the top of the admin and navigate to a post or page. Does your plugin do what you expected?',
    'guide-pg-s6-ok':     '<strong>It works!</strong> Now try to improve it — ask the AI to change the styling, add an option, or fix an edge case.',
    'guide-pg-s7-h':      'Iterate',
    'guide-pg-s7-p1':     'Something not working, or want to improve it? Go back to your AI tool and be specific about the problem:',
    'guide-pg-s7-li1':    '<em>"The plugin is activated but nothing appears. Here is the code: [paste]"</em>',
    'guide-pg-s7-li2':    '<em>"PHP error: [paste error message]. Can you fix this?"</em>',
    'guide-pg-s7-li3':    '<em>"It works — can you make the text gray and slightly smaller?"</em>',
    'guide-pg-s7-p2':     'Copy the new code, go back to the Plugin Editor, replace the old code and save again.',
    'guide-pg-s7-tip':    '<strong>This is the real skill:</strong> not writing code, but knowing how to describe a problem and steer the AI toward a solution.',

    'guide-lw-s1-h':      'Start your WordPress site in LocalWP',
    'guide-lw-s1-p1':     'Open LocalWP. If you haven\'t created a site yet, click <strong>"Create a new site"</strong> and follow the steps with default settings. Once your site is listed, click <strong>"WP Admin"</strong> to open the dashboard.',
    'guide-lw-s2-h':      'Choose your plugin idea',
    'guide-lw-s2-p1':     'Not sure what to build? Browse the <a href="ideas.html">plugin ideas</a> for inspiration, or pick one from the <a href="prompts.html">prompts page</a> — those prompts are already written for you.',
    'guide-lw-s2-tip':    '<strong>Keep it simple.</strong> One feature that works beats three features that don\'t.',
    'guide-lw-s3-h':      'Write your prompt and generate the code',
    'guide-lw-s3-p1':     'Open your AI tool in a new tab. Use the <a href="index.html">prompt template from the preparation page</a>, fill in your plugin idea, and send it. You\'ll get PHP code back — that\'s your plugin.',
    'guide-lw-s3-tip':    '<strong>Keep the AI tab open.</strong> You\'ll come back to it when you iterate.',
    'guide-lw-s4-h':      'Save and install your plugin',
    'guide-lw-s4-p1':     'Choose the method that suits you best:',
    'guide-lw-s4-va-h':   'Option A — Text editor',
    'guide-lw-s4-va-tag': 'Recommended',
    'guide-lw-s4-va-li1': 'Open Notepad (Windows), TextEdit (Mac), or any plain text editor<ul><li><strong>Mac TextEdit only:</strong> go to Format → Make Plain Text first, or it saves as a Word-style file that PHP can\'t read.</li></ul>',
    'guide-lw-s4-va-li2': 'Paste your generated PHP code and save the file as <code>plugin-name.php</code> (e.g. <code>reading-time.php</code>)',
    'guide-lw-s4-va-li3': 'In LocalWP, right-click your site and choose <strong>"Open site folder"</strong>',
    'guide-lw-s4-va-li4': 'Navigate to <code>app/public/wp-content/plugins/</code>',
    'guide-lw-s4-va-li5': 'Create a new folder with the same name as your file (e.g. <code>reading-time</code>)',
    'guide-lw-s4-va-li6': 'Move your <code>.php</code> file into that folder',
    'guide-lw-s4-vb-h':   'Option B — Upload a zip via WP Admin',
    'guide-lw-s4-vb-tag': 'Alternative',
    'guide-lw-s4-vb-p1':  'Use this if your AI generated a downloadable zip, or if you\'d rather not navigate the file system.',
    'guide-lw-s4-vb-p2':  '<strong>If your AI gave you a zip:</strong> go straight to step 4.',
    'guide-lw-s4-vb-p3':  '<strong>To create a zip yourself:</strong>',
    'guide-lw-s4-vb-li1': 'Put your <code>.php</code> file in a folder with the same name',
    'guide-lw-s4-vb-li2': 'Compress it:<ul><li><strong>Mac:</strong> right-click the folder → "Compress"</li><li><strong>Windows:</strong> right-click → "Send to" → "Compressed (zipped) folder"</li><li><strong>Linux:</strong> right-click → "Compress" or run <code>zip -r plugin.zip folder/</code></li></ul>',
    'guide-lw-s4-vb-p4':  '<strong>To upload:</strong>',
    'guide-lw-s4-vb-li3': 'In WP Admin, go to <strong>Plugins → Add New → Upload Plugin</strong>',
    'guide-lw-s4-vb-li4': 'Choose your zip file and click <strong>"Install Now"</strong>',
    'guide-lw-s5-h':      'Activate your plugin',
    'guide-lw-s5-p1':     'Go to <strong>Plugins</strong> in WP Admin. Your plugin should appear in the list. Click <strong>"Activate"</strong>.',
    'guide-lw-s5-p2':     'Plugin not appearing? Check two things: the folder name and the filename must be the same (e.g. both <code>reading-time</code>), and the <code>/* Plugin Name: ... */</code> block must be the very first thing in the file.',
    'guide-lw-s6-h':      'Test your plugin',
    'guide-lw-s6-p1':     'Click <strong>"Open site"</strong> in LocalWP, or use <strong>"Visit Site"</strong> in WP Admin. Navigate to a post or page and check if your plugin behaves as expected.',
    'guide-lw-s6-ok':     '<strong>It works!</strong> Now try to improve it — ask the AI to change styling, add an option, or handle an edge case.',
    'guide-lw-s7-h':      'Iterate',
    'guide-lw-s7-p1':     'Something not working? Go back to your AI tool and describe the issue clearly:',
    'guide-lw-s7-li1':    '<em>"The plugin is activated but nothing appears. Here is the code: [paste]"</em>',
    'guide-lw-s7-li2':    '<em>"PHP fatal error: [paste]. Can you fix it?"</em>',
    'guide-lw-s7-li3':    '<em>"Works great — can you add a settings page to change the reading speed?"</em>',
    'guide-lw-s7-p2':     'Copy the new code, open your PHP file in the editor, replace everything, save. Reload the page in WordPress — no reactivation needed.',
    'guide-lw-s7-warn':   '<strong>White screen?</strong> Don\'t panic. In the plugins folder, rename your plugin folder (e.g. add <code>-off</code>). WordPress auto-deactivates it and the white screen disappears. Fix the code, then rename it back.',

    /* ── ideas.html ─────────────────────────────────── */
    'ideas-h1':           'Plugin ideas',
    'ideas-sub':          'Not sure what to build? Pick an idea from this list and write your own prompt.',
    'ideas-tip':          'Use the <a href="index.html">prompt template from the preparation page</a> to describe your chosen idea. Fill in the name, what it should do, where it should appear, and how it should behave — then paste it into your AI tool.',
    'ideas-cat-frontend': 'Frontend — visible to visitors',
    'ideas-cat-admin':    'Admin — visible in the WordPress dashboard',
    'ideas-cat-sitewide': 'Site-wide — behind the scenes',
    'ideas-badge-easy':   'Easy',
    'ideas-badge-medium': 'Medium',
    'ideas-badge-hard':   'Hard',
    'ideas-f1-name':      'Last Updated Date',
    'ideas-f1-desc':      'Shows "Last updated on [date]" above or below a blog post.',
    'ideas-f2-name':      'Copyright Footer',
    'ideas-f2-desc':      'Adds "© [year] [site name]" to the bottom of every page. The year updates automatically.',
    'ideas-f3-name':      'Author Bio Box',
    'ideas-f3-desc':      'Shows a short author description with avatar below each post.',
    'ideas-f4-name':      'Simple Cookie Notice',
    'ideas-f4-desc':      'Shows a "This site uses cookies" banner at the bottom of the page with a dismiss button.',
    'ideas-f5-name':      'Custom 404 Message',
    'ideas-f5-desc':      'Replaces the standard "Not Found" message with your own text and a link back to the homepage.',
    'ideas-f6-name':      'Reading Progress Bar',
    'ideas-f6-desc':      'Shows a progress bar at the top of the page that fills as you scroll through a post.',
    'ideas-a1-name':      'Admin Footer Text',
    'ideas-a1-desc':      'Replaces "Thank you for creating with WordPress" at the bottom of every admin page with your own message.',
    'ideas-a2-name':      'Dashboard Welcome Widget',
    'ideas-a2-desc':      'Adds a custom welcome message or quick-links panel to the WordPress dashboard.',
    'ideas-a3-name':      'Word Count Column',
    'ideas-a3-desc':      'Adds a "Words" column to the posts overview so you can see the word count of each post at a glance.',
    'ideas-a4-name':      'Login Page Message',
    'ideas-a4-desc':      'Adds a custom message below the login form — useful for multi-author sites ("Editors only — contact admin for access").',
    'ideas-a5-name':      'Missing Featured Image Warning',
    'ideas-a5-desc':      'Shows a warning when you try to publish a post without a featured image set.',
    'ideas-s1-name':      'Disable Emoji',
    'ideas-s1-desc':      'Removes the WordPress emoji scripts from every page. Makes your site load slightly faster.',
    'ideas-s2-name':      'Remove Generator Tag',
    'ideas-s2-desc':      'Removes the WordPress version number from your page source code. Small privacy and security improvement.',

    /* ── prompts.html ───────────────────────────────── */
    'prompts-h1':         'Choose your plugin',
    'prompts-sub':        'Pick one of the ideas below, or come up with your own. Copy the prompt and paste it into your AI tool.',
    'prompts-tip':        '<strong>How this works:</strong> Click "Copy" on the prompt you like, paste it into your AI tool, and follow the instructions you get back. If the result isn\'t right, tell the AI what to fix — that\'s the iterating part!\n    <br><br>\n    No idea what to build? See the <a href="ideas.html" style="color: var(--color-accent);">plugin ideas list</a> for inspiration.',
    'prompts-p1-name':    'Reading Time',
    'prompts-p1-desc':    'Shows the estimated reading time above each blog post.',
    'prompts-p2-name':    'External Link Icon',
    'prompts-p2-desc':    'Adds an arrow icon to external links and opens them in a new tab.',
    'prompts-p3-name':    'Maintenance Mode',
    'prompts-p3-desc':    'Shows an "under maintenance" page to visitors while admins can still use the site.',
    'prompts-p4-name':    'Custom Login Logo',
    'prompts-p4-desc':    'Replace the WordPress logo on the login screen with your own image.',
    'prompts-own-title':  'Your own idea',
    'prompts-own-p1':     'Have your own idea? Go for it! Use the template from the <a href="index.html">preparation page</a> and fill in your own details.',
    'prompts-own-p2':     'Tip: keep it to one feature. "Does one thing well" beats "does everything badly."',
    'prompts-copy':       'Copy',
    'prompts-copied':     'Copied!',

    'prompt-1-text': `Create a WordPress plugin with the following specifications:

Name: Reading Time
Function: Shows the estimated reading time above each blog post.
Where visible: On the frontend, above the content of each individual post.
Behavior: Count the number of words in a post, divide by 250 (average reading speed), and show the result as "Estimated reading time: X minutes" above the post content. Round up to the nearest minute. Show a minimum of 1 minute. Only show this on individual blog posts, not on overview or archive pages.

Technical requirements:
- Follow WordPress best practices (hooks, filters, sanitization)
- Include a plugin header with name, description and version
- Prevent direct file access
- Put all code in a single PHP file
- Add short comments explaining what each part does`,

    'prompt-2-text': `Create a WordPress plugin with the following specifications:

Name: External Link Icon
Function: Automatically adds an arrow icon to all external links in posts and pages, and opens them in a new tab.
Where visible: On the frontend, on all links in the content that point to a different website.
Behavior: Check every link in the content. If the link points to a different website than my own site, add a small arrow symbol after the link text, make the link open in a new tab, and add a security attribute so the new tab can't access my site. Leave links to my own site and links that point to sections on the same page unchanged.

Technical requirements:
- Follow WordPress best practices (hooks, filters, sanitization)
- Include a plugin header with name, description and version
- Prevent direct file access
- Put all code in a single PHP file
- Add short comments explaining what each part does`,

    'prompt-3-text': `Create a WordPress plugin with the following specifications:

Name: Simple Maintenance Mode
Function: Shows an "under maintenance" page to visitors when I turn it on. I can still see and use my site normally when I'm logged in as an admin.
Where visible: A settings page in the WordPress admin under Settings, and a maintenance message for visitors.
Behavior: Add a settings page with a checkbox to turn maintenance mode on or off, and a text field where I can write the message visitors will see. When turned on, visitors see my message and nothing else. The login page should always remain accessible so I don't lock myself out. Show a notice in the admin toolbar so I remember maintenance mode is active.

Technical requirements:
- Follow WordPress best practices (hooks, filters, sanitization)
- Include a plugin header with name, description and version
- Prevent direct file access
- Put all code in a single PHP file
- Add short comments explaining what each part does`,

    'prompt-4-text': `Create a WordPress plugin with the following specifications:

Name: Custom Login Logo
Function: Lets me replace the WordPress logo on the login screen with my own image.
Where visible: A settings page in the WordPress admin under Settings, and my custom logo on the login screen.
Behavior: Add a settings page where I can choose an image from my media library to use as the login logo. Show a preview of the current logo on the settings page. On the login screen, replace the default WordPress logo with my chosen image. Also make the logo link go to my homepage instead of wordpress.org.

Technical requirements:
- Follow WordPress best practices (hooks, filters, sanitization)
- Include a plugin header with name, description and version
- Prevent direct file access
- Put all code in a single PHP file
- Add short comments explaining what each part does`,

    /* ── tips.html ──────────────────────────────────── */
    'tips-h1':            'Tips &amp; next steps',
    'tips-sub':           'Your plugin works — now what? Here\'s what to think about before using it for real.',
    'tips-h2-ready':      'Is it ready for a real site?',
    'tips-ready-intro':   'Probably not quite yet — and that\'s fine. A vibe-coded plugin is a great starting point, not a finished product. Here\'s an honest checklist:',
    'tips-cl1':           '<strong>Does it do what you expect?</strong> Test every feature, including edge cases (empty posts, no content, logged-out users).',
    'tips-cl2':           '<strong>Does it activate and deactivate cleanly?</strong> No errors, no leftover data after deactivation.',
    'tips-cl3':           '<strong>Has it passed Plugin Check?</strong> See the section below. This catches most common issues automatically.',
    'tips-cl4':           '<strong>Are you the only user?</strong> A plugin just for your own site has lower risk than one others will use.',
    'tips-cl5':           '<strong>Does it handle user input?</strong> If yes, security review is a must (see below).',
    'tips-ready-tip':     '<strong>Simple plugins with no user input</strong> (like Reading Time or Copyright Footer) carry very little risk. Plugins with settings pages, forms, or database writes need more scrutiny.',
    'tips-h2-security':   'Security — what to look for',
    'tips-security-intro':'AI does a reasonable job with some security practices, but misses others. Here\'s a quick overview:',
    'tips-sec-th1':       'What',
    'tips-sec-th2':       'Why it matters',
    'tips-sec-th3':       'AI usually…',
    'tips-sec-r1-what':   '<strong>Direct file access</strong><br><code>if (!defined(\'ABSPATH\')) exit;</code>',
    'tips-sec-r1-why':    'Prevents the PHP file from being run directly in a browser',
    'tips-sec-r1-ai':     '✓ Gets this right',
    'tips-sec-r2-what':   '<strong>Output escaping</strong><br><code>esc_html()</code>, <code>esc_attr()</code>, <code>esc_url()</code>',
    'tips-sec-r2-why':    'Prevents attackers from injecting malicious code into your pages',
    'tips-sec-r2-ai':     '✓ Usually correct',
    'tips-sec-r3-what':   '<strong>Input sanitization</strong><br><code>sanitize_text_field()</code>, <code>absint()</code>',
    'tips-sec-r3-why':    'Cleans user input before storing or using it',
    'tips-sec-r3-ai':     '⚠ Sometimes missing',
    'tips-sec-r4-what':   '<strong>Nonces</strong><br><code>wp_nonce_field()</code> + <code>check_admin_referer()</code>',
    'tips-sec-r4-why':    'Prevents someone from tricking you into unknowingly submitting an admin form',
    'tips-sec-r4-ai':     '⚠ Often missing',
    'tips-sec-r5-what':   '<strong>Capability checks</strong><br><code>current_user_can(\'manage_options\')</code>',
    'tips-sec-r5-why':    'Ensures only users with the right role can perform admin actions',
    'tips-sec-r5-ai':     '⚠ Sometimes missing',
    'tips-sec-r6-what':   '<strong>Database queries</strong><br><code>$wpdb->prepare()</code>',
    'tips-sec-r6-why':    'Prevents attackers from manipulating your database via form input',
    'tips-sec-r6-ai':     '⚠ Often incomplete',
    'tips-security-warn': '<strong>If your plugin has a settings page, stores data, or does anything with user input:</strong> ask the AI to check all six items above explicitly. Then run Plugin Check (see below) to verify.',
    'tips-security-p':    'You can ask your AI tool to audit the security of its own output:',
    'tips-security-tip':  '<em>"Review this plugin for WordPress security best practices. Check for: output escaping, input sanitization, nonces on all forms, capability checks on admin actions, and proper use of $wpdb->prepare() for any database queries. Show me what\'s missing and provide a corrected version."</em>',
    'tips-h2-pcp':        'Plugin Check',
    'tips-pcp-p1':        '<strong>Plugin Check</strong> (also called PCP) is a free WordPress plugin that automatically scans your code for common issues — security problems, coding standards violations, and WordPress.org requirements.',
    'tips-pcp-h3-how':    'How to use it',
    'tips-pcp-li1':       'Install the <a href="https://wordpress.org/plugins/plugin-check/" target="_blank" rel="noopener">Plugin Check plugin</a> from WordPress.org (search "Plugin Check" in WP Admin → Plugins → Add New)',
    'tips-pcp-li2':       'Go to <strong>Tools → Plugin Check</strong>',
    'tips-pcp-li3':       'Select your plugin from the dropdown',
    'tips-pcp-li4':       'Click <strong>"Check plugin"</strong>',
    'tips-pcp-li5':       'Review the results — errors are things to fix, warnings are things to consider',
    'tips-pcp-h3-what':   'What it checks',
    'tips-pcp-ch1':       'Security issues (missing escaping, sanitization, nonces)',
    'tips-pcp-ch2':       'Plugin header completeness',
    'tips-pcp-ch3':       'WordPress coding standards',
    'tips-pcp-ch4':       'Translatable text (so others can translate your plugin)',
    'tips-pcp-ch5':       'Accessibility of admin interfaces',
    'tips-pcp-ch6':       'Performance (loading scripts and styles only where needed)',
    'tips-pcp-tip':       '<strong>A useful exercise:</strong> paste the Plugin Check errors back into your AI tool and ask it to fix them. Keep going until PCP reports no errors. This teaches you more about WordPress standards than any tutorial.',
    'tips-h2-a11y':       'Accessibility — don\'t forget your users',
    'tips-a11y-p1':       'WordPress itself aims for <a href="https://make.wordpress.org/accessibility/handbook/best-practices/wcag/" target="_blank" rel="noopener">WCAG 2.2 Level AA</a>. There are no mandatory accessibility requirements for plugins in the WordPress directory, but you are strongly encouraged to consider accessibility when building your plugin.',
    'tips-a11y-p2':       'AI-generated code often gets accessibility wrong — it may produce forms without labels, buttons without descriptive text, or colour contrast that fails. Worth checking.',
    'tips-a11y-h3':       'Things to check in your plugin\'s output',
    'tips-a11y-li1':      'Images have meaningful <code>alt</code> text (or <code>alt=""</code> if decorative)',
    'tips-a11y-li2':      'Form inputs have a visible <code>&lt;label&gt;</code>',
    'tips-a11y-li3':      'Buttons describe what they do ("Save settings", not just "Submit")',
    'tips-a11y-li4':      'Colour is not the only way information is conveyed',
    'tips-a11y-li5':      'Text contrast is at least 4.5:1 against its background',
    'tips-a11y-li6':      'Everything that\'s clickable is also reachable by keyboard',
    'tips-a11y-tip':      '<strong>Ask your AI tool:</strong> "Review this plugin output for accessibility issues. Check for missing alt text, unlabelled form fields, low contrast, and keyboard inaccessible elements."',
    'tips-a11y-more':     'More guidance: <a href="https://wpaccessibility.org/docs/wp-a11y/wp-plugins/" target="_blank" rel="noopener">WordPress Plugin Accessibility — WP Accessibility</a>',
    'tips-h2-publish':    'Publishing to WordPress.org',
    'tips-publish-p1':    'Anyone can submit a plugin to the WordPress.org repository — it\'s free and open source. But should you?',
    'tips-pub-good-h':    'Makes sense if…',
    'tips-pub-good-li1':  'You want others to be able to use it',
    'tips-pub-good-li2':  'You want to contribute to the WordPress community',
    'tips-pub-good-li3':  'You\'re building a commercial plugin (many start here)',
    'tips-pub-good-li4':  'You want free code review from the WP team',
    'tips-pub-not-h':     'Probably not worth it if…',
    'tips-pub-not-li1':   'It\'s just for your own site',
    'tips-pub-not-li2':   'It\'s very site-specific (your logo, your settings)',
    'tips-pub-not-li3':   'It hasn\'t passed Plugin Check yet',
    'tips-pub-not-li4':   'You\'re not ready to maintain it over time',
    'tips-pub-req-h3':    'What WordPress.org requires',
    'tips-pub-req-li1':   'A unique function prefix (e.g. <code>rt_</code> for "reading-time") — no generic names like <code>get_data()</code>',
    'tips-pub-req-li2':   'A <code>readme.txt</code> in the correct format',
    'tips-pub-req-li3':   'GPL-compatible license',
    'tips-pub-req-li4':   'No hidden or unreadable code, no calls to external services without mentioning it',
    'tips-pub-req-li5':   'Passes the automated and manual code review (can take several weeks)',
    'tips-pub-tip':       'Not submitting to .org? You can still share your plugin as a zip file — send it to someone, host it on GitHub, or just keep it for yourself.',
    'tips-h2-vibe':       'What is vibe coding good for?',
    'tips-vibe-p1':       'An honest take — because knowing the limits is part of the skill.',
    'tips-vibe-good-h':   'Works well for…',
    'tips-vibe-good-li1': 'Quick prototypes and internal tools',
    'tips-vibe-good-li2': 'Testing an idea before involving a developer',
    'tips-vibe-good-li3': 'Learning how WordPress plugins work by reading generated code',
    'tips-vibe-good-li4': 'Small utilities that solve your own problem',
    'tips-vibe-good-li5': 'Automating repetitive tasks on your own site',
    'tips-vibe-care-h':   'Be careful with…',
    'tips-vibe-care-li1': 'Plugins for sites with real users (security needs expert review)',
    'tips-vibe-care-li2': 'Complex features that interact with existing systems',
    'tips-vibe-care-li3': 'Anything where you can\'t verify whether the result is correct',
    'tips-vibe-care-li4': 'Assuming "it works" means "it\'s done"',
    'tips-vibe-p2':       'The key skill in vibe coding is not writing code — it\'s <strong>describing what you want precisely</strong> and <strong>knowing when to trust the output</strong>. That judgment develops with practice.',
    'tips-h2-further':    'Want to go further?',
    'tips-further-h3-imp':'Improve your plugin',
    'tips-further-li1':   'Ask the AI to add a settings page so you can configure it from WP Admin',
    'tips-further-li2':   'Ask the AI to make all user-facing text translatable using <code>__()</code> and <code>_e()</code>',
    'tips-further-li3':   'Ask the AI to write unit tests for the plugin',
    'tips-further-li4':   'Ask the AI to make it comply with WordPress Coding Standards',
    'tips-further-li5':   'Export the plugin as a zip: <strong>Plugins → [your plugin] → Download</strong> (LocalWP) or create a zip from the folder',
    'tips-further-h3-learn': 'Keep learning',
    'tips-further-lnk1':  '<a href="https://developer.wordpress.org/plugins/" target="_blank" rel="noopener">WordPress Plugin Handbook</a> — the official guide to building plugins properly',
    'tips-further-lnk2':  '<a href="https://wordpress.org/plugins/plugin-check/" target="_blank" rel="noopener">Plugin Check (PCP)</a> — automated quality and security scanning',
    'tips-further-lnk3':  '<a href="https://developer.wordpress.org/coding-standards/wordpress-coding-standards/php/" target="_blank" rel="noopener">WordPress PHP Coding Standards</a> — what "clean WordPress code" looks like',
    'tips-further-lnk4':  '<a href="https://make.wordpress.org/core/handbook/best-practices/inline-documentation-standards/" target="_blank" rel="noopener">Inline documentation standards</a> — how to document your code',
  },

  nl: {

    /* ── Shared ─────────────────────────────────────── */
    'skip-link':          'Naar hoofdinhoud',
    'nav-aria':           'Workshoppagina\'s',
    'nav-preparation':    'Voorbereiding',
    'nav-guide':          'Handleiding',
    'nav-ideas':          'Plugin-ideeën',
    'nav-prompts':        'Prompts',
    'nav-tips':           'Tips',
    'lang-toggle-label':  'Taal',
    'footer-workshop':    'Workshop: Vibe Code je eigen WordPress Plugin',
    'footer-date':        'Versie: februari 2026',
    'footer-license':     '<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener license">CC BY 4.0</a> — vrij te gebruiken, te delen en aan te passen met naamsvermelding.',
    'footer-feedback':    'Feedback? <a href="mailto:pluginvibes@modub.nl">Stuur een e-mail</a>',
    'footer-disclaimer':  'De code en instructies op deze site zijn uitsluitend bedoeld voor educatieve doeleinden. De auteur aanvaardt geen verantwoordelijkheid voor problemen, dataverlies of schade aan websites of installaties als gevolg van het volgen van deze workshop. Test plugins altijd in een veilige omgeving voordat je ze op een live site gebruikt.',

    /* ── index.html ─────────────────────────────────── */
    'index-h1':           'Vibe Code je eigen WordPress Plugin',
    'index-sub':          'Voorbereiding voor de workshop — zorg dat je klaar bent voor we beginnen',
    'index-intro':        'In deze workshop maak je in 45 minuten je eigen WordPress plugin met AI. Je hebt geen programmeerervaring nodig — maar een beetje voorbereiding maakt alle verschil.',
    'index-tip-time':     '<strong>Weinig tijd?</strong> Ga direct naar <a href="#option-b">Optie B: Niets installeren</a> — je hebt alleen een browser en een AI-tool nodig.',
    'index-h2-step1':     'Stap 1: WordPress instellen',
    'index-step1-intro':  'Je hebt een werkende WordPress-installatie nodig om plugins op te testen. Kies een van deze opties:',
    'index-h3-localwp':   'Optie A: LocalWP',
    'index-localwp-desc': 'LocalWP is een gratis programma dat WordPress lokaal op je laptop draait. Geen server, geen hosting, geen kosten.',
    'index-localwp-li1':  'Download LocalWP via <a href="https://localwp.com/" target="_blank" rel="noopener">localwp.com</a>',
    'index-localwp-li2':  'Installeer het programma',
    'index-localwp-li3':  'Klik op <strong>"Create a new site"</strong>',
    'index-localwp-li4':  'Kies een naam (bijv. "workshop") en klik door met de standaardinstellingen',
    'index-localwp-li5':  'Wacht tot de site aangemaakt is',
    'index-localwp-li6':  'Klik op <strong>"WP Admin"</strong> om te controleren dat je WordPress-dashboard opent',
    'index-localwp-time': 'Duurt ongeveer 10 minuten (inclusief download)',
    'index-localwp-check':'<strong>Check:</strong> Kun je inloggen op je WordPress-dashboard? Dan ben je klaar.',
    'index-h3-playground':'Optie B: WordPress Playground',
    'index-pg-desc':      'Geen tijd of zin om iets te installeren? WordPress Playground draait volledig in je browser.',
    'index-pg-li1':       'Ga naar <a href="https://playground.wordpress.net/" target="_blank" rel="noopener">playground.wordpress.net</a>',
    'index-pg-li2':       'Wacht tot WordPress is geladen (duurt een paar seconden)',
    'index-pg-li3':       'Je hebt nu een volledig werkende WordPress-installatie in je browser',
    'index-pg-time':      'Duurt ongeveer 30 seconden',
    'index-pg-note':      '<strong>Let op:</strong> alles wat je maakt verdwijnt wanneer je het tabblad sluit (tenzij je exporteert). Werkt het best in Chrome of Edge.',
    'index-h2-step2':     'Stap 2: AI-tool instellen',
    'index-step2-intro':  'Je hebt een AI-chatbot nodig die code kan genereren. Kies er één — ze werken allemaal prima:',
    'index-table-tool':   'Tool',
    'index-table-account':'Account nodig?',
    'index-table-free':   'Gratis?',
    'index-ai-check':     '<strong>Check:</strong> Kun je een bericht versturen en antwoord krijgen? Dan ben je klaar.',
    'index-claudecode':   '<strong>Codeblokken kopieren beu?</strong> Als je hier serieus mee verder wil, is <a href="https://claude.ai/code" target="_blank" rel="noopener">Claude Code</a> het bekijken waard — een versie van Claude die direct in je terminal draait. Geen codeblokken meer heen en weer kopieren; hij leest en bewerkt je bestanden direct en behoudt de volledige context van alles wat je hebt gedaan. <a href="https://modub.nl/blog/ai-workflow/" target="_blank" rel="noopener">Lees erover op modub.nl</a>.',
    'index-h2-step3':     'Stap 3: Code-editor <span style="font-weight: normal; font-size: 0.85em;">(optioneel)</span>',
    'index-step3-intro':  'Als je LocalWP gebruikt, helpt het om een code-editor te hebben. Gebruik je WordPress Playground? Sla deze stap dan over.',
    'index-step3-li1':    '<a href="https://code.visualstudio.com/" target="_blank" rel="noopener">Visual Studio Code</a> (gratis) — aanbevolen',
    'index-step3-li2':    'Of gebruik Kladblok / TextEdit — dat werkt ook',
    'index-h2-step4':     'Stap 4: De basis begrijpen',
    'index-step4-intro':  'Je hoeft niet te kunnen programmeren, maar het helpt om dit te begrijpen:',
    'index-h3-what':      'Wat is een WordPress plugin?',
    'index-what-desc':    'Een plugin is een stukje extra functionaliteit dat je aan WordPress toevoegt. Het is een map met een PHP-bestand erin, op de locatie <code>wp-content/plugins/</code>. Je hoeft dit niet uit je hoofd te kennen — de AI schrijft de code voor je.',
    'index-h3-minimal':   'Hoe ziet een minimale plugin eruit?',
    'index-minimal-after':'Dat is het. Die eerste regels (de "plugin-header") vertellen WordPress dat dit een plugin is. De rest is jouw code — of in ons geval: de code die AI voor je schrijft.',
    'index-h3-install':   'Hoe installeer je een zelfgemaakte plugin?',
    'index-install-localwp': '<strong>Met LocalWP:</strong>',
    'index-install-lw-li1':  'Open de map van je site → <code>app/public/wp-content/plugins/</code>',
    'index-install-lw-li2':  'Maak een nieuwe map aan (bijv. <code>my-plugin</code>)',
    'index-install-lw-li3':  'Zet je PHP-bestand daarin',
    'index-install-lw-li4':  'Ga naar WP Admin → Plugins → Activeren',
    'index-install-pg':      '<strong>Met WordPress Playground:</strong>',
    'index-install-pg-li1':  'Kopieer je code',
    'index-install-pg-li2':  'Ga naar WP Admin → Plugins → Plugin Editor (of comprimeer de map naar een .zip-bestand en upload die)',
    'index-h2-prompt':    'Promptsjabloon',
    'index-prompt-intro': 'Dit is het sjabloon dat we tijdens de workshop gebruiken. Je mag er alvast naar kijken:',
    'index-tip-prompt':   '<strong>Tip:</strong> Hoe specifieker je prompt, hoe beter het resultaat. "Maak een plugin die iets doet met afbeeldingen" levert minder op dan "Maak een plugin die automatisch alt-tekst toevoegt aan afbeeldingen zonder alt-tekst."',
    'index-h2-starter':   'Starterplugin',
    'index-starter-desc': 'Download deze minimale starterplugin als referentie. Je kunt hem in WordPress installeren om te zien hoe een plugin werkt:',
    'index-download-btn': 'Download starterplugin (.zip)',
    'index-h2-checklist': 'Checklist',
    'index-cl-li1':       'Ik heb een werkende WordPress-omgeving (LocalWP of Playground)',
    'index-cl-li2':       'Ik heb een AI-tool die ik kan gebruiken',
    'index-cl-li3':       'Ik heb eventueel een code-editor geïnstalleerd',
    'index-cl-li4':       'Ik begrijp globaal wat een WordPress plugin is',
    'index-cl-li5':       'Ik heb het promptsjabloon bekeken',
    'index-cl-done':      '<strong>Alles aangevinkt? Je bent klaar voor de workshop!</strong>',
    'index-recommended':  'Aanbevolen',
    'index-quick':        'Snelle optie',

    /* ── guide.html ─────────────────────────────────── */
    'guide-title-h1':     'Stap-voor-stap handleiding',
    'guide-title-sub':    'Kies je setup en volg de stappen om je plugin te bouwen en te installeren.',
    'guide-tablist-aria': 'Kies je WordPress-setup',
    'guide-tab1':         '<span class="tab-badge" aria-hidden="true">Route 1</span>\n      WordPress Playground',
    'guide-tab2':         '<span class="tab-badge" aria-hidden="true">Route 2</span>\n      LocalWP',
    'guide-pg-col-header':'WordPress Playground',
    'guide-pg-col-li1':   'Niets installeren',
    'guide-pg-col-li2':   'Werkt in elke browser (het best in Chrome of Edge)',
    'guide-pg-col-li3':   'Klaar in 30 seconden',
    'guide-pg-col-li4':   'Alles verdwijnt als je het tabblad sluit',
    'guide-pg-choose':    '<strong>Kies dit als</strong> je de voorbereiding hebt overgeslagen, niets wilt installeren, of gewoon snel wilt proberen.',
    'guide-lw-col-header':'LocalWP',
    'guide-lw-col-li1':   'WordPress draait lokaal op je laptop',
    'guide-lw-col-li2':   'Werkt op Mac, Windows en Linux',
    'guide-lw-col-li3':   'Je bestanden en plugins worden echt opgeslagen',
    'guide-lw-col-li4':   'Vereist installatie (~10 min, zie <a href="index.html">voorbereidingspagina</a>)',
    'guide-lw-choose':    '<strong>Kies dit als</strong> je de voorbereiding hebt gedaan en je plugin na de workshop wilt bewaren.',

    'guide-pg-s1-h':      'Open WordPress Playground',
    'guide-pg-s1-p1':     'Ga naar <a href="https://playground.wordpress.net/" target="_blank" rel="noopener">playground.wordpress.net</a> in Chrome of Edge. WordPress laadt in een paar seconden — je ziet het beheerdashboard.',
    'guide-pg-s1-warn':   '<strong>Belangrijk:</strong> alles wat je maakt verdwijnt wanneer je het tabblad sluit. Houd dit tabblad open totdat je klaar bent.',
    'guide-pg-s2-h':      'Kies je plugin-idee',
    'guide-pg-s2-p1':     'Weet je niet wat je wilt bouwen? Bekijk de <a href="ideas.html">plugin-ideeën</a> voor inspiratie, of kies er een van de <a href="prompts.html">promptspagina</a> — die prompts zijn al voor je geschreven.',
    'guide-pg-s2-tip':    '<strong>Hou het simpel.</strong> Eén functie die werkt is beter dan drie functies die dat niet doen.',
    'guide-pg-s3-h':      'Schrijf je prompt en genereer de code',
    'guide-pg-s3-p1':     'Open je AI-tool (ChatGPT, Claude, Le Chat, etc.) in een nieuw tabblad. Gebruik het <a href="index.html">promptsjabloon van de voorbereidingspagina</a>, vul je plugin-idee in en verstuur het.',
    'guide-pg-s3-p2':     'Je krijgt PHP-code terug — dat is jouw plugin. Kopieer alles.',
    'guide-pg-s4-h':      'Installeer je plugin',
    'guide-pg-s4-p1':     'Kies een van de twee methodes:',
    'guide-pg-s4-va-h':   'Optie A — Plugin Editor (geen bestand nodig)',
    'guide-pg-s4-va-tag': 'Makkelijkst',
    'guide-pg-s4-va-li1': 'Ga in je WordPress-beheer naar <strong>Plugins → Plugin Editor</strong>',
    'guide-pg-s4-va-li2': 'Kies in het dropdown-menu (rechts bovenaan) voor <strong>Hello Dolly</strong>',
    'guide-pg-s4-va-li3': 'Selecteer alle bestaande code en verwijder die',
    'guide-pg-s4-va-li4': 'Plak je gegenereerde PHP-code',
    'guide-pg-s4-va-li5': 'Klik op <strong>"Bestand bijwerken"</strong>',
    'guide-pg-s4-vb-h':   'Optie B — Upload een zip (als je AI er een heeft aangemaakt)',
    'guide-pg-s4-vb-tag': 'Als beschikbaar',
    'guide-pg-s4-vb-p1':  'Sommige AI-tools genereren een downloadbaar zip-bestand. Als dat bij jou zo is:',
    'guide-pg-s4-vb-li1': 'Ga naar <strong>Plugins → Nieuwe plugin toevoegen → Plugin uploaden</strong>',
    'guide-pg-s4-vb-li2': 'Kies de zip uit je downloadmap',
    'guide-pg-s4-vb-li3': 'Klik op <strong>"Nu installeren"</strong>',
    'guide-pg-s5-h':      'Activeer je plugin',
    'guide-pg-s5-p1':     'Ga naar <strong>Plugins</strong>. Zoek je plugin — hij toont de naam die je in de plugin-header hebt gegeven — en klik op <strong>"Activeren"</strong>.',
    'guide-pg-s6-h':      'Test je plugin',
    'guide-pg-s6-p1':     'Klik op <strong>"Bezoek site"</strong> bovenaan het beheerpaneel en navigeer naar een bericht of pagina. Doet je plugin wat je verwachtte?',
    'guide-pg-s6-ok':     '<strong>Het werkt!</strong> Probeer het nu te verbeteren — vraag de AI om de stijl te veranderen, een optie toe te voegen of een randgeval op te lossen.',
    'guide-pg-s7-h':      'Aanpassen',
    'guide-pg-s7-p1':     'Werkt iets niet, of wil je het verbeteren? Ga terug naar je AI-tool en wees specifiek over het probleem:',
    'guide-pg-s7-li1':    '<em>"De plugin is geactiveerd maar er verschijnt niets. Hier is de code: [plak]"</em>',
    'guide-pg-s7-li2':    '<em>"PHP-fout: [plak foutmelding]. Kun je dit oplossen?"</em>',
    'guide-pg-s7-li3':    '<em>"Het werkt — kun je de tekst grijs en iets kleiner maken?"</em>',
    'guide-pg-s7-p2':     'Kopieer de nieuwe code, ga terug naar de Plugin Editor, vervang de oude code en sla opnieuw op.',
    'guide-pg-s7-tip':    '<strong>Dit is de echte vaardigheid:</strong> niet code schrijven, maar weten hoe je een probleem beschrijft en de AI naar een oplossing stuurt.',

    'guide-lw-s1-h':      'Start je WordPress-site in LocalWP',
    'guide-lw-s1-p1':     'Open LocalWP. Als je nog geen site hebt, klik op <strong>"Create a new site"</strong> en volg de stappen met de standaardinstellingen. Zodra je site in de lijst staat, klik je op <strong>"WP Admin"</strong> om het dashboard te openen.',
    'guide-lw-s2-h':      'Kies je plugin-idee',
    'guide-lw-s2-p1':     'Weet je niet wat je wilt bouwen? Bekijk de <a href="ideas.html">plugin-ideeën</a> voor inspiratie, of kies er een van de <a href="prompts.html">promptspagina</a> — die prompts zijn al voor je geschreven.',
    'guide-lw-s2-tip':    '<strong>Hou het simpel.</strong> Eén functie die werkt is beter dan drie functies die dat niet doen.',
    'guide-lw-s3-h':      'Schrijf je prompt en genereer de code',
    'guide-lw-s3-p1':     'Open je AI-tool in een nieuw tabblad. Gebruik het <a href="index.html">promptsjabloon van de voorbereidingspagina</a>, vul je plugin-idee in en verstuur het. Je krijgt PHP-code terug — dat is jouw plugin.',
    'guide-lw-s3-tip':    '<strong>Houd het AI-tabblad open.</strong> Je komt er later op terug als je iets wilt aanpassen.',
    'guide-lw-s4-h':      'Sla op en installeer je plugin',
    'guide-lw-s4-p1':     'Kies de methode die bij jou past:',
    'guide-lw-s4-va-h':   'Optie A — Teksteditor',
    'guide-lw-s4-va-tag': 'Aanbevolen',
    'guide-lw-s4-va-li1': 'Open Kladblok (Windows), TextEdit (Mac), of een andere teksteditor<ul><li><strong>Mac TextEdit:</strong> ga naar Opmaak → Maak standaard tekst, anders sla je op als een Word-achtig bestand dat PHP niet kan lezen.</li></ul>',
    'guide-lw-s4-va-li2': 'Plak je gegenereerde PHP-code en sla het bestand op als <code>plugin-naam.php</code> (bijv. <code>leestijd.php</code>)',
    'guide-lw-s4-va-li3': 'Klik in LocalWP met rechts op je site en kies <strong>"Open site folder"</strong>',
    'guide-lw-s4-va-li4': 'Navigeer naar <code>app/public/wp-content/plugins/</code>',
    'guide-lw-s4-va-li5': 'Maak een nieuwe map aan met dezelfde naam als je bestand (bijv. <code>leestijd</code>)',
    'guide-lw-s4-va-li6': 'Verplaats je <code>.php</code>-bestand naar die map',
    'guide-lw-s4-vb-h':   'Optie B — Upload een zip via WP Admin',
    'guide-lw-s4-vb-tag': 'Alternatief',
    'guide-lw-s4-vb-p1':  'Gebruik dit als je AI een downloadbare zip heeft gegenereerd, of als je liever niet door de bestandsbeheerder navigeert.',
    'guide-lw-s4-vb-p2':  '<strong>Als je AI een zip heeft gegeven:</strong> ga direct naar stap 4.',
    'guide-lw-s4-vb-p3':  '<strong>Zelf een zip maken:</strong>',
    'guide-lw-s4-vb-li1': 'Zet je <code>.php</code>-bestand in een map met dezelfde naam',
    'guide-lw-s4-vb-li2': 'Comprimeer het:<ul><li><strong>Mac:</strong> klik met rechts op de map → "Comprimeer"</li><li><strong>Windows:</strong> klik met rechts → "Verzenden naar" → "Gecomprimeerde map"</li><li><strong>Linux:</strong> klik met rechts → "Comprimeer" of voer uit <code>zip -r plugin.zip map/</code></li></ul>',
    'guide-lw-s4-vb-p4':  '<strong>Uploaden:</strong>',
    'guide-lw-s4-vb-li3': 'Ga in WP Admin naar <strong>Plugins → Nieuwe plugin toevoegen → Plugin uploaden</strong>',
    'guide-lw-s4-vb-li4': 'Kies je zip-bestand en klik op <strong>"Nu installeren"</strong>',
    'guide-lw-s5-h':      'Activeer je plugin',
    'guide-lw-s5-p1':     'Ga naar <strong>Plugins</strong> in WP Admin. Je plugin zou in de lijst moeten staan. Klik op <strong>"Activeren"</strong>.',
    'guide-lw-s5-p2':     'Plugin niet zichtbaar? Controleer twee dingen: de mapnaam en de bestandsnaam moeten hetzelfde zijn (bijv. beide <code>leestijd</code>), en het blok <code>/* Plugin Name: ... */</code> moet helemaal bovenaan het bestand staan.',
    'guide-lw-s6-h':      'Test je plugin',
    'guide-lw-s6-p1':     'Klik op <strong>"Open site"</strong> in LocalWP, of gebruik <strong>"Bezoek site"</strong> in WP Admin. Navigeer naar een bericht of pagina en kijk of je plugin zich gedraagt zoals verwacht.',
    'guide-lw-s6-ok':     '<strong>Het werkt!</strong> Probeer het nu te verbeteren — vraag de AI om de stijl te veranderen, een optie toe te voegen of een randgeval op te lossen.',
    'guide-lw-s7-h':      'Aanpassen',
    'guide-lw-s7-p1':     'Werkt iets niet? Ga terug naar je AI-tool en beschrijf het probleem duidelijk:',
    'guide-lw-s7-li1':    '<em>"De plugin is geactiveerd maar er verschijnt niets. Hier is de code: [plak]"</em>',
    'guide-lw-s7-li2':    '<em>"PHP fatal error: [plak]. Kun je dit oplossen?"</em>',
    'guide-lw-s7-li3':    '<em>"Werkt goed — kun je een instellingenpagina toevoegen om de leessnelheid in te stellen?"</em>',
    'guide-lw-s7-p2':     'Kopieer de nieuwe code, open je PHP-bestand in de editor, vervang alles, sla op. Herlaad de pagina in WordPress — opnieuw activeren is niet nodig.',
    'guide-lw-s7-warn':   '<strong>Wit scherm?</strong> Geen paniek. Ga naar de pluginmap en hernoem je pluginmap (bijv. voeg <code>-uit</code> toe). WordPress deactiveert hem automatisch en het witte scherm verdwijnt. Repareer de code, hernoem daarna terug.',

    /* ── ideas.html ─────────────────────────────────── */
    'ideas-h1':           'Plugin-ideeën',
    'ideas-sub':          'Weet je niet wat je wilt bouwen? Kies een idee uit deze lijst en schrijf je eigen prompt.',
    'ideas-tip':          'Gebruik het <a href="index.html">promptsjabloon van de voorbereidingspagina</a> om je gekozen idee te beschrijven. Vul de naam in, wat hij moet doen, waar hij moet verschijnen en hoe hij zich moet gedragen — en plak het in je AI-tool.',
    'ideas-cat-frontend': 'Frontend — zichtbaar voor bezoekers',
    'ideas-cat-admin':    'Admin — zichtbaar in het WordPress-dashboard',
    'ideas-cat-sitewide': 'Sitebreed — achter de schermen',
    'ideas-badge-easy':   'Makkelijk',
    'ideas-badge-medium': 'Gemiddeld',
    'ideas-badge-hard':   'Moeilijk',
    'ideas-f1-name':      'Datum laatst bijgewerkt',
    'ideas-f1-desc':      'Toont "Laatst bijgewerkt op [datum]" boven of onder een blogbericht.',
    'ideas-f2-name':      'Copyright footer',
    'ideas-f2-desc':      'Voegt "© [jaar] [sitenaam]" toe aan de onderkant van elke pagina. Het jaar wordt automatisch bijgewerkt.',
    'ideas-f3-name':      'Auteursbio',
    'ideas-f3-desc':      'Toont een korte auteursbeschrijving met avatar onder elk bericht.',
    'ideas-f4-name':      'Eenvoudige cookiemelding',
    'ideas-f4-desc':      'Toont een "Deze site gebruikt cookies"-banner onderaan de pagina met een sluitknop.',
    'ideas-f5-name':      'Aangepaste 404-melding',
    'ideas-f5-desc':      'Vervangt de standaard "Niet gevonden"-melding door je eigen tekst met een link naar de homepage.',
    'ideas-f6-name':      'Leesvoortgangsbalk',
    'ideas-f6-desc':      'Toont een voortgangsbalk bovenaan de pagina die zich vult naarmate je door een bericht scrollt.',
    'ideas-a1-name':      'Admin footer-tekst',
    'ideas-a1-desc':      'Vervangt "Dank voor het maken met WordPress" onderaan elke beheerpagina door je eigen bericht.',
    'ideas-a2-name':      'Dashboard welkomstwidget',
    'ideas-a2-desc':      'Voegt een aangepast welkomstbericht of snelkoppelingsvenster toe aan het WordPress-dashboard.',
    'ideas-a3-name':      'Woordtelling kolom',
    'ideas-a3-desc':      'Voegt een kolom "Woorden" toe aan het berichten-overzicht zodat je het aantal woorden per bericht in één oogopslag ziet.',
    'ideas-a4-name':      'Inlogpagina-bericht',
    'ideas-a4-desc':      'Voegt een aangepast bericht toe onder het inlogformulier — handig voor sites met meerdere auteurs ("Alleen redacteuren — neem contact op met de beheerder").',
    'ideas-a5-name':      'Waarschuwing ontbrekende uitgelichte afbeelding',
    'ideas-a5-desc':      'Toont een waarschuwing als je een bericht probeert te publiceren zonder uitgelichte afbeelding.',
    'ideas-s1-name':      'Emoji uitschakelen',
    'ideas-s1-desc':      'Verwijdert de WordPress emoji-scripts van elke pagina. Maakt je site iets sneller.',
    'ideas-s2-name':      'Generator-tag verwijderen',
    'ideas-s2-desc':      'Verwijdert het WordPress-versienummer uit de paginabroncode. Kleine verbetering voor privacy en beveiliging.',

    /* ── prompts.html ───────────────────────────────── */
    'prompts-h1':         'Kies je plugin',
    'prompts-sub':        'Kies een van de ideeën hieronder, of bedenk je eigen. Kopieer de prompt en plak hem in je AI-tool.',
    'prompts-tip':        '<strong>Hoe dit werkt:</strong> klik op "Kopieer" bij de prompt die je wilt, plak hem in je AI-tool en volg de instructies die je terugkrijgt. Als het resultaat niet klopt, zeg dan aan de AI wat er aangepast moet worden — dat is het iteratiedeel!\n    <br><br>\n    Geen idee wat je wilt bouwen? Bekijk de <a href="ideas.html" style="color: var(--color-accent);">lijst met plugin-ideeën</a> voor inspiratie.',
    'prompts-p1-name':    'Leestijd',
    'prompts-p1-desc':    'Toont de geschatte leestijd boven elk blogbericht.',
    'prompts-p2-name':    'Externe link icoon',
    'prompts-p2-desc':    'Voegt een pijlicoon toe aan externe links en opent ze in een nieuw tabblad.',
    'prompts-p3-name':    'Onderhoudsmodus',
    'prompts-p3-desc':    'Toont een "in onderhoud"-pagina aan bezoekers terwijl admins de site gewoon kunnen blijven gebruiken.',
    'prompts-p4-name':    'Aangepast inloglogo',
    'prompts-p4-desc':    'Vervang het WordPress-logo op het inlogscherm door je eigen afbeelding.',
    'prompts-own-title':  'Eigen idee',
    'prompts-own-p1':     'Heb je een eigen idee? Ga ervoor! Gebruik het sjabloon van de <a href="index.html">voorbereidingspagina</a> en vul je eigen gegevens in.',
    'prompts-own-p2':     'Tip: beperk je tot één functie. "Doet één ding goed" wint het van "doet alles slecht."',
    'prompts-copy':       'Kopieer',
    'prompts-copied':     'Gekopieerd!',

    'prompt-1-text': `Maak een WordPress plugin met de volgende specificaties:

Naam: Leestijd
Functie: Toont de geschatte leestijd boven elk blogbericht.
Waar zichtbaar: Op de frontend, boven de inhoud van elk afzonderlijk bericht.
Gedrag: Tel het aantal woorden in een bericht, deel door 250 (gemiddelde leessnelheid), en toon het resultaat als "Geschatte leestijd: X minuten" boven de berichtinhoud. Rond af naar boven op de dichtstbijzijnde minuut. Toon minimaal 1 minuut. Toon dit alleen bij individuele blogberichten, niet op overzichts- of archiefpagina's.

Technische vereisten:
- Volg WordPress best practices (hooks, filters, sanitization)
- Voeg een plugin-header toe met naam, beschrijving en versie
- Voorkom directe bestandstoegang
- Zet alle code in één PHP-bestand
- Voeg korte commentaren toe die uitleggen wat elk onderdeel doet`,

    'prompt-2-text': `Maak een WordPress plugin met de volgende specificaties:

Naam: Externe Link Icoon
Functie: Voegt automatisch een pijlicoon toe aan alle externe links in berichten en pagina's, en opent ze in een nieuw tabblad.
Waar zichtbaar: Op de frontend, bij alle links in de inhoud die naar een andere website verwijzen.
Gedrag: Controleer elke link in de inhoud. Als de link naar een andere website dan mijn eigen site verwijst, voeg dan een klein pijlsymbool toe na de linktekst, laat de link openen in een nieuw tabblad, en voeg een beveiligingsattribuut toe zodat het nieuwe tabblad geen toegang heeft tot mijn site. Laat links naar mijn eigen site en links naar secties op dezelfde pagina ongewijzigd.

Technische vereisten:
- Volg WordPress best practices (hooks, filters, sanitization)
- Voeg een plugin-header toe met naam, beschrijving en versie
- Voorkom directe bestandstoegang
- Zet alle code in één PHP-bestand
- Voeg korte commentaren toe die uitleggen wat elk onderdeel doet`,

    'prompt-3-text': `Maak een WordPress plugin met de volgende specificaties:

Naam: Eenvoudige Onderhoudsmodus
Functie: Toont een "in onderhoud"-pagina aan bezoekers wanneer ik hem inschakelt. Ik kan mijn site nog gewoon zien en gebruiken wanneer ik ingelogd ben als beheerder.
Waar zichtbaar: Een instellingenpagina in het WordPress-beheerpaneel onder Instellingen, en een onderhoudsbericht voor bezoekers.
Gedrag: Voeg een instellingenpagina toe met een selectievakje om de onderhoudsmodus aan of uit te zetten, en een tekstveld waar ik het bericht kan schrijven dat bezoekers te zien krijgen. Wanneer ingeschakeld, zien bezoekers alleen mijn bericht. De inlogpagina moet altijd bereikbaar blijven zodat ik mezelf niet buitensluit. Toon een melding in de beheerwerkbalk zodat ik weet dat de onderhoudsmodus actief is.

Technische vereisten:
- Volg WordPress best practices (hooks, filters, sanitization)
- Voeg een plugin-header toe met naam, beschrijving en versie
- Voorkom directe bestandstoegang
- Zet alle code in één PHP-bestand
- Voeg korte commentaren toe die uitleggen wat elk onderdeel doet`,

    'prompt-4-text': `Maak een WordPress plugin met de volgende specificaties:

Naam: Aangepast Inloglogo
Functie: Laat me het WordPress-logo op het inlogscherm vervangen door mijn eigen afbeelding.
Waar zichtbaar: Een instellingenpagina in het WordPress-beheerpaneel onder Instellingen, en mijn eigen logo op het inlogscherm.
Gedrag: Voeg een instellingenpagina toe waar ik een afbeelding uit mijn mediabibliotheek kan kiezen als inloglogo. Toon een voorvertoning van het huidige logo op de instellingenpagina. Vervang op het inlogscherm het standaard WordPress-logo door mijn gekozen afbeelding. Zorg ook dat de logolink naar mijn startpagina gaat in plaats van naar wordpress.org.

Technische vereisten:
- Volg WordPress best practices (hooks, filters, sanitization)
- Voeg een plugin-header toe met naam, beschrijving en versie
- Voorkom directe bestandstoegang
- Zet alle code in één PHP-bestand
- Voeg korte commentaren toe die uitleggen wat elk onderdeel doet`,

    /* ── tips.html ──────────────────────────────────── */
    'tips-h1':            'Tips &amp; vervolgstappen',
    'tips-sub':           'Je plugin werkt — en nu? Dit is wat je wilt overwegen voor je hem echt inzet.',
    'tips-h2-ready':      'Is hij klaar voor een echte site?',
    'tips-ready-intro':   'Waarschijnlijk nog niet helemaal — en dat is prima. Een vibe-coded plugin is een goed startpunt, geen afgerond product. Een eerlijke checklist:',
    'tips-cl1':           '<strong>Doet hij wat je verwacht?</strong> Test elke functie, inclusief randgevallen (lege berichten, geen inhoud, niet-ingelogde gebruikers).',
    'tips-cl2':           '<strong>Activeert en deactiveert hij schoon?</strong> Geen fouten, geen achtergebleven data na deactivatie.',
    'tips-cl3':           '<strong>Heeft hij Plugin Check doorstaan?</strong> Zie de sectie hieronder. Dit pikt de meeste veelvoorkomende problemen automatisch op.',
    'tips-cl4':           '<strong>Ben jij de enige gebruiker?</strong> Een plugin alleen voor je eigen site heeft minder risico dan een plugin die anderen gebruiken.',
    'tips-cl5':           '<strong>Verwerkt hij gebruikersinvoer?</strong> Zo ja, dan is een beveiligingscheck verplicht (zie hieronder).',
    'tips-ready-tip':     '<strong>Eenvoudige plugins zonder gebruikersinvoer</strong> (zoals Leestijd of Copyright Footer) zijn nauwelijks riskant. Plugins met instellingenpagina\'s, formulieren of databaseschrijfacties hebben meer aandacht nodig.',
    'tips-h2-security':   'Beveiliging — waar je op let',
    'tips-security-intro':'AI doet het bij sommige beveiligingspraktijken redelijk, maar mist andere. Een kort overzicht:',
    'tips-sec-th1':       'Wat',
    'tips-sec-th2':       'Waarom het belangrijk is',
    'tips-sec-th3':       'AI doet dit…',
    'tips-sec-r1-what':   '<strong>Directe bestandstoegang</strong><br><code>if (!defined(\'ABSPATH\')) exit;</code>',
    'tips-sec-r1-why':    'Voorkomt dat iemand het PHP-bestand direct in een browser uitvoert',
    'tips-sec-r1-ai':     '✓ Dit doet AI goed',
    'tips-sec-r2-what':   '<strong>Output escaping</strong><br><code>esc_html()</code>, <code>esc_attr()</code>, <code>esc_url()</code>',
    'tips-sec-r2-why':    'Voorkomt dat aanvallers kwaadaardige code in je pagina\'s injecteren',
    'tips-sec-r2-ai':     '✓ Meestal correct',
    'tips-sec-r3-what':   '<strong>Input sanitization</strong><br><code>sanitize_text_field()</code>, <code>absint()</code>',
    'tips-sec-r3-why':    'Maakt gebruikersinvoer schoon voor je het opslaat of gebruikt',
    'tips-sec-r3-ai':     '⚠ Soms ontbrekend',
    'tips-sec-r4-what':   '<strong>Nonces</strong><br><code>wp_nonce_field()</code> + <code>check_admin_referer()</code>',
    'tips-sec-r4-why':    'Voorkomt dat iemand jou ongewild een beheerdersformulier laat versturen',
    'tips-sec-r4-ai':     '⚠ Vaak ontbrekend',
    'tips-sec-r5-what':   '<strong>Rechtentchecks</strong><br><code>current_user_can(\'manage_options\')</code>',
    'tips-sec-r5-why':    'Zorgt dat alleen gebruikers met de juiste rol beheerdersacties kunnen uitvoeren',
    'tips-sec-r5-ai':     '⚠ Soms ontbrekend',
    'tips-sec-r6-what':   '<strong>Databasequery\'s</strong><br><code>$wpdb->prepare()</code>',
    'tips-sec-r6-why':    'Voorkomt dat aanvallers via formulierinvoer je database manipuleren',
    'tips-sec-r6-ai':     '⚠ Vaak onvolledig',
    'tips-security-warn': '<strong>Als je plugin een instellingenpagina heeft, data opslaat of iets doet met gebruikersinvoer:</strong> vraag de AI om alle zes bovenstaande punten expliciet te controleren. Draai daarna Plugin Check (zie hieronder) om te verifiëren.',
    'tips-security-p':    'Je kunt je AI-tool vragen om de beveiliging van zijn eigen output te controleren:',
    'tips-security-tip':  '<em>"Controleer deze plugin op WordPress-beveiligingsbest practices. Check op: output escaping, input sanitization, nonces op alle formulieren, rechtenchecks op beheerdersacties en correct gebruik van $wpdb->prepare() voor databasequery\'s. Laat zien wat er ontbreekt en geef een gecorrigeerde versie."</em>',
    'tips-h2-pcp':        'Plugin Check',
    'tips-pcp-p1':        '<strong>Plugin Check</strong> (ook wel PCP) is een gratis WordPress-plugin die je code automatisch scant op veelvoorkomende problemen — beveiligingsproblemen, schendingen van codestandaarden en WordPress.org-vereisten.',
    'tips-pcp-h3-how':    'Zo gebruik je het',
    'tips-pcp-li1':       'Installeer de <a href="https://wordpress.org/plugins/plugin-check/" target="_blank" rel="noopener">Plugin Check-plugin</a> van WordPress.org (zoek "Plugin Check" in WP Admin → Plugins → Nieuwe toevoegen)',
    'tips-pcp-li2':       'Ga naar <strong>Extra\'s → Plugin Check</strong>',
    'tips-pcp-li3':       'Kies je plugin uit het dropdown-menu',
    'tips-pcp-li4':       'Klik op <strong>"Plugin controleren"</strong>',
    'tips-pcp-li5':       'Bekijk de resultaten — fouten zijn dingen om op te lossen, waarschuwingen zijn dingen om te overwegen',
    'tips-pcp-h3-what':   'Wat het controleert',
    'tips-pcp-ch1':       'Beveiligingsproblemen (ontbrekende escaping, sanitization, nonces)',
    'tips-pcp-ch2':       'Volledigheid van de plugin-header',
    'tips-pcp-ch3':       'WordPress-codestandaarden',
    'tips-pcp-ch4':       'Internationalisering (vertaalbare teksten)',
    'tips-pcp-ch5':       'Toegankelijkheid van beheerinterfaces',
    'tips-pcp-ch6':       'Performance (scripts en stijlen alleen laden waar nodig)',
    'tips-pcp-tip':       '<strong>Een nuttige oefening:</strong> plak de Plugin Check-fouten terug in je AI-tool en vraag hem ze te repareren. Ga door totdat PCP geen fouten meer meldt. Dit leert je meer over WordPress-standaarden dan welke tutorial dan ook.',
    'tips-h2-a11y':       'Toegankelijkheid — vergeet je gebruikers niet',
    'tips-a11y-p1':       'WordPress streeft zelf naar <a href="https://make.wordpress.org/accessibility/handbook/best-practices/wcag/" target="_blank" rel="noopener">WCAG 2.2 niveau AA</a>. Er zijn geen verplichte toegankelijkheidseisen voor plugins in de WordPress-directory, maar het is slim om bij het bouwen van je plugin ook aan toegankelijkheid te denken.',
    'tips-a11y-p2':       'Door AI gegenereerde code mist toegankelijkheid vaak — formulieren zonder labels, knoppen zonder beschrijvende tekst, of te laag kleurcontrast. De moeite waard om te controleren.',
    'tips-a11y-h3':       'Dingen om te checken in de uitvoer van je plugin',
    'tips-a11y-li1':      'Afbeeldingen hebben betekenisvolle <code>alt</code>-tekst (of <code>alt=""</code> als ze decoratief zijn)',
    'tips-a11y-li2':      'Formulierinputs hebben een zichtbaar <code>&lt;label&gt;</code>',
    'tips-a11y-li3':      'Knoppen beschrijven wat ze doen ("Instellingen opslaan", niet alleen "Verzenden")',
    'tips-a11y-li4':      'Kleur is niet de enige manier waarop informatie wordt overgebracht',
    'tips-a11y-li5':      'Tekstcontrast is minimaal 4,5:1 ten opzichte van de achtergrond',
    'tips-a11y-li6':      'Alles dat klikbaar is, is ook bereikbaar met het toetsenbord',
    'tips-a11y-tip':      '<strong>Vraag je AI-tool:</strong> "Controleer de uitvoer van deze plugin op toegankelijkheidsproblemen. Check op ontbrekende alt-tekst, formuliervelden zonder label, te laag contrast en elementen die niet met het toetsenbord bereikbaar zijn."',
    'tips-a11y-more':     'Meer richtlijnen: <a href="https://wpaccessibility.org/docs/wp-a11y/wp-plugins/" target="_blank" rel="noopener">WordPress Plugin Accessibility — WP Accessibility</a>',
    'tips-h2-publish':    'Publiceren op WordPress.org',
    'tips-publish-p1':    'Iedereen kan een plugin indienen bij de WordPress.org-repository — dat is gratis en open source. Maar moet je dat doen?',
    'tips-pub-good-h':    'Heeft zin als…',
    'tips-pub-good-li1':  'Je wilt dat anderen hem kunnen gebruiken',
    'tips-pub-good-li2':  'Je wilt bijdragen aan de WordPress-community',
    'tips-pub-good-li3':  'Je een commerciële plugin bouwt (veel beginnen hier)',
    'tips-pub-good-li4':  'Je gratis codereview van het WP-team wilt',
    'tips-pub-not-h':     'Waarschijnlijk niet de moeite als…',
    'tips-pub-not-li1':   'Het alleen voor je eigen site is',
    'tips-pub-not-li2':   'Het erg site-specifiek is (jouw logo, jouw instellingen)',
    'tips-pub-not-li3':   'Hij Plugin Check nog niet heeft doorstaan',
    'tips-pub-not-li4':   'Je niet klaar bent om hem langdurig te onderhouden',
    'tips-pub-req-h3':    'Wat WordPress.org vereist',
    'tips-pub-req-li1':   'Een uniek functieprefix (bijv. <code>lt_</code> voor "leestijd") — geen generieke namen zoals <code>get_data()</code>',
    'tips-pub-req-li2':   'Een <code>readme.txt</code> in het juiste formaat',
    'tips-pub-req-li3':   'GPL-compatibele licentie',
    'tips-pub-req-li4':   'Geen verborgen of onleesbare code, geen verbindingen met externe diensten zonder dat te vermelden',
    'tips-pub-req-li5':   'Doorstaat de geautomatiseerde en handmatige codereview (kan enkele weken duren)',
    'tips-pub-tip':       'Niet indienen bij .org? Je kunt je plugin altijd delen als zip-bestand — stuur hem naar iemand, zet hem op GitHub, of bewaar hem gewoon voor jezelf.',
    'tips-h2-vibe':       'Waar is vibe coding goed voor?',
    'tips-vibe-p1':       'Een eerlijk beeld — want de grenzen kennen is onderdeel van de vaardigheid.',
    'tips-vibe-good-h':   'Werkt goed voor…',
    'tips-vibe-good-li1': 'Snelle prototypes en interne tools',
    'tips-vibe-good-li2': 'Een idee testen voordat je een developer inschakelt',
    'tips-vibe-good-li3': 'Leren hoe WordPress plugins werken door gegenereerde code te lezen',
    'tips-vibe-good-li4': 'Kleine hulpmiddelen die jouw eigen probleem oplossen',
    'tips-vibe-good-li5': 'Repetitieve taken op je eigen site automatiseren',
    'tips-vibe-care-h':   'Wees voorzichtig met…',
    'tips-vibe-care-li1': 'Plugins voor sites met echte gebruikers (beveiliging vereist expert review)',
    'tips-vibe-care-li2': 'Complexe functies die met bestaande systemen communiceren',
    'tips-vibe-care-li3': 'Alles waarbij je niet kunt controleren of het resultaat klopt',
    'tips-vibe-care-li4': 'Aannemen dat "het werkt" betekent dat "het af is"',
    'tips-vibe-p2':       'De kernvaardigheid bij vibe coding is niet code schrijven — het is <strong>precies beschrijven wat je wilt</strong> en <strong>weten wanneer je de uitvoer kunt vertrouwen</strong>. Dat oordeel ontwikkel je met oefening.',
    'tips-h2-further':    'Wil je verder gaan?',
    'tips-further-h3-imp':'Je plugin verbeteren',
    'tips-further-li1':   'Vraag de AI om een instellingenpagina toe te voegen zodat je hem vanuit WP Admin kunt configureren',
    'tips-further-li2':   'Vraag de AI om alle gebruikersgerichte tekst vertaalbaar te maken met <code>__()</code> en <code>_e()</code>',
    'tips-further-li3':   'Vraag de AI om unit tests voor de plugin te schrijven',
    'tips-further-li4':   'Vraag de AI om hem te laten voldoen aan de WordPress-codestandaarden',
    'tips-further-li5':   'Exporteer de plugin als zip: <strong>Plugins → [jouw plugin] → Downloaden</strong> (LocalWP) of maak een zip van de map',
    'tips-further-h3-learn': 'Verder leren',
    'tips-further-lnk1':  '<a href="https://developer.wordpress.org/plugins/" target="_blank" rel="noopener">WordPress Plugin Handbook</a> — de officiële handleiding voor het goed bouwen van plugins',
    'tips-further-lnk2':  '<a href="https://wordpress.org/plugins/plugin-check/" target="_blank" rel="noopener">Plugin Check (PCP)</a> — automatische kwaliteits- en beveiligingsscan',
    'tips-further-lnk3':  '<a href="https://developer.wordpress.org/coding-standards/wordpress-coding-standards/php/" target="_blank" rel="noopener">WordPress PHP Coding Standards</a> — hoe "schone WordPress-code" eruitziet',
    'tips-further-lnk4':  '<a href="https://make.wordpress.org/core/handbook/best-practices/inline-documentation-standards/" target="_blank" rel="noopener">Inline documentatiestandaarden</a> — hoe je je code documenteert',
  }
};

/* ── Core functions ────────────────────────────────── */

function setLanguage(lang) {
  if (!I18N[lang]) return;
  const t = I18N[lang];

  // Update html lang attribute
  document.documentElement.lang = lang;

  // Add/remove lang class on body (for CSS overrides like ::before content)
  document.body.classList.toggle('lang-nl', lang === 'nl');

  // Translate all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Translate aria-label attributes
  document.querySelectorAll('[data-i18n-aria]').forEach(function(el) {
    const key = el.dataset.i18nAria;
    if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
  });

  // Update page title
  const titleKey = document.body.dataset.pageTitle;
  if (titleKey && t[titleKey]) document.title = t[titleKey];

  // Update toggle button states
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    const active = btn.dataset.lang === lang;
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    btn.classList.toggle('active', active);
  });

  // Persist
  try { localStorage.setItem('workshopLang', lang); } catch(e) {}
}

// Auto-init on page load
(function() {
  var saved = 'en';
  try { saved = localStorage.getItem('workshopLang') || 'en'; } catch(e) {}
  if (!I18N[saved]) saved = 'en';
  setLanguage(saved);
})();

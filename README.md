# Portfolio Website

This is a simple static portfolio website. You can open `index.html` directly in a browser; no installation or server is required.

## Folder guide

```
portfolio/
├── index.html                 # Page content: text, sections, links, and form
├── css/
│   ├── style.css              # Main layout, colors, responsive design, animations
│   └── custom.css             # Small personal changes that override style.css
├── js/
│   └── script.js              # Menu, scrolling, counters, animations, form message
└── assets/
    ├── images/
    │   └── profile-photo.jpeg # Profile image shown in the hero section
    └── resume/
        └── ABHIJITH-MOHAN-R-Resume.pdf
```

## Where to make common changes

| What you want to change | File to edit |
| --- | --- |
| Name, bio, skills, education, projects, contact details | `index.html` |
| Colours, fonts, spacing, desktop/mobile layout | `css/style.css` |
| Small overrides without changing the main stylesheet | `css/custom.css` |
| Menu, animation timing, counters, form feedback | `js/script.js` |
| Profile picture or downloadable resume | `assets/images/` or `assets/resume/` |

## Safe editing tips

1. Change only one thing at a time, then refresh the browser to check it.
2. Keep `css/custom.css` for your own quick styling changes. Rules in this file override matching rules in `style.css`.
3. If you replace the photo or resume, keep the same filename or update its path in `index.html`.
4. The contact form currently shows a success message only; it does not send emails. A backend or form service is needed to make it deliver messages.

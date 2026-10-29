# Tayyaba Zubaid | Portfolio

A responsive single-page portfolio for Tayyaba Zubaid, a Computer Science undergraduate at Qarshi University and former Frontend Engineering Intern at FlyRank (July–October 2026). Built with semantic HTML5, CSS3, and vanilla JavaScript, with no framework, build step, or runtime package dependencies.

## Live Site

**Vercel:** [https://tayyaba-portfolio-1.vercel.app/](https://portfolio-1-rho-drab-21.vercel.app/)

## Features

- **Responsive layout.** Adapts the navigation, project cards, and content layout for phones, tablets, and desktop screens.

- **Project filters.** Filter the portfolio by Web Design, Desktop App, Console-based, or view all projects.

- **Project cards.** Show summaries, technology tags, images, and GitHub links. A “Live” link is shown only when a project URL is hosted on Vercel or Netlify.

- **Animated highlights.** Count-up statistics, scroll progress, reveal animations, and achievement notifications enhance the page without blocking access to content.

- **Mobile navigation.** Expandable menu closes after navigation, on outside click, or with Escape.

- **Accessible interactions.** Semantic landmarks, skip link, keyboard focus indicators, labeled controls, accessible filter states, alternative text, and reduced-motion support.

- **Search and sharing metadata.** Canonical URL, description, Open Graph and Twitter metadata, Person structured data, `robots.txt`, and `sitemap.xml`.

- **Lightweight and privacy-conscious.** System fonts and local assets; no third-party JavaScript framework or web-font request.

## Project structure

```
portfolio-1/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   ├── Tayyaba_Zubaid_CV.pdf
│   ├── profile.png
│   ├── profile-placeholder.svg
│   ├── tz-mark.svg
│   └── projects/
│       └── project preview images
├── robots.txt
├── sitemap.xml
├── SECURITY.md
└── MAINTENANCE.md
```

## Running locally

No installation is required. Open `index.html` in a browser, or serve the folder locally:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Customizing

| What | Where |
| --- | --- |
| Page copy, section content, navigation, contact details | `index.html` |
| Projects, summaries, categories, technology tags, image paths and URLs | `projects` array near the top of `js/script.js` |
| Profile photo | Replace `assets/profile.png`; `assets/profile-placeholder.svg` is the fallback. |
| Downloadable CV | Replace `assets/Tayyaba_Zubaid_CV.pdf`, keeping the same filename. |
| Project artwork | Replace the corresponding files in `assets/projects/`. |
| Colors, typography, layout and responsive behavior | CSS variables and rules in `css/styles.css` |
| SEO domain settings | Keep canonical and social URLs in `index.html` aligned with `robots.txt` and `sitemap.xml`. |

A project’s “Live” link will appear only when its `live` URL is hosted on a `vercel.app` or `netlify.app` domain. Leave the URL empty or use a non-deployment placeholder to hide the link.

## Design notes

- **Typography:** Arial/Helvetica/system sans-serif for a simple, readable interface without external font downloads.

- **Palette:** Pink (`#E81760`) and orange (`#F0A01D`) accents against a dark arcade-inspired background.

- **Motion:** Animations respect the operating system’s reduced-motion preference. The project-card tilt effect is limited to fine-pointer devices.

## Contact

- Email: [tayyabazubaid@gmail.com](mailto:tayyabazubaid@gmail.com)

- LinkedIn: [tayyaba-zubaid](https://www.linkedin.com/in/tayyaba-zubaid/)

- GitHub: [Tayyaba-tz](https://github.com/Tayyaba-tz)


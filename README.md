# Tayyaba Zubaid | Portfolio

A responsive single-page portfolio for Tayyaba Zubaid, a Computer Science undergraduate at Qarshi University and former Frontend Engineering Intern at FlyRank (July–October 2026). Built with semantic HTML5, CSS3, and vanilla JavaScript, with no framework, build step, or runtime package dependencies.

## Live Site

**Vercel:** [https://tayyaba-portfolio-1.vercel.app/](https://tayyaba-portfolio-1.vercel.app/)

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

## All Used Promts 

**Prompt 1:** Single Page Portfolio (Vertical Scroll Allowed)

"Use uploaded CV to write content." 
See this link as reference, without copying the design completely:
https://tayyabaz.netlify.app/

Build a complete, fully coded single page portfolio website for Tayyaba Zubaid using only HTML5, CSS3, and vanilla JavaScript. Vertical scrolling is allowed.

Color scheme: 
#E6A5CD, 
#E81760, 
#F0A01D, 
#000000, 
#FFFFFF

Font: Syne for headings, Inter for body text. Load both from Google Fonts.

File structure:

index.html
css/style.css
js/main.js
assets/ (for images, icons, CV)

Design requirements:

Modern, clean, and visually appealing look.
Consistent spacing, alignment, and visual hierarchy throughout.
The design should feel trendy and suitable for a young frontend developer’s personal brand.
Use the color scheme meaningfully. 
#E81760 for primary buttons and highlights, 
#F0A01D for accents and badges, 
#E6A5CD for soft backgrounds and decorative elements, 
#000000 and 
#FFFFFF for text and contrast.

Sections to build, in this order:

1. Navbar
Fixed at the top. Logo on the left showing “Tayyaba Zubaid” with a small SVG icon. Navigation links on the right: Home, About, Skills, Projects, Contact. A “Download CV” button. Hamburger menu for mobile. Navbar background changes slightly on scroll.

2. Hero Section
Centered layout. Badge text “Frontend Engineer”. Large bold heading with the name “TAYYABA ZUBAID” split across two lines. Short description: Frontend Engineering Intern at FlyRank and CS student at Qarshi University, building AI-assisted full-stack web applications. Location badge showing Lahore, Pakistan. A “Get In Touch” button that smoothly scrolls to the Contact section. Floating tech logo blobs in the background showing HTML, CSS, JS, Python, and C++ icons with a subtle floating animation.

3. Stats Bar
A horizontal bar directly below the hero. 4 stats side by side: Projects Built (8+), Years Experience (2+), Certificates (3+), Technologies (10+). Each stat has an SVG icon, an animated number, and a label. Numbers count up from 0 when they enter the viewport.

4. About Section
Two column layout. Left column: profile image with a decorative blob shape behind it and a badge showing “2+ Years of Experience”. Right column: small label “About Me”, heading “Who I am?”, two short paragraphs about building full-stack apps with React, Node.js, and Express, and a checklist with tick icons showing: Frontend development with React and HTML/CSS, Responsive and accessible UI design, REST API design with Node.js and Express, AI-assisted development workflows, Algorithms and data structures.

5. Skills Section
Small label “Expertise”, heading “Technical Skills”. Skills organized into 4 categories, each shown as a group with a category heading and animated fill bars below it. Bars animate by filling left to right when they enter the viewport. No percentage numbers shown anywhere on any bar.

Languages: JavaScript, Python, C++, Java, SQL
Frontend: HTML5, CSS3, React, Vite, React Router, Responsive Design
Backend: Node.js, Express.js, JWT Authentication, REST API Design
Tools: Git, GitHub, VS Code, Vercel, Render

6. Projects Section
Small label “Portfolio”, heading “Featured Projects”. Filter buttons: All, Web Design, Desktop App, Console-based. Responsive project card grid below. Each card shows a project image. On hover, a smooth overlay appears showing: category tag, project title, short description, tech stack, GitHub button, and Live View button where available. All 7 projects:

Project	Category	Tech	GitHub	Live
Deenify	Web Design	HTML5, CSS3	Yes	Yes
FinTrack	Desktop App	Java, Java Swing, OOP	Yes	No
Pokemon Encyclopedia	Web Design	HTML5, CSS3, JS, PokeAPI	Yes	Yes
Weather Dashboard	Web Design	HTML5, CSS3, JS	Yes	Yes
Evacuation Planner	Console-based	C++, Dijkstra’s, Segment Tree	Yes	No
Tomzora Image Gallery	Web Design	JS, Unsplash API	Yes	Yes
Hybrid Sorting	Desktop App	Python, CustomTkinter, Matplotlib	Yes	No

7. Contact Section
Small label “Contact”, heading “Let’s Work Together”. 3 contact cards side by side, each with an SVG icon, a title, and a clickable link: Email (tayyabazubaid@gmail.com), LinkedIn (tayyaba-zubaid), GitHub (Tayyaba-tz).

8. Footer
Logo, name “Tayyaba Zubaid”, and copyright line: © 2026 Tayyaba Zubaid. All rights reserved.

JavaScript functionality:

Smooth scroll to sections on nav link click.
Active nav link updates automatically as the user scrolls through sections.
Hamburger menu opens and closes the mobile nav.
Project filter buttons show and hide cards by category using a .hidden class.
Stat numbers count up from 0 to their target when they enter the viewport.
Skill bars fill from left to right when they enter the viewport. No numbers shown.
Navbar background and shadow change on scroll.

Standards:

Fully responsive on mobile (360px and above), tablet, and desktop.
Semantic HTML5 tags throughout.
No inline styles. All styling in style.css.
Clean, well-commented code in all three files.

Deliver the complete working code for index.html, css/style.css, and js/main.js.

**Prompt 2:** 

One thing to update:
I'm xIntern from FlyRank and I have completed the internship in the duration:
July 2026 - Oct 2026

**Prompt 3:** 

Add animations and make the portfolio look like a game as perfect as possible

**Prompt 4:** 

Do the following fixes and edits in the uploaded edited zip:

1. Change font style. Use simple font and increase font size. Decrease the font size of the hero title and increase the remaining font size as they are too small to read
2. Check complete responsiveness, SEO optimization, accessibility, security, maintenance
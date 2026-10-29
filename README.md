# Tayyaba Zubaid Portfolio

A responsive single-page portfolio built with plain HTML, CSS, and vanilla JavaScript. It uses a pink-and-orange arcade quest-log/HUD theme, subtle animation, and no third-party JavaScript framework or game library. The page and downloadable text CV reflect the supplied resume and completed FlyRank internship dates.

## Live Site

**Vercel:** https://portfolio-1-rho-drab-21.vercel.app/

## Update the content

- Edit section copy, skills, contact details, and the quest-style labels in `index.html`.
- Update project titles, descriptions, categories, technology tags, links, and illustration paths in the `projects` array at the top of `script.js`.
- Add Tayyaba’s portrait as `profile.png` in the project root. The page uses that image path and falls back to the abstract placeholder until the file is present.
- Replace the project illustrations in `assets/project-*.svg` as desired.
- Update the downloadable text CV at `assets/Tayyaba_Zubaid_CV.pdf`.
- Skill bars are visual fills set with the `--fill` custom property in `index.html`; no percentage numbers are shown to visitors.
- The arcade/HUD colors, responsive appearance, animation, and reduced-motion rules are in `styles.css`. The progress meter, achievement notifications, menu, project filters, and optional pointer tilt are handled in `script.js`.

## Run Locally

No installation is needed.

1. Download or clone the project.
2. Open `index.html` in any modern browser.

Or serve it with a local server:

```bash
# Python
python3 -m http.server 8000

# Node.js
npx serve
```

Then visit `http://localhost:8000`

## Contact

- Email: tayyabazubaid@gmail.com
- LinkedIn: [tayyaba-zubaid](https://www.linkedin.com/in/tayyaba-zubaid/)
- GitHub: [Tayyaba-tz](https://github.com/Tayyaba-tz)

## Prompts Used

# Maintenance checklist

- Keep the canonical URL, Open Graph URL/image, JSON-LD URL, `robots.txt`, and `sitemap.xml` aligned with the production domain.
- Check all project descriptions, repository/demo links, CV, email, and profile image before each release.
- Test at narrow (320 px), mobile (375–720 px), tablet (768–1024 px), and desktop widths; check keyboard-only navigation, zoom to 200%, reduced motion, and forced-colors mode.
- Run an HTML validator, Lighthouse (accessibility, SEO, best practices, performance), and a broken-link/image check before publishing.
- Serve over HTTPS and apply the response headers in `SECURITY.md` at the hosting layer.
- Prefer local assets and system fonts to reduce third-party requests and keep the page usable offline.

# Security and deployment notes

This is a static site and does not process or store credentials or form submissions. Project card text is inserted with `textContent` and DOM methods, not interpreted as HTML. External links opened in new tabs use `rel="noopener noreferrer"`.

## Hosting checklist

Configure the host to send HTTPS and the following response headers (a static HTML meta tag cannot reliably replace response headers):

- `Strict-Transport-Security: max-age=31536000; includeSubDomains` (only after HTTPS is confirmed for every subdomain)
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- A tested Content Security Policy. Start with `default-src 'self'`; allow only the required self-hosted scripts/styles, images, and the mailto link. The current project uses inline style attributes for visual skill bars and runtime tilt, so account for those deliberately or replace them before enforcing `style-src` without `'unsafe-inline'`.

Review dependency and hosting configuration whenever deployment architecture changes. There are no runtime package dependencies in this archive.

# marRaltman.github.io

Marley Renee's personal site — a bio/portfolio site about her, published via GitHub Pages. Audience is friends, family, and anyone she shares the link with, not an evaluator or employer-facing "resume site."

## Voice & content

- This site is written in Marley's first-person voice: reflective, specific, a little literary. `index.html` and `sustainability.html` are the reference for tone — match it, don't flatten it into generic copy.
- Avoid AI-sounding phrasing (no "delve," "in today's world," hedge-everything listicle voice). It should read like one specific person wrote it.
- Never publish new or changed bio/personal copy unprompted. Draft wording and show it for review — final phrasing about Marley's life, interests, or experiences is her call, not mine to decide.
- Typo fixes and structural edits (e.g., moving a sentence, fixing a broken tag) are fine without a full copy review.

## Page structure

- Every content page follows the same template established in `sustainability.html`: `nav` → `hero` (eyebrow + h1 + dek + CTA) → `marquee` → `section.about-grid` (bio column + `card-grid` aside) → `footer`.
- When adding a new topic/page, reuse this structure rather than inventing a new layout. Copy the pattern, swap the content.
- All pages share `style.css` — link it the same way (`<link rel="stylesheet" href="/style.css">`), don't fork per-page styles.
- Add new pages to the `nav-links` list on every existing page so navigation stays consistent.

## Design system

- `style.css` (fonts, colors, marquee animation, card grid, spacing) is settled/deliberate. Reuse it as-is; don't tweak values while building pages. Only change it if explicitly asked for a design change.

## Known TODOs

- The footer email (`you@example.com` in `index.html`) is a placeholder and needs to be replaced with a real contact address before the site is considered finished.

## Guardrails

- Never change the name on the title page (`index.html` hero/nav-mark) — it must always read "Marley Renee." Do not shorten, abbreviate, or otherwise alter it.
- Never commit/push (i.e., make the site live) without explicit confirmation for that specific change — treat "save this" and "publish this" as separate asks.
- No analytics, ads, or third-party tracking scripts on this site unless explicitly requested.
- This is a static site (plain HTML/CSS, no build step) — keep it that way unless asked to change the approach.

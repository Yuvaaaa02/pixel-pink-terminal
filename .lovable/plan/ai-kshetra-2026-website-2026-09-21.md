# AI Kshetra 2026 website

## Scope
- Replace the placeholder with a responsive terminal-inspired home page using the supplied pink, white, and near-black palette.
- Add shared sticky navigation and the full dark footer.
- Build dedicated About, Build with AI event, and Registration pages.
- Add a campus image treatment with an interactive ASCII conversion toggle, boot/type animations, subtle scanlines, and accessible reduced-motion behavior.
- Implement data-driven event cards, contact links, placeholder route information, and event gallery tiles.
- Implement dynamic team members, validation for 2–4 participants, and a local success receipt because no backend destination was supplied.

## Pages
- `/`: animated introduction, upcoming events, hospitality and transport, footer.
- `/about`: supplied AI Kshetra copy.
- `/events/build-with-ai`: event facts, schedule, format, rules, prizes, contacts, gallery, registration link.
- `/register`: validated team registration form with add/remove member controls and generated team ID.

## Technical details
- Use the existing TanStack routing structure and shared React components.
- Define the visual system and animations centrally with semantic CSS tokens.
- Use a locally stored campus image; the browser canvas creates the optional ASCII rendering.
- Add unique metadata to every content page and verify desktop and mobile layouts in the live preview.

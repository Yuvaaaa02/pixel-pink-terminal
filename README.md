# Pixel Pink Terminal

# AI Kshetra 2026 — Master Build Prompt (ASCII / Terminal Theme, Pink & White)

Copy this entire document into your AI coding tool (Claude Code, Cursor, v0, etc.) as a single instruction to build the site.

---

## 1. Project Summary

Build a responsive website for **AI Kshetra 2026**, the flagship AI/ML tech event of the CSE (AI & ML) department, organized by NEXAA (Next Gen Engineers & AI Association), part of Colorido 2K25 at R.V.R. & J.C. College of Engineering.

- **Theme:** ASCII / retro-terminal aesthetic — monospace type, box-drawing borders, scanline/glitch flourishes, blinking cursor, terminal-prompt motifs (`>`, `$`, `_`).
- **Color palette:** Pink (`#ff2fa0` primary / `#ffd6ec` soft accent) + White (`#ffffff`) + near-black (`#1a0d14`) for terminal-dark surfaces. Pink is the "phosphor" color against white/black backgrounds, like a pink CRT terminal.
- **Structure:** One primary scrollable single page (Home) containing sections 1–4 below, plus **two separate routed pages**: `/about` and `/register`. The hackathon details (section 5) live as their own dedicated event page (`/events/build-with-ai`), linked from the Upcoming Events section.
- **Stack recommendation:** Plain HTML/CSS/JS (or React + Vite if the builder prefers components) — no heavy frameworks needed. Use CSS variables for the palette so it's trivial to retheme.

---

## 2. Global Design System

```css
:root {
  --pink: #ff2fa0;
  --pink-soft: #ffd6ec;
  --pink-deep: #c2185b;
  --white: #ffffff;
  --ink: #1a0d14;
  --font-mono: "JetBrains Mono", "Fira Code", "Courier New", monospace;
}
```

- **Typography:** Everything in `var(--font-mono)`. Headings use a pseudo-ASCII banner style (see §5 for actual ASCII art blocks) or a CSS "block letter" font.
- **Borders:** Use box-drawing character frames (`┌─┐│└─┘`) rendered as `

` blocks around cards, or CSS `border: 2px solid var(--pink)` with dashed variants to imitate ASCII rules.
- **Cursor motif:** A blinking `▮` or `_` after key headings, animated with `@keyframes blink { 50% { opacity: 0 } }`.
- **Background texture:** Faint repeating dot/grid pattern in `--pink-soft` on white, like a terminal grid. Optional CRT scanline overlay (subtle horizontal `linear-gradient` repeating every 4px at low opacity) for retro flavor — keep opacity ≤ 6% so it stays readable.
- **Buttons/links:** Styled like terminal commands, e.g. `[ REGISTER_NOW ]` with hover invert (pink ↔ white).

---

## 3. Landing Page (Hero) — Section 1

**Goal:** Big ASCII-styled hero with the college photo, animated entrance.

Content:
- ASCII banner text reading **AI KSHETRA 2026** (see the ready-made ASCII art in §7 — drop it into a `

` tag).
- Sub-line: `> Empowering the next generation of tech innovators.`
- Tagline: `Join us for a celebration of technology, creativity, and code.`
- **College photo:** since I can't fabricate your actual campus photo, the correct way to get it "in ASCII theme" is to run *your uploaded photo* through a JS/Canvas ASCII-art converter so it renders as text characters shaped like the image, sitting inside the hero as a `

`/`

` element. Implementation notes:
  - Load the image into an offscreen `

`, downsample to ~100–160 px wide.
  - For each pixel, map luminance to a character from a ramp: `` " .:-=+*#%@" `` (light → dark).
  - Render as monospace text colored in pink-on-white (or white-on-pink for a "negative" terminal look).
  - Alternative (less code, still true to brief): keep the **real photo** as a normal ``, but frame it inside an ASCII box-drawing border and apply a CSS `filter: grayscale(1) contrast(1.2)` plus a pink duotone overlay (`mix-blend-mode: color`) so it visually matches the ASCII/pink theme without full character conversion. Ship this as the default; keep the canvas-ASCII converter as an optional toggle button (`[ TOGGLE ASCII MODE ]`).
- **Animation on load:**
  1. ASCII banner text "types" itself in character-by-character (typewriter effect, ~30ms/char).
  2. Sub-line fades/slides up after the banner finishes.
  3. Photo/ASCII-art block fades in with a slight "static flicker" (2–3 quick opacity jitters) to sell the CRT-boot feel.
  4. A blinking terminal cursor sits at the end of the last typed line permanently.
  5. Optional: faint scanline sweep animates top-to-bottom once on load.
- Primary CTA buttons: `[ REGISTER_NOW ]` → `/register`, `[ VIEW_EVENTS ]` → scrolls to Section 2.

---

## 4. Upcoming Events — Section 2

- Card grid, one card per event (currently: **AI Prototype Hackathon — "Build with AI"**; leave the grid data-driven so more events can be added later).
- Each card (ASCII-bordered box) shows: event name, one-line description, date, `[ VIEW_DETAILS → ]` linking to that event's dedicated page (e.g. `/events/build-with-ai`, which holds all of Section 5's content below).
- Hover state: card border pulses pink, slight scale-up.

---

## 5. Hospitality & Transport — Section 3

Render as two side-by-side (stacking on mobile) ASCII-bordered panels: **Transportation** and **Accommodation**.

**Transportation panel:**
```
Buses will be arranged from nearby towns so participants can reach
R.V.R. & J.C. College of Engineering comfortably.

Bus Availability: Guntur & Chilakaluripeta
Timings: 7:00 AM & 9:00 AM

Staff Coordinators
- Dr. K. Praveen Kumar   : 98496 52027
- Dr. Md. Hashher Sk.    : 96421 35090
- Sri. N. Dharani Kumar  : 96189 23836

[ VIEW_ROUTE_INFO ]
```
`VIEW_ROUTE_INFO` can open a modal or link to a map/PDF — leave as a placeholder link/button for now.

**Accommodation panel:**
```
Comfortable stays, curated meals, and a helpdesk ensure outstation
participants feel at home. Available for students from >50 km radius.

For Girls (In Guntur)
Dr. N.C. Kotaiah — Convener, Girls Hostel
9490776067

For Boys (In Campus)
Dr. B. Vara Prasada Rao — Convener, Boys Hostel
9849717299

Staff Coordinators
- Mr. B. Sriram              : 90599 99801
- Mr. G. Ravi                : 94407 22191
- Mr. Sk. Mohammad Rasool    : 94937 75374
```
Use `tel:` links on every phone number.

---

## 6. Footer — Section 4

```
AI KSHETRA
Empowering the next generation of tech innovators.
Join us for a celebration of technology, creativity, and code.

QUICK LINKS          CONTACT
Home                  Dr. M. Sridhar
Events                Professor & Convener, AI Kshetra
About Us              +91 99897 84709
Contact
                       G.N.V Nihar
                       Coordinator, AI Kshetra
                       +91 70937 25382
```
Style as a dark (`--ink`) footer band with pink text/rules for contrast against the white body — this is the one place the theme "inverts" to reinforce the terminal feel.

---

## 7. Ready-made ASCII Art Assets

Drop these directly into `

` blocks with `font-family: var(--font-mono); line-height: 1; white-space: pre; color: var(--pink);`.

**Hero banner — "AI KSHETRA":**
```
 █████╗ ██╗    ██╗  ██╗███████╗██╗  ██╗███████╗████████╗██████╗  █████╗
██╔══██╗██║    ██║ ██╔╝██╔════╝██║  ██║██╔════╝╚══██╔══╝██╔══██╗██╔══██╗
███████║██║    █████╔╝ ███████╗███████║█████╗     ██║   ██████╔╝███████║
██╔══██║██║    ██╔═██╗ ╚════██║██╔══██║██╔══╝     ██║   ██╔══██╗██╔══██║
██║  ██║██║    ██║  ██╗███████║██║  ██║███████╗   ██║   ██║  ██║██║  ██║
╚═╝  ╚═╝╚═╝    ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝
                          2 0 2 6
```

**Small divider / section marker:**
```
┌──────────────────────────────────────────┐
│  >_  NEXAA PRESENTS                        │
└──────────────────────────────────────────┘
```

**Loading / boot sequence (optional, plays once before hero reveals):**
```
[ BOOTING AI_KSHETRA_OS ... ]
[ LOADING MODULES ......... OK ]
[ INITIALIZING CAMPUS_LINK  OK ]
[ WELCOME, PARTICIPANT ]
```

**Generic terminal frame (reusable component for any content card):**
```
┌───────────────────────────────┐
│ $ ./section --render           │
│                                 │
│             │
│                                 │
└───────────────────────────────┘
```

**Simple circuit/AI motif divider (decorative, between sections):**
```
──●───┬───●───┬───●──[ AI ]──●───┬───●───┬───●──
      │               │           │
     ⎔               ⎔          ⎔
```

For the campus-photo ASCII conversion described in §3, generate it programmatically at build time (script below) rather than hand-authoring — hand-drawn ASCII of a real building won't match the actual photo.

```javascript
// asciify.js — converts an  to a 

 of ASCII characters
function imageToAscii(imgEl, cols = 120) {
  const ramp = " .:-=+*#%@";
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const scale = cols / imgEl.naturalWidth;
  canvas.width = cols;
  canvas.height = Math.floor(imgEl.naturalHeight * scale * 0.5); // 0.5 corrects char aspect ratio
  ctx.drawImage(imgEl, 0, 0, canvas.width, canvas.height);
  const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let out = "";
  for (let y = 0; y < canvas.height; y++) {
    for (let x = 0; x < canvas.width; x++) {
      const i = (y * canvas.width + x) * 4;
      const lum = (data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114) / 255;
      out += ramp[Math.floor((1 - lum) * (ramp.length - 1))];
    }
    out += "\n";
  }
  return out;
}
```

---

## 8. About Page (`/about`)

Full content (place under the ASCII banner + a `┌ ABOUT ─┐` header):

> AI Kshetra is the flagship Technical Event of the CSE (AI & ML) Department, organized by NEXAA – Next Gen Engineers & AI Association. Part of Colorido 2K25, our college's National Level Fest, it celebrates innovation, creativity, and technological exploration.
>
> The event brings together students with diverse talents, inspiring them to engage with AI, ML, and emerging technologies. It fosters learning, collaboration, and problem-solving, encouraging participants to think beyond conventional approaches.
>
> With a vision to nurture future tech innovators, AI Kshetra is where curiosity meets opportunity – empowering students and promoting a forward-looking mindset.
>
> Join us and be part of a community shaping tomorrow's technological advancements!

---

## 9. Event Detail Page — "Build with AI" (`/events/build-with-ai`)

Sections top to bottom, each in its own ASCII-framed card:

**Meta strip:** Event Type: AI Prototype Hackathon · Team Size: 2–4 Members · Mode: Offline, On Campus

**Schedule & Venue:**
- Preliminary Round (MCQ) — Dec 26, 1:30 PM–5:00 PM, 15 min duration, Venue: HT-1/HT-2 Labs (Hi-Tech Block). 🏆 Top 15 teams shortlisted.
- Main Round (Prototype) — Dec 27, 10:00 AM–3:00 PM, Venue: HT-1/HT-2 Labs.

**About the Event** (verbatim):
> The main objective of Build with AI is to encourage students to convert their ideas into practical AI solutions. Teams can work on domains like healthcare, education, agriculture, smart campus, automation, environment, and more.
>
> Participants are expected to think end-to-end: from clearly defining the problem and choosing data, to model design, implementation, evaluation and a realistic demonstration of impact.

**Rounds & Format:**
- Round 1 – Screening (MCQ Quiz): objective quiz on AI/ML basics, Python, data handling and logical reasoning; 20 questions, time-bound; top 15 teams qualify.
- Round 2 – Prototype & Pitch: problem statements given at the event only. Teams build a functional prototype/demo and present problem statement & motivation, architecture/workflow, live demo, impact/limitations/future scope.

**Judging Criteria:** relevance & clarity of problem statement · innovation & creativity · technical correctness & feasibility · quality/completeness of prototype · clarity of presentation & Q&A · scalability, impact, future potential.

**Rules & Guidelines:**
- Teams of 2–4, one designated leader.
- All members must be registered students of a recognised institution.
- AI tools/open-source libraries allowed with acknowledgement.
- Plagiarism/copying another team's work → disqualification.
- Time limits & organiser instructions must be followed.
- Judges'/organisers' decisions are final and binding.

**Prizes:** 1st / 2nd / 3rd Prize — amounts TBD (leave placeholders, e.g. `₹ ______`).

**Event Coordinators:**
- Student: G.N.V Nihar (+91 70937 25382), K. Joseph Prem Kumar (+91 93921 22287)
- Faculty: Mr. Muvva Praveen Kumar (Coordinator for Build with AI), Mrs. Vasanthi Yarra, Mrs. Koppolu Sireesha

**Event Gallery section:** responsive image grid (masonry or CSS grid), placeholder tiles with an ASCII "▓▓▓ PHOTO ▓▓▓" pattern until real photos are supplied; apply the same pink-duotone filter as the hero for visual consistency.

Bottom CTA: `[ REGISTER_FOR_THIS_EVENT ]` → `/register`.

---

## 10. Registration Page (`/register`)

Standalone routed page, ASCII-terminal styled form titled `┌ REGISTRATION FORM ─┐`.

**Fields (per participant):**
- Participant ID (auto-generated or entered)
- Registration Number (regno)
- Full Name
- Email
- Phone Number
- Gender — select: Male / Female / Other

**Team support:** allow **2–3 additional member blocks** (repeat the same field set), with `[ + ADD_MEMBER ]` / `[ − REMOVE ]` buttons, capped at the event's max team size (2–4 total). Use a simple JS array of member objects driving repeated form blocks — don't hardcode 3 static copies.

**Validation:** required fields, email format check, phone as 10-digit numeric, at least 2 members before submit is enabled.

**Submit behavior:** since no backend is specified, wire the form to either (a) a Google Form / Sheets endpoint, (b) an email service (e.g., Formspree, EmailJS), or (c) a placeholder `console.log`/success-screen if the builder will connect a backend later. Show a terminal-style success message on submit: `[ REGISTRATION_SUCCESSFUL ] Team ID: #____`.

---

## 11. Navigation

Sticky top nav, ASCII-bracket style links: `[ Home ]  [ Events ]  [ About ]  [ Register ]`. On the single-page Home, `Home`/`Events` scroll-link to sections; `About` and `Register` route to their pages. Active link underlined in pink.

---

## 12. Responsiveness & Accessibility

- Mobile: stack all multi-column sections (hospitality panels, event cards, member-form blocks) to single column; shrink ASCII banner to a smaller pre-rendered mobile version or swap it for a simple styled `

` below ~480px width (large ASCII art breaks on narrow screens).
- Ensure sufficient contrast: pink-on-white body text may need to darken to `--pink-deep` for WCAG AA on small text; keep bright `--pink` for large headings/buttons only.
- All decorative `

` ASCII art should have `aria-hidden="true"`; real heading text should exist as an accompanying (visually-hidden if needed) `

` for screen readers.

---

### Build order suggestion
1. Global CSS variables + font + base layout/nav/footer.
2. Home page sections 1–4 with static content, then layer in animations.
3. About page.
4. Event detail page (Build with AI).
5. Registration page + dynamic member fields + validation.
6. ASCII/photo hero treatment + boot animation last, since it's the most polish-heavy piece.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3b4b7803-80ff-464a-a85d-f4a0dc2e7b77).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

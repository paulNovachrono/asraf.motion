# WASSIM ASRAF — PAGES & SECTIONS
## UI/UX Blueprint · Awwwards-Informed · Design-System Ready

> Researched from live Awwwards SOTD winners:  
> Artem Shcherban Portfolio (Apr 2026 · 7.35/10), Roman Jean-Elie Portfolio '25 (Nov 2025 · 7.21/10),  
> Rauno Freiberg Portfolio 2025 (HM · Sep 2025), Clou Agency Portfolio (Sep 2025 · 7.29/10), Creative Giants

---

## INSIGHT SUMMARY FROM AWWWARDS RESEARCH

What the judges actually scored highest on across these SOTD winners:

**Navigation** — fullscreen overlay menus, minimal persistent nav (logo + one action), nav that vanishes on scroll-down and returns on scroll-up. No cluttered link lists visible at rest.

**Gallery/Work** — "All & Selected" dual filter view (Artem Shcherban pattern), hover-reveals on project tiles (video or image swap), infinite scroll or paginated with smooth GSAP Flip reorder. Never a static grid of screenshots.

**Footer** — treated as a full section, not an afterthought. Large CTA headline, availability status, time/location details, and social links arranged with editorial confidence. Marquee or animated text is common. Judges flag footers that feel bolted-on as a usability failure.

**Transitions** — projects open with a shared element morph (the clicked card expands into the case study hero). View Transitions API (CSS) or GSAP Flip. Cyd Stumpel won SOTD specifically for this pattern with CSS View Transitions.

**Usability score = 30% of total.** Sites lose here on: broken scroll on mobile, no keyboard nav, invisible focus states, auto-playing audio, and CTAs buried below the fold.

---

## SITE MAP

```
/                    Home (cinematic scroll — all key content)
/work                Work Index (filterable gallery)
/work/[slug]         Case Study (narrative project page)
/about               About (editorial, non-generic)
/contact             Contact (single focused action)
/404                 Not Found (on-brand, not embarrassing)
```

No `/services` page — Wassim's services live as a section on Home. Fewer pages = less navigation debt = better usability score. Services detail can expand inside the contact form as a checkbox selector.

---

## GLOBAL COMPONENTS

---

### NAV — Inspired by Artem Shcherban + Clou SOTD patterns

**Persistent bar (collapsed state):**
```
┌────────────────────────────────────────────────────────────┐
│  W·A                                           [ MENU ]    │
└────────────────────────────────────────────────────────────┘
```
- Position: `fixed`, `top: 0`, full width
- Height: 56px desktop / 48px mobile
- Background: `transparent` over hero, switches to `bg/surface` token with `backdrop-blur` after 80px scroll
- Left: wordmark `W·A` in display typeface, links back to `/`
- Right: single text label `MENU` — not an icon, not a hamburger
- `MENU` label: on hover, each letter has a stagger `translateY: -2px` wave micro-animation
- Active page: thin underline on wordmark using accent color token (not on `MENU`)
- Scroll behavior: hides on scroll-down (`translateY: -100%`, 300ms ease), returns on scroll-up — standard Awwwards pattern, keeps the work visible

**Fullscreen overlay (open state) — Block Reveal pattern:**
```
┌────────────────────────────────────────────────────────────┐
│  W·A                                           [ CLOSE ]   │
│                                                            │
│                                                            │
│          HOME                              ↗               │
│          WORK                              ↗               │
│          ABOUT                             ↗               │
│          CONTACT                           ↗               │
│                                                            │
│                                                            │
│  Instagram · LinkedIn · Behance · Vimeo                    │
│  Available for projects · Cairo, EG · GMT+2                │
└────────────────────────────────────────────────────────────┘
```
- Opens from `MENU` click: two panels slide from opposite edges and meet at center (block reveal — standard SOTD nav pattern)
- Background: `bg/overlay` token (deep near-black, slightly different from page bg)
- Nav links: display scale (~14vw), left-aligned, stagger reveal bottom-to-top
- `↗` arrow appears on hover of each link, slides in from bottom-left
- On link hover: all other links dim to 30% opacity — spotlight on hovered item
- Current page link: accent color token, not underline
- Bottom strip inside overlay: social links (text, 12px, spaced) + availability status
- Close: `CLOSE` top right, same position as `MENU` — consistent hit target
- Animation: GSAP timeline, 0.6s ease-in-out. Panel reveal → links stagger in → social strip fades

**Mobile nav behavior:**
- Same overlay, links stack full-height
- Link font size: `8vw` instead of `14vw`
- Touch target height: minimum 56px per link

---

## HOME PAGE (`/`)

All major content lives here. The page is structured as a **directed scroll journey** — each section has one job. Scroll depth = conversion funnel depth.

---

### SECTION 1 — PRELOADER

**Job:** Establish identity before the page is seen. Earn the next 3 seconds.

**UX rule:** Max 2.5 seconds total. Never block on font load. Show progress.

```
Full screen · bg/base token

    W·A

[████████████░░░] 78%
```
- Monogram `W·A` assembles via SVG path draw-on (stroke-dashoffset)
- Progress bar fills using real asset load percentage, not fake timer
- Wipe exit: single horizontal wipe (left to right) — feels like a tape cut. No fade.
- Reduced motion: instant load, no animation, wipe replaced with opacity 0→1

---

### SECTION 2 — HERO

**Job:** In 3 seconds, communicate who Wassim is and what he makes. Nothing else.

**Layout:** `100vw × 100vh`, no scroll hint until all elements have loaded in.

```
┌────────────────────────────────────────────────────────────┐
│  W·A                                           [ MENU ]    │
│                                                            │
│                                                            │
│  MOTION.                                                   │
│  CONTENT.                                                  │
│  RESULTS.                    [ambient reel loop, behind]   │
│                                                            │
│                                                            │
│  Social Media Manager                    ↓ Scroll          │
│  Motion Designer · Video Editor          00:00:03          │
└────────────────────────────────────────────────────────────┘
```
- Headline: three words, display scale, staggered line reveal on load
- Each word: a different micro-weight — creates rhythm without needing different fonts
- Background: muted, desaturated ambient video loop (studio glow, editing timeline) — `mix-blend-mode: multiply` or low opacity so it never fights the text
- `↓ Scroll` label bottom-right: bounces gently, fades out once user scrolls past 100px
- Mouse parallax: headline shifts ±6px on cursor move (subtle — never disorienting)
- **No hero CTA button.** The scroll is the CTA. A button here creates decision paralysis before the visitor knows anything.

**UX note from Awwwards usability scores:** Heroes with too much copy, multiple CTAs, or competing visual elements consistently score lower. The Roman Jean-Elie SOTD won partly because the hero is one image + one name + nothing else.

---

### SECTION 3 — MARQUEE SIGNAL BAR

**Job:** Transition energy between hero and work. Communicate breadth in 2 seconds.

```
─────────────────────────────────────────────────────────────
  MOTION GRAPHICS  ·  VIDEO EDITING  ·  SOCIAL STRATEGY  ·  REELS  ·  AFTER EFFECTS  ·  BRAND CONTENT  ·  MOTION GRAPHICS →
─────────────────────────────────────────────────────────────
```
- Single row, 60px height
- Infinite CSS marquee, `animation: marquee 20s linear infinite`
- On hover: marquee pauses — good accessibility signal, Awwwards usability points
- Each separator `·` uses accent color token
- Font: uppercase, small caps or utility face from design system

---

### SECTION 4 — SELECTED WORK (Gallery)

**Job:** Show 4–6 projects in a way that creates desire to see more.

**Layout: Staggered full-width strips** (not a card grid — strips feel more editorial, less template)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  [VIDEO PREVIEW — 55% width]      01  Project Name         │
│  plays muted on hover             ─────────────────────    │
│                                   Brand Campaign · 2025     │
│                                   Social + Motion           │
│                                                             │
│                                   VIEW PROJECT →            │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   02  Project Name                [VIDEO PREVIEW — 55%]    │
│   ─────────────────────                                     │
│   Motion Design · 2024             plays muted on hover     │
│   After Effects                                             │
│                                                             │
│   VIEW PROJECT →                                            │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```
- Strips alternate L/R — creates visual rhythm that stops looking like a template
- Project number: large, ultralight, background watermark position — decorative only
- Video previews: `<video autoplay muted loop playsinline>` triggered by `IntersectionObserver` — lazy, not auto
- Hover on video area: custom cursor morphs to PLAY state + adds subtle vignette overlay
- Scroll reveal: each strip `clipPath: inset(0 0 100% 0)` → `inset(0 0 0% 0)` (wipe up from bottom)
- After last project: full-width text link: `ALL WORK (12) →` routes to `/work`

**UX guardrails:**
- Minimum touch target: 48px on all interactive elements
- `VIEW PROJECT →` is the only CTA per strip — one action, no confusion
- Video preview never autoplays without `IntersectionObserver` to avoid battery drain on mobile

---

### SECTION 5 — SHOWREEL

**Job:** Let the work speak at full volume. One moment of pure cinema.

**Scroll-driven behavior (GSAP ScrollTrigger, `scrub: 1.5`):**
```
[entering] → letterbox bars slide in from top + bottom
[scroll]   → video container expands: 40% → 100% width
[pinned]   → reel plays muted, autoplay, looping 
             SOUND ON toggle appears (defaults OFF — critical for usability)
             CTA: [ CONTACT ME ]
[exiting]  → letterbox collapses, section unpins, scroll continues
```
- Pin: `ScrollTrigger pin: true` — section stays fixed while user scrolls through it
- Muted default + visible toggle: Awwwards judges explicitly note autoplay audio as a usability failure
- Timecode overlay: decorative, bottom-left, mono font, ticks while playing
- `[ CONTACT ME ]` button appears only when reel is fully expanded and playing — creates a moment of impact before the ask

---

### SECTION 6 — ABOUT STRIP (Condensed)

**Job:** One paragraph + one fact. Earn trust, pass the baton to `/about` if they want more.

**Layout:** 60/40 horizontal split
```
┌────────────────────────────────────┬───────────────────────┐
│                                    │                       │
│  Wassim Asraf creates content      │  [Portrait]           │
│  that moves — literally and        │                       │
│  figuratively. Based in Cairo.     │  50+ Brands           │
│  Working globally.                 │  12M+ Views           │
│                                    │  5+ Years             │
│  [ READ MORE ABOUT ME → ]          │                       │
│                                    │                       │
└────────────────────────────────────┴───────────────────────┘
```
- Stats count up once when entering viewport (GSAP `countTo`, fires only once per session)
- Portrait: `object-fit: cover`, subtle grain overlay to match design system tone
- `READ MORE ABOUT ME →` routes to `/about`
- On mobile: stacks — portrait first (with stats), then text below

---

### SECTION 7 — SERVICES (Inline, Not a Page)

**Job:** Answer "what do you actually do?" before they have to ask.

**Layout:** 3-column grid on desktop, single column on mobile

```
┌──────────────────┬──────────────────┬──────────────────┐
│                  │                  │                  │
│  Social Media    │  Motion          │  Video           │
│  Strategy        │  Graphics        │  Editing         │
│                  │                  │                  │
│  From content    │  After Effects,  │  Long-form,      │
│  pillars to      │  Premiere, brand │  Reels, color    │
│  analytics.      │  templates.      │  grading.        │
│                  │                  │                  │
└──────────────────┴──────────────────┴──────────────────┘

┌──────────────────┬──────────────────┬──────────────────┐
│  Content         │  Short-Form      │  Brand Content   │
│  Direction       │  Video           │  Systems         │
│  ...             │  ...             │  ...             │
└──────────────────┴──────────────────┴──────────────────┘
```
- Each card: service name (display type), 2-line description, no bullets
- Hover: card border picks up accent color token, lifts `translateY: -4px`
- No icons — Awwwards usability notes that generic icons add noise without meaning
- On mobile: 2-column grid, not 1 — services cards are compact enough

---

### SECTION 8 — METRICS / PROOF

**Job:** One row of numbers that makes the visitor think "this person actually delivers."

```
   12M+              50+              87%              5+
Video Views      Brands Worked    Avg. Engagement   Years Active
  Delivered         With              Rate
```
- Full-width, dark surface token, 4-column
- Numbers: display scale (80–120px), accent color or white
- Labels: 11px utility font, muted
- Count-up animation on scroll enter — once per session only
- Thin horizontal rule above and below the section, 1px, 20% opacity

**UX note:** No decorative icons or backgrounds here. The numbers are the design. Any decoration weakens them.

---

### SECTION 9 — TESTIMONIALS

**Job:** Third-party voice saying what Wassim can't say about himself.

**Layout:** 3 cards at 33% each on desktop, scrollable carousel on mobile

```
┌────────────────────────────────────────────────────────────┐
│  "                                                         │
│  Wassim doubled our Instagram reach in 6 weeks.            │
│  The reels didn't just look good — they performed.         │
│                                                            │
│  — Client Name                                             │
│     Job Title, Company                                     │
└────────────────────────────────────────────────────────────┘
```
- Large quote mark: decorative, uses accent color, 20% opacity — background element
- Quote text: body font, 18–20px, not italic (italic in dark themes is hard to scan)
- Attribution: small, muted, separator line before it
- Mobile carousel: `overflow-x: auto`, `scroll-snap-type: x mandatory`, each card `scroll-snap-align: start` — no JS needed
- Dots indicator below carousel on mobile shows position

---

### SECTION 10 — CTA / CONTACT HOOK

**Job:** Convert. This is the payoff of the entire scroll.

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│         LET'S MAKE                                         │
│         SOMETHING                                          │
│         MOVE.                                              │
│                                                            │
│    [ EMAIL ME ]          [ BOOK A CALL ]                   │
│                                                            │
│  wassimasraf@—       ● Available for new projects          │
│                                                            │
└────────────────────────────────────────────────────────────┘
```
- Headline: display scale, three words, stagger reveal
- Two CTAs: `EMAIL ME` (mailto link, secondary style) + `BOOK A CALL` (primary, accent fill) — different actions, different weights
- `● Available` status: small, with animated pulse dot — green = available, gray = booked. This is an actual usability feature, not just decoration
- Background: slightly lighter than the rest of the page — creates a clear visual "ending" to the page journey
- On mobile: CTAs stack vertically, full-width

---

## WORK INDEX PAGE (`/work`)

**Job:** Let the visitor find what they're looking for and feel excited about every piece they don't click yet.

### Filter Bar

```
[ ALL (12) ]  [ MOTION ]  [ SOCIAL ]  [ VIDEO ]  [ CAMPAIGNS ]
```
- Fixed below nav on scroll — stays accessible without pushing content down
- Active filter: accent color background, text inverts
- Inactive: outlined, muted text
- Filter switch animation: GSAP Flip — cards rearrange with position morph, not a page reload
- Count in parentheses updates as filter changes

### Gallery Grid

**Pattern borrowed from Artem Shcherban SOTD: "All & Selected" dual view**
```
[ GRID VIEW ]  [ LIST VIEW ]     ← toggle, top right
```

**Grid view:**
```
┌─────────────────┬─────────────────┐
│  [Full bleed    │ [Portrait card] │
│   landscape     │                 │
│   card]         │ Project Name    │
│                 │ Type · Year     │
│  Project Name   │                 │
│  Type · Year    ├─────────────────┤
│                 │ [Landscape card]│
└─────────────────┤                 │
[Portrait card]   │ Project Name    │
                  │ Type · Year     │
Project Name      └─────────────────┘
```
- Asymmetric masonry — not equal-height rows
- Hover on any card: title + type slides up from bottom (overlay, dark gradient) + cursor morphs to PLAY if video
- No `<a href>` visible — whole card is a link

**List view:**
```
─────────────────────────────────────────────
  01  PROJECT NAME              Motion · 2025
─────────────────────────────────────────────
  02  PROJECT NAME              Social · 2024
─────────────────────────────────────────────
```
- Simple rows, project name left, type+year right
- Hover: row background fills with subtle tint, image previews on right side (GSAP follow-cursor image reveal)

**UX rules:**
- Grid and list layouts preserved in `localStorage` so returning visitors see their preference
- Keyboard: tab between cards, enter to open
- Empty filter state: "Nothing yet in this category — check back soon." Not a blank page.

---

## CASE STUDY PAGE (`/work/[slug]`)

**Job:** Tell the complete creative story. Justify the work. Turn interest into inquiry.

### Page Structure (vertical scroll)

**Hero** — shared element transition: the card from `/work` morphs (GSAP Flip or CSS View Transitions) to fill the screen
```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  [Full-bleed hero image or video, 100vh]                   │
│                                                            │
│  PROJECT NAME                                    2025      │
│  Client Name                             Motion + Social   │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

**Project info bar** — sticky below nav once scrolled past hero
```
[ PROJECT NAME ]     [ Client ]     [ Year ]     [ ↑ Back to work ]
```

**Brief** — one punchy paragraph. What was the challenge.
```
THE BRIEF ──────────────────────────────────────────────────

One clear paragraph. What the client needed. What was broken.
What success looked like. No bullet points.
```

**Process / Approach** — 2–3 paragraphs with supporting visuals
```
THE APPROACH ───────────────────────────────────────────────

[paragraph]

[full-width image — storyboard, moodboard, or style frames]

[paragraph]
```

**The Work** — full-width media gallery
```
THE WORK ───────────────────────────────────────────────────

[16:9 video embed, custom player]

[2-column image grid: post mockups, screen recordings]

[scrollable 3-panel strip: individual deliverables]
```
- Lightbox on click: full-screen view, keyboard arrow navigation, ESC to close
- Video: custom controls only, no YouTube embed chrome — embed with `youtube-nocookie.com` or Vimeo + custom overlay

**Results** — the proof
```
THE RESULTS ────────────────────────────────────────────────

  +150%           +300%            +12K
  Story Views     Engagement       New Followers
  (30 days)       Rate             (60 days)

Short paragraph contextualizing the numbers.
```
- Numbers use same count-up animation as home metrics
- One honest quote from the client, attributed

**Next project** — seamless continuation
```
─────────────────────────────────────────────────────────────
  NEXT PROJECT

  [thumbnail preview on hover]
  PROJECT NAME →
─────────────────────────────────────────────────────────────
```
- "Next" is random or manually ordered in CMS — never the same category two in a row
- Hover reveals full project thumbnail as background — opacity transition

---

## ABOUT PAGE (`/about`)

**Job:** Build a human connection. Clients hire people, not portfolios.

### Layout: Single editorial scroll

**Opening statement — full width:**
```
"Three things make great content:
 a sharp eye, a feel for timing,
 and knowing what people
 actually want."
```
Display scale, centered, staggered word reveal.

**Portrait + story:**
```
┌────────────────────────────────┬───────────────────────────┐
│  [Portrait, full height,       │  WHO IS WASSIM?           │
│   grain overlay,               │                           │
│   slight warm tint]            │  [3 paragraphs:           │
│                                │   Origin, craft,          │
│                                │   what drives him]        │
│                                │                           │
│                                │  [ DOWNLOAD CV ]          │
└────────────────────────────────┴───────────────────────────┘
```

**Tools & platforms — HUD grid:**
```
TOOLS & PLATFORMS ──────────────────────────────────────────

  After Effects    ████████████  Expert
  Premiere Pro     ████████████  Expert
  Photoshop        ████████████  Expert
  Instagram        ████████████  Expert
  TikTok           ██████████░░  Advanced
  DaVinci Resolve  ██████████░░  Advanced
  Figma            ████████░░░░  Intermediate
```
- Bars animate width from 0 on scroll enter (CSS transition, `transition-delay` staggered)
- Label: tool name left, proficiency text right, bar between
- Reduced motion: bars appear at full width instantly with no transition

**3 belief lines — large italic display:**
```
"Motion is not decoration. It's communication."
"Strategy without content is just a spreadsheet."
"The algorithm doesn't pick winners. The audience does."
```
Each on its own line, 40–48px, stagger reveal.

**CTA at bottom:**
```
[ EMAIL WASSIM ]      [ BOOK A DISCOVERY CALL ]
```

---

## CONTACT PAGE (`/contact`)

**Job:** Make saying yes as easy as possible.

**Layout:** 50/50 split on desktop. Left: form. Right: info.

### Left — Form
```
[ YOUR NAME ]          ____________________________

[ YOUR EMAIL ]         ____________________________

[ WHAT DO YOU NEED? ]
  ○ Social Media Strategy
  ○ Motion Graphics & Animation
  ○ Video Editing & Post-Production
  ○ Full Brand Content System
  ○ Something else

[ TELL ME MORE ]
  ____________________________________________
  ____________________________________________

  [ SEND IT → ]
```
- Input lines animate: on focus, bottom border extends from 0% to 100% width (accent color)
- Radio labels: full row is the tap target on mobile — not just the dot
- Send button: accent fill on hover, shows loading spinner on submit, success state replaces entire form with confirmation message
- Error handling: inline, below each field, no page reload, no modal

### Right — Info panel
```
  ● AVAILABLE FOR PROJECTS
    Usually responds within 24 hours

  wassimasraf@gmail.com
  [click to copy — shows "Copied!" tooltip]

  Cairo, Egypt
  GMT+2 · Open to remote worldwide

  ──────────────────────────
  Instagram
  LinkedIn
  Behance
  Vimeo
```
- `●` dot: pulsing CSS animation when available, static gray when booked
- Email: `data-email` attribute, JS assembles it to prevent scraping
- Copy-to-clipboard: async clipboard API, tooltip appears for 1.5s then disappears
- Social links: text only, no icons — consistent with Rauno Freiberg pattern (and scores better with Awwwards usability juries)

---

## FOOTER — Full Section Treatment

The footer is not a nav afterthought. It's the last thing a visitor sees. Awwwards judges score sites lower when the footer feels generic or unfinished.

**Pattern: Editorial end-page** (observed across Artem Shcherban, Clou, Roman Jean-Elie SOTDs)

### Desktop layout:
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  WASSIM ASRAF                               Let's make      │
│  ─────────────────                          something.      │
│  Social Media Manager                                       │
│  Motion Designer                            [ START A       │
│  Video Editor                                 PROJECT → ]   │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  MOTION  ·  CONTENT  ·  RESULTS  ·  MOTION  ·  CONTENT  → │
│    (slow marquee, single line, accent-colored separators)   │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  /work    /about    /contact          Instagram  LinkedIn   │
│                                       Behance    Vimeo      │
│                                                             │
│  © 2025 Wassim Asraf                  Cairo · GMT+2 ·       │
│  All rights reserved                  Available worldwide   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Footer behavior:
- Footer uses **scroll-reveal sticky footer** pattern: the page content scrolls over it, revealing it underneath — seen in multiple SOTD winners, creates a sense of depth and surprise
- Implemented with: `position: sticky; bottom: 0` on footer, `z-index: -1`, page sections with `position: relative; z-index: 1` sit above it
- Marquee in middle strip: CSS only, pauses on `prefers-reduced-motion`
- Timezone shown: small detail that signals professionalism to international clients
- `[ START A PROJECT → ]` is the one CTA — consistent with the contact page ask

### Mobile footer (stacked):
```
WASSIM ASRAF

Social Media Manager
Motion Designer · Video Editor

[ START A PROJECT ]

WORK · ABOUT · CONTACT

Instagram · LinkedIn · Behance · Vimeo

Cairo, EG · © 2025
```
- Stacked, centered
- Full-width CTA button
- Nav links: single row, separator dots
- Social: single row, text links

---

## 404 PAGE

Awwwards specifically noted Artem Shcherban's 404 as an element worth featuring. A branded 404 is a free usability and creativity point.

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  W·A                                           [ MENU ]   │
│                                                            │
│                                                            │
│  THIS FRAME                                               │
│  IS MISSING.                                              │
│                                                            │
│  The page you're looking for got lost in                  │
│  the edit. Let's get you back on track.                   │
│                                                            │
│  [ BACK TO HOME ]          [ VIEW ALL WORK ]              │
│                                                            │
│                                                            │
│  [ambient noise texture or glitch visual — subtle]        │
│                                                            │
└────────────────────────────────────────────────────────────┘
```
- Headline: on-brand language — references the editing/motion world
- Two clear exits: homepage or work page
- No "404" number displayed — that's for server logs, not users
- Optional: subtle glitch CSS animation on the headline text

---

## UX PRINCIPLES — APPLIED THROUGHOUT

These govern every micro-decision, drawn from what Awwwards juries penalize:

**1. One action per section.** Never two CTAs at the same visual level. If two actions exist, one is primary (filled) and one is secondary (outlined or text).

**2. Touch targets ≥ 48px.** Every tappable element. Especially on testimonial carousels, filter pills, and contact form radio buttons.

**3. Motion respects `prefers-reduced-motion`.** All GSAP animations wrapped: `if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches)`. Fallback: instant opacity change.

**4. Video never auto-plays with sound.** `muted` attribute always present. Sound toggle always visible, always defaults OFF.

**5. Forms never reload the page.** `fetch()` + JSON for all form submissions. Success state replaces form content inline. Error state is field-level, not a modal.

**6. Scroll depth = content priority order.** Hero → Work → Proof → CTA. If a visitor only scrolls 40%, they still saw the best work.

**7. Loading states everywhere.** Button shows spinner during submit. Images show blur placeholder (Next.js `placeholder="blur"`). No invisible waiting.

**8. Keyboard nav is fully functional.** Tab order matches visual order. Focus rings are styled (design system accent color, 2px outline, 2px offset). Never `outline: none` without replacement.

**9. No layout shift.** Reserve space for images and videos with aspect-ratio CSS before they load. Font loading with `font-display: swap`. Images with explicit `width` + `height` attributes.

**10. Footer is not the last resort.** It's a designed section. It has a job (the final CTA + social proof via marquee). It earns its place.

---

## ANIMATION TIMING CHEATSHEET

Use these values directly from your design system and apply consistently:

| Interaction | Duration | Easing | Notes |
|---|---|---|---|
| Page transition (in) | 600ms | `power3.out` | Clip-path wipe |
| Page transition (out) | 400ms | `power3.in` | Opacity fade |
| Headline reveal (per char) | 800ms | `power2.out` | Stagger 0.015s |
| Section wipe (clip-path) | 900ms | `power3.out` | Fires on IntersectionObserver |
| Card hover lift | 200ms | `ease` | `translateY: -4px` |
| Nav overlay open | 600ms | `power2.inOut` | Block reveal both panels |
| Nav overlay close | 400ms | `power2.in` | Reverse block |
| Counter/count-up | 1200ms | `power1.out` | Fires once per session |
| Marquee (ticker) | 20s | `linear infinite` | CSS only, pauses on hover |
| Video cursor morph | 150ms | `ease` | Scale + shape |
| Footer sticky reveal | scrub-tied | GSAP ScrollTrigger | Parallax, no fixed duration |

---

*Research sources: Awwwards SOTD gallery, Navigation, Footer Design, and Gallery tag pages — live sessions June 2026*  
*File: wassim-asraf-pages-sections.md · For use with existing design system*

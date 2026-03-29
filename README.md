# 🌀 Scrolling Into the Void

> An immersive, scroll-driven interactive storytelling experience about social media addiction — built for the **Frontend Odyssey** hackathon at **IIT Patna**.

**Participant:** Md Minaj Uddin &nbsp;|&nbsp; **ID:** `minajuddin0510`

---

## 🔗 Live Demo & Source

| | Link |
|---|---|
| 🌐 Live Site | *https://minajuddin0510.github.io/void-scroll* |
| 💻 Repository | *https://github.com/minajuddin0510/void-scroll* |

---

## 📖 Concept & Story

*Scrolling Into the Void* takes users on a five-chapter journey through the psychological loop of social media consumption — from the innocent first swipe to the hollow emptiness that follows, and finally to a gentle call to look up.

Rather than lecture, the site *makes you feel it*. The design mirrors the very addiction it describes: dopamine-hit animations, endless feeds, sensory overload from cascading notifications, and then — silence.

### The Five Chapters

| # | Section | Theme |
|---|---------|-------|
| I | **Hero** — *Just One Scroll* | The innocent beginning |
| II | **Loop** — *You Keep Scrolling* | The algorithmic feed trap |
| III | **Overload** — *Too Much. Too Fast.* | Notification chaos |
| IV | **Void** — *And Then… Nothing* | The hollow aftermath |
| V | **Wake Up** — *Look Up* | Hope and reclamation |

---

## ✅ Hackathon Requirements Checklist

### Story Structure
- [x] 5 cohesive narrative sections (Hero → Loop → Overload → Void → Wake Up)

### Scroll-Based Interactions
- [x] **Parallax scrolling** — floating social UI cards drift at different speeds in the Hero section
- [x] **Scroll-triggered reveal animations** — every element fades and slides in via `IntersectionObserver`
- [x] **Scroll progress bar** — a gradient bar at the top tracks reading progress

### Interactive Elements
- [x] **Hover animations** — floating cards scale up; feed cards lift on hover
- [x] **Mute toggle button** — silences the notification chaos in Section III
- [x] **CTA button** — triggers a full-screen breathing/calm overlay
- [x] **Interactive feed cards** — hover effects with animated progress bars

### Animations
- [x] **Floating card animations** — looping `floatA` / `floatB` keyframes with rotation
- [x] **Glitch title effect** — CSS `::before` / `::after` pseudo-element glitch on "TOO MUCH."
- [x] **Notification popups** — randomised spawn positions with `notifPop` + `notifFade` keyframes
- [x] **Breathing/calm overlay** — gentle `calmBreathe` pulse animation
- [x] **Blinking cursor** — CSS `blink` keyframe in the Void section
- [x] **Scroll-cue bob** — `bobDown` keyframe on the Hero arrow

### Responsive Design
- [x] `clamp()` fluid typography across all breakpoints
- [x] CSS Grid `auto-fit` feed layout adapts from 3-col → 1-col
- [x] Tablet breakpoint (`≤768px`) — repositions and reduces floating cards
- [x] Mobile breakpoint (`≤480px`) — scales down large display type

---

## 🛠️ Tech Stack

- **HTML5** — semantic structure, Open Graph & Twitter Card meta tags
- **CSS3** — custom properties, `clamp()`, `backdrop-filter`, keyframe animations, CSS Grid & Flexbox
- **Vanilla JavaScript** — `IntersectionObserver` API, event listeners, DOM manipulation
- **No build tools required** — zero dependencies, runs directly in the browser

---

## 📂 Project Structure

```
scrolling-into-the-void/
├── index.html       # Full page structure & all 5 sections
├── style.css        # All styling, animations & responsive breakpoints
├── script.js        # Scroll effects, parallax, notification spawner & interactions
├── favicon.png      # Browser tab icon
├── og-image.png     # Social media preview image
└── README.md        # This file
```

---

## 🚀 Running Locally

No install or build step needed.

```bash
# Clone the repository
git clone https://github.com/minajuddin0510/void-scroll.git

# Open in browser
open index.html
# or simply drag index.html into any modern browser
```

---

## 🎨 Design Decisions

**Color Palette** — The journey moves from vibrant gradient dopamine (Hero) → cold deep navy (Loop) → harsh neon-on-black (Overload) → pure void black → warm dawn tones (Wake Up). Color itself tells the story.

**Typography** — Inter at weight 900 for impact headings, weight 300 for introspective copy. `clamp()` ensures every screen size reads naturally.

**Motion Philosophy** — Animations are purposeful, not decorative. The chaos in Section III is intentional sensory overload; its sudden absence in Section IV is the point.

---

## ♿ Accessibility & Performance

- Semantic HTML5 landmarks (`<section>`, `data-section` attributes)
- `meta` description and Open Graph tags for discoverability
- `{ passive: true }` scroll listeners for smooth performance
- `IntersectionObserver` instead of scroll-position polling
- `backdrop-filter` with `-webkit-` prefix for cross-browser support
- Font loaded via Google Fonts with `display=swap` to prevent layout shift

---

*Built with intention. Put the phone down.* 🌅

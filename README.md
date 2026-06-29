# Scrimba - Basketball Scoreboard Solution

## Table of Contents

- [Overview](#overview)
- [My Process](#my-process)
- [Hardware Specifications](#hardware-specifications)
- [Author](#author)

---

## Overview

### The Challenge

The core objective was to engineer a functional, cumulative scoring engine. The primary architectural hurdle was ensuring **"Absolute Source Fidelity,"** where internal point states remain persistent and cumulative across multiple user interactions without resetting or overwriting.

### User Stories

Users should be able to:

- View an optimal layout responsive to mobile devices like the iPhone SE.
- See smooth hover states for all interactive elements with synchronized timing.
- Experience a **"Single Source of Truth"** logic where the UI always reflects the internal state.

### Links

- **Live Site URL:** [[GitHub Pages URL](https://ezra1492.github.io/scrimba-basketball-scoreboard/)]
- **Solution URL:** [[Repository URL](https://github.com/ezra1492/scrimba-basketball-scoreboard)]

---

## My Process

### Built with

- **Semantic HTML5:** Implementation of `<article>` and `<data>` tags for a component-oriented structure.
- **CSS Design Tokens:** A robust `:root` architecture for colors, typography, and spacing tokens.
- **Flexbox Choreography:** Resilient vertical centering using `margin: auto 0` and responsive column shifts.
- **Vite:** Professional build tool for local development and production bundling.
- **GitHub Pages Pipeline:** Automated deployment via `gh-pages`.

### What I Learned

#### 1. Single Source of Truth (SSOT)

I moved away from multiple "state buckets" to a centralized internal variable. This ensures that the JavaScript state is the ultimate authority before synchronizing with the DOM's `textContent`.

```javascript
// Internal state acts as the authority (SSOT)
let homeScoreCount = 0;

function addOneHome() {
  homeScoreCount += 1; // Update internal state
  homeScore.textContent = homeScoreCount; // Synchronize the UI
}
```

#### 2. Vite Bundling & Module Requirements

During deployment, I encountered a critical 404 error. I learned that Vite requires the `type="module"` attribute in the `<script>` tag to properly bundle the `index.js` file for production environments.

#### 3. Interface Polishing & A11y

Closing the **"Accessibility Gap"** was a priority. I integrated hidden semantic landmarks (`<h1>`) for screen readers and synchronized a 0.6s transition across both button hovers and credit links to create a cohesive "tactile" experience.

### Continued Development

- **Logic Expansion:** Implementing a **Highlight Leader** feature to visually distinguish the winning team, a **"New Game"** button to reset the global state, and a functional **Game Timer** to track periods.

- **Flexbox Mastery:** Continuing to cement my understanding of the **Box Model** by using physical analogies (beams and boxes) and debugging layouts with high-contrast background-color stress testing.

- **Layout Physics:** Perfecting the use of `margin: auto 0` to maintain resilient vertical alignment within the Flexbox container.

---

## Author

- **Website:** [Israel (Ray) Guevara GitHub](https://github.com/ezra1492)
- **Frontend Mentor:** [@ezra1492](https://www.frontendmentor.io/profile/ezra1492)

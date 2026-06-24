/* ============================
STATE MANAGEMENT & UI ANCHORS ↓
=============================== */

// ANCHOR: Selecting the display element from the DOM.
let homeScore = document.getElementById("score-card__home-score");

let homeScoreCount = 0;

/* ==========================
HOME TEAM INTERACTION LOGIC ↓
============================= */

// FUNCTION: addOneHome()
// HOW IT WORKS: Increments the 'homeScoreCount' state variable by 1, maintaining a Single Source of Truth for the team's score. It then synchronizes the UI by updating the 'textContent' of the anchored DOM element (homeScore) to reflect the new state.
function addOneHome() {
  homeScoreCount += 1;
  homeScore.textContent = homeScoreCount;
}

function addTwoHome() {
  homeScoreCount += 2;
  homeScore.textContent = homeScoreCount;
}

function addThreeHome() {
  homeScoreCount += 3;
  homeScore.textContent = homeScoreCount;
}

/* ==========================
HOME TEAM INTERACTION LOGIC ↑
============================= */

let guestScoreEl = document.getElementById("score-card__guest-score");
// ANCHOR: Reference to the DOM element used to synchronize the UI with the internal state variable.
let guestScoreCount = 0;

/* ===========================
GUEST TEAM INTERACTION LOGIC ↓
============================== */
function addOneGuest() {
  guestScoreCount += 1;
  guestScoreEl.textContent = guestScoreCount;
}

function addTwoGuest() {
  guestScoreCount += 2;
  guestScoreEl.textContent = guestScoreCount;
}

function addThreeGuest() {
  guestScoreCount += 3;
  guestScoreEl.textContent = guestScoreCount;
}
/* ===========================
GUEST TEAM INTERACTION LOGIC ↑
============================== */

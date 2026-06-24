/* ============================
STATE MANAGEMENT & UI ANCHORS ↓
=============================== */

// ANCHOR: Selecting the display element from the DOM.
let homeScore = document.getElementById("score-card__home-score");

//
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

// GUEST BUTTONS ↓
function addOneGuest() {
  console.log("+1 Guest");
}

function addTwoGuest() {
  console.log("+2 Guest");
}

function addThreeGuest() {
  console.log("+3 Guest");
}
// GUEST BUTTONS ↑

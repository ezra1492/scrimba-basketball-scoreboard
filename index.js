/* ============================
STATE MANAGEMENT & UI ANCHORS ↓
=============================== */

// ANCHOR: Selecting the display element from the DOM
let homeScore = document.getElementById("score-card__home-score");
console.log(homeScore);

// LOGIC FLAW: Using multiple "state buckets" instead of a Single Source of Truth.
// These variables track points independently, which is the root of the UI reset bug
let addOne = 0;
let addTwo = 0;
let addThree = 0;

/* ==========================
HOME TEAM INTERACTION LOGIC ↓
============================= */

// FUNCTION: addOneHome()
// HOW IT WORKS: Increments the 'addOne' variable and pushes it to the DOM.
// WHY IT FAILS: It ignores 'addTwo'and 'addThree'. When called it overwrites the scoreboard with its own total, reseting any progress made by other buttons.
function addOneHome() {
  addOne += 1;
  homeScore.textContent = addOne;
}

function addTwoHome() {
  addTwo += 2;
  homeScore.textContent = addTwo;
}

function addThreeHome() {
  addThree += 3;
  homeScore.textContent = addThree;
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

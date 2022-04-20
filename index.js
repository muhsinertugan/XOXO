const boxes = document.querySelectorAll("[data-box]");
const xSymbol = "x-symbol";
const oSymbol = "o-symbol";
let currentPlayer;
let clickCount = [];
const winCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", handleClick, { once: true });
});

function handleClick(e) {
  const box = e.target;
  let className = currentPlayer ? oSymbol : xSymbol;
  currentMark(box, className);
  swapPlayer();
  if (winPlayer(className)) {
    alert(className + " wins");
    return;
  }
}

function currentMark(box, className) {
  box.classList.add(className);
}
function swapPlayer() {
  currentPlayer = !currentPlayer;
}
function winPlayer(className) {
  return winCondition.some((combination) => {
    return combination.every((i) => {
      return boxes[i].classList.contains(className);
    });
  });
}

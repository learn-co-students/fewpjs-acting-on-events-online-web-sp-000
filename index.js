// Your code here
const dodger = document.getElementById("dodger");
const game = document.getElementById("game");
const rightLimit = game.offsetWidth;
const dodgerSize = dodger.offsetWidth;

function moveDodgerLeft() {
  let left = parseInt(dodger.style.left.replace("px", ""), 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  let left = parseInt(dodger.style.left.replace("px", ""), 10);

  if (left < rightLimit - dodgerSize) {
    dodger.style.left = `${left + 1}px`;
  }
}

document.addEventListener("keydown", function(e){
  if (e.key === "ArrowLeft"){
    moveDodgerLeft();
  }else if (e.key == "ArrowRight"){
    moveDodgerRight();
  }
});

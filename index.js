// Your code here
let dodger = document.getElementById("dodger");
let game = document.getElementById("game");
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
  console.log(leftNumbers)
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(dodger.style.left);
  if (left < 361) {
    dodger.style.left = `${left + 1}px`;
  }
}
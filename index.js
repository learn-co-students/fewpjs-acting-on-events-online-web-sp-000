// Your code here
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
    moveDodgerLeft();
});

function moveDodgerRight() {
  let rightNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(rightNumbers, 10);

  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

// Your code here
let dodger = document.querySelector("#dodger");

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 2}px`;
  }
}

const moveDodgerRight = () => {
  let left = dodger.style.left.replace("px", "");
  let left_num = parseInt(left, 10);

  if (left_num < 360) {
    dodger.style.left = left_num + 2 + "px";
  }
};

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});

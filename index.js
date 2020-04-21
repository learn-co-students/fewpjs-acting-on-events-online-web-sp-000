// Your code here

const dodger = document.getElementById('dodger');
dodger.style.backgroundColor = "#FF69B4";

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace('px', '');
  let goLeft = parseInt(leftNumbers, 10)
  if (goLeft > 0) {
  }
    dodger.style.left = `${goLeft - 10}px`
}

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace('px', '');
  let goLeft = parseInt(leftNumbers, 10)
  if (goLeft > 0) {
    dodger.style.left = `${goLeft + 10}px`
  }
}

document.addEventListener('keydown', function(event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft()
  }
})

document.addEventListener('keydown', function(event) {
  if (event.key === "ArrowRight") {
    moveDodgerRight()
  }
})
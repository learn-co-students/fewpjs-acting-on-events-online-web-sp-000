// Your code here

let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";

let rock = document.getElementById('rock');
rock.style.backgroundColor = "#FFFFFF";

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10)
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10)
  if (left > 0) {
    dodger.style.left = `${left + 1}px`
  }
}

function moveDodgerUp() {
  var bottomNumbers = dodger.style.bottom.replace('px', '');
  var up = parseInt(bottomNumbers, 10)
  if (up >= 0) {
    dodger.style.bottom = `${up + 1}px`
  }
}

function moveDodgerDown() {
  var bottomNumbers = dodger.style.bottom.replace('px', '');
  var down = parseInt(bottomNumbers, 10)
  if (down >= 0) {
    dodger.style.bottom = `${down - 1}px`
  }
}


document.addEventListener('keydown', function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft()
  }
})

document.addEventListener('keydown', function(e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight()
  }
})

document.addEventListener('keydown', function(e) {
  if (e.key === "ArrowUp") {
    moveDodgerUp()
  }
})

document.addEventListener('keydown', function(e) {
  if (e.key === "ArrowDown") {
    moveDodgerDown()
  }
})

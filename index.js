// Your code here

let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";


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


//rock moving down 1px every 1/100th of a second
let rock = document.getElementById("rock");

function moveRockDown() {
  var bottomNumbers = rock.style.bottom.replace('px', '');
  var down = parseInt(bottomNumbers, 10)
  if (down >= 0) {
    rock.style.bottom = `${down - 1}px`
  }
}

function moveRockUp() {
  var bottomNumbers = rock.style.bottom.replace('px', '');
  var up = parseInt(bottomNumbers, 10)
  if (up >= 0) {
    rock.style.bottom = `${up + 1}px`
  }
}

function moveRockLeft() {
  var leftNumbers = rock.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10)
  if (left >= 0) {
    rock.style.left = `${left - 1}px`
  }
}

function moveRockRight() {
  var rightNumbers = rock.style.left.replace('px', '');
  var right = parseInt(rightNumbers, 10)
  if (right >= 0) {
    rock.style.left = `${right + 1}px`
  }
}

window.setInterval(function(){
  moveRockDown();
  moveRockLeft();
}, 10);

window.setInterval(function(){
  moveRockUp();
  moveRockRight();
}, 8);
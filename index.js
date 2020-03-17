// Your code here
let dodger = document.getElementById('dodger')
dodger.style.backgroundColor = '#27611C'
let gameBoard = document.getElementById('game')

function moveDodgerLeft(){
    let leftNumbers = dodger.style.left.replace('px', "");
    let left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 10}px`;
    }
}


document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
      }
});

function moveDodgerRight(){
    let leftNumbers = dodger.style.left.replace('px', "");
    let left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left + 10}px`;
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowRight") {
        moveDodgerRight();
      }
});

function moveDodgerUp() {
    let bottomNumbers = dodger.style.bottom.replace('px', '')
    let bottom = parseInt(bottomNumbers, 10)

    if (bottom < (gameBoard.clientHeight - dodger.clientHeight)) {
        dodger.style.bottom = `${bottom + 10}px`
    }

}

document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowUp") {
        moveDodgerUp();
      }
});

function moveDodgerDown() {
    let bottomNumbers = dodger.style.bottom.replace('px', '')
    let bottom = parseInt(bottomNumbers, 10)

    if (bottom > 0) {
        dodger.style.bottom = `${bottom - 10}px`
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowDown") {
        moveDodgerDown();
      }
});
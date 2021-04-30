// Your code here
let dodger = document.getElementById('dodger');
dodger.style.backgroundColor = '#FF69B4';
dodger.style.bottom = '10px'

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft()
    }
    if (e.key === "ArrowRight") {
        moveDodgerRight()
    }
});

function moveDodgerLeft() {
    moveDodger(-1)
}

function moveDodgerRight() {
    moveDodger(1)
}

function moveDodger(amt) {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    if (left > 0 && left < 360) {
        dodger.style.left = `${left + amt}px`;
    }
}
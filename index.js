// Your code here
const dodger = document.body.querySelector('#dodger');
function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    
    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    
    if (left < 400 - dodger.offsetWidth) {
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener('keydown', (e) => {
    console.log(e.key);
    if (e.key == "ArrowLeft") {
        moveDodgerLeft();
    } else if (e.key == "ArrowRight") {
        moveDodgerRight();
    }
});
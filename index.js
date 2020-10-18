// Your code here
let dodger = document.getElementById("dodger");

function moveDodger(key) {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0 && key === "ArrowLeft") {
      dodger.style.left = `${left - 1}px`;
    } else if (left < 360 && key === "ArrowRight") {
        dodger.style.left = `${left +1}px`;
    }
}

document.addEventListener("keydown", function(e) {
    moveDodger(e.key);
  });
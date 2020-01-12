// Your code here
let dodger = document.getElementById('dodger');

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

// If we catch a left arrow keydown, we move the
// dodger 1 pixel to the left. (We have to parse the pixels as integers and then
// convert them back to the pixel string.) Otherwise (if it's not a left arrow
// keydown), we do zilch.
 

document.addEventListener('keydown', function(e) {
  if (e.key ==='ArrowLeft') {moveDodgerLeft();
}
});


function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
 
  //// keep dodger within screen
  if (left > 0) {
    dodger.style.left = `${left + 1}px`;
  }
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowRight") {
      moveDodgerRight();
  }
});

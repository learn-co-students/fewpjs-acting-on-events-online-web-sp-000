// Your code here

// 1) defining and grabbing our dodger
let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#66ff66";

// 2) creating an event that moves our dodger to the left
// *remember we are parsing our px to integers and back to px*
// *we are also making sure that the dodger doesn't move out of the
//black box parameters*
function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

//3. adding eventListener to left arrow that moves our dodger left
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

//4. creating a moveDodgerRight function
function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if ( left <= 400-41) {
    dodger.style.left = `${left + 1}px`;
  }
  else {
    console.log("Hello")
  }
}


//5. Adding event listener for key right that moves our dodger right
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});

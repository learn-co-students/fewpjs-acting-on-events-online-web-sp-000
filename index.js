// Your code here

var dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left + 1}px`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

//right added below

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});

/*We have not yet implemented moving the dodger to the right. Can you do it? With the code implemented from the code along, think about what needs to change to make a 
moveDodgerRight() function. 

We'll need another e.key in the event listener, and instead of moving the dodger ${left - 1}px, we'll be moving it ${left + 1}px (or ${right - 1}px, if you prefer). To prevent the dodger from escaping off the right-hand side, you can make sure that dodger.style.right is always greater than 0px.*/

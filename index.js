// Your code here
let dodger = document.getElementById("dodger")
dodger.style.backgroundColor = "#FF69B4"

console.log(dodger.style.left) //returns 180px
console.log(dodger.style.bottom) //returns 0px
// The two lines above would be how we
// test to see the current coordinates of 
// the dodger elements' bottom left corner, (180, 0)
// this is relative to the container dodger is in

dodger.style.bottom = "100px";
dodger.style.bottom = "0px"
document.addEventListener("keydown", function(e){
    if (e.key == "ArrowLeft"){
        moveDodgerLeft();
    }
    else if (e.key == "ArrowRight"){
        moveDodgerRight();
    }
})

function moveDodgerLeft(){
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight(){
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
  if (left > 0) {
    dodger.style.left = `${left + 1}px`;
  }
}
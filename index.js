// Your code here

let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      let leftNumbers = dodger.style.left.replace("px", "");
      let left = parseInt(leftNumbers, 10);
   
      dodger.style.left = `${left - 1}px`;
    }
    if (e.key === "ArrowRight") {
        let rightNumbers = dodger.style.left.replace("px", "");
        let left = parseInt(rightNumbers, 10);
     
        dodger.style.left = `${left + 1}px`;
      }
  });

  // SOLUTION IS WRITTEN BELOW... Above Code is from the Lab

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    let rightNumbers = dodger.style.left.replace("px", "");
    let right = parseInt(rightNumbers, 10);
    if (right > 0) {
        dodger.style.left = `${right + 1}px`;
    }
}
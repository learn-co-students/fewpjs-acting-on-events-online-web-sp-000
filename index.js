/*
    document.addEventListener("keydown", function(e) {
      if (e.key === "ArrowLeft") {
          if the key undergoing keydown (keypress) is ArrowLeft

        let leftNumbers = dodger.style.left.replace("px", "");
            replaces the px in the dodger left margin/padding setting with "", i.e. deleting it
        let left = parseInt(leftNumbers, 10);
            turn leftnumbers into an integer in base 10. (the second part, turning it to base 10, is very important!)
     
        dodger.style.left = `${left - 1}px`;
            set doger style left to what it was minus one, i.e. you have moved it one to the left so you're reducing the left margin/padding by 1
      }
    });
*/

let dodger = getElementById("dodger");
// get the dodger HTML object

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

    if (left === 179) {
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
});

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});
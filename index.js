// Your code here

let dodger = document.getElementById("dodger");

// dodger.style.backgroundColor = "#000000";
// dodger.style.backgroundColor = "#FF69B4";
dodger.style.position ='absolute'
dodger.style.bottom = "0px";


document.addEventListener("keydown", function(e) {
    console.log(e.key);
});

// document.addEventListener("keydown", function(e) {
//     if (e.key === "ArrowLeft") {
//       let leftNumbers = dodger.style.left.replace("px", "");
//       let left = parseInt(leftNumbers, 10);
   
//       dodger.style.left = `${left - 1}px`;
//     }
//   });




function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }


  
}



function moveDodgerRight() {
    let rightNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(rightNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left + 1}px`;
    }
    
  }




document.addEventListener("keydown", function(e) {
    
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    else if(e.key === "ArrowRight"){
        moveDodgerRight()
      }

  });
  
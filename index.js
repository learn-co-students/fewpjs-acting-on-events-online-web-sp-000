// Your code here

let dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF69B4"





function moveDodgerLeft () {
  let leftNumbers = dodger.style.left.replace("px", "");
    
  // once leftNumber is assigned, convert the numerical string to integer
  let left = parseInt(leftNumbers, 10);
  
  // insert the new integer into the new style of the dodger box (minus) 1 pixel moving the object back to the left ie. 179 px from 180px
  dodger.style.left = `${left - 1}px`;
}


function moveDodgerRight () {
  let leftNumbers = dodger.style.left.replace("px", "");
    
  // once leftNumber is assigned, convert the numerical string to integer
  let left = parseInt(leftNumbers, 10);
  
  // insert the new integer into the new style of the dodger box (minus) 1 pixel moving the object to the right ie. 181 px from 180px
  dodger.style.left = `${left + 1}px`;
}
// this event listener moves the dodger to the  1px per keydown press

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    
    // assigns the actual number of Left Number into leftNumber first
    // the method .replace returns the new string => which in our case is "180"
    // "px" was removed "180px" --replace--> "180"
    
    let leftNumbers = dodger.style.left.replace("px", "");
    
    // once leftNumber is assigned, convert the numerical string to integer
    let left = parseInt(leftNumbers, 10);
    
    // insert the new integer into the new style of the dodger box (minus) 1 pixel moving the object back to the left ie. 179 px from 180px
    dodger.style.left = `${left - 1}px`;
  }
});


document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowRight") {
    
    // assigns the actual number of Left Number into leftNumber first
    // the method .replace returns the new string => which in our case is "180"
    // "px" was removed "180px" --replace--> "180"
    
    let leftNumbers = dodger.style.left.replace("px", "");
    
    // once leftNumber is assigned, convert the numerical string to integer
    let left = parseInt(leftNumbers, 10);
    
    // insert the new integer into the new style of the dodger box (minus) 1 pixel moving the object to the right ie. 181 px from 180px
    dodger.style.left = `${left + 1}px`;
  }
});


// document.addEventListener("keydown", function(e) {
//   if (e.key === "ArrowUp") {
    
//     // assigns the actual number of Left Number into leftNumber first
//     // the method .replace returns the new string => which in our case is "180"
//     // "px" was removed "0px" --replace--> "0"
    
//     let bottomNumbers = dodger.style.bottom.replace("px", "");
    
//     // once leftNumber is assigned, convert the numerical string to integer
//     let bottom = parseInt(bottomNumbers, 10);
    
//     // insert the new integer into the new style of the dodger box (minus) 1 pixel moving the object to the right ie. 181 px from 180px
//     dodger.style.bottom = `${bottom + 1}px`;
//   }
// });

// document.addEventListener("keydown", function(e) {
//   if (e.key === "ArrowDown") {
    
//     // assigns the actual number of Left Number into leftNumber first
//     // the method .replace returns the new string => which in our case is "180"
//     // "px" was removed "0px" --replace--> "0"
    
//     let bottomNumbers = dodger.style.bottom.replace("px", "");
    
//     // once leftNumber is assigned, convert the numerical string to integer
//     let bottom = parseInt(bottomNumbers, 10);
    
//     // insert the new integer into the new style of the dodger box (minus) 1 pixel moving the object to the right ie. 181 px from 180px
//     dodger.style.bottom = `${bottom + 1}px`;
//   }
// });
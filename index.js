// Your code here

    let dodger = document.getElementById("dodger");
    let game = document.getElementById("game");
    let game_styles = window.getComputedStyle(game);
    let dodger_styles = window.getComputedStyle(dodger);
   

function moveDodgerRight() {
   
    let game_width = parseInt(game_styles.width.replace("px", ""));
    let dodger_width = parseInt(dodger_styles.width.replace("px", ""));
    let left = parseInt(dodger.style.left.replace("px",""));
 
  console.log(game_styles)

  if (left < 360) {
     dodger.style.left = `${left+1}px`;
     console.log(dodger.style.left)
  }
}

function moveDodgerLeft(){
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }

}



document.addEventListener("keydown", function(e){
    if (e.key === "ArrowRight"){
        moveDodgerRight();
    }
    else if (e.key ==="ArrowLeft"){
        moveDodgerLeft();
    }
})



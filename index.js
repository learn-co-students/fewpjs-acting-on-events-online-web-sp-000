// Your code here
$('document').ready(function() {
  let dodger = document.querySelector('#dodger');
  dodger.style.backgroundColor = '#ff69b4';

  docuent.addEventListener('keydown', function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
});

function moveDodgerLeft() {
  let leftPosition = parseInt(dodger.style.left.replace('px', ''));
  if (leftPosition > 0) {
    dodger.style.left = `${leftPosition - 1}px`;
  }
}

function moveDodgerRight() {
  let leftPosition = parseInt(dodger.style.left.replace('px', ''));
  if (leftPosition < 360) {
    dodger.style.left = `${leftPosition + 1}px`;
  }
}

// Your code here
let dodger = document.getElementByID("dodger");

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

	if (left > 0) {
		dodger.style.left = `${left + 1}px`
	};
}
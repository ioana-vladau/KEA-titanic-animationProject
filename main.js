let backgroundMoving = document.querySelector("#bkgForMove");
let realBackground = document.querySelector("#real-bkg");

realBackground.addEventListener('click', backgroundMove);

function backgroundMove() {
    backgroundMoving.classList.add('bkgForMove');
}
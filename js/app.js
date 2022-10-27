//window.onload = () => {
//    let rightButton = document.querySelector(`.button-R`);
//    let container = document.querySelector(`.big-container`);
//    rightButton.addEventListener(`click`, () => {
//        container.style.right = parseInt(container.style.right) - 465 + 'px';
//    });
//};

let container = document.querySelector(`.big-container`);

window.addEventListener(`load`, () =>{
    container.style.position = `absolute`;
    container.style.right = 420;
});

window.addEventListener(`keyup`, (event) =>{
  switch (event.key) {
    case `ArrowRight`:
        container.style.right = parseInt(container.style.right) - 50 + `px`;
        break;
  }
});
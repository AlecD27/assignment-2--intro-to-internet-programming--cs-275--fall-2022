window.onload = () => {
    let rightButton = document.querySelector(`.button-R`);
    let container = document.querySelector(`.big-container`);
    rightButton.addEventListener(`click`, () => {
        container.style.right = parseInt(container.style.right) - 465 + 'px';
    });
};
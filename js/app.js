window.onload = () => {
    const leftButton = document.getElementById(`button-L`);
    const rightButton = document.getElementById(`button-R`);
    const parent = document.getElementsByClassName(`big-container`)[0];
    let width = 0;
    let index = 0;

    let checkSlide = () => {
        if (index > 0 && index < 3) {
            leftButton.classList.remove(`hidden`);
            rightButton.classList.remove(`hidden`);
        } else if (index === 0) {
            leftButton.classList.add(`hidden`);
        } else if (index === 3){
            rightButton.classList.add(`hidden`);
        }
    };

    rightButton.addEventListener(`click`, () => {
        width -= 465;
        parent.style.transform = `translate(`+width+`px)`;
        index += 1;
        checkSlide();
    });

    leftButton.addEventListener(`click`, () => {
        width += 465;
        parent.style.transform = `translate(`+width+`px)`;
        index -= 1;
        checkSlide();
    });

    document.addEventListener(`keydown`, (e) => {
        if (e.key === `ArrowRight` && !rightButton.classList.contains(`hidden`)) {
            rightButton.click();
        } else if (e.key === `ArrowLeft` && !leftButton.classList.contains(
            `hidden`)) {
            leftButton.click();
        }
    });
};
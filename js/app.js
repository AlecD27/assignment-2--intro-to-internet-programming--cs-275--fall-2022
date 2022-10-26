window.onload = () => {
    let main = document.querySelector(`main`);
    main.addEventListener(`click`, () => {
        main.style.width = `500px`;
        main.style.height = `500px`;
    });
};
"use strict";
const test = 'Qualquer String Tipada';
const button = document.querySelector('.teste3');
button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
    const title = document.querySelector('h1');
    if ((title === null || title === void 0 ? void 0 : title.className) === 'teste') {
        title.classList.remove('teste');
        title.classList.add('teste2');
        return;
    }
    if ((title === null || title === void 0 ? void 0 : title.className) === 'teste2') {
        title.classList.remove('teste2');
        return;
    }
    title === null || title === void 0 ? void 0 : title.classList.add('teste');
});

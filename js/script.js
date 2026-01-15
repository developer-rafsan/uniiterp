// header menu drop down menu open and close
const menuOpenBtn = document.querySelector('#menu-open-btn'),
    menuCloseBtn = document.querySelector('#menu-close-btn'),
    dropDownMenu = document.querySelector('#drop-down-menu');

menuOpenBtn.addEventListener('click', () => {
    dropDownMenu.classList.toggle('active');
})

menuCloseBtn.addEventListener('click', () => {
    dropDownMenu.classList.toggle('active');
})
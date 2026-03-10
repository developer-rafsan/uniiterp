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

// heder section
const header = document.querySelector('header'),
  logo = document.querySelector('.left-site img'),
  preLogoURL = logo.src;

window.addEventListener('scroll', () => {
  let scrollHeighr = window.scrollY,
    isScroll = 100;

  if (scrollHeighr >= isScroll) {
    header.classList.add('active');
  }
  else {
    header.classList.remove('active');
  }
})

// header menu
document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll("nav a, .drop-down-menu a").forEach(link => {
    const linkPath = link.getAttribute("href").split("/").pop();

    if (linkPath === currentPath) {
      link.classList.add("active");
    }
  });
});







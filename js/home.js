// home page infinite slider
const sliderWraperfirst = document.querySelector(".slider.first .slider-wraper");
const sliderWrapersecend = document.querySelector(".slider.secend .slider-wraper");

function createInfiniteSlider(sliderEl, speed) {

    if (!sliderEl) return;

    // clone slides once
    sliderEl.innerHTML += sliderEl.innerHTML;

    let position = 0;

    function animate() {
        position -= speed;

        if (Math.abs(position) >= sliderEl.scrollWidth / 2) {
            position = 0;
        }

        sliderEl.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animate);
    }

    animate();
}

// init sliders
createInfiniteSlider(sliderWraperfirst, 0.9);
createInfiniteSlider(sliderWrapersecend, 0.7);




// Member Reflections slider
const swiper = new Swiper(".swiper", {
    slidesPerView: 2,
    breakpoints: {
        0: { slidesPerView: 1 },
        600: { slidesPerView: 2 },
    },
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
});
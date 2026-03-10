// home page infinite slider
const sliderWraperfirst = document.querySelector(".slider.first .slider-wraper");
const sliderWrapersecend = document.querySelector(".slider.secend .slider-wraper");

function createInfiniteSlider(sliderEl, speed, direction) {
    if (!sliderEl) return;

    // Clone slides once
    sliderEl.innerHTML += sliderEl.innerHTML;

    let position = 0;

    // Direction control
    const moveSpeed = direction === 'left' ? speed : -speed;

    function animate() {
        position += moveSpeed;

        if (Math.abs(position) >= sliderEl.scrollWidth / 2) {
            position = 0;
        }

        sliderEl.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animate);
    }

    animate();
}

// init sliders
createInfiniteSlider(sliderWraperfirst, 0.9, 'left');  
createInfiniteSlider(sliderWrapersecend, 0.7, 'right'); 





// Member Reflections slider
const memberReflectionsSlider = new Swiper(".member-reflections-slider", {
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

// Member Reflections slider
const advanceSlider = new Swiper(".advance-slider", {
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: "3",
    autoplay: false,
    loop: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 4,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        // mobile
        300: {
            slidesPerView: 1.2,
            depth: 50,
        },

        // tablet
        700: {
            slidesPerView: 2.3,
            coverflowEffect: {
                depth: 150,
            },
        },

        // desktop
        900: {
            slidesPerView: 2.5,
            coverflowEffect: {
                depth: 150,
            },
        },

        // desktop
        1260: {
            slidesPerView: 2,
            coverflowEffect: {
                depth: 225,
            },
        },
    },
});
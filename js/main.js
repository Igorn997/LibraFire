const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  spaceBetween: 50,
  slidesPerView: 2,
  freeMode: true,
  speed: 500,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-right",
    prevEl: ".swiper-left",
  },

  breakpoints: {
    // iznad 640px
    640: {
      slidesPerView: 2.2,
      centeredSlides: true,

      slidesPerGroup: 1,
      freeMode: false,
    },
  },
});

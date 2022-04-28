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

var swiper2 = new Swiper(".swiper2", {
  /* Options */
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  speed: 500,
  centeredSlides: true,
  scrollContainer: false,
  wrapper: ".swiper-wrapper1",

  // breakpoints: {
  //   // iznad 640px
  //   640: {
  //     slidesPerView: 3,
  //     centeredSlides: true,

  //     slidesPerGroup: 1,
  //     freeMode: false,
  //   },
  // },
});

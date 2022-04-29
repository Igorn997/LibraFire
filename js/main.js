const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  spaceBetween: 30,
  slidesPerView: 2,
  freeMode: true,
  speed: 200,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-right2",
    prevEl: ".swiper-left2",
  },

  breakpoints: {
    // iznad 640px
    640: {
      slidesPerView: 3,
      centeredSlides: true,
      slidesPerGroup: 1,
      freeMode: false,
    },
  },
});

const swiper2 = new Swiper(".swiper-first", {
  /* Options */
  loop: true,
  spaceBetween: 20,
  slidesPerView: 2.2,
  // freeMode: true,
  speed: 500,
  centeredSlides: true,
  slidesPerGroup: 1,

  navigation: {
    nextEl: ".swiper-right",
    prevEl: ".swiper-left",
  },

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

const swiper3 = new Swiper(".swiper-hero", {
  loop: true,
  slidesPerView: 2,
  speed: 500,
  slidesPerGroup: 1,
});

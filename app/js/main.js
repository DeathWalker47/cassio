// $(function(){

// });

new Swiper(".slider-work", {
  loop: true,
  spaceBetween: 0,
  speed: 1000,
  slidesPerView: 4,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    formatFractionCurrent: function (number) {
      if (number < 100) {
        number = "0" + number;
      }
      if (number < 10) {
        number = "0" + number;
      }
      return number;
    },
    formatFractionTotal: function (number) {
      if (number < 100) {
        number = "0" + number;
      }
      if (number < 10) {
        number = "0" + number;
      }
      return number;
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

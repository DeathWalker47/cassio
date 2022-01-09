// $(function(){

// });

const btnMenu = document.querySelector(".burger-btn");
const headerMenu = document.querySelector(".heade-menu");
btnMenu.addEventListener("click", () => {
  btnMenu.classList.toggle("active");
  headerMenu.classList.toggle("active");
  document.querySelector('body').classList.toggle('hidden');
});

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

new Swiper(".slider-reviews", {
  loop: true,
  spaceBetween: 0,
  speed: 800,
  slidesPerView: 1,
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

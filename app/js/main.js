// $(function(){

// });

document.body.style.maxWidth =  document.body.scrollWidth + 'px'

const btnMenu = document.querySelector(".burger-btn");
const headerMenu = document.querySelector(".heade-menu");

const linkDropdown = document.querySelector(".menu__link--dropdown");
const menuList = document.querySelector(".menu__list");
const menuDropdown = document.querySelector(".menu__list--dropdown");
const linkBack = document.querySelector(".item-back__link");

btnMenu.addEventListener("click", () => {
  btnMenu.classList.toggle("active");
  headerMenu.classList.toggle("active");
  document.querySelector("body").classList.toggle("hidden");
  menuList.classList.remove("transform");
  menuDropdown.classList.remove("transform");
});

linkDropdown.addEventListener("click", () => {
  menuList.classList.add("transform");
  menuDropdown.classList.add("transform");
});

linkBack.addEventListener("click", () => {
  menuList.classList.remove("transform");
  menuDropdown.classList.remove("transform");
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

new Swiper(".platinum-slider", {
  loop: true,
  spaceBetween: 30,
  speed: 1000,
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

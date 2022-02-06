// Широина сайта,чтоб не было дерганья при открытии меню
document.body.style.maxWidth = document.body.scrollWidth + "px";

// Открытие меню
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

// Счетчик
const countNumberOne = document.querySelector(".about-info__num--one"),
  countNumberTwo = document.querySelector(".about-info__num--two"),
  countNumberThree = document.querySelector(".about-info__num--three"),
  countNumberFour = document.querySelector(".about-info__num--four");
function counter(ms) {
  let counter = 0;
  let interval1 = setInterval(() => {
    countNumberFour.textContent = "0" + ++counter;
    countNumberFour.textContent.length >= 3
      ? (countNumberFour.textContent = countNumberFour.textContent.slice(1))
      : false;
    counter === 06 ? clearInterval(interval1) : false;
  }, ms);
  let counter1 = 0;
  let interval2 = setInterval(() => {
    countNumberTwo.textContent = "0" + ++counter1;
    countNumberTwo.textContent.length >= 3
      ? (countNumberTwo.textContent = countNumberTwo.textContent.slice(1))
      : false;
    counter1 === 43 ? clearInterval(interval2) : false;
  }, ms);
  let counter2 = 0;
  let interval3 = setInterval(() => {
    countNumberThree.textContent = "0" + ++counter2;
    countNumberThree.textContent.length >= 3
      ? (countNumberThree.textContent = countNumberThree.textContent.slice(1))
      : false;
    counter2 === 12 ? clearInterval(interval3) : false;
  }, ms);
  let counter3 = 0;
  let interval4 = setInterval(() => {
    countNumberFour.textContent = "0" + ++counter3;
    countNumberFour.textContent.length >= 3
      ? (countNumberFour.textContent = countNumberFour.textContent.slice(1))
      : false;
    counter3 === 57 ? clearInterval(interval4) : false;
  }, ms);
}
if (document.querySelector(".about-info__num")) {
  counter(50);
}

// Слайдер
new Swiper(".slider-work", {
  loop: true,
  spaceBetween: 0,
  speed: 1000,
  slidesPerView: 1,
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    1720: {
      slidesPerView: 4,
    },
  },
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

// Изменение атрибута при наведении мыши
const linkHome = document.querySelector(".hom"),
  linkProj = document.querySelector(".proj"),
  linkPort = document.querySelector(".port"),
  linkAbout = document.querySelector(".abt"),
  linkContact = document.querySelector(".cont"),
  menuSumb = document.querySelector(".menu-sumbol");

const proSubmol = function () {
  menuSumb.setAttribute(
    "d",
    "M141.88 170.24V198.08C141.88 202.347 142.307 205.493 143.16 207.52C144.12 209.44 145.72 210.72 147.96 211.36C150.307 212 153.987 212.373 159 212.48V216C145.88 215.68 136.12 215.52 129.72 215.52C124.387 215.52 117.667 215.627 109.56 215.84L104.44 216V212.8C107.96 212.587 110.52 212.16 112.12 211.52C113.827 210.88 114.947 209.653 115.48 207.84C116.12 206.027 116.44 203.093 116.44 199.04V119.68C116.44 115.627 116.12 112.693 115.48 110.88C114.947 109.067 113.827 107.84 112.12 107.2C110.52 106.56 107.96 106.133 104.44 105.92V102.72C109.88 103.04 117.987 103.2 128.76 103.2L146.52 103.04C148.653 102.933 151.107 102.88 153.88 102.88C168.28 102.88 179.267 105.76 186.84 111.52C194.413 117.173 198.2 124.8 198.2 134.4C198.2 140.267 196.707 145.92 193.72 151.36C190.733 156.693 185.667 161.173 178.52 164.8C171.48 168.427 162.093 170.24 150.36 170.24H141.88ZM151.8 105.92C148.92 105.92 146.787 106.293 145.4 107.04C144.12 107.787 143.213 109.12 142.68 111.04C142.147 112.96 141.88 115.84 141.88 119.68V167.04H148.76C157.4 167.04 163.373 164.267 166.68 158.72C169.987 153.173 171.64 145.653 171.64 136.16C171.64 125.813 170.093 118.187 167 113.28C164.013 108.373 158.947 105.92 151.8 105.92Z"
  );
};

const homeSubmol = function () {
  menuSumb.setAttribute(
    "d",
    "M213.72 110.92C210.093 111.133 207.48 111.56 205.88 112.2C204.28 112.84 203.16 114.067 202.52 115.88C201.987 117.693 201.72 120.627 201.72 124.68V204.04C201.72 208.093 201.987 211.027 202.52 212.84C203.16 214.653 204.28 215.88 205.88 216.52C207.48 217.16 210.093 217.587 213.72 217.8V221C208.493 220.68 200.387 220.52 189.4 220.52C178.627 220.52 170.253 220.68 164.28 221V217.8C167.8 217.587 170.36 217.16 171.96 216.52C173.667 215.88 174.787 214.653 175.32 212.84C175.96 211.027 176.28 208.093 176.28 204.04V165.64H133.88V204.04C133.88 208.093 134.147 211.027 134.68 212.84C135.32 214.653 136.44 215.88 138.04 216.52C139.64 217.16 142.253 217.587 145.88 217.8V221C140.12 220.68 132.067 220.52 121.72 220.52C110.307 220.52 101.88 220.68 96.44 221V217.8C99.96 217.587 102.52 217.16 104.12 216.52C105.827 215.88 106.947 214.653 107.48 212.84C108.12 211.027 108.44 208.093 108.44 204.04V124.68C108.44 120.627 108.12 117.693 107.48 115.88C106.947 114.067 105.827 112.84 104.12 112.2C102.52 111.56 99.96 111.133 96.44 110.92V107.72C101.88 108.04 110.307 108.2 121.72 108.2C132.067 108.2 140.12 108.04 145.88 107.72V110.92C142.253 111.133 139.64 111.56 138.04 112.2C136.44 112.84 135.32 114.067 134.68 115.88C134.147 117.693 133.88 120.627 133.88 124.68V162.44H176.28V124.68C176.28 120.627 175.96 117.693 175.32 115.88C174.787 114.067 173.667 112.84 171.96 112.2C170.36 111.56 167.8 111.133 164.28 110.92V107.72C170.253 108.04 178.627 108.2 189.4 108.2C200.387 108.2 208.493 108.04 213.72 107.72V110.92Z"
  );
};

const aboutSumbol = function () {
  menuSumb.setAttribute(
    "d",
    "M157.88 102.4L196.76 202.56C198.253 206.4 199.907 209.067 201.72 210.56C203.64 211.947 205.347 212.693 206.84 212.8V216C203.64 215.787 199.853 215.68 195.48 215.68C191.213 215.573 186.893 215.52 182.52 215.52C177.613 215.52 172.973 215.573 168.6 215.68C164.227 215.68 160.76 215.787 158.2 216V212.8C163.64 212.587 167.053 211.68 168.44 210.08C169.933 208.373 169.613 204.8 167.48 199.36L140.28 124.96L143.16 120.8L118.84 184.16C116.493 190.027 115.053 194.827 114.52 198.56C114.093 202.293 114.36 205.173 115.32 207.2C116.387 209.227 118.04 210.667 120.28 211.52C122.627 212.267 125.4 212.693 128.6 212.8V216C125.08 215.787 121.72 215.68 118.52 215.68C115.32 215.573 112.067 215.52 108.76 215.52C106.413 215.52 104.173 215.573 102.04 215.68C100.013 215.68 98.2 215.787 96.6 216V212.8C98.84 212.373 101.133 210.933 103.48 208.48C105.827 206.027 108.12 201.867 110.36 196L146.84 102.4C148.547 102.507 150.36 102.56 152.28 102.56C154.307 102.56 156.173 102.507 157.88 102.4ZM169.08 169.92V173.12H121.4L123 169.92H169.08"
  );
};
const contactSumbol = function () {
  menuSumb.setAttribute(
    "d",
    "M162.52 100.48C169.56 100.48 175.32 101.547 179.8 103.68C184.387 105.707 188.44 108.107 191.96 110.88C194.093 112.48 195.693 112.693 196.76 111.52C197.933 110.24 198.733 107.307 199.16 102.72H202.84C202.627 106.88 202.467 111.947 202.36 117.92C202.253 123.787 202.2 131.627 202.2 141.44H198.52C197.987 136.533 197.293 132.373 196.44 128.96C195.587 125.44 194.413 122.347 192.92 119.68C191.427 117.013 189.293 114.613 186.52 112.48C183.853 109.813 180.76 107.84 177.24 106.56C173.72 105.28 170.04 104.64 166.2 104.64C160.44 104.64 155.533 106.187 151.48 109.28C147.427 112.267 144.12 116.373 141.56 121.6C139.107 126.827 137.293 132.747 136.12 139.36C134.947 145.867 134.36 152.64 134.36 159.68C134.36 166.827 134.947 173.707 136.12 180.32C137.4 186.827 139.32 192.64 141.88 197.76C144.547 202.88 147.96 206.933 152.12 209.92C156.28 212.907 161.187 214.4 166.84 214.4C170.36 214.4 173.88 213.76 177.4 212.48C181.027 211.093 184.12 209.12 186.68 206.56C190.84 203.36 193.667 199.413 195.16 194.72C196.653 189.92 197.773 183.573 198.52 175.68H202.2C202.2 185.813 202.253 194.027 202.36 200.32C202.467 206.507 202.627 211.733 202.84 216H199.16C198.733 211.413 197.987 208.533 196.92 207.36C195.96 206.187 194.307 206.347 191.96 207.84C188.013 210.613 183.8 213.067 179.32 215.2C174.947 217.227 169.293 218.24 162.36 218.24C151.053 218.24 141.133 215.947 132.6 211.36C124.173 206.773 117.613 200.16 112.92 191.52C108.227 182.88 105.88 172.48 105.88 160.32C105.88 148.373 108.28 137.92 113.08 128.96C117.987 120 124.653 113.013 133.08 108C141.613 102.987 151.427 100.48 162.52 100.48Z"
  );
};

linkHome.addEventListener("mouseover", homeSubmol);
linkProj.addEventListener("mouseover", proSubmol);
linkPort.addEventListener("mouseover", proSubmol);
linkAbout.addEventListener("mouseover", aboutSumbol);
linkContact.addEventListener("mouseover", contactSumbol);

// Подстраиваем цвет бкув в завасимости от соотв-го класса в хэдере
if (headerMenu.closest(".heade-menu--light")) {
  menuSumb.style.fill = "#181818";
} else if (headerMenu.closest(".heade-menu--blue")) {
  menuSumb.style.fill = "#c9bcae";
}

// Анимация
AOS.init({
  easing: "linear",
  disable: "mobile",
  duration: 600,
  // offset: 200,
});

// Подлкючение Яндекс карты
if (document.querySelector("#map") || document.querySelector("#map-page")) {
  function init() {
    let map = new ymaps.Map("map", {
      center: [38.89018275315561, -77.01825210825062],
      zoom: 16,
    });
    map.controls.remove("geolocationControl"); // удаляем геолокацию
    map.controls.remove("searchControl"); // удаляем поиск
    map.controls.remove("trafficControl"); // удаляем контроль трафика
    map.controls.remove("typeSelector"); // удаляем тип
    map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove("zoomControl"); // удаляем контрол зуммирования
    map.controls.remove("rulerControl"); // удаляем контрол прави
    map.behaviors.disable(["scrollZoom"]);
    let placemark = new ymaps.Placemark(
      [38.89018275315561, -77.01825210825062],
      {
        hintContent: "National Gallery of Art",
        balloonContent: `
      <div class="balloon">
      <p class="balloon__title">National Gallery of Art</p>
      <a href="https://www.nga.gov/" class="balloon__link">Official website</a>
      </div>
      `,
      },
      {
        iconLayout: "default#image",
        iconImageHref: "./images/icons/marker.svg",
        iconImageSize: [72, 72],
        iconImageOffset: [-110, -136],
      }
    );
    map.geoObjects.add(placemark);
  }
  ymaps.ready(init);
}

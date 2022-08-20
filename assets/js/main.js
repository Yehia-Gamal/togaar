let mega = document.getElementById("mega");
let menu = document.querySelector("nav ul #first");

menu.onclick = () => {
  mega.classList.toggle("active");
  menu.classList.toggle("is-active");
};

let burger = document.getElementById("burger");
let nav = document.querySelector("nav ul");

burger.onclick = () => {
  nav.classList.toggle("active");
  burger.classList.toggle("is-active");
  mega.classList.toggle("active");
};

window.onscroll = () => {
  burger.classList.remove("is-active");
  nav.classList.remove("active");
  mega.classList.remove("active");
};

let body = document.querySelector("section");

body.onclick = () => {
  burger.classList.remove("is-active");
  nav.classList.remove("active");
  mega.classList.remove("active");
};

// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

(function () {
  window.onresize = displayWindowSize;
  window.onload = displayWindowSize;

  function displayWindowSize() {
    let myWidth = window.innerWidth;

    if (myWidth <= 429) {
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
      });
    } else if (myWidth <= 500) {
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
      });
    } else if (myWidth <= 650) {
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
      });
    } else if (myWidth <= 900) {
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
      });
    } else if (myWidth >= 1000) {
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
      });
    }
  }
})();

let counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 3) {
    counter = 1;
  }
}, 3000);

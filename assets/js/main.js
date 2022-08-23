// let order = document.getElementById("data-order");
// let orderInof = document.querySelector(".person-info-data");

// order.onclick = () => {
//   orderInof.classList.toggle("active");
// };

let hert = document.getElementById("hert");

hert.onclick = () => {
  hert.classList.toggle("fa-solid");
  if (hert.style.color === "red") {
    hert.style.color = "#aaa";
  } else if (hert.style.color === "#aaa") {
    hert.style.color = "red";
  } else {
    hert.style.color = "red";
  }
};

let user = document.querySelector(".user-account");
let sidebar = document.querySelector(".sidebar-2");

user.onclick = () => {
  sidebar.classList.toggle("active");
};

let mega = document.getElementById("mega");
let menu = document.querySelector("nav .ul-perant #first");

menu.onclick = () => {
  mega.classList.toggle("active");
  menu.classList.toggle("is-active");
  sidebar.classList.remove("active");
};

let burger = document.getElementById("burger");
let nav = document.querySelector("nav .ul-perant");

burger.onclick = () => {
  nav.classList.remove("active");
  burger.classList.toggle("is-active");
  mega.classList.toggle("active");
};

window.onscroll = () => {
  burger.classList.remove("is-active");
  nav.classList.remove("active");
  mega.classList.remove("active");
  sidebar.classList.remove("active");
};

let body = document.querySelector("section");

body.onclick = () => {
  burger.classList.remove("is-active");
  nav.classList.remove("active");
  mega.classList.remove("active");
  sidebar.classList.remove("active");
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

// let hert = document.querySelector("#hert");

// hert.onclick = () => {
//   hert.classList.toggle("fa-solid");
//   if (hert.style.color === "red") {
//     hert.style.color = "#aaa";
//   } else if (hert.style.color === "#aaa") {
//     hert.style.color = "red";
//   } else {
//     hert.style.color = "red";
//   }
// };

let user = document.querySelector(".user-account");
let sidebar = document.querySelector(".sidebar-2");

user.onclick = () => {
  sidebar.classList.toggle("active");
  mega.classList.remove("active");
  burger.classList.remove("is-active");
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
  sidebar.classList.remove("active");

};

let body = document.querySelector("section");

body.onclick = () => {
  burger.classList.remove("is-active");
  nav.classList.remove("active");
  mega.classList.remove("active");
  sidebar.classList.remove("active");
};

let btnUp_2 = document.querySelector(".ul-peranr-and-user-welcome");
let headerNav_2 = document.querySelector("header nav");
let appNav_2 = document.querySelector("header .app");


window.onscroll = function () {
  if (window.scrollY >= 500) {
    btnUp_2.style.visibility = "hidden";
    appNav_2.style.visibility = "hidden";
    headerNav_2.style.height = "50px"
    appNav_2.style.height = "5px";
  } else {
    btnUp_2.style.visibility = "visible";
    appNav_2.style.visibility = "visible";
    headerNav_2.style.height = "100px"
    appNav_2.style.height = "50px";
  }
  mega.classList.remove("active");
  burger.classList.remove("is-active");
  nav.classList.remove("active");
  sidebar.classList.remove("active");
};


// window.onscroll = () => {
//   mega.classList.remove("active");
//   burger.classList.remove("is-active");
//   nav.classList.remove("active");
//   sidebar.classList.remove("active");
// };
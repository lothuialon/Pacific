'use strict';

const menuToggleButn = document.querySelector("[data-navbar-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

const elemToggleFunc = function (elem) {
  elem.classList.toggle("active");
}

menuToggleButn.addEventListener("click", function(){
  elemToggleFunc(navbar);
})

const goTopBtn = document.querySelector(["data-go-top"]);

window.addEventListener("scroll", function(){
  if (this.window.scrollY >= 800) {
    goTopBtn.classList.add("active");
  }
  else {
    goTopBtn.classList.remove("active");

  }
})
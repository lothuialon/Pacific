'use strict';

const menuToggleButn = document.querySelector("[data-navbar-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

const elemToggleFunc = function (elem) {
  elem.classList.toggle("active");
}

function submitFunction() {
  document.getElementById("form").submit();
}

function createFunction() {
//to do with backend since it requires to delete from it just show created info for now
  var x = document.getElementById("formdiv");
  var y = document.getElementById("information");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.display = "block";
  } else {
    y.style.display = "none";
    x.style.display = "block";
  }
}

function deleteFunction() {

//to do with backend since it requires to delete from it just show deleted info for now

var x = document.getElementById("formdiv");
var y = document.getElementById("information");
if (x.style.display === "block") {
  x.style.display = "none";
  y.style.display = "block";
} else {
  y.style.display = "none";
  x.style.display = "block";
}

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
}

)
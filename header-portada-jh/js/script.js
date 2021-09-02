window.onscroll = function () {
  scroll = document.documentElement.scrollTop;
  header = document.getElementById("header");
  if (scroll > 20) {
    header.classList.add("nav_mod");
  } else {
    header.classList.remove("nav_mod");
  }
};

document
  .getElementById("btn_menu")
  .addEventListener("click", mostrar_menu); /* btn_menu */
/* ¡ojo! id btn_menu con 1 solo guión bajo */

menu = document.getElementById("header");
body = document.getElementById("container_all"); /* container_all */
/* ¡ojo! id container_all con 1 solo guión bajo */
nav = document.getElementById("nav");

function mostrar_menu() {
  menu.classList.toggle("move_content");
  body.classList.toggle("move_content");
  nav.classList.toggle("move_nav");
}

window.addEventListener("resize", function () {
  if (window.innerWidth > 760) {
    menu.classList.remove("move_content");
    body.classList.remove("move_content");
    nav.classList.remove("move_nav");
  }
});

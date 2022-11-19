// navbar toggle
const bars = document.querySelector(".fa-bars");
const xmark = document.querySelector(".x-mark");
const nav = document.querySelector(".nav");

const showCloseMenu = () => {
  nav.classList.toggle("active");
};
const closeMenu = () => {
  if (screen.width >= 800) {
    nav.classList.remove("active");
  }
};
const close = () => {
  nav.classList.remove("active");
};
bars.addEventListener("click", showCloseMenu);
xmark.addEventListener("click", showCloseMenu);
nav.addEventListener("click", close);
addEventListener("resize", closeMenu);

const btnOpen = document.getElementById("btnOpen");
const btnClose = document.getElementById("btnClose");
const media = window.matchMedia("(width < 40em)");
const topNavMenu = document.querySelector(".topnav__menu");
const main = document.querySelector("main");

function setupTopNav(e) {
  if (e.matches) {
    // is mobile
    console.log("mobile");
    topNavMenu.setAttribute("inert", "");
    topNavMenu.style.transisition = "none";
  } else {
    console.log("desktop");
    topNavMenu.removeAttribute("inert");
    closeMobileMenu();
  }
}

function openMobileMenu() {
  btnOpen.setAttribute("aria-expanded", "true");
  topNavMenu.removeAttribute("inert");
  topNavMenu.removeAttribute("style");
  main.setAttribute("inert", "");
  btnClose.focus();
}

function closeMobileMenu() {
  btnOpen.setAttribute("aria-expanded", "false");
  topNavMenu.setAttribute("inert", "");
  main.removeAttribute("inert");
  btnOpen.focus();

  setTimeout(() => {
    topNavMenu.style.transition = "none";
  }, 500);
}

btnOpen.addEventListener("click", openMobileMenu);
btnClose.addEventListener("click", closeMobileMenu);
media.addEventListener("change", function (e) {
  setupTopNav(e);
});

setupTopNav(media);

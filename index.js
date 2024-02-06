const btnOpen = document.getElementById("btnOpen");
const btnClose = document.getElementById("btnClose");

btnOpen.addEventListener("click", () =>
  btnOpen.setAttribute("aria-expanded", "true")
);
btnClose.addEventListener("click", () =>
  btnOpen.setAttribute("aria-expanded", "false")
);

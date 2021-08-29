console.log("vietnam");
document.addEventListener("DOMContentLoaded", function () {
  const menuOpen = document.querySelector(".menu-toggle");
  const menuClose = document.querySelector(".menu-close");
  const menu = document.querySelector(".menu");
  if (!menuOpen || !menuClose || !menu) return;
  menuOpen.addEventListener("click", function () {
    menuClose.classList.add("is-active");
  });
  menuClose.addEventListener("click", function () {
    menuClose.classList.remove("is-active");
  });
});

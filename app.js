document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(`#mobile-menu`);
  const menulinks = document.querySelector(`.navbar__menu`);

  menu.addEventListener(`click`, function () {
    console.log("Menu clicked"); // Debugging
    menu.classList.toggle(`is-active`);
    menulinks.classList.toggle(`active`);
  });
});

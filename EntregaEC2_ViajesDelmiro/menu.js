const menu = document.querySelector("#menu-btn");
const ul = document.querySelector("#menu-ul");

menu.addEventListener("click", () => {
  ul.classList.toggle("open");
});

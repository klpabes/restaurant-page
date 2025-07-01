import "./styles.css";

console.log("Hello World");

const navButtons = document.querySelector("nav").querySelectorAll("button");

navButtons[0].classList.add("active");

navButtons.forEach((item) => {
  item.classList.add("nav-button");
  item.addEventListener("click", () => {
    navButtons.forEach((b) => b.classList.remove("active"));
    item.classList.add("active");
  });
});

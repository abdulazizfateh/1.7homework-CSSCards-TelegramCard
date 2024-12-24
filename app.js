const modeBtn = document.querySelector(".mode-btn");
const cardWrapper = document.querySelector(".card-wrapper");
const card = document.querySelector(".card");
const day = document.querySelector(".mode-btn-day-img");
const night = document.querySelector(".mode-btn-night-img");

modeBtn.addEventListener("click", () => {
    cardWrapper.classList.toggle("black-mode");
    card.classList.toggle("card-bg");
    night.classList.toggle("have");
    day.classList.toggle("none");
});
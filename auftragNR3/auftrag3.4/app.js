const countries = document.querySelectorAll(".country");
const destinations = document.querySelector("#destinations");
const chooseButton = document.querySelector("#choose");
let country;

function randomCountry() {
  const randomNumber = Math.floor(Math.random() * countries.length + 1);
  const randomCountry = document.querySelector(
    `#destinations li:nth-child(${randomNumber})`
  );
  return randomCountry;
}

function toggleClass(element) {
  element.classList.toggle("chosen");
}

chooseButton.addEventListener("click", () => {
  if (country != null) {
    toggleClass(country);
  }
  country = randomCountry();
  toggleClass(country);
});

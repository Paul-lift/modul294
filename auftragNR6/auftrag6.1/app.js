const header = document.querySelector("h1");
const form = document.getElementById("form");
const guessField = form.guessField;
const submit = form.submit;
const randomNumber = Math.floor(Math.random() * 100);

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

form.onsubmit = saveGuessedNumber;

function saveGuessedNumber() {
  let guessedNumber = guessField.value;
  console.log(guessedNumber);
  validateInput(guessedNumber)
}

function validateInput(number) {
  if (number < randomNumber) {
    header.innerText = "Zu Klein geraten";
  } else if (number > randomNumber) {
    header.innerText = "Zu Gross geraten";
  } else {
    header.innerText = "Richtig!";
  }
}

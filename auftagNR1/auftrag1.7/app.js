const number = Math.floor(Math.random() * 100);
let guess;

while (true) {
  guess = parseInt(prompt("Rate eine Zahl von 1 bis 100"));

  if (guess < number) {
    alert("zu tief geraten");
  } else if (guess > number) {
    alert("zu hoch geraten");
  } else {
    alert("Zahl erraten");
    break;
  }
}

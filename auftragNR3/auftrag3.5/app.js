let cups = Array.from(document.querySelectorAll(".cup"));
cups.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.classList.contains("opened")) return;

    if (element.classList.contains("rightCup")) {
      element.src = "cup-open-ball.png";
      element.classList.add("opened");

      alert("RICHTIG!");
    } else {
      element.src = "cup-open.png";
      element.classList.add("opened");

      alert("FALSCH!");
    }
  });
});

const shuffleButton = document.getElementById("shuffle");
shuffleButton.onclick = () => {
  reset();
  shuffle(cups);
  renderCups(cups);
};

function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  console.log(cups);
}

function renderCups(array) {
  const gameDiv = document.querySelector(".game");
  gameDiv.innerHTML = "";
  array.forEach((cup) => gameDiv.appendChild(cup));
}

function reset() {
  cups.forEach((element) => {
    element.src = "cup.png";
    element.classList.remove("opened");
  });
}

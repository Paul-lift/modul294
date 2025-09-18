const cantons = [
  "ag",
  "ai",
  "ar",
  "be",
  "bl",
  "bs",
  "fr",
  "ge",
  "gl",
  "gr",
  "ju",
  "lu",
  "ne",
  "nw",
  "ow",
  "sg",
  "sh",
  "so",
  "sz",
  "tg",
  "ti",
  "ur",
  "vd",
  "vs",
  "zg",
  "zh",
];

const gameDiv = document.querySelector(".game");
const solved = [];

function getCantonPath(canton) {
  return `img/${canton}.png`;
}

function createCard(canton) {
  const card = document.createElement("img");
  toggleCard(card);
  card.src = getCantonPath(canton);
  card.addEventListener("click", () => {
    toggleCard(card);
  });
  return card;
}

function toggleCard(card) {
  card.classList.toggle("hidden");
}

function renderGame(game) {
  const allCantons = [...cantons, ...cantons];
  shuffle(allCantons);

  allCantons.forEach((element) => {
    game.append(createCard(element));
  });
}

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
}

document.addEventListener("DOMContentLoaded", () => {
  renderGame(gameDiv);
});

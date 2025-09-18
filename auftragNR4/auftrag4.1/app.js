document.body.classList.add("goofy");

const quadrat = document.querySelector(".quadrat");

let angle = 0;
setInterval(() => {
  angle += 100; // Geschwindigkeit der Rotation
  quadrat.style.transform = `rotate(${angle}deg)`;
}, 30);

const canvas = document.getElementById("smiley");
const context = canvas.getContext("2d");

// Mittelpunkt bestimmen
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

// Kopf (Kreis)
context.beginPath();
context.arc(centerX, centerY, 50, 0, Math.PI * 2);
context.stroke();

// Augen zeichnen
context.beginPath();
context.arc(centerX - 20, centerY - 10, 5, 0, Math.PI * 2);
context.arc(centerX + 20, centerY - 10, 5, 0, Math.PI * 2);
context.fill();

// Mund zeichnen

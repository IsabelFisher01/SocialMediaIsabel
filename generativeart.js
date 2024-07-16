// Get the canvas element and context
const canvas = document.getElementById("artCanvas");
const ctx = canvas.getContext("2d");

// Define the number of circles to draw
const numberOfCircles = 50;// Function to get a random number between min and max
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Function to get a random color
function getRandomColor() {
  const r = getRandomInt(0, 256);
  const g = getRandomInt(0, 256);
  const b = getRandomInt(0, 256);
  return `rgb(${r},${g},${b})`;
}

// Fill the canvas with a white background
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Draw random circles
for (let i = 0; i < numberOfCircles; i++) {
  const x = getRandomInt(0, canvas.width);
  const y = getRandomInt(0, canvas.height);
  const radius = getRandomInt(20, 100);
  const color = getRandomColor();

  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}
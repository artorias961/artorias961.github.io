// get the canvas element and set its dimensions
const canvas = document.getElementById('background');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// get the canvas context
const ctx = canvas.getContext('2d');

// create an array of symbols to use as the background
const symbols = ['❤️', '💚', '💙', '💜', '🧡', '💛', '🖤'];

// set the initial angle and distance of each symbol
const numSymbols = 200;
const symbolsData = [];

for (let i = 0; i < numSymbols; i++) {
  symbolsData.push({
    symbol: symbols[Math.floor(Math.random() * symbols.length)],
    angle: Math.random() * 360,
    distance: Math.random() * 500, // increases the size of the circular motion
  });
}

function update() {
  // clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // update and draw each symbol
  for (const symbolData of symbolsData) {
    // update the angle of the symbol
    symbolData.angle += 0.5;

    // calculate the x and y positions of the symbol based on its angle and distance
    const x = canvas.width / 2 + Math.cos(symbolData.angle * Math.PI / 180) * symbolData.distance;
    const y = canvas.height / 2 + Math.sin(symbolData.angle * Math.PI / 180) * symbolData.distance;

    // draw the symbol
    ctx.font = '48px sans-serif';
    ctx.fillText(symbolData.symbol, x, y);
  }
}

// update the canvas every frame
setInterval(update, 1000 / 60);
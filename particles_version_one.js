// Set up the canvas element
var canvas = document.getElementById("particle-background");
var ctx = canvas.getContext("2d");

// Set the dimensions of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create an array to hold the particles
var particles = [];

// Create a function to generate a new particle
function createParticle() {
  // Generate a random position for the particle
  var x = Math.random() * canvas.width;
  var y = Math.random() * canvas.height;

  // Generate a random velocity for the particle
  var vx = Math.random() * 2 - 1;
  var vy = Math.random() * 2 - 1;

  // Generate a random color for the particle
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);

  // Create the particle and add it to the array
  particles.push({
    x: x,
    y: y,
    vx: vx,
    vy: vy,
    color: "rgb(" + r + "," + g + "," + b + ")",
  });
}

// Create a function to update the particles
function updateParticles() {
  // Loop through all the particles
  for (var i = 0; i < particles.length; i++) {
    var p = particles[i];

    // Update the position of the particle
    p.x += p.vx;
    p.y += p.vy;

    // Check if the particle is off the screen and wrap it around if it is
    if (p.x < 0) p.x = canvas.width;
    if (p.x > canvas.width) p.x = 0;
    if (p.y < 0) p.y = canvas.height;
    if (p.y > canvas.height) p.y = 0;
  }
}

// Create a function to draw the particles
function drawParticles() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Loop through all the particles
  for (var i = 0; i < particles.length; i++) {
    var p = particles[i];

    // Set the fill style to the color of the particle
    ctx.fillStyle = p.color;

    // Draw the particle on the screen
    ctx.beginPath();
    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2, false);
    ctx.fill();
  }
}

// Create a function to run the particle system
function run() {
  // Create a new particle
  createParticle();

  // Update the particles
  updateParticles();

  // Draw the particles
  drawParticles();

  // Run the particle system again on the next frame
  requestAnimationFrame(run);
}

// Start

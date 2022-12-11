// set up the canvas element
var canvas = document.getElementById("particle-background");
var ctx = canvas.getContext("2d");

// set the dimensions of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// create an array to hold the particles
var particles = [];

// create a constructor function for the particles
function Particle() {
  // set the initial position of the particle
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height;

  // set the initial velocity of the particle
  this.vx = Math.random() * 4 - 2;
  this.vy = Math.random() * 4 - 2;

  // set the radius of the particle
  this.radius = Math.random() * 3 + 1;

  // set a random color for the particle
  this.color = "rgba(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ",0.5)";
}

// add a method to the particle prototype to draw a particle on the canvas
Particle.prototype.draw = function() {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
  ctx.fillStyle = this.color;
  ctx.fill();
}

// add a method to the particle prototype to update the position of the particle
Particle.prototype.update = function() {
  // update the position of the particle
  this.x += this.vx;
  this.y += this.vy;

  // if the particle goes off the edge of the canvas, wrap it around to the other side
  if (this.x < 0) {
    this.x = canvas.width;
  }
  if (this.y < 0) {
    this.y = canvas.height;
  }
  if (this.x > canvas.width) {
    this.x = 0;
  }
  if (this.y > canvas.height) {
    this.y = 0;
  }
}

// create a function to generate the particles
function generateParticles() {
  // create a new particle and add it to the particles array
  particles.push(new Particle());

  // if the number of particles in the array exceeds the maximum, remove the oldest particle
  if (particles.length > 1000) {
    particles.shift();
  }
}

// create a function to draw the particles on the canvas
function drawParticles() {
  // clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // loop through the particles array and draw each particle on the canvas
  for (var i = 0; i < particles.length; i++) {
    particles[i].draw();
  }
}

// create
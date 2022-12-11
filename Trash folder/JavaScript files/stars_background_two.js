// set up the canvas element
var canvas = document.getElementById("stars-background");
var ctx = canvas.getContext("2d");

// set the dimensions of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// create an array to hold the stars
var stars = [];

// create a constructor function for the stars
function Star() {
  // set the initial position of the star
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height;

  // set the initial velocity of the star
  this.vx = Math.random() * 0.5 - 0.25;
  this.vy = Math.random() * 0.5 - 0.25;

  // set the radius of the star
  this.radius = Math.random() * 2 + 1;
}

// add a method to the star prototype to draw a star on the canvas
Star.prototype.draw = function() {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
  ctx.fillStyle = "white";
  ctx.fill();
}

// add a method to the star prototype to update the position of the star
Star.prototype.update = function() {
  // update the position of the star
  this.x += this.vx;
  this.y += this.vy;

  // if the star goes off the edge of the canvas, wrap it around to the other side
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

// create a function to generate the stars
function generateStars() {
  // create a new star and add it to the stars array
  stars.push(new Star());

  // if the number of stars in the array exceeds the maximum, remove the oldest star
  if (stars.length > 1000) {
    stars.shift();
  }
}

// create a function to draw the stars on the canvas
function drawStars() {
  // clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // loop through the stars array and draw each star on the canvas
  for (var i = 0; i < stars.length; i++) {
    stars[i].draw();
  }
}

// create a function to update and draw the stars
function animateStars() {
  // generate new stars
  generateStars();

  // draw the stars on the canvas
  drawStars();

  // request another animation frame
  requestAnimationFrame(animateStars);
}

// start the animation
animateStars();
// set up the canvas element
var canvas = document.getElementById("star-background");
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

  // set the size of the star
  this.radius = Math.random() * 2 + 1;

  // set a random color for the star
  this.color = "rgba(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ",0.5)";
}

// add a method to the star prototype to draw a star on the canvas
Star.prototype.draw = function() {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
  ctx.fillStyle = this.color;
  ctx.fill();
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

// create a function to update and draw the stars on the canvas
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
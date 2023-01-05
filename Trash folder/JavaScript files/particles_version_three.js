// Set up canvas
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// Set canvas dimensions to window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Set up more_content_particles
const particles = [];
const numberOfParticles = 50;

for (let i = 0; i < numberOfParticles; i++) {
  particles.push(new Particle());
}

// Set up animation loop
function animate() {
  requestAnimationFrame(animate);

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw and update more_content_particles
  particles.forEach((particle) => {
    particle.draw();
    particle.update();
  });
}

// Start animation
animate();

// Particle class
class Particle {
  constructor() {
    // Set up initial position, velocity, and acceleration
    this.pos = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
    };
    this.vel = {
      x: (Math.random() - 0.5) * 5,
      y: (Math.random() - 0.5) * 5,
    };
    this.acc = {
      x: 0,
      y: 0,
    };
  }

  // Draw particle on canvas
  draw() {
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, 10, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
  }

  // Update particle position
  update() {
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;

    // Change direction when particle hits the edge of the canvas
    if (this.pos.x > canvas.width || this.pos.x < 0) {
      this.vel.x = -this.vel.x;
    }
    if (this.pos.y > canvas.height || this.pos.y < 0) {
      this.vel.y = -this.vel.y;
    }
  }
}
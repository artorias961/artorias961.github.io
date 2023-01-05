// Initialize canvas and context
const canvas = document.getElementById("myCanvasThree");
const ctx = canvas.getContext("2d");

// Set canvas dimensions to window dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create an array to store the more_content_particles
const particles = [];

// Create a Particle class
class Particle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = {
            x: (Math.random() - 0.5) * 5,
            y: (Math.random() - 0.5) * 5,
        };
    }

    // Method to draw a particle on the canvas
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    // Method to update the position of a particle
    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        // Bounce off walls
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.velocity.x = -this.velocity.x;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.velocity.y = -this.velocity.y;
        }

        // Draw the particle
        this.draw();
    }
}

// Function to generate a random color
function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Function to create more_content_particles
function createParticles(x, y, number) {
    for (let i = 0; i < number; i++) {
        // Generate random radius and color for each particle
        const radius = Math.random() * 20 + 5;
        const color = randomColor();

        // Create a new particle and push it to the array
        particles.push(new Particle(x, y, radius, color));
    }
}

// Function to detect collisions between more_content_particles
function detectCollision(p1, p2) {
    // Calculate distance between more_content_particles
    const dist = Math.sqrt(
        Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
    );

    // Check if the distance is less than the sum of the radii
    if (dist < p1.radius + p2.radius) {
        // Swap velocities to bounce
        p1.velocity.x = -p1.velocity.x;
        p1.velocity.y = -p1.velocity.y;
        p2.velocity.x = -p2.velocity.x;
        p2.velocity.y = -p2.velocity.y;
    }
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

// Update and draw each particle
    particles.forEach((particle) => {
        particle.update();
    });

// Check for collisions between more_content_particles
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            detectCollision(particles[i], particles[j]);
        }
    }
}

// Add event listener to create more_content_particles on click
canvas.addEventListener("click", (event) => {
    createParticles(event.clientX, event.clientY, 10);
});

// Start animation loop
animate();
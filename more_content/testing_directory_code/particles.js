// Set up the canvas
var canvas = document.getElementById('myCanvasTwo');
var ctx = canvas.getContext('2d');

// Set up the particles
var particles = [];
for (var i = 0; i < 100; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        color: 'white',
        radius: Math.random() * 10 + 5,
        color: 'rgba(255, 255, 255, 0.5)',
        speedX: Math.random() * 5 - 2.5,
        speedY: Math.random() * 5 - 2.5
    });
}

// Draw the particles on the canvas
function draw() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the particles
    for (var i = 0; i < particles.length; i++) {
        var particle = particles[i];
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
    }
}

// Update the particles' positions
function update() {
    for (var i = 0; i < particles.length; i++) {
        var particle = particles[i];
        particle.x += Math.random() * 5 - 2.5;
        particle.y += Math.random() * 5 - 2.5;
    }
}

// Animate the particles
function animate() {
    update();
    draw();
    requestAnimationFrame(animate);
}

animate();
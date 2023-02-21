// Set up the canvas
var canvas = document.getElementById('myCanvasTwo');
var ctx = canvas.getContext('2d');

// Set up the stars
var stars = [];
for (var i = 0; i < 100; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        color: 'rgba(255, 255, 255, 0.5)',
        speed: Math.random() * 0.5 + 0.5
    });
}

// Draw the stars on the canvas
function draw() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the stars
    for (var i = 0; i < stars.length; i++) {
        var star = stars[i];
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.fill();
    }
}

// Update the stars' positions
function update() {
    for (var i = 0; i < stars.length; i++) {
        var star = stars[i];
        star.y -= star.speed;
        if (star.y < 0) {
            star.y = canvas.height;
        }
    }
}

// Animate the stars
function animate() {
    update();
    draw();
    requestAnimationFrame(animate);
}

animate();

// Change the canvas name on the html file
// change the javascript file name on the html file

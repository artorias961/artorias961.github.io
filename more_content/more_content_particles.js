//document.addEventListener('DOMContentLoaded', function(){
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  const more_content_particles = [];

  // Set the canvas dimensions to match the window size
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Create the more_content_particles
let total_particles = 150;

  for (let i = 0; i < total_particles; i++) {
    more_content_particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: Math.random() * 2 - 1,
      vy: Math.random() * 2 - 1,
      radius: Math.random() * 5 + 2,
      color: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.6)`// 0.6 is opacity level
    });
  }

  // Animate the more_content_particles
  function animate() {
    // I add this as well (the one line)
    const aspectRatio = canvas.width / canvas.height;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < more_content_particles.length; i++) {
      const p = more_content_particles[i];

      // I added this and wanted the partilce to be the same aspect ratio (the one line)
      //p.radius = p.radius * aspectRatio;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();

      // Draw the glowing outline
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius + 5, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      ctx.shadowBlur = 15;
      ctx.shadowColor = 'rgba(255, 255, 255, 0.2)';
      ctx.stroke();

      p.x += p.vx;
      p.y += p.vy;

      if (p.x > canvas.width + p.radius) p.x = -p.radius;
      if (p.x < -p.radius) p.x = canvas.width + p.radius;
      if (p.y > canvas.height + p.radius) p.y = -p.radius;
      if (p.y < -p.radius) p.y = canvas.height + p.radius;
    }

    requestAnimationFrame(animate);
  }


animate();
//});
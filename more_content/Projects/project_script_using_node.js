/*
* The npm packages I used is the following command line:
* npm i three jsdom canvas
*
*/

// Set up the scene
const THREE = require('three');
const { JSDOM } = require('jsdom');
const { window } = new JSDOM('');

global.window = window;
global.document = window.document;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, global.innerWidth / global.innerHeight, 0.1, 1000);

// Since we are using Node.js, we will need to use a different method to create the renderer
const canvas = global.document.createElement('canvas');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(canvas.innerWidth, canvas.innerHeight);

// Create the black hole
const blackHoleGeometry = new THREE.SphereGeometry(1, 32, 32);
const blackHoleMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
const blackHole = new THREE.Mesh(blackHoleGeometry, blackHoleMaterial);
scene.add(blackHole);

// Create the particles
const particleGeometry = new THREE.Geometry();
const particleMaterial = new THREE.PointsMaterial({ color: 0xffffff });
for (let i = 0; i < 1000; i++) {
  const particle = new THREE.Vector3(
    Math.random() * 10 - 5,
    Math.random() * 10 - 5,
    Math.random() * 10 - 5
  );
  particleGeometry.vertices.push(particle);
}
const particles = new THREE.Points(particleGeometry, particleMaterial);
scene.add(particles);

// Animate the particles
const animate = function () {
  requestAnimationFrame(animate);

  particles.geometry.vertices.forEach(function (vertex) {
    vertex.x -= 0.01;
    vertex.y -= 0.01;
    vertex.z -= 0.01;
  });
  particles.geometry.verticesNeedUpdate = true;

  renderer.render(scene, camera);
};

animate();
// Set up the scene
// import THREE from "../../three.js-master/build/three.module.js";
// import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.117.1/build/three.module.js';
 import * as THREE from 'three';
// import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.119.1/build/three.min.js';


// Since I am using a Node
// const THREE = require('three');

// var container = document.createElement('blackhole-container')
// document.body.appendChild(container)

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#blackhole-container')

});
renderer.setSize(window.innerWidth, window.innerHeight);

// Create the black hole
const blackHoleGeometry = new THREE.SphereGeometry(1, 32, 32);
const blackHoleMaterial = new THREE.MeshBasicMaterial({color: 0x000000});
const blackHole = new THREE.Mesh(blackHoleGeometry, blackHoleMaterial);
scene.add(blackHole);

// Create the particles
const particleGeometry = new THREE.Geometry();
const particleMaterial = new THREE.PointsMaterial({color: 0xffffff});
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
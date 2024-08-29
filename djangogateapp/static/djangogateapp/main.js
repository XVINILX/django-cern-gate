const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor("#444444", 1); // Set background color

const sceneBox = document.getElementById("scene-box");
sceneBox.appendChild(renderer.domElement);

// Create the plane
const planeGeometry = new THREE.PlaneGeometry(10, 10);
planeGeometry.rotateX(-Math.PI / 2); // Rotate 90 degrees to lay flat
const planeMaterial = new THREE.MeshBasicMaterial({ color: "#ffffff" });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane);

// Optional: Add light if using a material that needs it
const light = new THREE.PointLight(0xffffff);
light.position.set(10, 10, 10);
scene.add(light);

// Animation loop
const animate = () => {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
};

animate();

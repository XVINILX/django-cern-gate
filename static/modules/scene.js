export function createScene() {
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x000000, 2, 8);
  return scene;
}

export function createCamera() {
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );

  return camera;
}

export function createRenderer() {
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor("#000", 1); // Set background color
  return renderer;
}

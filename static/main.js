import { createScene, createCamera, createRenderer } from "./modules/scene.js";
import { createPlane } from "./modules/plane.js";
import { Cylinder } from "./modules/cylinder.js";
import { Box } from "./modules/box.js";

const scene = createScene();
const camera = createCamera();
const renderer = createRenderer();

document.getElementById("scene-box").appendChild(renderer.domElement);

const plane = createPlane();
scene.add(plane);

const cylinders = [];
let cylinderCounter = 0;

document.getElementById("add-cylinder").addEventListener("click", () => {
  const outerRadius = 1;
  const innerRadius = 0.8;

  const cylinder = new Cylinder(
    outerRadius,
    innerRadius,
    0,
    0,
    1,
    Math.PI / 2,
    0,
    0,
    cylinderCounter
  );
  scene.add(cylinder.getMesh());
  // scene.add(cylinder.getBox());
  cylinders.push(cylinder);

  cylinderCounter++;
});

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();

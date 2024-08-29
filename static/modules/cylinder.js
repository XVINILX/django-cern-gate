import { Box } from "./box.js";
import { Shape3D } from "./shape3d.js";

export class Cylinder extends Shape3D {
  constructor(
    outerRadius,
    innerRadius,
    x,
    y,
    z,
    rotationX,
    rotationY,
    rotationZ,
    index
  ) {
    super(x, y, z, rotationX, rotationY, rotationZ);
    this.outerRadius = outerRadius;
    this.innerRadius = innerRadius;
    this.height = z;
    this.radialSegments = 64;
    this.index = index;
    this.createCylinder();
    // this.createBox();
    this.createAccordionItem();
  }

  createCylinder() {
    const geometryLine = new THREE.BufferGeometry();
    const vertices = [];
    const indices = [];

    for (let i = 0; i <= this.radialSegments; i++) {
      const theta = (i / this.radialSegments) * Math.PI * 2;
      const cosTheta = Math.cos(theta);
      const sinTheta = Math.sin(theta);

      const xOuter = cosTheta * this.outerRadius;
      const zOuter = sinTheta * this.outerRadius;

      vertices.push(xOuter, this.height / 2, zOuter);
      vertices.push(xOuter, -this.height / 2, zOuter);

      const xInner = cosTheta * this.innerRadius;
      const zInner = sinTheta * this.innerRadius;

      vertices.push(xInner, this.height / 2, zInner);
      vertices.push(xInner, -this.height / 2, zInner);

      if (i < this.radialSegments) {
        const currentOuterTop = i * 4;
        const currentOuterBottom = i * 4 + 1;
        const nextOuterTop = (i + 1) * 4;
        const nextOuterBottom = (i + 1) * 4 + 1;

        const currentInnerTop = i * 4 + 2;
        const currentInnerBottom = i * 4 + 3;
        const nextInnerTop = (i + 1) * 4 + 2;
        const nextInnerBottom = (i + 1) * 4 + 3;

        indices.push(currentOuterTop, nextOuterTop);
        indices.push(currentOuterBottom, nextOuterBottom);

        indices.push(currentInnerTop, nextInnerTop);
        indices.push(currentInnerBottom, nextInnerBottom);
      }
    }

    geometryLine.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );

    geometryLine.setIndex(
      new THREE.BufferAttribute(new Uint16Array(indices), 1)
    );

    const materialLine = new THREE.LineBasicMaterial({ color: 0xffffff });

    this.wireframeCylinder = new THREE.LineSegments(geometryLine, materialLine);
    // this.wireframeCylinder.position(0, 0, 0);
  }

  createAccordionItem() {
    const listContainer = document.getElementById("accordionFlushExample");

    const accordionItem = document.createElement("div");
    accordionItem.classList.add("accordion-item");

    const header = document.createElement("h2");
    header.classList.add("accordion-header");

    const button = document.createElement("button");
    button.classList.add("accordion-button", "collapsed");
    button.setAttribute("type", "button");
    button.setAttribute("data-bs-toggle", "collapse");
    button.setAttribute("data-bs-target", `#flush-collapse${this.index}`);
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", `flush-collapse${this.index}`);
    button.textContent = `Cylinder #${this.index + 1}`;

    header.appendChild(button);

    const collapse = document.createElement("div");
    collapse.id = `flush-collapse${this.index}`;
    collapse.classList.add("accordion-collapse", "collapse");
    collapse.setAttribute("data-bs-parent", "#accordionFlushExample");

    const body = document.createElement("div");
    body.classList.add("accordion-body");

    const outerRadiusInput = document.createElement("input");
    outerRadiusInput.type = "number";
    outerRadiusInput.value = this.outerRadius;
    outerRadiusInput.addEventListener("change", (event) => {
      const newRadius = Number(event.target.value);
      console.log("update dimensions");
      this.updateDimensions(newRadius, this.innerRadius);
    });

    const innerRadiusInput = document.createElement("input");
    innerRadiusInput.type = "number";
    innerRadiusInput.value = this.innerRadius;
    innerRadiusInput.addEventListener("change", (event) => {
      const newRadius = Number(event.target.value);
      this.updateDimensions(this.outerRadius, newRadius);
      console.log("update dimensions");
    });

    body.appendChild(document.createTextNode("Outer Radius: "));
    body.appendChild(outerRadiusInput);
    body.appendChild(document.createElement("br"));
    body.appendChild(document.createTextNode("Inner Radius: "));
    body.appendChild(innerRadiusInput);
    this.createMenuInputs(body);

    collapse.appendChild(body);
    accordionItem.appendChild(header);
    accordionItem.appendChild(collapse);
    listContainer.appendChild(accordionItem);
  }

  updateDimensions(outerRadius, innerRadius) {
    this.outerRadius = outerRadius;
    this.innerRadius = innerRadius;

    this.createCylinder();
  }

  createBox() {
    const outerRadius = this.outerRadius;
    const innerRadius = this.innerRadius;

    this.box = new Box(
      outerRadius,
      innerRadius,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      this.index
    );
  }

  addChildButton(body) {
    const button = document.createElement("button");
    button.addEventListener("click", () => {
      const outerRadius = this.outerRadius;
      const innerRadius = this.innerRadius;

      const cylinder = new Box(
        outerRadius,
        innerRadius,
        1,
        1,
        1,
        1,
        1,
        0,
        0,
        0,
        cylinderCounter
      );

      scene.add(cylinder.getMesh());
      scene.add(cylinder.getBox());

      cylinderCounter++;
    });
  }

  getMesh() {
    return this.wireframeCylinder;
  }

  getBox() {
    return this.box.getMesh();
  }
}

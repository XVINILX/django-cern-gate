import { Shape3D } from "./shape3d.js";

export class Box extends Shape3D {
  constructor(
    outerRadius,
    innerRadius,
    width,
    height,
    depth,
    x,
    y,
    z,
    rotationX,
    rotationY,
    rotationZ
  ) {
    super(x, y, z, rotationX, rotationY, rotationZ);
    this.outerRadius = outerRadius;
    this.innerRadius = innerRadius;
    this.width = width;
    this.height = height;
    this.depth = depth;
    this.updateDimensions();
  }

  updateDimensions() {
    const width = this.outerRadius - this.innerRadius;
    this.boxGeometry = new THREE.BoxGeometry(width, this.height, width);
    this.boxMaterial = new THREE.MeshBasicMaterial({
      color: 0xff0000,
      wireframe: true,
    });
    this.boxMesh = new THREE.Mesh(this.boxGeometry, this.boxMaterial);
    this.boxMesh.position.set(0, this.height / 2, 0);
  }

  setDimensions(outerRadius, innerRadius) {
    this.outerRadius = outerRadius;
    this.innerRadius = innerRadius;
    this.updateDimensions();
  }

  getMesh() {
    return this.boxMesh;
  }
}

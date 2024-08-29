export class Shape3D {
  constructor(x, y, z, rotationX, rotationY, rotationZ) {
    this.position = { x, y, z };
    this.rotation = { rotationX, rotationY, rotationZ };
  }

  setPosition(x, y, z) {
    this.position.x = x;
    this.position.y = y;
    this.position.z = z;
  }

  setRotation(rotationX, rotationY, rotationZ) {
    this.rotation.rotationX = rotationX;
    this.rotation.rotationY = rotationY;
    this.rotation.rotationZ = rotationZ;
  }

  createMenuInputs(body) {
    console.log("menu inputs");
    const xPos = document.createElement("input");
    xPos.type = "number";
    xPos.value = this.outerRadius;
    xPos.addEventListener("change", (event) => {
      const outPut = Number(event.target.value);
      this.updateDimensions3D(outPut, this.position.x);
      console.log("menu inputs");
    });

    const yPos = document.createElement("input");
    yPos.type = "number";
    yPos.value = this.outerRadius;
    yPos.addEventListener("change", (event) => {
      const yPosOut = Number(event.target.value);
      this.updateDimensions3D(yPosOut, this.position.x);
      console.log("menu inputs");
    });

    const zPos = document.createElement("input");
    zPos.type = "number";
    zPos.value = this.outerRadius;
    zPos.addEventListener("change", (event) => {
      const zPosOut = Number(event.target.value);
      this.updateDimensions3D(zPosOut, this.position.x);
      console.log("menu inputs");
    });

    body.appendChild(document.createTextNode("X Pos: "));
    body.appendChild(xPos);
    body.appendChild(document.createElement("br"));
    body.appendChild(document.createTextNode("Y Pos: "));
    body.appendChild(yPos);

    body.appendChild(document.createElement("br"));
    body.appendChild(document.createTextNode("Z Pos: "));
    body.appendChild(zPos);
  }

  applyTransformations(object) {
    object.position.set(this.position.x, this.position.y, this.position.z);
    object.rotation.set(
      this.rotation.rotationX,
      this.rotation.rotationY,
      this.rotation.rotationZ
    );
  }
}

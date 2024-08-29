export function createPlane() {
  const geometry = new THREE.PlaneGeometry(10, 10);
  geometry.rotateX(30);
  const material = new THREE.MeshBasicMaterial({
    color: 0x0000ff,
    side: THREE.DoubleSide,
  });
  const plane = new THREE.Mesh(geometry, material);
  return plane;
}

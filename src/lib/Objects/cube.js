"use strict";

import * as THREE from "three";

export const createCube = () => {
	const geometry = new THREE.BoxGeometry(2, 2, 2);
	const material = new THREE.MeshPhysicalMaterial();
	return new THREE.Mesh(geometry, material);
};

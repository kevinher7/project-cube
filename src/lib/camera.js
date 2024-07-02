"use strict";

import * as THREE from "three";

let camera;

export const initCamera = () => {
	camera = new THREE.PerspectiveCamera(
		75,
		window.innerWidth / window.innerHeight,
		0.1,
		1000
	);

	camera.position.x = 15;
	camera.position.y = 15;
	camera.position.z = 15;
};

export const getCamera = () => {
	return camera;
};

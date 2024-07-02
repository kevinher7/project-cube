"use strict";

import * as THREE from "three";

let light;

export const initLight = () => {
	light = new THREE.DirectionalLight(0xff0000, 3);
	light.position.set(5, 15, 10);
	light.target.position.set(0, 0, 0);
};

export const getLight = () => {
	return light;
};

"use strict";

import * as THREE from "three";

let scene;

export const initScene = () => {
	scene = new THREE.Scene();

	return 0;
};

export const getScene = () => {
	return scene;
};

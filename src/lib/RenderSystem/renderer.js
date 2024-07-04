"use strict";

import * as THREE from "three";

import { getCamera } from "./camera";
import { getScene } from "./scene";
import { getLight } from "./lights";
import { getControls } from "./controls";

let renderer;

export const initRenderer = (canvasReader) => {
	renderer = new THREE.WebGLRenderer({
		canvas: canvasReader,
	});
	renderer.setSize(window.innerWidth, window.innerHeight);

	return 0;
};

export const getRenderer = () => {
	return renderer;
};

export const rendererStartAnimationLoop = () => {
	renderer.setAnimationLoop(animate);
};

const animate = () => {
	requestAnimationFrame(animate);
	const controls = getControls();
	const camera = getCamera();
	const scene = getScene();

	scene.add(getLight());

	if (controls) controls.update();
	if (renderer && scene && camera) {
		renderer.render(scene, camera);
	} else {
		console.error("Missing scene, camera, or renderer");
	}

	return 0;
};

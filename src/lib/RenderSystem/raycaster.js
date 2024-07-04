import * as THREE from "three";
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

export const getRaycaster = () => {
	return raycaster;
};

export const getPointer = () => {
	return pointer;
};

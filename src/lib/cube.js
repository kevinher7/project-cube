"use strict";

let isDragging = false;

let initial_x;
let initial_y;
let current_x;
let current_y;

let delta_x;
let delta_y;

export const handleMouseDown = (mouseDownEvent) => {
	initial_x = mouseDownEvent.x;
	initial_y = mouseDownEvent.y;
	isDragging = true;

	return 0;
};

export const handleMouseUp = () => {
	isDragging = false;

	return 0;
};

export const spinCube = (mousemoveEvent, cubeToDrag, dragSensitivityVal) => {
	if (isDragging) {
		current_x = mousemoveEvent.clientX;
		current_y = mousemoveEvent.clientY;

		delta_x = initial_x - current_x;
		delta_y = initial_y - current_y;

		cubeToDrag.rotation.y = -delta_x / dragSensitivityVal;
		cubeToDrag.rotation.x = -delta_y / dragSensitivityVal;
	}

	return 0;
};

"use strict";

import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { getCamera } from "./camera";
import { getRenderer } from "./renderer";

let controls;

export const initControls = () => {
	controls = new OrbitControls(getCamera(), getRenderer().domElement);

	return 0;
};

export const getControls = () => {
	return controls;
};

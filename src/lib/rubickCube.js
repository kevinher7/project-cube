"use strict";

import { createCube } from "./cube";

// My original idea was to store the cube meshes on an array
// and then modify them but maybe I should implement Raycasters

// let rubickCubeTiles = {};

// const createRubickCubeTiles = () => {
// 	// Can change the color for each tile later or smt
// 	for (let index = 1; index <= 26; index++) {
// 		rubickCubeTiles[`cube${index}`] = createCube();
// 	}
// };

export const createRubickCube = (sceneObj) => {
	let tmpCube;

	for (
		let columnXPosition = -2.1;
		columnXPosition <= 2.1;
		columnXPosition += 2.1
	) {
		for (
			let columnYPosition = -2.1;
			columnYPosition <= 2.1;
			columnYPosition += 2.1
		) {
			for (
				let columnZPosition = -2.1;
				columnZPosition <= 2.1;
				columnZPosition += 2.1
			) {
				tmpCube = createCube();
				tmpCube.position.set(
					columnXPosition,
					columnYPosition,
					columnZPosition
				);
				sceneObj.add(tmpCube);
			}
		}
	}
};

"use strict";

import { createCube } from "./cube";

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

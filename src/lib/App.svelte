<script>
	import { onMount } from "svelte";
	import { initControls } from "./controls";
	import { initCamera } from "./camera";
	import { initLight } from "./lights";
	import { getScene, initScene } from "./scene";
	import { initRenderer, rendererStartAnimationLoop } from "./renderer";
	import { createCube } from "./cube";
	import { createRubickCube } from "./rubickCube";
	let canvasRender;

	onMount(() => {
		initScene();
		initCamera();
		initLight();
		initRenderer(canvasRender);
		initControls();

		// const cube = createCube();
		// cube.position.set(5, 0, 0);
		createRubickCube(getScene());
		// getScene().add(cube);

		rendererStartAnimationLoop();
	});
</script>

<canvas bind:this={canvasRender}></canvas>

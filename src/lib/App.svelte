<script>
	import { onMount } from "svelte";
	import { initControls } from "./RenderSystem/controls";
	import { initCamera } from "./RenderSystem/camera";
	import { initLight } from "./RenderSystem/lights";
	import { getScene, initScene } from "./RenderSystem/scene";
	import {
		initRenderer,
		rendererStartAnimationLoop,
	} from "./RenderSystem/renderer";
	import { getRaycaster } from "./RenderSystem/raycaster";
	import { createRubickCube } from "./Objects/rubickCube";
	let canvasRender;

	onMount(() => {
		initScene();
		initCamera();
		initLight();
		initRenderer(canvasRender);
		initControls();

		createRubickCube(getScene());

		rendererStartAnimationLoop();
	});
</script>

<canvas bind:this={canvasRender}></canvas>

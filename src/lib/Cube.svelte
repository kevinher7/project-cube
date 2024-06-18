<script>
	import { handleMouseDown, spinCube, handleMouseUp } from "./cube.js";
	import { onMount } from "svelte";
	import * as THREE from "three";

	let cubeCanvas;
	let scene, camera, renderer, cube;

	const dragSensitivity = 300;

	onMount(() => {
		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);

		renderer = new THREE.WebGLRenderer({
			canvas: cubeCanvas,
		});
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setAnimationLoop(() => {
			renderer.render(scene, camera);
		});

		const geometry = new THREE.BoxGeometry(1, 1, 1);
		const material = new THREE.MeshBasicMaterial();
		cube = new THREE.Mesh(geometry, material);
		scene.add(cube);

		camera.position.z = 5;

		return 0;
	});

	const handleMouseMove = (mouseEvent) => {
		spinCube(mouseEvent, cube, dragSensitivity);
	};
</script>

<canvas
	bind:this={cubeCanvas}
	on:mousedown={handleMouseDown}
	on:mousemove={handleMouseMove}
	on:mouseup={handleMouseUp}
></canvas>

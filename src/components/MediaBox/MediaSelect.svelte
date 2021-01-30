<script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	
	export let selectPhotos;
	export let selectProjects;
	export let selectSocial;
	export let selectYouTube;

	let slideX = 345 / 3;
	let slideY = 127 / 3;
	let MediaSelectC;
	let Box1;	let Box2;	let Box3;	let Box4;
	onMount(() => {
		const tl = gsap.timeline();
		tl.from(MediaSelectC, {duration: 0.2, opacity: 0, delay: 0.15})
		  .from(Box1, {duration: 0.1, x: slideX, y: slideY,  opacity: 0})
		  .from(Box2, {duration: 0.13, x: -slideX, y: slideY,  opacity: 0})
		  .from(Box3, {duration: 0.16, x: slideX, y: -slideY, opacity: 0})
		  .from(Box4, {duration: 0.19, x: -slideX,y: -slideY, opacity: 0});
	});
</script>

<div class="MediaSelect" bind:this={MediaSelectC}>
	<div class="Box" bind:this={Box1} on:click={selectProjects}>
		<h2>Projects</h2>
	</div>
	<div class="Box" bind:this={Box2} on:click={selectPhotos}>
		<h2>Photos</h2>
	</div>
	<div class="Box" bind:this={Box3} on:click={selectSocial}>
		<h2>Social</h2>
	</div>
	<div class="Box" bind:this={Box4} on:click={selectYouTube}>
		<h2>Music</h2>
	</div>
</div>

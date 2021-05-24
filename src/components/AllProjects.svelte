<script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import Projects from '../data/Projects.js';

	let time = 0.075;
	let boxes = [];

	let Title;
	onMount(() => {
		const tl = gsap.timeline();
		tl.from(Title, {duration: 0.15, height:0, opacity: 0, delay: 0.2})
		  .from(boxes[0], {duration: time, opacity: 0})
		  .from(boxes[1], {duration: time, opacity: 0})
		  .from(boxes[2], {duration: time, opacity: 0})
		  .from(boxes[3], {duration: time, opacity: 0})
		  .from(boxes[4], {duration: time, opacity: 0})
		  .from(boxes[5], {duration: time, opacity: 0})
		  .from(boxes[6], {duration: time, opacity: 0})
		  .from(boxes[7], {duration: time, opacity: 0})
	});
</script>

<h2 bind:this={Title}>All Projects</h2>

{#each Projects as Project, _}
	<a href={Project.expand} bind:this={boxes[_]}>
		{Project.title}
	</a>
{/each}

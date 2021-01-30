<script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import Projects from '../../../data/Projects.js';
	export let goBack;

	let SelectProjectC;
	onMount(() => {
		const tl = gsap.timeline();
		tl.from(SelectProjectC, 
			{
				duration: 0.25, 
				opacity: 0, 
				x: -180, 
				y: -120, 
				ease: "sine.out", 
				scaleY: 0, 
				scaleX: 0.25
			}
		);
	});
</script>

<button on:click={goBack} class="Media QuickAccess"><p>&#128473</p></button>

<div class="SelectProject" bind:this={SelectProjectC}>

	{#each Projects as project}
		<a class="Box" href={project.link} target="_blank" rel="noopener noreferrer">
			<h3>{project.title}</h3>
			<p>{project.description}</p>
			<h5>{project.type}</h5>
		</a>
	{/each}
	
</div>


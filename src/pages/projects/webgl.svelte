<script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import SubHeader from '../../components/SubHeader.svelte';

	let title = "Web GL";
	let Blog1;
	onMount(() => {
		const tl = gsap.timeline();
		tl.from(Blog1, {duration: 0.35, opacity: 0, scaleY: 0, ease: "power4.in"})
	});
</script>

<SubHeader title={title} sections={null} />

<div class="ProjectC" bind:this={Blog1}>
	<div class="ProjectLinks">
		<a	href="https://github.com/teaguehannam/Javascript-Animation" target="_blank" rel="noopener">
			View Code
		</a>
		<a	href="https://ttjs.netlify.app/" target="_blank" rel="noopener">
			Launch
		</a>
	</div>
	<div class="Title">
		<a href="https://ttjs.netlify.app/" target="_blank" rel="noopener">Web GL</a>
		<h6>Updated: <span>10/03/2020</span></h6>
	</div>
	<div class="Article">
		<p>Animating 3D within the browser.</p>
		<div class="Tech">
			<a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank" rel="noopener">Javascript</a>
			<a href="https://threejs.org/" target="_blank" rel="noopener">Three.js</a>
		</div>
	</div>
</div>
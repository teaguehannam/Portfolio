<script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import SubHeader from '../../components/SubHeader.svelte';

	let title = "Rocketzon";
	let Blog1;
	onMount(() => {
		const tl = gsap.timeline();
		tl.from(Blog1, {duration: 0.35, opacity: 0, scaleY: 0, ease: "power4.in"})
	});
</script>

<SubHeader title={title} sections={null} />

<div class="ProjectC" bind:this={Blog1}>
	<div class="ProjectLinks">
		<a	href="https://github.com/teaguehannam/Rocket-Sales" target="_blank" rel="noopener">
			View Code
		</a>
		<a	href="https://rocket-sales.netlify.app/" target="_blank" rel="noopener">
			Launch
		</a>
	</div>
	<div class="Title">
		<a href="https://rocket-sales.netlify.app/" target="_blank" rel="noopener">Rocketzon</a>
		<h6>Last updated: <span>12/07/2020</span></h6>
	</div>
	<div class="Article">
		<p>Pick out a rocket, flight, and payload to launch it into orbit.</p>
		<p>This is a test project for animating in HTML canvas.</p>
		<div class="Design">
		</div>
		<div class="Tech">
			<h5>Tech Stack:</h5>
			<a href="https://en.wikipedia.org/wiki/React_(web_framework)" target="_blank" rel="noopener">React</a>
			<a href="https://en.wikipedia.org/wiki/Node.js" target="_blank" rel="noopener">Node</a>
			<a href="https://en.wikipedia.org/wiki/Redux_(JavaScript_library)" target="_blank" rel="noopener">Redux</a>
			<a href="https://en.wikipedia.org/wiki/Sass_(stylesheet_language)" target="_blank" rel="noopener">SASS</a>
		</div>
	</div>
</div>
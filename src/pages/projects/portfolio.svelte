<script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import SubHeader from '../../components/SubHeader.svelte';

	let title = "All my websites";
	let Blog1;
	onMount(() => {
		const tl = gsap.timeline();
		tl.from(Blog1, {duration: 0.25, opacity: 0, scaleY: 0, ease: "power4.in"})
	});
</script>

<SubHeader title={title} sections={null} />

<div class="ProjectC" bind:this={Blog1}>
	<div class="Title">
		<a href="../" >TeagueHannam.com</a>
		<h6>Last updated: <span>1/10/2021</span></h6>
	</div>
	<div class="Article">
		<p>Showcase of my website experience,</p>
		<p>and a point of contact for anyone.</p>
		<div class="Design">
			<p>Focused on being clean and lightweight.</p>
		</div>
		<div class="Tech">
			<h5>Tech Stack:</h5>
			<a href="https://svelte.dev/" target="_blank" rel="noopener">Svelte</a>
			<a href="https://en.wikipedia.org/wiki/Sass_(stylesheet_language)" target="_blank" rel="noopener">SASS</a>
			<a href="https://en.wikipedia.org/wiki/Node.js" target="_blank" rel="noopener">Node</a>
			<a href="https://rollupjs.org/guide/en/" target="_blank" rel="noopener">Rollup</a> 
		</div>
	</div>
</div>

	

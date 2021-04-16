<script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import SubHeader from '../../components/SubHeader.svelte';

	let title = "Nutrient Aware";
	let Blog1;
	onMount(() => {
		const tl = gsap.timeline();
		tl.from(Blog1, {duration: 0.35, opacity: 0, scaleY: 0, ease: "power4.in"})
	});
</script>

<SubHeader title={title} sections={null} />

<div class="ProjectC" bind:this={Blog1}>
	<div class="ProjectLinks">
		<a href="https://nutrientaware.netlify.app/">
			Launch site
		</a>
	</div>
	<div class="Title">
		<a href="./" >Nutrient Aware</a>
		<h6>Last updated: <span>1/27/2021</span></h6>
	</div>
	<div class="Article">
		<p>Keep track of eaten foods, get nutrient analytics</p>
		<p>
			Nutrient infomation through 
			<a href="https://fdc.nal.usda.gov/" target="_blank" rel="noopener">FoodData Central</a> API.
		</p>
		<div class="Design">
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
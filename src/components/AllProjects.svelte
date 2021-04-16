<script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';

	let time = 0.075;

	let Title;
	let Box1; let Box2; let Box3; let Box4; 
	let Box5; let Box6; let Box7;
	onMount(() => {
		const tl = gsap.timeline();
		tl.from(Title, {duration: 0.15, height:0, opacity: 0, delay: 0.2})
		  .from(Box1, {duration: time, opacity: 0})
		  .from(Box2, {duration: time, opacity: 0})
		  .from(Box3, {duration: time, opacity: 0})
		  .from(Box4, {duration: time, opacity: 0})
		  .from(Box5, {duration: time, opacity: 0})
		  .from(Box6, {duration: time, opacity: 0})
		  .from(Box7, {duration: time, opacity: 0})
	});
</script>

<h2 bind:this={Title}>All Projects</h2>
<a href="./projects/portfolio" bind:this={Box1}>
	Portfolio
</a>
<a href="./projects/rocketzon" bind:this={Box2}>
	Rocketzon
</a>
<a href="./projects/nutrient-aware" bind:this={Box3}>
	Nutrient Aware
</a>
<a href="./projects/nutritional-analytics_marketing" bind:this={Box4}>
	Marketing Page
</a>
<a href="./projects/kondoboard_api" bind:this={Box5}>
	Kondoboard
</a>
<a href="./projects/quotes_api" bind:this={Box6}>
	Quotes
</a>
<a href="./projects/webgl" bind:this={Box7}>
	WebGL Animation
</a>

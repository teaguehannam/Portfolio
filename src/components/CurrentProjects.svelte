<script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';

	let time = 0.05;
	let Title;
	let Box1; 
	let Box2;  

	onMount(() => {
		const tl = gsap.timeline();
		tl.from(Title, {duration: 0.15, height:0, opacity: 0, delay: 0.2})
		  .from(Box1, {duration: time, opacity: 0})
	});
</script>

<h2 bind:this={Title}>Currently being worked on</h2>
<a href="./projects/nutritional-analytics" bind:this={Box1}>
	Nutritional Analytics
</a>
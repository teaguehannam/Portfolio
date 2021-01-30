<script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	export let toggleRun;

	let InitDiv;
	let Text;
	onMount(() => {
		const tl = gsap.timeline();
		tl.from(InitDiv, {duration: 0.4, scaleY: 0, scaleX: 0, ease: "sine.out", delay: 0.8})
		  .from(Text, {duration: 0.2, scaleY: 0, scaleX: 0, opacity: 0});
	});
</script>

<style lang="scss">
	
</style>

<div class="Initialize" bind:this={InitDiv}>
	<button class="Wide QuickAccess" on:click={toggleRun}>
		<div bind:this={Text}>Quick Access</div>
	</button>
</div>
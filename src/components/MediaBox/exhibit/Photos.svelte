<script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	export let goBack;

	let PhotoC;

	onMount(() => {
		const tl = gsap.timeline();
		tl.from(PhotoC, {duration: 0.5, opacity: 0, ease: "power3.out", y: 40, x: 120, scaleX: 0});
	});
</script>

<style lang="scss">

	.PhotoC {
		

		h3{
			color: grey;
			font-size: 2rem;
			text-align: center;
		}
	}
</style>

<button on:click={goBack} class="Media QuickAccess"><p>&#128473</p></button>
<div class="PhotoC" bind:this={PhotoC}>
	<h3>Photo server not connected</h3>
</div>
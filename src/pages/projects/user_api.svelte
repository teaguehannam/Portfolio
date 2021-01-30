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
	<div class="Title">
		<a href="https://rocket-sales.netlify.app/" target="_blank" rel="noopener">User API</a>
		<h6>Not released</h6>
	</div>
	<div class="Article">
		<p>Centralized place to connect personal APIs.</p>
		<p>User owned data & file storage</p>
	</div>
</div>
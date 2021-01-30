<script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import SubHeader from '../../components/SubHeader.svelte';

	let title = "Marketing Page";
	let Blog1;
	onMount(() => {
		const tl = gsap.timeline();
		tl.from(Blog1, {duration: 0.35, opacity: 0, scaleY: 0, ease: "power4.in"})
	});
</script>

<SubHeader title={title} sections={null} />

<div class="ProjectC" bind:this={Blog1}>
	<div class="ProjectLinks">
		<a href="https://github.com/teaguehannam/Micro-Nutition-Landing-Page" rel="noopener">
			View Code
		</a>
		<a href="https://micronutrients.netlify.app/" target="_blank" rel="noopener">
			Launch
		</a>
	</div>
	<div class="Title">
		<a href="https://micronutrients.netlify.app/" target="_blank" rel="noopener">Marketing Page</a>
		<h6>Last updated: <span>9/23/2020</span></h6>
	</div>
	<div class="Article">
		<p>
			Landing page to funnel in users into
			<a href="./nutritional-analytics" target="_blank" rel="noopener">Nutritional Analytics</a>
		</p>
		<p>Email signup, light/dark mode, focus on accessibility.</p>
	</div>


</div>

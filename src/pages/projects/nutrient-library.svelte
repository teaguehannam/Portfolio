<script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import SubHeader from '../../components/SubHeader.svelte';

	let title = "Nutrient Library";
	let Blog1;
	onMount(() => {
		const tl = gsap.timeline();
		tl.from(Blog1, {duration: 0.35, opacity: 0, scaleY: 0, ease: "power4.in"})
	});
</script>

<SubHeader title={title} sections={null} />

<div class="ProjectC" bind:this={Blog1}>
	<div class="ProjectLinks">
		<a href="https://teaguehannam.info">
			Launch site
		</a>
	</div>
	<div class="Title">
		<a href="./" >{title}</a>
		<h6>Last updated: <span>5/24/2021</span></h6>
	</div>
	<div class="Article">
		<p>Consolidated research about nutrients on a molecular level</p>
		<p></p>
		<div class="Design">
		</div>
		<div class="Tech">
			<h5>Tech Stack:</h5>
			<a href="https://svelte.dev/" target="_blank" rel="noopener">Svelte</a>
			<a href="https://rollupjs.org/guide/en/" target="_blank" rel="noopener">Rollup</a> 
			<a href="https://en.wikipedia.org/wiki/Node.js" target="_blank" rel="noopener">Node</a>
			<a href="https://www.linode.com/" target="_blank" rel="noopener">Linode</a> 
			<a href="https://en.wikipedia.org/wiki/Sass_(stylesheet_language)" target="_blank" rel="noopener">SASS</a>
			<a href="https://www.postgresql.org/" target="_blank" rel="noopener">Postgres</a> 
		</div>
	</div>
</div>
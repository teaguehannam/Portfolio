<script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import SubHeader from '../../components/SubHeader.svelte';

	let title = "Quotes API";
	let Blog1;
	onMount(() => {
		const tl = gsap.timeline();
		tl.from(Blog1, {duration: 0.35, opacity: 0, scaleY: 0, ease: "power4.in"})
	});
</script>

<SubHeader title={title} sections={null} />

<div class="ProjectC" bind:this={Blog1}>
	<div class="ProjectLinks">
		<a	href="https://github.com/teaguehannam/Quotes-oAuth" target="_blank" rel="noopener">
			View Code
		</a>
		<a	href="https://quotes-db-api.herokuapp.com/" target="_blank" rel="noopener">
			Launch
		</a>
	</div>
	<div class="Title">
		<a href="https://quotes-db-api.herokuapp.com/" target="_blank" rel="noopener">Quotes API</a>
		<h6>Updated: <span>12/03/2020</span></h6>
	</div>
	<div class="Article">
		<p>Backend database for quotes, user sessions through Google OAuth.</p>
		<p>Includes a front end for managing the database.</p>
		<div class="Tech">
			<a href="https://expressjs.com/" target="_blank" rel="noopener">Express</a>
			<a href="https://handlebarsjs.com/" target="_blank" rel="noopener">Handlebars</a>
			<a href="https://en.wikipedia.org/wiki/Node.js" target="_blank" rel="noopener">Node</a>
			<a href="https://www.mongodb.com/" target="_blank" rel="noopener">MongoDB</a>
		</div>
	</div>
</div>
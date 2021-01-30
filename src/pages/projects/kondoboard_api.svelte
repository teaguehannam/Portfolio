<script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import SubHeader from '../../components/SubHeader.svelte';

	let title = "Kondoboard API";
	let Blog1;
	onMount(() => {
		const tl = gsap.timeline();
		tl.from(Blog1, {duration: 0.35, opacity: 0, scaleY: 0, ease: "power4.in"})
	});
</script>

<SubHeader title={title} sections={null} />

<div class="ProjectC" bind:this={Blog1}>
	<div class="ProjectLinks">
		<a	href="https://github.com/Lambda-School-Labs/kondoboard-backend/blob/master/README.md" target="_blank" rel="noopener">
			View Documentation
		</a>
	</div>
	<div class="Title">
		<a href="./" >Kondoboard</a>
		<h6>Completed: <span>06/25/2020</span></h6>
	</div>

	<div class="Article">
		<p>Users, jobs, and relationship tables for managing job listings.</p>
		<p>CRUD API, with automated endpoint testing.</p>
		<div class="Design">
		</div>
		<div class="Tech">
			<h5>Tech Stack:</h5>
			<a href="https://en.wikipedia.org/wiki/Node.js" target="_blank" rel="noopener">Node</a>
			<a href="https://expressjs.com/" target="_blank" rel="noopener">Express</a>
			<a href="http://knexjs.org/" target="_blank" rel="noopener">Knex</a>
			<a href="https://www.postgresql.org/" target="_blank" rel="noopener">Postgres</a>
			<a href="https://jwt.io/" target="_blank" rel="noopener">JWT</a>
			<a href="https://jestjs.io/" target="_blank" rel="noopener">Jest</a>
		</div>

	</div>

</div>

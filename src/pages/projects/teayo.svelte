<script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import SubHeader from '../../components/SubHeader.svelte';

	let title = "Teayo Music";
	let Blog1;
	onMount(() => {
		const tl = gsap.timeline();
		tl.from(Blog1, {duration: 0.25, opacity: 0, scaleY: 0, ease: "power4.in"})
	});
</script>

<SubHeader title={title} sections={null} />

<div class="ProjectC" bind:this={Blog1}>
	<div class="Title">
		<a href="./my_websites" >Teayo Music</a>
		<h6><span>Not released</span></h6>
	</div>
	<div class="Article">
		<p>A central location for my music,</p>
		<p>and a hub to see where it's released.</p>
		<div class="Design">
			<p>User interface inspired by Instagram.</p>
			<p>Focus on desktop/mobile audio player.</p>
		</div>
		<div class="Tech">
			<h5>Tech Stack:</h5>
			<a href="https://en.wikipedia.org/wiki/React_(web_framework)" target="_blank" rel="noopener">React</a>
			<a href="https://en.wikipedia.org/wiki/Sass_(stylesheet_language)" target="_blank" rel="noopener">SASS</a>
			<a href="https://en.wikipedia.org/wiki/Node.js" target="_blank" rel="noopener">Node</a>
		</div>
	</div>
</div>
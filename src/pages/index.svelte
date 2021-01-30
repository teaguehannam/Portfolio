<script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import FeaturedPreview from '../components/FeaturedPreview.svelte';
	import MediaBox from '../components/MediaBox/index.svelte';
	import Articles from '../data/FeaturedArticles.js';

	let date = Date.now();
	console.log(`
		           _______      
		|       |     |      |
		|       |     |      |
		|_______|     |      |   Welcome to
		|       |     |      |	  console.log
		|       |     |      |	 
		|       |  ___|___   .   #${date}
	`);

	let BannerC;
	let WebDev;
	let Design;
	let Ampersand;
	let ArticlesC;
	onMount(() => {
		const tl = gsap.timeline();
		tl.from(BannerC, {duration: 0.15, height:0})
		  .from(WebDev, {duration: 0.22, y: -80, ease: "power1.out", opacity: 0})
		  .from(Design, {duration: 0.22, y: -40, opacity: 0})
		  .from(Ampersand, {duration: 0.37, opacity: 0})
		  .from(ArticlesC, {duration: 0.4, y: 32, opacity: 0, ease: "power1.out"})
	});

</script>

<!-- V down here dev V -->

<div class="Intro">
	<div class="Banner" bind:this={BannerC}>
		<MediaBox />

		<div class="Text">
			<h1 bind:this={WebDev}>Website Developer</h1>
			<p bind:this={Ampersand}>&</p>
			<h1 bind:this={Design}>Experience Designer</h1>
		</div>
	</div>
</div>

<div class="Featured" bind:this={ArticlesC} >
	<FeaturedPreview article={Articles[0]} />
	<FeaturedPreview article={Articles[1]} />
	<FeaturedPreview article={Articles[2]} />
	<h3 class="Title">Featured Projects</h3>
</div>


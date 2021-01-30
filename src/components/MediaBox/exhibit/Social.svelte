<script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	export let goBack;

	let Github;
	let GitLab;
	let LinkedIn;
	let Contact;
	let SoundCloud;
	let YouTube;
	let Flickr;

	onMount(() => {
		const tl = gsap.timeline();
		tl.from(SoundCloud, {duration: 0.05, ease: "sine.inout", opacity: 0, delay: 0.1})
		  .from(LinkedIn, {duration: 0.05, ease: "sine.inout", opacity: 0})
		  .from(Github, {duration: 0.05, ease: "sine.inout", opacity: 0})
		  .from(GitLab, {duration: 0.05, ease: "sine.inout", opacity: 0})
		  .from(Flickr, {duration: 0.05, ease: "sine.inout", opacity: 0})
		  .from(YouTube, {duration: 0.05, ease: "sine.inout", opacity: 0})
		  .from(Contact, {duration: 0.15, ease: "sine.inout", opacity: 0})
	});
</script>

<button on:click={goBack} class="Media QuickAccess"><p>&#128473</p></button>
<div class="Social">
	<a class="GitHub" 
		href="https://github.com/teaguehannam" bind:this={Github}>
		<p>Github</p>
	</a>
	<a class="GitLab" 
		href="https://gitlab.com/teaguehannam" bind:this={GitLab}>
		<p>GitLab</p>
	</a>
	<a class="LinkedIn" 
		href="https://www.linkedin.com/in/teague-hannam-profile/" bind:this={LinkedIn}>
		<p>LinkedIn</p>
	</a>
	<a href="./contact" 
		class="Contact"bind:this={Contact}>
		<p>Contact</p>
	</a>
	<a class="Flickr" 
		href="https://www.flickr.com/photos/teayo/" bind:this={Flickr}>
		<p>Flickr</p>
	</a>
	<a class="SoundCloud" 
		href="https://soundcloud.com/teayo/" bind:this={SoundCloud}>
		<p>SoundCloud</p>
	</a>
	<a class="YouTube" 
		href="https://www.youtube.com/channel/UCZOwiWmYnooVVsVAYmewOhg" bind:this={YouTube}>
		<p>YouTube</p>
	</a>
</div>

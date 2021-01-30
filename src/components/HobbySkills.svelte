<script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';

	let HobbySection;
	onMount(() => {
		const tl = gsap.timeline();
		tl.from(HobbySection, 
			{
				duration: 0.15, 
				opacity: 0,
				delay: 0.075
			}
		  );
	});

</script>

<div class="SkillsC" bind:this={HobbySection}>
	<div class="Learning Hobby">
		<h3>Learning</h3>
		<a href="https://www.adobe.com/products/aftereffects.html" target="_blank" rel="noopener">
			After Effects
		</a>
		<a href="https://en.wikipedia.org/wiki/Blender_(software)" target="_blank" rel="noopener">
			Blender
		</a>
		<a href="https://en.wikipedia.org/wiki/Traktor" target="_blank" rel="noopener">
			Traktor
		</a>
	</div>
	<div class="Experienced Hobby">
		<h3>1-2 Years</h3>
		<a href="https://www.adobe.com/products/premiere.html" target="_blank" rel="noopener">
			Premiere Pro
		</a>
		<a href="https://en.wikipedia.org/wiki/Adobe_Photoshop" target="_blank" rel="noopener">
			Photoshop
		</a>
		<a href="https://en.wikipedia.org/wiki/Unity_(game_engine)" target="_blank" rel="noopener">
			Unity with C#
		</a>
	</div>
	<div class="HighlyExperienced Hobby">
		<h3>6+ Years</h3>
		<a href="https://en.wikipedia.org/wiki/Digital_audio_workstation" target="_blank" rel="noopener">
			Audio Production
		</a>
		<a href="https://en.wikipedia.org/wiki/Photography" target="_blank" rel="noopener">
			Photography
		</a>
		<a href="https://en.wikipedia.org/wiki/Paint.net" target="_blank" rel="noopener">
			Paint.net
		</a>
	</div>
</div>
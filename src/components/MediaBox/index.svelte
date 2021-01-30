<script>
	import Initialize from './Initialize.svelte';
	import MediaSelect from './MediaSelect.svelte';
	import Projects from './exhibit/Projects.svelte';
	import Photos from './exhibit/Photos.svelte';
	import Social from './exhibit/Social.svelte';
	import YouTubePlayer from './exhibit/YouTube.svelte';

	let running;
	let current;
	const selectProjects = () => current = "Projects";
	const selectPhotos = () => current = "Photos";
	const selectSocial = () => current = "Social";
	const selectYouTube = () => current = "YouTube";
	const toggleRun = () => running = !running;
	const goBack = () => current = "";

</script>

{#if !running}
	<Initialize toggleRun={toggleRun} />
{:else}
	{#if !current}
		<MediaSelect
			selectYouTube={selectYouTube} selectPhotos={selectPhotos}
			selectSocial={selectSocial} selectProjects={selectProjects} />
	{:else}
		{#if current === "Projects"} <Projects goBack={goBack} /> {/if}
		{#if current === "Photos"} <Photos goBack={goBack} /> {/if}
		{#if current === "Social"} <Social goBack={goBack} /> {/if}
		{#if current === "YouTube"} <YouTubePlayer goBack={goBack} /> {/if}
	{/if}
{/if}

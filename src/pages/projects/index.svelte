<script>
	import SubHeader from '../../components/SubHeader.svelte';
	import AllProjects from '../../components/AllProjects.svelte';
	import CurrentProjects from '../../components/CurrentProjects.svelte';

	let title = "All Projects";
	let ShowComplete = true;
	
	const toggleAll = () => {
		ShowComplete = true;
		title = "All Projects";
	}

	const toggleCurrent = () => {
		ShowComplete = false;
		title = "In progress";
	}

	const sections = [
		[toggleAll, "All"], 
		[toggleCurrent, "In progress"],
		[null, "Null"]
	];
</script>

<SubHeader title={title} sections={sections} />

<div class="ProjectsIndex">
	{#if ShowComplete}
		<AllProjects />
	{:else}
		<CurrentProjects />
	{/if}
</div>

<script>
	import SubHeader from '../../components/SubHeader.svelte';
	import AllProjects from '../../components/AllProjects.svelte';
	import CurrentProjects from '../../components/CurrentProjects.svelte';

	let title = "All Projects";
	let ShowAll = true;
	
	function toggleAll() {
		ShowAll = true;
		title = "All Projects";
	}

	function toggleCurrent() {
		ShowAll = false;
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
	{#if ShowAll}
		<AllProjects />
	{:else}
		<CurrentProjects />
	{/if}
</div>

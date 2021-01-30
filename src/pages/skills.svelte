<script>
	import SubHeader from '../components/SubHeader.svelte';
	import ProfessionalSkills from '../components/ProfessionalSkills.svelte';
	import HobbySkills from '../components/HobbySkills.svelte';

	let ShowProfessional = true;
	let title = "Professional Skills";

	const toggleProfessional = () => {
		ShowProfessional = true;
		title = "Professional Skills";
	}

	const toggleHobby = () => {
		ShowProfessional = false;
		title = "Hobby Skills";
	}

	const sections = [
		[toggleProfessional, "Professional"], 
		[toggleHobby, "Hobby"],
		[null, "Null"]
	];

</script>

<SubHeader title={title} sections={sections} />
	{#if ShowProfessional}
		<ProfessionalSkills />
	{:else}
		<HobbySkills />
	{/if}


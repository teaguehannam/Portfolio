<script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	export let goBack;

	let VideoSelect;
	let currentVideo = "https://www.youtube.com/embed/";

	const Videos = [
		{id: "CQBV6cxeI40?start=25", title:"Tachami", location: "Florida, USA"},
		{id: "q-ktd4nEi3w?start=140", title:"Lost Frequencies", location: "Royal Palace, Brussels"},
		{id: "pfU0QORkRpY", title:"FKJ", location: "Ylang Ylang"},
		{id: "n_LcVqqHSY8?start=15", title:"Lane 8", location: "Colorado, USA"},
		{id: "pA96m95T3NA", title:"Parra for Cuva", location: "Cañon del Sumidero, Mexico"},
		{id: "crZfT5qnFdA?start=146", title:"Disclosure", location: "Plitvice Lake, Croatia"},
		{id: "F2MLl8tEqYQ", title:"Møme", location: "Tahiti, French Polynesia"},
		{id: "hENgrbIMiy4", title:"Artbat", location: "Rio de Janeiro, Brazil"},
		{id: "cVFzblT5VPE", title:"Einmusik & Jonas Saalbach", location: "Preikestolen, Norway"},
		{id: "h96MGcsi7GQ?start=30", title:"Lee Burridge", location: "Bali, Indonesia"},
	];
 
	onMount(() => {
		const tl = gsap.timeline();
		tl.from(
			VideoSelect, 
			{
				duration: 0.25, 
				opacity: 0, 
				x: 200, 
				scaleX: 0, 
				y: 120, 
				ease: "power1.out", 
				scaleY: 0
			}
		);
	});
</script>

{#if currentVideo != "https://www.youtube.com/embed/"}
	<button on:click={goBack} class="Media Extend QuickAccess"><p>Exit</p></button>
	<div class="Video">
		<iframe src={currentVideo} frameborder="0" allowfullscreen title="DJ Mix">
		</iframe>
	</div>
{:else}
	<button on:click={goBack} class="Media QuickAccess"><p>&#128473</p></button>
	<div class="SelectVideo" bind:this={VideoSelect}>
		{#each Videos as video}
			<div class="Box" on:click={() => currentVideo += video.id} >
				<h3>{video.title}</h3>
				<h5>{video.location}</h5>
			</div>
		{/each}
	</div>
{/if}

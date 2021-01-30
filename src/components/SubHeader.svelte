<script>
	import { onMount } from 'svelte';
	// import { url, isActive } from '@sveltech/routify';
	import gsap from 'gsap';

	export let title;
	export let sections;

	let SubHead;
	let AnimationSpacer;
	onMount(() => {
		const tl = gsap.timeline();
		tl.from(SubHead, {duration: 0.4, ease: "bounce.out", height: 0})
		  .from(AnimationSpacer, {duration: 0.4, ease: "bounce.out", height: 30, delay: -0.4});
	});
</script>

<div class="SubHeader" bind:this={SubHead}>
	<div class="Contain">
		<h3>{title}</h3>
		<div class="SubNav">
			{#if sections}
				{#each sections as [route, section]}
					{#if section === "Null"}
						<div />
					{:else}
						<p on:click={route} >{section}</p>
					{/if}
				{/each}
			{/if}
		</div>
	</div>
</div>

<div class="AnimationSpacer" bind:this={AnimationSpacer} />
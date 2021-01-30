<script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';

	let ProfessionalSection;
	onMount(() => {
		const tl = gsap.timeline();
		tl.from(ProfessionalSection, {duration: 0.15, opacity: 0, delay: 0.1});
	});

</script>

<div class="SkillsC" bind:this={ProfessionalSection}>
	<div class="Learning">
		<h3>Learning</h3>
		<a href="https://en.wikipedia.org/wiki/TypeScript" target="_blank" rel="noopener">
			TypeScript
		</a>
		<a href="https://svelte.dev/" target="_blank" rel="noopener">
			Svelte
		</a>
		<a href="https://docs.soliditylang.org/en/v0.7.5/" target="_blank" rel="noopener">
			Solidity
		</a>
		<a href="https://greensock.com/gsap/" target="_blank" rel="noopener">
			GSAP
		</a>
		<a href="https://en.wikipedia.org/wiki/WebAssembly" target="_blank" rel="noopener">
			WASM
		</a>
		<a href="https://en.wikipedia.org/wiki/WebGL" target="_blank" rel="noopener">
			WebGL
		</a>
	</div>
	<div class="Experienced">
		<h3>1-3 Years</h3>
		<a href="https://en.wikipedia.org/wiki/React_(web_framework)" target="_blank" rel="noopener">
			React
		</a>
		<a href="https://redux.js.org/" target="_blank" rel="noopener">
			Redux
		</a>
		<a href="https://en.wikipedia.org/wiki/Sass_(stylesheet_language)" target="_blank" rel="noopener">
			SASS
		</a>
		<a href="https://en.wikipedia.org/wiki/Node.js" target="_blank" rel="noopener">
			Node
		</a>
		<a href="https://en.wikipedia.org/wiki/Python_(programming_language)" target="_blank" rel="noopener">
			Python
		</a>
		<a href="https://en.wikipedia.org/wiki/PHP" target="_blank" rel="noopener">
			PHP
		</a>
	</div>
	<div class="HighlyExperienced">
		<h3>3+ Years</h3>
		<a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank" rel="noopener">
			JavaScript
		</a>
		<a href="https://en.wikipedia.org/wiki/HTML" target="_blank" rel="noopener">
			HTML
		</a>
		<a href="https://en.wikipedia.org/wiki/CSS" target="_blank" rel="noopener">
			CSS
		</a>
		<a href="https://en.wikipedia.org/wiki/SQL" target="_blank" rel="noopener">
			SQL
		</a>
		<a href="https://en.wikipedia.org/wiki/Linux" target="_blank" rel="noopener">
			Linux
		</a>
		<a href="https://git-scm.com/" target="_blank" rel="noopener">
			Git
		</a>
	</div>
</div>
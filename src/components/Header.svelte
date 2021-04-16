<script>
	import { url, isActive } from '@sveltech/routify';

	const links = [
		["./projects", "Projects"],
		["./contact", "Contact"],
	];
</script>

<div class="Header">

	<div class="Contain">
		<div class="Logo">
			<a href="/">Teague Hannam</a>
		</div>

		<nav>
			<ul>
				{#each links as [path, name]}
					<li>
						<a href={$url(path)} class:selected={$isActive(path)}>
							{name}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>

</div>
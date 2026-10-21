<script lang="ts">
	import { tech, type Tech } from '#lib/data/tech.js';

	let { name }: { name: Tech } = $props();

	const entry = $derived(tech[name]);
</script>

<svg
	role="img"
	aria-label={entry.label}
	viewBox="0 0 24 24"
	class="size-5 shrink-0 fill-current sm:size-6"
>
	<title>{entry.label}</title>
	<path d={entry.icon.path} />
</svg>

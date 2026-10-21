<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div
	class="stock bg-[repeating-linear-gradient(to_bottom,transparent_0_calc(2rem-1px),var(--color-card-rule)_calc(2rem-1px)_2rem)] bg-position-[0_1rem] px-4 pt-4 pb-6 leading-8 text-ink-muted sm:bg-position-[0_1.5rem] sm:px-8 sm:pt-6 sm:pb-8 [&_a]:font-semibold [&_a]:text-ink [&_a]:decoration-card-margin [&_a]:underline-offset-[0.25em] [&_p]:max-w-[64ch] [&_strong]:font-semibold [&_strong]:text-ink"
>
	{@render children()}
</div>

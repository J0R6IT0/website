<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		id,
		position = 0,
		heading = 'h2',
		children
	}: { id: string; position?: 0 | 1 | 2; heading?: 'h1' | 'h2'; children: Snippet } = $props();
</script>

<div class="mb-6 flex items-end border-b border-drawer-rule">
	<svelte:element
		this={heading}
		{id}
		class="min-w-34 scroll-mt-8 rounded-t-md border border-b-0 border-drawer-rule bg-drawer-tab px-5 pt-2.5 pb-2 caps text-on-drawer"
		style:margin-left="calc({position} * min(25%, 9rem))"
	>
		{@render children()}
	</svelte:element>
</div>

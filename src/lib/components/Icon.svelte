<script lang="ts">
	let { name }: { name: 'external' | 'back' | 'forward' | 'star' } = $props();
</script>

<svg
	class="icon inline-block shrink-0 align-[-0.1em]"
	viewBox="0 0 16 16"
	width="14"
	height="14"
	fill="none"
	stroke="currentColor"
	stroke-width="1.5"
	stroke-linecap="square"
	aria-hidden="true"
	focusable="false"
>
	{#if name === 'external'}
		<path d="M5 3.5h7.5V11M12.5 3.5 3.5 12.5" />
	{:else if name === 'star'}
		<path
			d="M8 3.1 9.35 6.84l3.98.13-3.14 2.44 1.1 3.82L8 11l-3.29 2.23 1.1-3.82-3.14-2.44 3.98-.13Z"
		/>
	{:else if name === 'back'}
		<path d="M13 8H3.5M7.5 4 3.5 8l4 4" />
	{:else}
		<path d="M3 8h9.5M8.5 4l4 4-4 4" />
	{/if}
</svg>

<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		margin,
		children,
		footer,
		fold = false,
		transitionName,
		tag = 'article'
	}: {
		margin: Snippet;
		children: Snippet;
		footer?: Snippet;
		fold?: boolean;
		transitionName?: string;
		tag?: 'article' | 'div';
	} = $props();
</script>

<svelte:element
	this={tag}
	class={[
		'relative grid stock sm:grid-cols-[5rem_minmax(0,1fr)]',
		fold ? 'grid-cols-1' : 'grid-cols-[3.75rem_minmax(0,1fr)]'
	]}
	style:view-transition-name={transitionName}
>
	<div
		class={[
			'flex gap-x-2 gap-y-3 text-ink-muted sm:flex-col sm:items-center sm:px-0 sm:py-6',
			fold ? 'px-4 pt-4' : 'flex-col items-center py-4'
		]}
	>
		{@render margin()}
	</div>

	<div
		class={[
			'min-w-0 border-card-margin p-4 sm:border-l sm:py-6 sm:pr-8 sm:pl-6',
			!fold && 'border-l'
		]}
	>
		{@render children()}
	</div>

	{#if footer}
		<div
			class="col-span-full flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-card-rule p-4 sm:py-4 sm:pr-8 sm:pl-26"
		>
			{@render footer()}
		</div>
	{/if}
</svelte:element>

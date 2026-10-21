<script lang="ts">
	import type { Snippet } from 'svelte';
	import { onMount } from 'svelte';
	import { replaceState } from '$app/navigation';

	type Tab = { id: string; label: string; panel: Snippet };

	let { tabs, label }: { tabs: Tab[]; label: string } = $props();

	let chosen = $state<string>();
	const active = $derived(chosen ?? tabs[0].id);
	const buttons: HTMLButtonElement[] = [];
	let tablist: HTMLDivElement;

	function fromHash() {
		const id = location.hash.slice(1);
		if (tabs.some((tab) => tab.id === id)) chosen = id;
	}

	onMount(fromHash);

	function select(index: number, focus = false) {
		chosen = tabs[index].id;
		replaceState(`#${chosen}`, {});
		if (focus) buttons[index].focus();
	}

	function onkeydown(event: KeyboardEvent, index: number) {
		const last = tabs.length - 1;
		const next = {
			ArrowRight: index === last ? 0 : index + 1,
			ArrowLeft: index === 0 ? last : index - 1,
			Home: 0,
			End: last
		}[event.key];
		if (next === undefined) return;
		event.preventDefault();
		select(next, true);
	}

	function onclickcapture(event: MouseEvent) {
		if (event.defaultPrevented || event.button !== 0) return;
		if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
		const link = (event.target as Element).closest('a');
		if (!link) return;
		const url = new URL(link.href);
		if (url.origin !== location.origin || url.pathname !== location.pathname) return;
		const index = tabs.findIndex((tab) => tab.id === url.hash.slice(1));
		if (index < 0) return;

		event.preventDefault();
		select(index);
		const { top } = tablist.getBoundingClientRect();
		if (top < 0 || top > innerHeight * 0.75) {
			const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
			tablist.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
		}
	}
</script>

<svelte:window onhashchange={fromHash} {onclickcapture} />

<div bind:this={tablist} role="tablist" aria-label={label} class="flex scroll-mt-8 items-end gap-2">
	{#each tabs as tab, index (tab.id)}
		{@const selected = tab.id === active}
		<button
			bind:this={buttons[index]}
			type="button"
			role="tab"
			id={tab.id}
			aria-selected={selected}
			aria-controls="{tab.id}-panel"
			tabindex={selected ? 0 : -1}
			onclick={() => select(index)}
			onkeydown={(event) => onkeydown(event, index)}
			class={[
				'relative min-w-34 scroll-mt-8 rounded-t-md border border-b-0 border-drawer-rule px-4 text-left caps transition-[padding,color,background-color] duration-150 ease-drawer sm:px-6',
				selected
					? 'z-10 -mb-px bg-drawer-tab pt-4 pb-2.25 text-on-drawer'
					: 'cursor-pointer bg-drawer pt-2 pb-2 text-on-drawer-muted hover:bg-drawer-tab/50 hover:text-on-drawer'
			]}
		>
			{tab.label}
		</button>
	{/each}
</div>

{#each tabs as tab, index (tab.id)}
	<div
		role="tabpanel"
		id="{tab.id}-panel"
		aria-labelledby={tab.id}
		hidden={tab.id !== active}
		class={[
			'rounded-md border border-drawer-rule bg-drawer-tab p-4 sm:p-6',
			index === 0 && 'rounded-tl-none'
		]}
	>
		<h2 class="sr-only">{tab.label}</h2>
		{@render tab.panel()}
	</div>
{/each}

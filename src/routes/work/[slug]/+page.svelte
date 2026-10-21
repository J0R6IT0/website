<script lang="ts">
	import Masthead from '#lib/components/Masthead.svelte';
	import CatalogueCard from '#lib/components/CatalogueCard.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { site } from '#lib/data/site.js';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>{data.project.name} · {site.name}</title>
	<meta name="description" content={data.project.summary} />
</svelte:head>

<Masthead />

<main id="main">
	<p class="mt-4 mb-6">
		<a
			href="/#work"
			class="inline-flex items-center gap-1.5 py-1 text-small font-medium text-on-drawer-muted no-underline transition-colors duration-150 ease-drawer hover:text-on-drawer"
			><Icon name="back" /> All work</a
		>
	</p>

	<CatalogueCard project={data.project} full />

	<nav
		aria-label="Other projects"
		class="mt-12 grid grid-cols-2 gap-6 border-t border-drawer-rule pt-6"
	>
		{#if data.previous}
			<a
				href="/work/{data.previous.slug}"
				aria-label="Previous project: {data.previous.name}"
				class="inline-flex items-center gap-2 justify-self-start py-2 text-lead font-semibold no-underline decoration-drawer-rule decoration-1 underline-offset-[0.25em] hover:underline [&_.icon]:text-on-drawer-muted"
				><Icon name="back" /> {data.previous.name}</a
			>
		{/if}
		{#if data.next}
			<a
				href="/work/{data.next.slug}"
				aria-label="Next project: {data.next.name}"
				class="col-start-2 inline-flex items-center gap-2 justify-self-end py-2 text-lead font-semibold no-underline decoration-drawer-rule decoration-1 underline-offset-[0.25em] hover:underline [&_.icon]:text-on-drawer-muted"
				>{data.next.name} <Icon name="forward" /></a
			>
		{/if}
	</nav>
</main>

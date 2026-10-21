<script lang="ts">
	import Masthead from '#lib/components/Masthead.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import Filed from '#lib/components/Filed.svelte';
	import FiledDate from '#lib/components/FiledDate.svelte';
	import { site } from '#lib/data/site.js';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const Content = $derived(data.content);
</script>

<svelte:head>
	<title>{data.meta.title} · {site.name}</title>
	<meta name="description" content={data.meta.summary} />
</svelte:head>

<Masthead />

<main id="main">
	<p class="mt-4 mb-6">
		<a
			href="/blog"
			class="inline-flex items-center gap-1.5 py-1 text-small font-medium text-on-drawer-muted no-underline transition-colors duration-150 ease-drawer hover:text-on-drawer"
			><Icon name="back" /> All posts</a
		>
	</p>

	<Filed fold transitionName="post-{data.meta.slug}">
		{#snippet margin()}
			<FiledDate date={data.meta.date} fold />
		{/snippet}

		<header class="mb-8 border-b border-card-rule pb-6 sm:pt-2">
			{#if data.meta.draft}
				<p class="mb-4 flex justify-end"><span class="stamp text-ink-muted">Draft</span></p>
			{/if}
			<h1
				class="mb-4 text-[clamp(2rem,1.4rem+2.4vw,2.75rem)] leading-[1.15] font-[650] tracking-[-0.02em] text-balance"
			>
				{data.meta.title}
			</h1>
			<p class="max-w-[62ch] text-lead text-ink-muted">{data.meta.summary}</p>
		</header>

		<div class="prose max-w-[68ch] prose-card pb-4 sm:pb-8">
			<Content />
		</div>
	</Filed>
</main>

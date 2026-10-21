<script lang="ts">
	import Masthead from '#lib/components/Masthead.svelte';
	import GuideTab from '#lib/components/GuideTab.svelte';
	import PostEntry from '#lib/components/PostEntry.svelte';
	import BlankCard from '#lib/components/BlankCard.svelte';
	import { posts } from '#lib/posts.js';
	import { site } from '#lib/data/site.js';
</script>

<svelte:head>
	<title>Blog · {site.name}</title>
	<meta name="description" content="Notes and articles by {site.name}." />
</svelte:head>

<Masthead />

<main id="main" class="pt-8 sm:pt-12">
	<GuideTab id="blog" heading="h1">Blog</GuideTab>
	{#if posts.length}
		<ul class="grid gap-6">
			{#each posts as { meta } (meta.slug)}
				<li><PostEntry post={meta} /></li>
			{/each}
		</ul>
	{:else}
		<BlankCard>
			<p><strong>Nothing filed here yet.</strong></p>
			<p>Notes on Rust, desktop interfaces and self-hosting will be filed under this tab.</p>
		</BlankCard>
	{/if}
</main>

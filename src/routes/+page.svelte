<script lang="ts">
	import Masthead from '#lib/components/Masthead.svelte';
	import FolderTabs from '#lib/components/FolderTabs.svelte';
	import CatalogueCard from '#lib/components/CatalogueCard.svelte';
	import ExternalLink from '#lib/components/ExternalLink.svelte';
	import { projects } from '#lib/data/projects.js';
	import { site } from '#lib/data/site.js';

	const contactLink =
		'inline-flex items-center gap-1.5 border-b border-transparent py-1 text-small font-medium tracking-[0.06em] text-on-drawer-muted no-underline transition-colors duration-150 ease-drawer hover:border-drawer-rule hover:text-on-drawer';
</script>

<svelte:head>
	<title>{site.name}, {site.title}</title>
	<meta name="description" content={site.description} />
</svelte:head>

<Masthead home />

<main id="main">
	<p
		class="mt-8 max-w-[34ch] text-[clamp(1.25rem,1.02rem+1vw,1.625rem)] leading-[1.45] tracking-[-0.005em] text-pretty sm:mt-12"
	>
		Hi, I'm Jorge, a software engineer focused on Rust, backend development, desktop applications
		and software architecture.
	</p>
	<ul aria-label="Contact" class="mt-4 mb-16 flex flex-wrap items-center gap-x-6 gap-y-2 sm:mb-24">
		<li><a href="mailto:{site.email}" class={contactLink}>{site.email}</a></li>
		<li><ExternalLink href={site.github} class={contactLink}>GitHub</ExternalLink></li>
		<li><ExternalLink href={site.linkedin} class={contactLink}>LinkedIn</ExternalLink></li>
	</ul>

	<FolderTabs label="Sections" tabs={[{ id: 'work', label: 'Work', panel: work }]} />
</main>

{#snippet work()}
	<ul class="grid gap-6">
		{#each projects as project (project.slug)}
			<li><CatalogueCard {project} /></li>
		{/each}
	</ul>
{/snippet}

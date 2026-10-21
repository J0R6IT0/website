<script lang="ts">
	import type { Project } from '#lib/data/projects.js';
	import Filed from './Filed.svelte';
	import TechLogo from './TechLogo.svelte';
	import ExternalLink from './ExternalLink.svelte';
	import Icon from './Icon.svelte';

	import { page } from '$app/state';

	let { project, full = false }: { project: Project; full?: boolean } = $props();

	const stars = $derived(page.data.stars?.[project.repo] || undefined);

	const links = $derived(
		full ? project.links : [{ label: 'Repository', href: `https://github.com/${project.repo}` }]
	);

	const fields = $derived(
		[
			{ label: 'Description', paragraphs: project.description },
			{ label: 'Notes', paragraphs: project.notes }
		].filter((field) => field.paragraphs.length)
	);
</script>

<Filed transitionName="card-{project.slug}">
	{#snippet margin()}
		{#each project.tech as name (name)}<TechLogo {name} />{/each}
	{/snippet}

	<p class="mb-2 flex justify-between gap-4 text-small text-ink-muted">
		<span class="wrap-anywhere"
			>{project.repo}{#if stars}{' '}<span
					class="ml-2 whitespace-nowrap tabular-nums [&_.icon]:mr-1 [&_.icon]:align-[-0.125em]"
					><Icon name="star" />{stars.toLocaleString('en')}<span class="sr-only">
						{stars === 1 ? 'star' : 'stars'}</span
					></span
				>{/if}</span
		>
		<span class="shrink-0 tabular-nums">No. {project.accession}</span>
	</p>

	{#if full}
		<h1
			class="mb-4 text-[clamp(2rem,1.4rem+2.4vw,2.75rem)] leading-[1.15] font-[650] tracking-[-0.02em] text-balance"
		>
			{project.name}
		</h1>
	{:else}
		<h3 class="mb-2 text-title font-[650] tracking-[-0.01em] text-balance">
			<a
				href="/work/{project.slug}"
				class="no-underline decoration-1 underline-offset-[0.18em] hover:underline"
				>{project.name}</a
			>
		</h3>
	{/if}

	<p class={['mb-4 max-w-[62ch] text-pretty sm:pl-6 sm:-indent-6', full && 'text-lead']}>
		{project.summary}
	</p>

	<div class="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 sm:pl-6">
		<ul aria-label="Tags" class="flex flex-wrap gap-1.5">
			{#each project.tags as tag (tag)}
				<li class="rounded-xs bg-ink/[0.07] px-2 py-0.5 text-small">{tag}</li>
			{/each}
		</ul>
		<p class="stamp">{project.status}</p>
	</div>

	{#if full && fields.length}
		<dl class="mt-6">
			{#each fields as field (field.label)}
				<div
					class="grid gap-2 border-t border-card-rule py-6 last:pb-0 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:items-baseline sm:gap-4"
				>
					<dt class="caps text-ink-muted">{field.label}</dt>
					<dd class="max-w-[62ch] space-y-4 text-pretty">
						{#each field.paragraphs as paragraph, i (i)}<p>{paragraph}</p>{/each}
					</dd>
				</div>
			{/each}
		</dl>
	{/if}

	{#snippet footer()}
		{#each links as link (link.href)}
			<ExternalLink href={link.href} class="ink-link">{link.label}</ExternalLink>
		{/each}
		{#if !full}
			<a
				href="/work/{project.slug}"
				class="ml-auto ink-link"
				aria-label="Read more about {project.name}">Read more <Icon name="forward" /></a
			>
		{/if}
	{/snippet}
</Filed>

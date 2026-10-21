<script lang="ts">
	import Mark from './Mark.svelte';
	import { site } from '#lib/data/site.js';

	let { home = false }: { home?: boolean } = $props();

	const nav = [
		{ label: 'Work', href: '/#work' },
		{ label: 'Blog', href: '/blog' }
	];
</script>

<header
	class={[
		'flex flex-wrap items-center justify-between gap-6 pb-8',
		home ? 'pt-12 sm:pt-16' : 'pt-8'
	]}
>
	<a
		class={['flex items-center no-underline', home ? 'gap-6 sm:gap-8' : 'gap-6']}
		href="/"
		aria-label="{site.name}, home"
	>
		<Mark size={home ? 56 : 36} />
		<span class="flex flex-col gap-1.5">
			<svelte:element
				this={home ? 'h1' : 'span'}
				class={[
					'mr-[-0.28em] leading-[1.1] font-semibold tracking-name uppercase',
					home ? 'text-[clamp(1.5rem,1.05rem+1.9vw,2.25rem)]' : 'text-lg'
				]}>{site.name}</svelte:element
			>
		</span>
	</a>

	<nav aria-label="Main">
		<ul class="flex gap-6">
			{#each nav as item (item.href)}
				<li>
					<a
						href={item.href}
						class="inline-block border-b border-transparent py-1 text-small font-medium tracking-[0.06em] text-on-drawer-muted no-underline transition-colors duration-150 ease-drawer hover:border-drawer-rule hover:text-on-drawer"
						>{item.label}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
</header>

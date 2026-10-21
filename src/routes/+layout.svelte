<script lang="ts">
	import '@fontsource-variable/public-sans';
	import '../app.css';
	import favicon from '#lib/assets/favicon.svg';
	import { onNavigate } from '$app/navigation';
	import { site } from '#lib/data/site.js';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="theme-color" content="#2d2b2b" />
	<meta name="author" content={site.name} />
</svelte:head>

<a
	class="absolute -top-16 left-4 z-10 bg-card px-4 py-2 font-semibold text-ink focus:top-4"
	href="#main">Skip to content</a
>

<div class="mx-auto max-w-[calc(var(--container-column)+3rem)] px-4 sm:px-6">
	{@render children()}

	<footer
		class="flex flex-wrap justify-between gap-x-6 gap-y-2 pt-8 pb-12 text-small text-on-drawer-muted"
	>
		<p>© {new Date().getFullYear()} {site.name}</p>
		<p>{site.location}</p>
	</footer>
</div>

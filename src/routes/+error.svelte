<script lang="ts">
	import { page } from '$app/state';
	import Masthead from '#lib/components/Masthead.svelte';
	import BlankCard from '#lib/components/BlankCard.svelte';
	import { site } from '#lib/data/site.js';
</script>

<svelte:head>
	<title>Not found · {site.name}</title>
</svelte:head>

<Masthead />

<main id="main" class="pt-8 sm:pt-12">
	<h1 class="sr-only">Error {page.status}</h1>
	<BlankCard>
		<p>
			<strong>{page.status === 404 ? 'No card is filed here.' : 'Something went wrong.'}</strong>
		</p>
		<p>Check the address, or <a href="/">return to the drawer</a>.</p>
	</BlankCard>
</main>

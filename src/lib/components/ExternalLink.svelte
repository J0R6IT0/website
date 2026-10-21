<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';
	import Icon from './Icon.svelte';

	let {
		href,
		class: className,
		children
	}: { href: string; class?: ClassValue; children: Snippet } = $props();
</script>

<a {href} target="_blank" rel="noreferrer" class={className}
	>{@render children()}
	<Icon name="external" /><span class="sr-only">(opens in a new tab)</span></a
>

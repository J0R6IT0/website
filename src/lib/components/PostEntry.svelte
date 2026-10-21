<script lang="ts">
	import type { PostMeta } from '#lib/posts.js';
	import Filed from './Filed.svelte';
	import FiledDate from './FiledDate.svelte';

	let { post }: { post: PostMeta } = $props();
</script>

<Filed transitionName="post-{post.slug}">
	{#snippet margin()}
		<FiledDate date={post.date} />
	{/snippet}

	<div class="mb-2 flex items-start justify-between gap-4">
		<h3 class="text-title font-[650] tracking-[-0.01em] text-balance">
			<a
				href="/blog/{post.slug}"
				class="no-underline decoration-1 underline-offset-[0.18em] after:absolute after:inset-0 after:rounded-[inherit] hover:underline"
				>{post.title}</a
			>
		</h3>
		{#if post.draft}<span class="mt-1 stamp text-ink-muted">Draft</span>{/if}
	</div>
	<p class="max-w-[62ch] text-pretty text-ink-muted sm:pl-6 sm:-indent-6">{post.summary}</p>
</Filed>

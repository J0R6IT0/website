<script lang="ts">
	import { filedLines, formatDate } from '#lib/posts.js';

	let { date, fold = false }: { date: string; fold?: boolean } = $props();
</script>

<time
	datetime={date}
	class={[
		'flex gap-x-2 text-label font-semibold tracking-call tabular-nums sm:flex-col sm:gap-y-0.5 sm:text-small',
		!fold && 'flex-col gap-y-0.5'
	]}
	><span class="sr-only">{formatDate(date)}</span>{#each filedLines(date) as line, i (i)}<span
			aria-hidden="true"
			class={[fold && i > 0 && "max-sm:before:mr-2 max-sm:before:content-['·']"]}>{line}</span
		>{/each}</time
>

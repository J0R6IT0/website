import type { Component } from 'svelte';
import { dev } from '$app/env';

export interface PostMeta {
	slug: string;
	title: string;
	date: string;
	summary: string;
	draft?: boolean;
}

type PostModule = {
	default: Component;
	metadata: Omit<PostMeta, 'slug' | 'date'> & { date: string | Date };
};

const modules = import.meta.glob<PostModule>('/src/posts/*.md', { eager: true });

const all = Object.entries(modules).map(([path, mod]) => ({
	meta: {
		...mod.metadata,
		date: new Date(mod.metadata.date).toISOString().slice(0, 10),
		slug: path.split('/').pop()!.replace(/\.md$/, '')
	} as PostMeta,
	component: mod.default
}));

export const posts = all
	.filter((p) => dev || !p.meta.draft)
	.sort((a, b) => b.meta.date.localeCompare(a.meta.date));

export function getPost(slug: string) {
	return posts.find((p) => p.meta.slug === slug);
}

export function formatDate(date: string) {
	return new Date(date + 'T00:00:00Z').toLocaleDateString('en-GB', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		timeZone: 'UTC'
	});
}

export function filedLines(date: string) {
	const d = new Date(date + 'T00:00:00Z');
	return [
		String(d.getUTCFullYear()),
		d.toLocaleDateString('en-GB', { month: 'short', timeZone: 'UTC' }).toUpperCase(),
		String(d.getUTCDate()).padStart(2, '0')
	];
}

import * as http from 'node:http';
import { GITHUB_TOKEN } from '$app/env/private';
import { projects } from '#lib/data/projects.js';

export type Stars = Record<string, number>;

const DAY = 24 * 60 * 60 * 1000;
const RETRY = 10 * 60 * 1000;

if (process.env.HTTPS_PROXY || process.env.https_proxy) http.setGlobalProxyFromEnv?.();

let cached: { until: number; stars: Promise<Stars> } | undefined;

async function fetchStars(repo: string): Promise<number | undefined> {
	const headers: Record<string, string> = {
		accept: 'application/vnd.github+json',
		'x-github-api-version': '2022-11-28'
	};
	if (GITHUB_TOKEN) headers.authorization = `Bearer ${GITHUB_TOKEN}`;

	try {
		const res = await fetch(`https://api.github.com/repos/${repo}`, {
			headers,
			signal: AbortSignal.timeout(5000)
		});
		if (!res.ok) {
			console.warn(`[stars] ${repo}: GitHub answered ${res.status}, showing no count`);
			return undefined;
		}
		const { stargazers_count } = (await res.json()) as { stargazers_count: number };
		return stargazers_count;
	} catch (err) {
		const { message, cause } = err as Error & { cause?: Error };
		console.warn(`[stars] ${repo}: ${cause?.message ?? message}, showing no count`);
		return undefined;
	}
}

export function getStars(): Promise<Stars> {
	if (cached && Date.now() < cached.until) return cached.stars;

	const started = Date.now();
	const stars = Promise.all(
		projects.map(async ({ repo }) => [repo, await fetchStars(repo)] as const)
	).then((entries) => {
		const found = entries.filter((e): e is [string, number] => e[1] !== undefined);
		if (found.length < entries.length && cached) cached.until = started + RETRY;
		return Object.fromEntries(found);
	});
	cached = { until: started + DAY, stars };
	return stars;
}

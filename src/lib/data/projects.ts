import type { Tech } from './tech.js';

export type Status = 'Active' | 'Experimental' | 'In development';

interface ProjectEntry {
	slug: string;
	name: string;
	repo: string;
	tech: Tech[];
	summary: string;
	tags: string[];
	status: Status;
	description: string[];
	notes: string[];
	links: { label: string; href: string }[];
}

const entries: ProjectEntry[] = [
	{
		slug: 'thrustr',
		name: 'Thrustr',
		repo: 'thrustr-app/thrustr',
		tech: ['rust', 'gpui', 'webassembly', 'sqlite'],
		summary:
			'A high-performance, native, cross-platform and extensible game launcher that unifies game storefronts into one interface.',
		tags: ['Desktop app', 'Game launcher', 'GPUI', 'Cross-platform'],
		status: 'In development',
		description: [
			'Thrustr aggregates the games you own across storefronts into one library, focusing on user experience and efficiency.',
			'It uses many different techniques to improve performance and reduce resources: from a GPU-accelerated interface built on GPUI, to a fully custom image processing pipeline and caching, FTS-optimized search, concurrency everywhere, and much more.',
			'It is extensible by design via WebAssembly plugins and integrates compatibility tools, such as Proton or Wine, in order to execute Windows games in Linux and macOS.'
		],
		notes: [
			"Thrustr was part of my Bachelor's Final Thesis, which is attached in the link below. Note that it is in Spanish and many things have changed since then."
		],
		links: [
			{ label: 'Repository', href: 'https://github.com/thrustr-app/thrustr' },
			{ label: 'Thesis', href: 'https://riunet.upv.es/handle/10251/239010' }
		]
	},
	{
		slug: 'maestro',
		name: 'maestro',
		repo: 'J0R6IT0/maestro',
		tech: ['rust', 'docker', 'onnx', 'sqlite'],
		summary:
			'A sonic similarity engine for Navidrome and other OpenSubsonic servers. Analyzes your music library to find similar tracks using MAEST audio embeddings.',
		tags: ['Navidrome', 'OpenSubsonic', 'Audio embeddings', 'Self-hosted'],
		status: 'Experimental',
		description: [
			'maestro finds similar tracks and builds a sonic path between two songs by using MAEST embeddings.',
			'It is made to be as lightweight and fast as possible, by parallelizing downloads, indexing results and many more optimization techniques. maestro can handle massive music libraries of millions of tracks while using a (relatively) small amount of RAM.'
		],
		notes: [
			'maestro is deliberately small: there is no UI and no extra features, just what the average listener needs. The first scan of a large library can take days.'
		],
		links: [
			{ label: 'Repository', href: 'https://github.com/J0R6IT0/maestro' },
			{ label: 'Releases', href: 'https://github.com/J0R6IT0/maestro/releases' },
			{ label: 'MAEST', href: 'https://essentia.upf.edu/models.html#maest' }
		]
	},
	{
		slug: 'navidrome-lyrics-plugin',
		name: 'Navidrome Lyrics Plugin',
		repo: 'J0R6IT0/navidrome-lyrics-plugin',
		tech: ['rust', 'webassembly'],
		summary:
			'A Navidrome plugin that fetches lyrics from many sources and serves them to any client.',
		tags: ['Navidrome', 'Plugin', 'Lyrics', 'Self-hosted'],
		status: 'Active',
		description: [
			'The plugin obtains lyrics from many different providers and is completely configurable: cache, writing lyrics to files, modes for how providers are queried, sanitization and more.',
			'Supports plain, line-synced and word-by-word lyrics, and its architecture allows adding new providers easily.'
		],
		notes: [],
		links: [
			{ label: 'Repository', href: 'https://github.com/J0R6IT0/navidrome-lyrics-plugin' },
			{ label: 'Releases', href: 'https://github.com/J0R6IT0/navidrome-lyrics-plugin/releases' }
		]
	},
	{
		slug: 'website',
		name: 'Website',
		repo: 'J0R6IT0/website',
		tech: ['typescript', 'svelte'],
		summary: 'This website!',
		tags: ['Portfolio', 'Web'],
		status: 'In development',
		description: ['That`s pretty much it, nothing special really...'],
		notes: [],
		links: [
			{ label: 'Repository', href: 'https://github.com/J0R6IT0/website' },
			{ label: 'Releases', href: 'https://github.com/J0R6IT0/website/releases' }
		]
	}
];

export interface Project extends ProjectEntry {
	accession: string;
}

export const projects: Project[] = entries.map((entry, i) => ({
	...entry,
	accession: String(i + 1).padStart(3, '0')
}));

export function getProject(slug: string) {
	return projects.find((p) => p.slug === slug);
}

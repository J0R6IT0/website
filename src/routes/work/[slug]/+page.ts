import { error } from '@sveltejs/kit';
import { getProject, projects } from '#lib/data/projects.js';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => projects.map(({ slug }) => ({ slug }));

export const load: PageLoad = ({ params }) => {
	const project = getProject(params.slug);
	if (!project) error(404, 'No card is filed under that name.');

	const index = projects.indexOf(project);
	return {
		project,
		previous: projects[index - 1],
		next: projects[index + 1]
	};
};

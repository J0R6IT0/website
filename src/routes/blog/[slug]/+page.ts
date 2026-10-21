import { error } from '@sveltejs/kit';
import { getPost, posts } from '#lib/posts.js';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => posts.map(({ meta }) => ({ slug: meta.slug }));

export const load: PageLoad = ({ params }) => {
	const post = getPost(params.slug);
	if (!post) error(404, 'No post is filed under that name.');
	return { meta: post.meta, content: post.component };
};

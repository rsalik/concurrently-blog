import { posts } from '$lib/posts';
import { error } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;

	const post = posts.find((post) => post.slug === slug);

	if (!post) throw error(404, 'Not found');

	return { post, next: posts[post.index + 1], prev: posts[post.index - 1] };
};

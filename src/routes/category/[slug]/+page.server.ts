import { posts } from '$lib/posts';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
	return { posts: posts.filter((post) => post.category === params.slug) };
};

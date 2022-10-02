import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data }) => {
	const component = await import(`../../../../posts/${data.post.slug}.md`);

	return { ...data, component: component.default };
};

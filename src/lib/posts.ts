import { browser } from '$app/environment';

import moment from 'moment';
import { parse } from 'node-html-parser';

if (browser) {
	throw new Error('This module cannot run in the browser.');
}

export const posts = Object.entries(import.meta.glob('/posts/**/*.md', { eager: true }))
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	.map(([path, post]: any[]) => {
		const html = parse(post.default.render().html);

		let description;

		if (post.metadata.description) description = post.metadata.description;
		else {
			for (const child of html.childNodes) {
				// TypeScript doesn't know that child is a HTMLElement,
				// and also doesn't know that HTMLElement has a rawTagName property.
				const ukChild = child as unknown;
				if (
					!(ukChild as { rawTagName: string }).rawTagName?.includes('h') &&
					child.rawText.trim().length
				) {
					description = child.rawText;
					break;
				}
			}
		}

		return {
			...post.metadata,
			slug: path.split('/').slice(-1)[0].replace(/\.md$/, ''),
			description,
			date: moment(post.metadata.date).toISOString(),
			imgLink: post.metadata.img ?? html.querySelector('img')?.getAttribute('src'),
			featured: post.metadata.featured
		};
	})
	.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
	.map((post, index) => {
		return { ...post, index };
	});

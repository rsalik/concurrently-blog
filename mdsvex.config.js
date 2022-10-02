import slugPlugin from 'rehype-slug';
import autolinkHeadingsPlugin from 'rehype-autolink-headings';

export default {
	extensions: ['.md', '.svx'],
	rehypePlugins: [
		slugPlugin,
		[
			autolinkHeadingsPlugin,
			{
				behavior: 'wrap'
			}
		]
	]
};

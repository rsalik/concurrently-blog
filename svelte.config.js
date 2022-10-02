import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import mdsvexConfig from './mdsvex.config.js';

import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		mdsvex(mdsvexConfig),
		preprocess({
			scss: {
				prependData: '@use "src/styles/_values.scss" as *;'
			}
		})
	],

	kit: {
		adapter: adapter()
	}
};

export default config;

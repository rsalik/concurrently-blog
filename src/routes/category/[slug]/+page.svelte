<script lang="ts">
	import PageLink from '$lib/components/PageLink.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	import { page } from '$app/stores';

	const slug = $page.params.slug;
</script>

<svelte:head>
	<title>All Posts</title>
</svelte:head>

<div class="title">Category: <span>{slug}</span></div>

<div>
	{#each data.posts as post}
		<PageLink page={post} display="row" />
	{/each}
</div>

<style lang="scss">
	.title {
		margin-bottom: 0.4em;

		text-align: center;

		font-size: 2em;
		font-weight: $fw-semibold;

		span {
			text-transform: capitalize;
		}
	}
</style>

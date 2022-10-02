<script lang="ts">
	import PageLink from '$lib/components/PageLink.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	const slug = $page.params.slug;

	let mobile = false;

	onMount(() => {
		mobile = window.innerWidth < 768;

		window.addEventListener('resize', () => {
			mobile = window.innerWidth < 768;
		});
	});
</script>

<svelte:head>
	<title>All Posts</title>
</svelte:head>

<div class="title">Category: <span>{slug}</span></div>

<div>
	{#each data.posts as post, i}
		<div class="spacer" />
		<PageLink page={post} display={mobile ? 'card' : 'row'} />
	{/each}
</div>

<style lang="scss">
	.title {
		font-size: 2em;
		font-weight: $fw-semibold;

		margin-bottom: 0.4em;

		text-align: center;

		span {
			text-transform: capitalize;
		}
	}

	.spacer {
		height: 1px;
		margin: 1em 0;
		background: $gray;
	}
</style>

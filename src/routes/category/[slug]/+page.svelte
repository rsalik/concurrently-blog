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
		<PageLink page={post} display={mobile ? 'card' : 'row'} />
		{#if i < data.posts.length - 1}
			<div class="spacer" />
		{/if}
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
</style>

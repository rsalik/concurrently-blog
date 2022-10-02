<script lang="ts">
	import PageLink from '$lib/components/PageLink.svelte';
	import { onMount } from 'svelte';

	import type { PageData } from './$types';

	export let data: PageData;

	let mobile = false;

	onMount(() => {
		mobile = window.innerWidth < 768;

		window.addEventListener('resize', () => {
			mobile = window.innerWidth < 768;
		});
	});

	$: feature = data.posts.find((post) => post.featured);

	$: unfeatured = data.posts.filter((post) => post !== feature);

	$: evenPosts = unfeatured.filter((_, i) => i % 2 === 0);
	$: oddPosts = unfeatured.filter((_, i) => i % 2 === 1);
</script>

<svelte:head>
	<title>All Posts</title>
</svelte:head>

{#if !mobile}
	<div class="cols">
		<div class="flank">
			{#each evenPosts as post, i}
				<PageLink page={post} display="card" />
				{#if i < evenPosts.length - 1}
					<div class="spacer" />
				{/if}
			{/each}
		</div>
		<div class="border" />
		<div class="center">
			{#if feature}
				<PageLink page={feature} display="feature" />
			{:else}
				<div />
			{/if}
		</div>
		<div class="border" />
		<div class="flank">
			{#each oddPosts as post, i}
				<PageLink page={post} display="card" />
				{#if i < oddPosts.length - 1}
					<div class="spacer" />
				{/if}
			{/each}
		</div>
	</div>
{:else}
	<div class="posts-mobile">
		{#if feature}
			<PageLink page={feature} display="feature" />
			<div class="spacer" />
		{/if}
		{#each unfeatured as post, i}
			<PageLink page={post} display="card" />
			{#if i < unfeatured.length - 1}
				<div class="spacer" />
			{/if}
		{/each}
	</div>
{/if}

<style lang="scss">
	.cols {
		display: grid;

		width: 90%;
		margin: 0 auto;

		grid-template-columns: 1fr 50px 2fr 50px 1fr;
	}

	.border {
		width: 1px;
		height: 100%;
		margin: 0 auto;

		background: $gray;
	}

	.spacer {
		height: 1px;

		background: $gray;
	}

	.posts-mobile {
		display: flex;
		flex-direction: column;

		margin-bottom: 1em;
	}
</style>

<script lang="ts">
	import PageLink from '$lib/components/PageLink.svelte';
	import moment from 'moment';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	let showPrev = false,
		showNext = false;

	let mobile = false;

	onMount(() => {
		mobile = window.innerWidth < 768;

		window.addEventListener('resize', () => {
			mobile = window.innerWidth < 768;
		});
	});
</script>

<svelte:head>
	<title>{data.post.title}</title>
</svelte:head>

<div class="page">
	<div class="title">
		{#if data.post.category}
			<a class="category link" href="/category/{data.post.category}">{data.post.category}</a>
		{/if}
		{data.post.title}
		<div class="info">
			<span class="author">
				By
				{#if data.post.authorLink}
					<a href={data.post.authorLink} class="author link">{data.post.author}</a>
				{:else}
					<span>{data.post.author}</span>
				{/if}
			</span>
			<span class="date">
				Published
				<span>{moment(data.post.date).utc().format('dddd, MMMM Do, YYYY')}</span>
			</span>
		</div>
	</div>

	<article>
		<svelte:component this={data.component} />
	</article>

	<div class="article-footer">
		Published on <span>{moment(data.post.date).utc().format('dddd, MMMM Do, YYYY')}</span> by
		<span>{data.post.author}</span>
		in <span class="category">{data.post.category}</span>
	</div>
	<div class="nav-links">
		{#if data.prev}
			{#if showPrev && !mobile}
				<div class="post-preview prev">
					<PageLink page={data.prev} display="card" />
				</div>
			{/if}
			<a
				class="next link"
				href={`/post/${data.prev.slug}`}
				on:mouseover={() => {
					showPrev = true;
				}}
				on:focus={() => {
					showPrev = true;
				}}
				on:mouseleave={() => {
					showPrev = false;
				}}
				on:focusout={() => {
					showPrev = false;
				}}
			>
				<span class="arrow">←</span>
				<span>Previous Post</span>
			</a>
		{:else}
			<div class="space" />
		{/if}
		{#if data.next}
			{#if showNext && !mobile}
				<div class="post-preview next">
					<PageLink page={data.next} display="card" />
				</div>
			{/if}
			<a
				class="next link"
				href={`/post/${data.next.slug}`}
				on:mouseover={() => {
					showNext = true;
				}}
				on:focus={() => {
					showNext = true;
				}}
				on:mouseleave={() => {
					showNext = false;
				}}
				on:focusout={() => {
					showNext = false;
				}}
			>
				<span>Next Post</span>
				<span class="arrow">→</span>
			</a>
		{/if}
	</div>
</div>

<style lang="scss">
	.page {
		width: 60%;
		margin: 0 auto;

		@media screen and (max-width: $mobile) {
			width: 90%;
		}
	}

	.title {
		font-size: 3em;
		font-weight: $fw-semibold;

		position: relative;

		display: flex;
		flex-direction: column;
		justify-content: flex-start;

		margin-bottom: 0.6em;
		padding-bottom: 0.6em;

		@media screen and (max-width: $mobile) {
			font-size: 2.2em;
		}

		::after {
			position: absolute;
			bottom: 0;
			left: 0;

			width: 15%;
			height: 1px;

			content: '';

			background: $gray;
		}

		.category {
			font-family: $font-sans;
			font-size: 0.3em;

			align-self: flex-start;

			margin-bottom: 0.5em;

			letter-spacing: 0.05em;
			text-transform: uppercase;

			color: $lightcolor;
		}
	}

	.info {
		font-family: $font-sans;
		font-size: 1.1rem;

		margin-top: 1.5rem;

		text-align: left;

		@media screen and (max-width: $mobile) {
			font-size: 0.8rem;

			display: flex;
			flex-direction: column;
		}

		.date {
			margin-left: 0.7em;

			color: $lightcolor;

			@media screen and (max-width: $mobile) {
				margin-left: 0;
			}
		}
	}

	.article-footer {
		font-size: 0.8em;

		margin-bottom: 2em;
		padding: 1em 0;

		text-align: center;

		border-top: $border;
		border-bottom: $border;

		.category {
			text-transform: capitalize;
		}
	}

	.nav-links {
		position: relative;

		display: flex;
		align-items: center;
		justify-content: space-between;

		width: 100%;

		.post-preview {
			font-size: 1.5vw;

			position: absolute;
			z-index: 10;
			bottom: 2.5rem;

			width: 20em;
			padding: 1em;

			border: $border;
			border-radius: $border-radius;
			background: $bkg;
			box-shadow: 0 0 0.5em 0.1em rgba(0, 0, 0, 0.1);

			&.prev {
				left: 0;
			}

			&.next {
				right: 0;
			}

			@media screen and (max-width: $mobile) {
				font-size: 3vw;

				bottom: 1.5rem;

				width: 90%;
			}
		}
	}
</style>

<script lang="ts">
	import moment from 'moment';
	import type { PageData } from './$types';
	export let data: PageData;
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
</div>

<style lang="scss">
	.page {
		width: 60%;
		margin: 0 auto;
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

		.date {
			margin-left: 0.7em;

			color: $lightcolor;
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
</style>

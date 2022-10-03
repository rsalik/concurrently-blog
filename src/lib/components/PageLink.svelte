<script lang="ts">
	import moment from 'moment';

	export let page: {
		title: string;
		content?: string;
		description?: string;
		author?: string;
		authorLink?: string;
		date?: string;
		slug: string;
		category?: string;
		imgLink: string;
	};

	export let display: 'row' | 'card' | 'feature' = 'card';
</script>

<div class="page-link {display}">
	{#if page.imgLink}
		<div class="img">
			<img src={page.imgLink} alt={page.title} />
		</div>
	{/if}
	<div class="text-wrapper">
		{#if page.category}
			<a class="category link" href="/category/{page.category}">{page.category}</a>
		{/if}
		<a href="/post/{page.slug}" class="title link">{page.title}</a>
		<div class="author">
			by
			{#if page.authorLink}
				<a href={page.authorLink} class="link">{page.author}</a>
			{:else}
				<span>{page.author}</span>
			{/if}
		</div>

		<div class="description">{@html page.description}</div>

		<div class="date">{moment(page.date).utc().format('MMMM Do, YYYY')}</div>
	</div>
</div>

<style lang="scss">
	.page-link {
		margin: 0 auto;
		padding: 0.5em 0;

		&.card {
			display: inline-flex;
			flex-direction: column;
			justify-content: flex-start;

			box-sizing: border-box;
			width: 100%;

			img {
				width: 100%;
				max-height: 10rem;
				margin-bottom: 1rem;
			}

			.description {
				font-size: 0.6em;

				display: -webkit-box;
				overflow: hidden;
				-webkit-box-orient: vertical;

				text-overflow: ellipsis;

				-webkit-line-clamp: 3;

				@media screen and (max-width: $mobile) {
					display: none;
				}
			}

			.date {
				@media screen and (max-width: $mobile) {
					font-size: 0.75em;
				}
			}
		}

		&.feature {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;

			box-sizing: border-box;
			width: 100%;

			@media screen and (max-width: $mobile) {
				font-size: 1.35em;
			}

			.title {
				font-size: 1.35em;
			}

			img {
				width: 100%;
				max-height: 20rem;
				margin-bottom: 1rem;
			}
		}

		&.row {
			display: inline-flex;
			align-items: center;
			flex-direction: row-reverse;
			justify-content: space-between;

			width: 95%;
			height: 13.3rem;
			padding: 1em;

			.text-wrapper {
				width: 55%;
				margin-left: 1em;
			}

			.img {
				display: flex;
				align-items: center;

				max-width: 40%;
				height: 100%;

				img {
					width: 100%;
					height: 100%;

					object-fit: cover;
					//max-height: 100%;
				}
			}

			.description {
				display: -webkit-box;
				overflow: hidden;
				-webkit-box-orient: vertical;

				text-overflow: ellipsis;

				-webkit-line-clamp: 3;
			}
		}

		img {
			border-radius: $border-radius;

			object-fit: cover;
		}

		.text-wrapper {
			display: inline-flex;
			flex-direction: column;
			justify-content: flex-start;
		}

		.category {
			font-family: $font-sans;
			font-size: 0.6em;
			font-weight: $fw-semibold;

			margin-bottom: 0.5em;

			letter-spacing: 0.05em;
			text-transform: uppercase;

			color: $lightcolor;
		}

		.title {
			font-size: 1.1em;
			font-weight: $fw-semibold;
			line-height: 1.2em;

			@media screen and (max-width: $mobile) {
				font-size: 1.5em;
			}
		}

		.description {
			font-size: 0.8em;
			line-height: 1.5em;

			display: block;
			overflow: hidden;

			width: 100%;
			margin: 0.5em 0;
		}

		.date {
			font-size: 0.6em;
			font-weight: $fw-semibold;

			margin-top: 1rem;
		}

		.author {
			font-size: 0.7em;
			font-weight: $fw-medium;

			margin: 0.7em 0 0.4em;
		}
	}
</style>

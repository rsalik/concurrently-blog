<script>
	import '../styles/prism.css';
	import '../styles/style.scss';
</script>

<header>
	<div class="title">The Concurrently</div>
	<nav>
		<a href="/">Home</a>
		<a href="https://ryansalik.com">ryansalik.com</a>
	</nav>
</header>

<div class="content">
	<slot />
</div>

<footer>
	<div class="title">The Concurrently</div>
	<nav>
		<a href="/">Home</a>
		<a href="https://ryansalik.com">ryansalik.com</a>
	</nav>
</footer>

<style lang="scss">
	$header-height: 20vh;
	$header-height-mobile: 33vw;

	header {
		font-size: 2.7em;
		font-weight: $fw-semibold;

		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;

		width: 95%;
		height: $header-height;
		margin: 0 auto;

		@media screen and (max-width: $mobile) {
			font-size: 10vw;

			height: $header-height-mobile;
		}

		nav {
			font-size: 0.3em;
			font-weight: $fw-semibold;

			display: flex;
			justify-content: center;

			width: 100%;
			margin: 0.5em 0;
			padding: 0.35em 0;

			border-top: $border;
			border-bottom: $border;

			a {
				min-width: 6em;
				margin: 0 0.75em;

				text-align: center;
				text-transform: uppercase;

				@include transition();

				&:hover {
					color: $accent;
				}
			}
		}
	}

	.content {
		width: 92%;
		min-height: 100vh - $header-height;
		margin: 0 auto;

		@media screen and (max-width: $mobile) {
			min-height: calc(100vh - $header-height-mobile);
		}
	}

	footer {
		display: flex;
		flex-direction: column;

		padding: 1em 2rem;

		color: $bkg;
		background: $color;

		justify-items: center;

		@media screen and (max-width: $mobile) {
			font-size: 4vw;

			padding: 1.5em 2rem;
		}

		.title {
			font-size: 1.8em;
			font-weight: $fw-semibold;
		}

		nav {
			a {
				margin-right: 0.5em;

				color: mix($color, $bkg, 50%);

				@include transition();

				&:hover {
					color: $bkg;
				}
			}
		}
	}
</style>

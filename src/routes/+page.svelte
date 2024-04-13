<script>
	import { pocketbase } from '../lib/pocketbase'
	import { onMount } from 'svelte'
	import { fade } from 'svelte/transition';

	let show_loader_one = true;
	let show_loader_two = false;
	const storage = window.sessionStorage.getItem('visitState') || '0'

	if (storage == '0') {
        show_loader_one = true
    } else {
		window.location.replace('/home')
	}

	onMount(() => {
		if(show_loader_one) {
            setTimeout(() => {
                show_loader_one = false
				show_loader_two = true
            }, 3500)
			setTimeout(() => {
                window.sessionStorage.setItem('visitState', '1')
				window.location.replace('/home')
			}, 7000)
        }
	})
</script>

<style>
	.splash_page {
		@apply h-screen w-full bg-black_two flex justify-center items-center flex-col relative;
	}
	h1 {
		@apply text-white text-4xl font-semibold;
        font-family: "Montserrat", sans-serif;
	}
	.contour-wrap {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
	.contour {
		/* Positioning */
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		overflow: hidden;
		z-index: 999;
		
		/* Mask properties */
		-webkit-mask-repeat: no-repeat;
		-webkit-mask-size: cover;
		mask-repeat: no-repeat;
		mask-size: cover;
		-webkit-mask-image: url(./logo.png);
		mask-image: url(./logo.png);
	}
	.contour:before {
		content: "";
		z-index: 10;
		position: absolute;
		height: 200%;
		width: 200%;
		top: -120%;
		left: -120%;
		background: linear-gradient(transparent 0%,
			rgba(255, 255, 255, 0.1) 45%,
			rgba(255, 255, 255, 0.5) 50%,
			rgba(255, 255, 255, 0.1) 55%,
			transparent 100%);
		transition: all 3s;
		transform: rotate(-45deg);
		animation: shine 3s infinite forwards;
	}

	@keyframes shine {
		0% {
			top: -120%;
			left: -120%;
		}
		100% {
			left:100%;
			top:100%;
		}

	}
</style>

<section class="splash_page">
	{#if show_loader_one}
		<h1 transition:fade>pebble</h1>
	{/if}
	{#if show_loader_two}
		<div transition:fade class="contour-wrap">
			<div class="contour">&nbsp;</div>
			<img src="/logo.png" />
		</div>
	{/if}
</section>
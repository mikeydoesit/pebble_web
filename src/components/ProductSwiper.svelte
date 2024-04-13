<script>
    export let product_id
    export let image_array = []

    import emblaCarouselSvelte from 'embla-carousel-svelte'

    let options = { loop: true }
</script>

<style lang="postcss">
    .embla {
        overflow: hidden;
    }
    .embla__container {
        display: flex;
        width: 100%;
        height: 18rem;
    }
    .embla__slide {
        flex: 0 0 100%;
        min-width: 0;
    }
    .embla__slide img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        @apply rounded-b-3xl;
    }

    
</style>

<section>
    <div class="embla" use:emblaCarouselSvelte="{{ options }}">
        <div class="embla__container">
            {#each image_array as image}
                <div class="embla__slide">
                    <img src={`http://127.0.0.1:8090/api/files/adverts/${product_id}/${image}`} alt="product"/>
                </div>
            {/each}
        </div>
      </div>
</section>
<script>
    export let title = ''
    export let location = ''
    export let region = ''
    export let description = ''
    export let price = 0
</script>

<style>
    .product_details {
        @apply mx-4 px-4 my-6 py-3 bg-white rounded-xl;
    }
    .product_details_heading {
        @apply flex flex-row justify-between items-center;
    }
    .title_wrapper h2 {
        @apply font-semibold text-lg;
    }
    .title_wrapper p {
        @apply font-semibold text-sm text-text_grey mt-1;
    }
    .title_wrapper span {
        @apply font-semibold text-sm text-text_grey ;
    }
    .price_wrapper {
        @apply bg-highlight flex justify-center items-center px-6 h-12 rounded-xl;
    }
    .price_wrapper span {
        @apply text-white font-bold;
    }
    .description_wrapper {
        @apply mt-8;
    }
</style>

<section class="product_details">
    <div class="product_details_heading">
        <div class="title_wrapper">
            <h2>{title}</h2>
            <p>{location}</p>
            <span>{region}</span>
        </div>
        <div class="price_wrapper">
            <span>GH&#8373; {price.toLocaleString("en-US")}</span>
        </div>
    </div>
    <div class="product_details_content">
        <div class="description_wrapper">
            <p>{description}</p>
        </div>
    </div>
</section>
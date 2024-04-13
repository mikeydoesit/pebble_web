<script>
    import { pocketbase } from "../lib/pocketbase";
    import { onMount } from 'svelte';

    export let selected_category;

    export let list

    $: updated_list = list
</script>

<style lang="postcss">
    .product_list {
        @apply my-12 mx-2;
    }
    .product_list_item {
        @apply grid grid-cols-product_list_item gap-3 rounded-2xl bg-white p-2.5 w-full;
    }
    .item_image_wrapper {
        @apply relative w-full h-28;
    }
    .item_image_wrapper img {
        @apply w-full h-full object-cover object-center rounded-2xl;
    }
    .product_details {
        @apply flex flex-col justify-between py-0.5;
    }
    .product_details p, .product_details span {
        @apply text-xs;
    }
    .product_details h4, .product_details h3 {
        @apply text-sm font-semibold;
    }
</style>

<section class="product_list">
    {#each list as item}
        <a href={`/product/${item.id}`} class="product_list_item">
            <div class="item_image_wrapper">
                <img src={`http://127.0.0.1:8090/api/files/adverts/${item.id}/${item.images[0]}`} alt="product" />
            </div>
            <div class="product_details">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <span>{item.location}, {item.region}</span>
                <h3>GH&#8373; {item.price.toLocaleString("en-US")}</h3>
            </div>
        </a>
    {/each}
</section>
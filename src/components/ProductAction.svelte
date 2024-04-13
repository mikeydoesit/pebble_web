<script>
    let fav_hovered = false

    const hover_fav = () => {
        fav_hovered = true
    }
    const unhover_fav = () => {
        fav_hovered = false
    }
</script>

<style lang="postcss">
    .product_action {
        @apply flex flex-row mx-4 px-4 mt-3 mb-6 py-3 justify-start gap-4;
    }
    .fav_btn, .report_btn {
        @apply bg-white rounded-xl flex flex-row justify-center items-center cursor-pointer;
    }
    .fav_btn {
        @apply p-3.5;
    }
    .fav_btn img {
        @apply h-10 w-10;
    }
    .report_btn {
        @apply py-2.5 px-4;
    }
    .report_btn img {
        @apply h-10 w-10 mr-3;
    }
    .report_btn span {
        @apply text-lg;
    }
</style>

<section class="product_action">

    <div class="fav_btn" on:mouseenter={hover_fav} on:mouseleave={unhover_fav}>
        {#if fav_hovered}
            <img src="/heart_solid.png" alt="wishlist" />
        {:else}
            <img src="/heart_outline.png" alt="wishlist" />
        {/if}


    </div>
    <div class="report_btn">
        <img src="/warning_red.png" alt="report"/>
        <span>Report</span>
    </div>
</section>
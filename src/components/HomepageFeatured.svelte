<script>
    import emblaCarouselSvelte from 'embla-carousel-svelte'

    let options = { loop: true }

    export let featured_products = []
</script>

<style lang="postcss">
    .homepage_featured {
        @apply mt-10 px-4 mb-16;
    }
    .homepage_featured_heading {
        @apply flex flex-row w-full pb-3;
    }
    .left_col, .right_col {
        @apply w-1/2 flex flex-row;
    }
    .right_col {
        @apply justify-end;
    }
    .left_col {
        @apply justify-start items-center;
    }
    .left_col img {
        @apply w-5 h-5;
    }
    .left_col h3 {
        @apply ml-1;
    }
    .featured_grid {
        @apply grid grid-cols-featured_grid gap-4;
    }
    .featured_grid_item {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
        @apply w-full;
    }
    .grid_item_card {
        @apply w-full;
    }
    .item_image {
        @apply h-24;
    }
    .item_image img {
        @apply object-cover w-full h-full;
    }
    .item_info_one {
        @apply text-xs pt-2 px-2 font-semibold;
    }
    .location {
        @apply text-text_grey;
    }
    .item_info_two {
        @apply flex flex-row justify-between text-xs pb-2 px-2 mt-4 font-semibold;
    }
    .price {
        @apply text-xs;
    }
    .date_posted {
        @apply flex flex-row items-center text-xs;
    }
    .date_posted img{
        @apply h-3 w-3;
    }
    .date_posted span{
        @apply ml-1 text-text_grey;
    }
</style>

<section class="homepage_featured">
    <div class="homepage_featured_heading">
        <div class="left_col">
            <img src="/hot.png" />
            <h3>FEATURED</h3>
        </div>
        <div class="right_col">

        </div>
    </div>

    <div class="featured_grid">
        <div class="featured_grid_item">
            <div class="grid_item_card">
                <div class="item_image">
                    <img src="/watch.jpg" />
                </div>
                <div class="item_info_one">
                    <h4>Casio Unisex Watch</h4>
                    <span class="location">Abelenkpe, Accra</span>
                </div>
                <div class="item_info_two">
                    <p class="price">GHC 2,700</p>
                    <div class="date_posted">
                        <img src="/calender.png" />
                        <span>18 Feb</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="featured_grid_item">
            <div class="grid_item_card">
                <div class="item_image">
                    <img src="/pickup.jpg" />
                </div>
                <div class="item_info_one">
                    <h4>Ford F-150 2021</h4>
                    <span class="location">Bantama, Kumasi</span>
                </div>
                <div class="item_info_two">
                    <p class="price">GHC 360,000</p>
                    <div class="date_posted">
                        <img src="/calender.png" />
                        <span>28 Jan</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="featured_grid_item">
            <div class="grid_item_card">
                <div class="item_image">
                    <img src="/watch.jpg" />
                </div>
                <div class="item_info_one">
                    <h4>Casio Unisex Watch</h4>
                    <span class="location">Abelenkpe, Accra</span>
                </div>
                <div class="item_info_two">
                    <p class="price">GHC 2,700</p>
                    <div class="date_posted">
                        <img src="/calender.png" />
                        <span>18 Feb</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="featured_grid_item">
            <div class="grid_item_card">
                <div class="item_image">
                    <img src="/pickup.jpg" />
                </div>
                <div class="item_info_one">
                    <h4>Ford F-150 2021</h4>
                    <span class="location">Bantama, Kumasi</span>
                </div>
                <div class="item_info_two">
                    <p class="price">GHC 360,000</p>
                    <div class="date_posted">
                        <img src="/calender.png" />
                        <span>28 Jan</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
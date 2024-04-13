<script>
    export let hide_element
    export let select_category
</script>
<style lang="postcss">
    .category_select_bg {
        @apply h-screen bg-black bg-opacity-30 absolute top-0 left-0 bottom-0 right-0;
    }
    .category_select_inner_wrapper {
        @apply h-full w-full relative bg-transparent;
    }
    .category_select_inner {
        @apply bg-main_bg absolute bottom-0 h-4/5 w-full rounded-t-3xl;
    }
    .categories {
        @apply flex flex-col w-full mb-8 grid grid-cols-category_grid gap-2 mt-12;
    }
    .categoryWrapper {
        @apply relative flex justify-center items-center py-6 border border-border_grey h-24;
    }
    .categoryWrapper input[type="radio"]{
        @apply opacity-0 w-0 h-0;
    }
    .categoryWrapper label{
        @apply font-medium text-sm mb-0 text-black_two z-10 text-center;
    }
    .categoryWrapper .cell-bg {
        @apply h-full w-full absolute;
    }
    .categoryWrapper input:checked ~ label {
        @apply text-highlight;
    }
    .categoryWrapper input:checked + .cell-bg {
        @apply text-white bg-black_two;
    }
</style>

<section class="category_select_bg">
    <div class="category_select_inner_wrapper" on:click={hide_element}>
        <div class="category_select_inner">
            <div class="categories">
                <div class="categoryWrapper">
                    <input id="property" type="radio" name="category"/>
                    <div class="cell-bg"></div>
                    <label for="property" on:click={select_category}>Property</label>
                </div>
                <div class="categoryWrapper">
                    <input id="vehicles" type="radio" name="category"/>
                    <div class="cell-bg"></div>
                    <label for="vehicles" on:click={select_category}>Vehicles</label>
                </div>
                <div class="categoryWrapper">
                    <input id="electronics" type="radio" name="category"/>
                    <div class="cell-bg"></div>
                    <label for="electronics" on:click={select_category}>Electronics</label>
                </div>
                <div class="categoryWrapper">
                    <input id="clothing" type="radio" name="category"/>
                    <div class="cell-bg"></div>
                    <label for="clothing" on:click={select_category}>Clothing</label>
                </div>
                <div class="categoryWrapper">
                    <input id="health" type="radio" name="category"/>
                    <div class="cell-bg"></div>
                    <label for="health" on:click={select_category}>Health</label>
                </div>
                <div class="categoryWrapper">
                    <input id="beauty" type="radio" name="category"/>
                    <div class="cell-bg"></div>
                    <label for="beauty" on:click={select_category}>Beauty</label>
                </div>
                <div class="categoryWrapper">
                    <input id="sports" type="radio" name="category"/>
                    <div class="cell-bg"></div>
                    <label for="sports" on:click={select_category}>Sports</label>
                </div>
                <div class="categoryWrapper">
                    <input id="books" type="radio" name="category"/>
                    <div class="cell-bg"></div>
                    <label for="books" on:click={select_category}>Books</label>
                </div>
                <div class="categoryWrapper">
                    <input id="other" type="radio" name="category"/>
                    <div class="cell-bg"></div>
                    <label for="other" on:click={select_category}>Other</label>
                </div>
            </div>
        </div>
    </div>
</section>
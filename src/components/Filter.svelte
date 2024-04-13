<script>
    export let current_category
    export let toggle_category
    export let toggle_location
    export let toggle_filter
</script>

<style lang="postcss">
.filter_btns {
    @apply grid grid-cols-filter_btns my-4 mx-6 gap-4;
}
.shadow {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.btn {
    @apply cursor-pointer rounded-lg;
}
.location_btn {
    @apply flex flex-row px-3 py-3 items-center;
}
.location_btn img:first-of-type {
    @apply h-5 w-5;
}
.location_btn img:last-of-type {
    @apply h-3.5 w-3.5;
}
.location_btn span {
    @apply ml-2 mr-1 text-sm font-semibold text-black_two;
}
.solo_btn {
    @apply h-5 w-5;
}
.solo_btn_wrapper {
    @apply flex justify-center items-center;
}
.sort_btn_wrapper {
    @apply flex justify-center items-center px-3;
}
.sort_btn_wrapper p {
    @apply text-sm font-semibold text-black_two;
}
</style>

<section class="filter_btns">
    <div class="sort_btn_wrapper shadow btn" on:click={toggle_category}>
        <p>{current_category}</p>
    </div>
    <div class="shadow location_btn btn" on:click={toggle_location}>
        <img src="/location.png" alt="location pin"/>
        <span>Accra</span>
    </div>
    <div class="shadow btn solo_btn_wrapper" on:click={toggle_filter}>
        <img class="solo_btn" src="/filter.png" alt="chevron"/>
    </div>
    <div class="shadow btn solo_btn_wrapper">
        <img class="solo_btn" src="/grid.png" alt="chevron"/>
    </div>
</section>
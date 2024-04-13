<script>
    export let hide_element
</script>
<style lang="postcss">
    .filter_select_bg {
        @apply h-screen bg-black bg-opacity-30 absolute top-0 left-0 bottom-0 right-0;
    }
    .filter_select_inner_wrapper {
        @apply h-full w-full relative bg-transparent;
    }
    .filter_select_inner {
        @apply bg-main_bg absolute bottom-0 h-4/5 w-full rounded-t-3xl;
    }
</style>

<section class="filter_select_bg">
    <div class="filter_select_inner_wrapper" on:click={hide_element}>
        <div class="filter_select_inner">
            
        </div>
    </div>
</section>
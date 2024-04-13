<script>
    export let page_title;
    export let back_btn;

    const back_to_prev = () => {
        window.history.back();
    }
</script>

<style lang="postcss">
    .page_heading {
        @apply bg-black flex justify-center py-4 relative items-center;
    }
    .page_heading h1 {
        @apply text-white text-lg font-semibold;
    }
    .back_btn {
        @apply h-3 w-3 absolute left-6;
    }
</style>

<section class="page_heading">
    {#if back_btn}
        <div class="back_btn" on:click={back_to_prev}>
            <img src="/arrow.png" alt='back' />
        </div>
    {/if}
    <h1>{page_title}</h1>
</section>
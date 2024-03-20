<style lang="postcss">
    .homepage_heading {
        @apply px-6 pt-8 w-full flex items-center flex-col gap-4
    }
    .heading_top {
        @apply w-full flex items-center justify-center;
    }
    .heading_bottom {
        @apply w-full;
    }
    .title {
        @apply text-lg font-medium tracking-wide;
    }
    .search {
        @apply w-full p-2 bg-card_bg;
    }
</style>

<section class="homepage_heading">
    <div class="heading_top">
        <h1 class="title">HOME</h1>
    </div>
    <div class="heading_bottom">
    <input class='search' type="search" /> 
    </div>
</section>
<style lang="postcss">
    .category_grid {
        @apply grid grid-cols-category_grid mx-6 mt-10;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }

    .grid_item {
        @apply bg-card_bg flex flex-col items-center justify-center p-4 gap-3; 
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    }
    .grid_item img {
        @apply h-8 w-8;
    }
    .grid_item span {
        @apply text-xs font-medium;
    }
</style>

<section class="category_grid">
    <a href="/search/property" class='grid_item'>
        <img src='/property.png' alt='property icon' />
        <span>Property</span>
    </a>
    <a href="/search/vehicles" class='grid_item'>
        <img src='/car.png' alt='car icon' />
        <span>Vehicles</span>
    </a>
    <a href="/search/electronics" class='grid_item'>
        <img src='/electronics.png' alt='electronics icon' />
        <span>Electronics</span>
    </a>
    <a href="/search/clothing" class='grid_item'>
        <img src='/clothes.png' alt='clothing icon' />
        <span>Clothing</span>
    </a>
    <a href="/search/health" class='grid_item'>
        <img src='/health.png' alt='health icon' />
        <span>Health</span>
    </a>
    <a href="/search/beauty" class='grid_item'>
        <img src='/beauty.png' alt='beauty icon' />
        <span>Beauty</span>
    </a>
    <a href="/search/sports" class='grid_item'>
        <img src='/sports.png' alt='sports icon' />
        <span>Sports</span>
    </a>
    <a href="/search/books" class='grid_item'>
        <img src='/book.png' alt='books icon' />
        <span>Books</span>
    </a>
    <a href="/search/other" class='grid_item'>
        <img src='/other.png' alt='other icon' />
        <span>Other</span>
    </a>
</section>
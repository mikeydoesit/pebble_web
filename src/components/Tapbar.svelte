<script>
    import { page } from '$app/stores'

    console.log($page.url.pathname)


</script>
<style lang="postcss">
    .tapbar_wrapper {
        @apply sticky bottom-5 w-[-webkit-fill-available] px-6;
    }
    .tapBarMenu {
        @apply bg-black grid grid-cols-tapbarmenu grid-rows-tapbarmenu z-20 shadow-md rounded-full px-4 max-w-[576px];
    }
    .menuItem {
        @apply w-full flex justify-center items-center py-5;
    }
    img {
        @apply w-5 h-5;
    }
</style>


<section class='tapbar_wrapper'>
    <div class="tapBarMenu">
        {#if $page.url.pathname == "/home"}
            <a href="/home" class="menuItem">
                <img src="/home_active.png" alt="Home menu icon" />
            </a>
        {:else}
            <a href="/home" class="menuItem">
                <img src="/home.png" alt="Home menu icon" />
            </a>
        {/if}
        {#if $page.url.pathname.startsWith('/wishlist')}
            <a href="/wishlist" class="menuItem">
                <img src="/heart_active.png" alt="wishlist icon" />
            </a>
        {:else}
            <a href="/wishlist" class="menuItem">
                <img src="/heart.png" alt="wishlist icon" />
            </a>
        {/if}
        <a href="/sell" class="menuItem">
            <img src="/add.png" alt="Sell icon" />
        </a>
        <a href="/chat" class="menuItem">
            <img src="/chat.png" alt="messages icon" />
        </a>
        {#if $page.url.pathname.startsWith('/profile')}
            <a href="/profile" class="menuItem">
                <img src="/user_active.png" alt="User icon" />
            </a>
        {:else}
            <a href="/profile" class="menuItem">
                <img src="/user.png" alt="User icon" />
            </a>
        {/if}
    </div>
</section>
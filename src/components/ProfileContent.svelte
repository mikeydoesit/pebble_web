<script>
    import { pocketbase } from "../lib/pocketbase";

    let showMenu = true;

    const logout = () => {
        pocketbase.authStore.clear();
        window.location.replace('/home')
        console.log('logged out')
    }
</script>

<style>
    .profile_content {
        @apply mb-12;
    }
    .account_menu_wrapper {
        @apply pt-6 px-6;
    }
    .account_menu {
        @apply flex flex-col;
    }
    .account_menu_item {
        @apply flex flex-row items-center py-3.5 cursor-pointer;
    }
    .menu_item_icon {
        @apply h-5 w-5 mr-6;
    }
    .menu_item_label {
        @apply font-medium text-lg text-black;
    }
</style>
<section class="profile_content">
    {#if showMenu}
        <div class="account_menu_wrapper">
            <ul class="account_menu">
                <li class="account_menu_item">
                    <div class="menu_item_icon">
                        <img src="/user_info.png" alt="icon" />
                    </div>
                    <p class="menu_item_label">Account details</p>
                </li>
                <li class="account_menu_item">
                    <div class="menu_item_icon">
                        <img src="/post.png" alt="icon" />
                    </div>
                    <p class="menu_item_label">Ads</p>
                </li>
                <li class="account_menu_item">
                    <div class="menu_item_icon">
                        <img src="/info.png" alt="icon" />
                    </div>
                    <p class="menu_item_label">About Pebble</p>
                </li>
                <li class="account_menu_item">
                    <div class="menu_item_icon">
                        <img src="/contact.png" alt="icon" />
                    </div>
                    <p class="menu_item_label">Contact</p>
                </li>
                <li class="account_menu_item" on:click={logout}>
                    <div class="menu_item_icon">
                        <img src="/logout.png" alt="icon" />
                    </div>
                    <p class="menu_item_label">Log out</p>
                </li>
            </ul>
        </div>
    {/if}
</section>
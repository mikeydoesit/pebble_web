<script>
    export let avatarURL = ''
    export let avatar_name = ''
    export let seller_number = ''
    export let seller_email = ''
</script>

<style lang="postcss">
    .product_seller h4 {
        @apply mx-6 text-black_two text-xl;
    }
    .product_seller_details {
        @apply mx-4 px-4 mt-3 mb-6 py-3 bg-white rounded-xl;
    }
    .product_seller_details_header {
        @apply flex flex-row items-center; 
    }
    .avatar_wrapper {
        @apply h-16 w-16;
    }
    .avatar_wrapper img {
        @apply h-full w-full object-cover object-center rounded-full;
    }
    .product_seller_details_header {
        @apply text-lg flex flex-row items-center justify-between font-medium;
    }
    .product_seller_contact {
        @apply text-lg flex flex-col justify-center;
    }
    .seller_chat {
        @apply bg-highlight p-3 rounded-xl;
    }
    .seller_chat img {
        @apply h-7 w-7;
    }
</style>

<section class="product_seller">
    <h4>Seller</h4>
    <div class="product_seller_details">
        <div class="product_seller_details_header">
            <div class="avatar_wrapper">
                <img src={avatarURL} alt={avatar_name}/>
            </div>
            <div class="product_seller_contact">
                <h6>{avatar_name}</h6>
                <p>{seller_number}</p>
            </div>
            <div class="seller_chat">
                <img src="/chat_highlight.png" alt="chat" />
            </div>
        </div>
    </div>
</section>
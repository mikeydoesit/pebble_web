<script>
    export let user_name
    export let avatar_img
</script>

<style lang="postcss">
    .profile_heading {
        @apply h-64 w-full flex flex-col justify-center items-center bg-black;
    }
    .profile_avatar_wrapper {
        @apply rounded-full h-20 w-20;
    }
    .profile_avatar_wrapper img {
        @apply object-cover object-center h-full w-full rounded-full;
    }
    .profile_heading h3{
        @apply mt-6 text-lg font-semibold text-white;
    }
</style>

<section class="profile_heading">
    <div class="profile_avatar_wrapper">
        <img src={avatar_img} alt="profile avatar" />
    </div>
    <h3>{user_name}</h3>
</section>
<style lang="postcss">
.search_box {
    @apply my-8 mx-6 w-auto;
}
.search_box_inner {
    @apply flex flex-row;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.search_box_inner label {
    @apply flex justify-center items-center w-[-webkit-fill-available];
}
.search_box_inner label img {
    @apply h-6 w-6;
}
.search_box_inner input {
    @apply py-4 px-6 focus-visible:outline-0 appearance-none;
}
</style>

<section class="search_box">
    <div class="search_box_inner">
        <input id="search" type='text'/>
        <label for="search">
            <img src="/search_grey.png" alt="search"/>
        </label>
    </div>
</section>
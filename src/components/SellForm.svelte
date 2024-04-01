<script>
    import { ghana_locations } from '../lib/ghana_locations';
    import { pocketbase, currentUser } from '../lib/pocketbase';
    import { fade } from 'svelte/transition'

    let selectedCategory = '';
    let show_image_input = false;
    let show_categories = true;
    let show_product_details = false
    let show_location_list = false;
    let showPostSuccessModal = false;
    let showPostFailModal = false;
    let thumbnails = [];
    let title = '';
    let description = '';
    let price;
    let location_name = '';
    let location_region = '';
    let location_list;
    let location_input;
    let sell_form;
    let searchvalue = '';
    let error_msg = '';
    $: filteredLocations = ghana_locations.filter((v,i)=>{
            return(v.name.toLowerCase().includes(searchvalue.toLowerCase()) || v.region.toLowerCase().includes(searchvalue.toLowerCase()));
        })

    let userID = $currentUser.id

    const formData = new FormData();

    const setTitle = (e) => {
        title = e.target.value
        formData.append('title', e.target.value);
    }
    const setDescription = (e) => {
        description = e.target.value
        formData.append('description', e.target.value);
    }
    const setPrice = (e) => {
        price = e.target.value
        formData.append('price', e.target.value);
    }
    const setSelectedCategory = (e) => {
        selectedCategory = e.target.innerHTML;
        formData.append('category', e.target.innerHTML);
    }
    const setImages = (e) => {
        thumbnails = e.target.files
        for (let file of e.target.files) {
        formData.append('images', file);
    }
    }
    const setLocation = (e) => {
        location_name = e.target.dataset.location_name
        location_region = e.target.dataset.location_region

        location_input.value = location_name

        formData.append('location', e.target.dataset.location_name);
        formData.append('region', e.target.dataset.location_region);

        location_list.classList.add('h-0')
        location_list.classList.remove('h-auto')
        location_list.classList.remove('max-h-32')
        show_location_list = false
    }
    const to_image_input = () => {
        show_categories = false
        show_image_input = true
        show_product_details = false
        thumbnails = []
    }
    const to_categories = () => {
        show_product_details = false
        show_categories = true
        show_image_input = false
        selectedCategory = '';
    }
    const to_product_details = () => {
        console.log(thumbnails)
        show_product_details = true
        show_categories = false
        show_image_input = false
    }
    const filterLocations = (e) => {
        searchvalue = e.target.value;
        
        show_location_list = true
        location_list.classList.remove('h-0')
        location_list.classList.add('h-auto')
        location_list.classList.add('max-h-32')
    }
    const submit_advert = async () => {
        formData.append("user", $currentUser.id)
        formData.append("contact_number", $currentUser.username)
        try {
            const record = await pocketbase.collection('adverts').create(formData);
            console.log(record)
            postSuccess();
        } catch (error) {
            console.log(error)
            error_msg = error.dataset.user.message || error.message
            postFail();
        }
    }
    const postSuccess = () => {
        sell_form.classList.remove('px-4')
        show_product_details = false;
        showPostSuccessModal = true;
    }
    const postFail = () => {
        sell_form.classList.remove('px-4')
        show_product_details = false;
        showPostFailModal = true;
    }
    const resetSellForm = () => {
        sell_form.classList.add('px-4')
        show_image_input = false;
        show_categories = true;
        show_product_details = false
        show_location_list = false;
        showPostSuccessModal = false;
        showPostFailModal = false;
    }
</script>

<style lang="postcss">
    .sell_form {
        @apply flex flex-col justify-center h-auto;
    }
    .categories {
        @apply flex flex-col w-full mb-8 grid grid-cols-category_grid gap-2 mt-12;
    }
    .categoryWrapper {
        @apply relative flex justify-center items-center py-6 border border-border_grey h-24;
    }
    .categoryWrapper input[type="radio"]{
        @apply opacity-0 w-0 h-0;
    }
    .categoryWrapper label{
        @apply font-medium text-sm mb-0 text-black_two z-10 text-center;
    }
    .categoryWrapper .cell-bg {
        @apply h-full w-full absolute;
    }
    .categoryWrapper input:checked ~ label {
        @apply text-highlight;
    }
    .categoryWrapper input:checked + .cell-bg {
        @apply text-white bg-black_two;
    }
    .location_wrapper {
        @apply flex flex-row;
    }
    .location_wrapper h3 {
        @apply mr-6;
    }
    .search_locations_input_wrapper {
        @apply w-full border-b;
    }
    .search_locations_input_wrapper input {
        @apply w-full ;
    }
    .image_input_wrapper input {
        @apply w-0 h-0;
    }
    .image_input_wrapper {
        @apply w-full flex flex-col items-center justify-center mt-24;
    }
    .image_input_wrapper img {
        @apply w-28 h-28;
    }
    .image_input_wrapper label {
        @apply border-2 border-border_grey p-6;
    }
    .thumbnail_wrapper {
        @apply grid grid-cols-upload_thumbnail_grid my-8 gap-2;
    }
    .thumbnail {
        @apply h-16;
    }
    .thumbnail img {
        @apply object-cover object-center w-full h-full;
    }
    .product_details_form {
        @apply mt-16;
    }
    .form_item{
        @apply flex flex-col mb-10 w-full relative bg-transparent rounded-2xl border-2 border-black_two;
    }
    .form_item label {
        @apply w-fit absolute bg-black_two font-semibold text-sm text-white -top-5 py-2 px-3.5 left-4 mb-5 rounded-lg;
    }
    input[type="text"], textarea, input[type="number"] {
        @apply text-black text-lg bg-transparent py-5 px-8 rounded-2xl w-full focus-visible:text-black focus-visible:outline-0 appearance-none;
    }
    .location_list {
        @apply overflow-y-scroll;
    }
    .location_input.form_item {
        @apply mb-0;
    }
    .nextWrapper, .backWrapper {
        @apply flex flex-row items-center text-white py-3 px-6 rounded-[1.25rem] cursor-pointer bg-prime;
    }
    .backWrapper {
        @apply bg-white text-black border;
    }
    .nextWrapper span, .backWrapper span, .nextWrapper input {
        @apply text-lg font-medium;
    }
    .navigation {
        @apply flex flex-row w-full justify-between mt-8;
    }
    .successModal, .failureModal {
        @apply h-[95vh] flex flex-col justify-center items-center w-full bg-black;
    }
    .failureModal {
        @apply px-7;
    }
    .successHeader {
        @apply text-white font-semibold text-xl mt-4;
    }
    .successPara {
        @apply px-6 text-white mt-6 text-justify font-medium;
    }
    .signInFailBtn {
        @apply bg-white flex flex-col justify-center items-center py-5 mx-7 my-6 w-[-webkit-fill-available] rounded-2xl cursor-pointer;
    }
    .signInFailBtn span {
        @apply text-prime font-semibold;
    }
</style>

<section class="sell_form px-4" bind:this={sell_form}>
    <!-- <h3>Select a category</h3> -->
    {#if show_categories}
        <div class="categories">
            <div class="categoryWrapper">
                <input id="property" type="radio" name="category"/>
                <div class="cell-bg"></div>
                <label for="property" on:click={setSelectedCategory}>Property</label>
            </div>
            <div class="categoryWrapper">
                <input id="vehicles" type="radio" name="category"/>
                <div class="cell-bg"></div>
                <label for="vehicles" on:click={setSelectedCategory}>Vehicles</label>
            </div>
            <div class="categoryWrapper">
                <input id="electronics" type="radio" name="category"/>
                <div class="cell-bg"></div>
                <label for="electronics" on:click={setSelectedCategory}>Electronics</label>
            </div>
            <div class="categoryWrapper">
                <input id="clothing" type="radio" name="category"/>
                <div class="cell-bg"></div>
                <label for="clothing" on:click={setSelectedCategory}>Clothing</label>
            </div>
            <div class="categoryWrapper">
                <input id="health" type="radio" name="category"/>
                <div class="cell-bg"></div>
                <label for="health" on:click={setSelectedCategory}>Health</label>
            </div>
            <div class="categoryWrapper">
                <input id="beauty" type="radio" name="category"/>
                <div class="cell-bg"></div>
                <label for="beauty" on:click={setSelectedCategory}>Beauty</label>
            </div>
            <div class="categoryWrapper">
                <input id="sports" type="radio" name="category"/>
                <div class="cell-bg"></div>
                <label for="sports" on:click={setSelectedCategory}>Sports</label>
            </div>
            <div class="categoryWrapper">
                <input id="books" type="radio" name="category"/>
                <div class="cell-bg"></div>
                <label for="books" on:click={setSelectedCategory}>Books</label>
            </div>
            <div class="categoryWrapper">
                <input id="other" type="radio" name="category"/>
                <div class="cell-bg"></div>
                <label for="other" on:click={setSelectedCategory}>Other</label>
            </div>
        </div>

        {#if selectedCategory != ''}
        <div class="navigation">
            <div class="nextWrapper" on:click={to_image_input}>
                <span>Next</span>
            </div>
        </div>
        {/if}
    {/if}
    {#if show_image_input}
        <div class="image_input_wrapper">
            <input id="image_input" type="file" multiple on:change={setImages}/>
            <label for="image_input">
                <img src="/upload.png" />
            </label>

            {#if thumbnails.length > 0}
                <div class="thumbnail_wrapper">
                    {#each thumbnails as thumbnail, index}
                        <div class="thumbnail">
                            <img src={URL.createObjectURL(thumbnail)} alt={thumbnail.name + index} />
                        </div>
                    {/each}
                </div>
            {/if}
        </div>
        <div class="navigation">
            <div class="backWrapper" on:click={to_categories}>
                <span>Back</span>
            </div>
            {#if thumbnails.length > 0}
                <div class="nextWrapper" on:click={to_product_details}>
                    <span>Next</span>
                </div>
            {/if}
        </div>
    {/if}
    {#if show_product_details}

    <div class="product_details_form">
        <div class="form_item">
            <label for="title">Title</label>
            <input id="title" type="text" on:change={setTitle}/>
        </div>
        <div class="form_item">
            <label for="description">Description</label>
            <textarea id="description" on:change={setDescription}></textarea>
        </div>
        <div class="form_item">
            <label for="price">Price (GHC)</label>
            <input id="price" type="number" on:change={setPrice}/>
        </div>
        <div class="form_item location_input">
            <label for="location">Location</label>
            <input bind:this={location_input} id="location" type="text" autocomplete="off" on:keyup={filterLocations}/>
        </div>
        <ul class="location_list" bind:this={location_list}>
            {#if show_location_list}
                {#each filteredLocations as loca, i}
                    <li data-location_name={loca.name} data-location_region={loca.region} class="flex flex-col px-10 py-3 hover:bg-border_grey" on:click={setLocation}>
                        <h3 class="pointer-events-none font-semibold text-black mb-2">{loca.name}</h3>
                        <p class="pointer-events-none text-xs text-text_primary font-semibold">{loca.region}</p>
                    </li>
                {/each}
            {/if}
        </ul>
    </div>
    <div class="navigation">
        <div on:click={to_image_input} class="backWrapper">
            <span>Back</span>
        </div>
        {#if selectedCategory != '' && thumbnails.length > 0 && title != '' && description != '' && price > 0 && location_name != '' && location_region != ''}
            <div on:click={submit_advert} class="nextWrapper">
                <span>Post</span>
            </div>
        {/if}
    </div>

    {/if}
    {#if showPostSuccessModal}
        <div class='successModal' transition:fade>
            <video autoplay muted>
                <source src="/animatedTick.webm" type="video/webm">
                Your browser does not support the video tag.
            </video>
            <div class="successHeader">
                <h1>Advert created successfully</h1>
            </div>
            <div class="signInFailBtn" on:click={resetSellForm}>
                <span>BACK</span>
            </div>
        </div>
    {/if}
    {#if showPostFailModal}
    <div class='failureModal' transition:fade>
        <video autoplay muted>
            <source src="/error.webm" type="video/webm">
            Your browser does not support the video tag.
        </video>
        <div class="successHeader">
            <h1>Unable to create your advert.</h1>
        </div>
        <div class="mt-8">
            <p class="text-center text-white mb-4">{error_msg}.</p>
        </div>
        <div class="signInFailBtn" on:click={resetSellForm}>
            <span>BACK</span>
        </div>
    </div>
    {/if}
</section>
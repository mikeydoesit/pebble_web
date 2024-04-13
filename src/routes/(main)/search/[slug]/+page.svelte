<script>
    import PageHeading from '../../../../components/PageHeading.svelte'
    import SearchBox from '../../../../components/SearchBox.svelte';
    import Filter from '../../../../components/Filter.svelte';
    import ProductList from '../../../../components/ProductList.svelte';
    import CategorySelect from '../../../../components/CategorySelect.svelte';
    import LocationSelect from '../../../../components/LocationSelect.svelte';
    import FilterSelect from '../../../../components/FilterSelect.svelte';
    import { pocketbase } from "../../../../lib/pocketbase";
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';

    let show_category_select = false
    let show_location_select = false
    let show_filter_select = false

    let category = $page.params.slug.charAt(0).toUpperCase() + $page.params.slug.slice(1)

    let generated_list = []

    const toggle_category_select = () => {
        show_category_select = !show_category_select
    }

    const toggle_location_select = () => {
        show_location_select = !show_location_select
    }

    const toggle_filter_select = () => {
        show_filter_select = !show_filter_select
    }

    const set_category = (e) => {
        category = e.target.innerHTML
        goto(`/search/${category.toLowerCase()}`);
        generate_new_list()
    }

    const generate_new_list = async () => {
        const records = await pocketbase.collection('adverts').getFullList({
            sort: '-created',
            filter: `category = "${category}"`
        });
        generated_list = records
    }

    onMount(async () => {
        const records = await pocketbase.collection('adverts').getFullList({
            sort: '-created',
            filter: `category = "${category}"`
        });
        generated_list = records
    })
</script>

<style lang="postcss">
    .search_page {
        @apply h-auto w-full;
    }
</style>

<section class="search_page">
    <PageHeading 
        page_title={'Search'} 
        back_btn={true}    
    />
    <SearchBox />
    <Filter 
        current_category={category} 
        toggle_category={toggle_category_select}
        toggle_filter={toggle_filter_select}
        toggle_location={toggle_location_select}
        />
    <ProductList 
        selected_category={category} 
        list={generated_list}
    />

    {#if show_category_select}
        <CategorySelect
            hide_element={toggle_category_select}
            select_category={set_category}
        />
    {/if}
    {#if show_location_select}
        <LocationSelect
            hide_element={toggle_location_select}
        />
    {/if}
    {#if show_filter_select}
        <FilterSelect
            hide_element={toggle_filter_select} 
        />
    {/if}
</section>
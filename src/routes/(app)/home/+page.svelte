<script>
    import CategoryGrid from '../../../components/CategoryGrid.svelte';
    import HomepageFeatured from '../../../components/HomepageFeatured.svelte';
    import PageHeading from '../../../components/PageHeading.svelte'
    import Search from '../../../components/SearchBox.svelte'
</script>

<PageHeading 
    back_btn={false}
    page_title={'HOME'}
/>
<Search />
<CategoryGrid />
<HomepageFeatured />
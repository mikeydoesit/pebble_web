<script>
    import PageHeading from '../../../components/PageHeading.svelte';
    import SellForm from '../../../components/SellForm.svelte';
    import { pocketbase } from '../../../lib/pocketbase';

    if(!pocketbase.authStore.isValid) {
        window.location.replace('/auth')
    }
</script>

<section>
    <PageHeading 
        page_title='SELL'
        back_btn={true}
    />
    <SellForm />
</section>

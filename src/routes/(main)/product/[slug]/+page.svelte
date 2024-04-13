<script>
    import { page } from '$app/stores'
    import { onMount } from 'svelte'
    import { pocketbase } from '../../../../lib/pocketbase';
    import ProductSwiper from '../../../../components/ProductSwiper.svelte';
    import ProductDetails from '../../../../components/ProductDetails.svelte';
    import ProductSeller from '../../../../components/ProductSeller.svelte';
    import ProductAction from '../../../../components/ProductAction.svelte';

    let item = $page.params.slug
    let generated_product = {}
    let generated_seller = {}

    onMount(async () => {
        const record = await pocketbase.collection('adverts').getOne(item, {
            expand: 'user'
        });

        console.log(record)

        generated_product = record
        generated_seller = record.expand.user
    })

    $: product = generated_product
    $: seller = generated_seller
</script>

<main>
    <ProductSwiper
        product_id={item}
        image_array={product.images}
    />
    <ProductDetails
        title={product.title}
        price={product.price}
        location={product.location}
        region={product.region}
        description={product.description}
    />
    <ProductAction />
    <ProductSeller
        avatarURL={`http://127.0.0.1:8090/api/files/users/${seller.id}/${seller.avatar}`}
        avatar_name={seller.name}
        seller_email={seller.email}
        seller_number={seller.username}
     />
</main>
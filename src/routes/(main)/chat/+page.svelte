<script>
    import { pocketbase } from '../../lib/pocketbase';

    if(!pocketbase.authStore.isValid) {
        window.location.replace('/auth')
    }
</script>

<section>
    Chat
</section>
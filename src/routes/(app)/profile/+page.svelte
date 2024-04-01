<script>
    import { pocketbase, currentUser } from '../../../lib/pocketbase';
    import ProfileHeading from '../../../components/ProfileHeading.svelte';
	import ProfileContent from '../../../components/ProfileContent.svelte';

    if(!pocketbase.authStore.isValid) {
        window.location.replace('/auth')
    }
</script>

<section>
    <ProfileHeading 
        user_name={$currentUser.name}
        avatar_img={'http://127.0.0.1:8090/api/files/users/' + $currentUser.id + '/' + $currentUser.avatar} 
    />
    <ProfileContent />
</section>
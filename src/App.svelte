<script>
    import LoginScreen from "./LoginScreen.svelte";
    import { currentUser } from "./lib/pocketbase";
    import UserScreen from "./UserScreen.svelte";
    import PocketBase from "pocketbase"
    import { PUBLIC_POCKETBASE_URL } from '$env/static/public'

    const pb = new PocketBase(PUBLIC_POCKETBASE_URL)

    const testPB = () => {
        // const authData = await pb.admins.authWithPassword('michaelldninc@gmail.com', 'chikfi1a$@')
        // console.log(pb.authStore.token.toString())
        console.log(pb)
    }
    // testPB()
  </script>
  
  {#if !$currentUser}
    <LoginScreen />
  {:else}
    <UserScreen />
  {/if}
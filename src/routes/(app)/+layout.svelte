<script>
  import Tapbar from "../../components/Tapbar.svelte";
  import "../../styles/global.css";
</script>

<style lang="postcss">
  .layout_wrapper_with_tapbar {
      @apply relative max-w-[576px] bg-white h-screen;
  }
</style>

<section class="layout_wrapper_with_tapbar">
  <slot />
  <Tapbar />
</section>
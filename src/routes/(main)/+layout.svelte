<script>
  import "../../styles/global.css";
</script>
  
  <style lang="postcss">
    .layout_wrapper_without {
        @apply bg-main_bg h-screen relative;
    }
  </style>
  
  <main class="layout_wrapper_without">
    <slot />
  </main>
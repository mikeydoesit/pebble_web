<script>
    import "../styles/global.css";
  </script>
  
  <style lang="postcss">
    .layout_wrapper {
        @apply relative max-w-[576px] bg-white h-screen;
    }
  </style>
  
  <section class="layout_wrapper">
    <slot />
  </section>
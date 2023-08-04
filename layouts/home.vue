<script lang="ts" setup>
  definePageMeta({
    layout: "home",
  });
</script>
<template>
  <layout-loading />
  <div class="app two-cols">
    <layout-header />
    <layout-main>
        <slot />
    </layout-main>
  </div>
</template>
<style>
  .two-cols {
    grid-template-columns: 80px 1fr;
  }
</style>
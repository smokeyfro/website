<template>
  <layout-loading />
  <div class="app two-cols">
    <layout-header />
    <main class="bg:rgba(255,255,255,0.85)">
      <div class="font:16 font:18@xs lh:1.4 lh:1.5@xs overflow:hidden@lg h:full pl:30@xs">
        <slot />
      </div>
    </main>
  </div>
</template>
<style>
  @media ( min-width: 600px ) {
    .two-cols {
      grid-template-columns: 80px 1fr;
    }
  }

</style>
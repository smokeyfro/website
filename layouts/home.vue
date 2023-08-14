<template>
  <layout-loading />
  <div class="app two-cols">
    <layout-header />
    <main class="bg:rgba(255,255,255,0.85)">
      <div class="font:20 overflow:hidden h:full pl:30">
        <slot />
      </div>
    </main>
  </div>
</template>
<style>
  .two-cols {
    grid-template-columns: 80px 1fr;
  }
  .two-cols h1 {
    font-size: 60px;
  }
</style>
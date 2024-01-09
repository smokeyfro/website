<template>
  <layout-loading />
  <div class="app three-cols">
    <layout-header />
    <layout-aside>
      <slot name="aside" />
    </layout-aside>
    <main class="bg:rgba(255,255,255,0.85)">
      <div class="h:100vh">
        <div class="p:40 p:80@lg rel">
          <slot />
        </div>
      </div>
    </main>
  </div>
</template>
<style>
  .three-cols {
    grid-template-columns: 80px 200px 1fr;
  }
</style>
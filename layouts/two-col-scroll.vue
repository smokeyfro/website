<template>
  <layout-loading />
  <div class="app two-cols">
    <layout-header />
    <main class="bg:rgba(255,255,255,0.85)">
      <div class="font:20 overflow:hidden h:full">
        <perfect-scrollbar>
          <div class="h:100vh">
            <div class="p:80 rel">
              <slot />
            </div>
          </div>
        </perfect-scrollbar>
      </div>
    </main>
  </div>
</template>
<style>
  .two-cols {
    grid-template-columns: 80px 1fr;
  }
</style>
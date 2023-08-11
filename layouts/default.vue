<template>
  <layout-loading />
  <div class="app three-cols">
    <layout-header />
    <layout-aside>
      <slot name="aside" />
    </layout-aside>
    <main class="bg:rgba(255,255,255,0.85)">
      <div class="overflow:hidden h:100vh">
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
  .three-cols {
    grid-template-columns: 80px 200px 1fr;
  }
</style>
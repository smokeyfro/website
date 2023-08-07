<template>
  <layout-loading />
  <div class="app three-cols">
    <layout-header />
    <layout-aside>
      <slot name="aside" />
    </layout-aside>
    <main class="bg:rgba(255,255,255,0.85)">
      <div class="font:20 overflow:hidden h:full">
        <perfect-scrollbar>
          <slot />
        </perfect-scrollbar>
      </div>
    </main>
  </div>
</template>
<style>
  .three-cols {
    grid-template-columns: 80px 200px 1fr;
  }
  .three-cols h1 {
    font-size: 80px;
    line-height: .6;
  }
</style>
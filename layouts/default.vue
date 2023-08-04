
<template>
  <layout-loading />
  <div class="app three-cols">
    <layout-header />
    <layout-aside>
      <slot name="aside" />
    </layout-aside>
    <layout-main>
        <slot />
    </layout-main>
  </div>
</template>
<style>
  .three-cols {
    grid-template-columns: 80px 200px 1fr;
  }
</style>
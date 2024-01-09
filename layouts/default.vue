<template>
  <layout-loading />
  <div class="app three-cols">
    <layout-header />
    <layout-aside>
      <slot name="aside" />
    </layout-aside>
    <main class="bg:rgba(255,255,255,0.85)">
      <div class="min-height:100vh">
          <div class="min-height:100vh">
            <div class="p:40 p:80@lg rel max-width:960@lg">
              <slot />
            </div>
          </div>
      </div>
    </main>
  </div>
</template>
<style>
@media ( min-width: 768px ) {
  .three-cols {
    grid-template-columns: 80px 200px 1fr;
  }
}
</style>
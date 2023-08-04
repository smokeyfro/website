<template>
    <aside class="bg:rgba(255,255,255,0.9) rel br:1px|solid|#ccc">
        <div class="h:full fixed top:0 left:125 w:110 flex flex:col jc:center z:10">
            <slot />
        </div>
    </aside>
</template>
<style>
  aside nav a {
    padding: 5px 10px;
  }
  aside nav .router-link-exact-active {
    background: #1f2226;
    color: #fff;
    border-radius: 3px;
  }
</style>
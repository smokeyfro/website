<template>
    <aside class="bg:rgba(255,255,255,0.9) rel br:1px|solid|#ccc">
        <div class="h:full fixed top:0 left:125 w:110 flex flex:col jc:center z:10">
            <slot />
        </div>
    </aside>
</template>
<style>
aside nav a {
  display: block;
  color: #666;
}
aside nav a:after {
  display: inline-block;
  color: transparent;
  content: "→";
  transition: color .3s ease-out;
  margin-left: 10px;
}
aside nav .router-link-active {
  color: #111;
}
aside nav .router-link-active:after {
  color: #fc0;
}
</style>
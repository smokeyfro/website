<template>
    <aside class="bg:rgba(255,255,255,0.9) rel br:1px|solid|#ccc">
        <div class="h:full fixed top:0 left:130 w:140 flex flex:col jc:center z:10">
            <slot />
        </div>
    </aside>
</template>
<style>
aside nav a {
  display: block;
  color: #666;
  font-weight: 700;
  font-size: 20px;
  text-decoration: none;
  font-family: "Lora";
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
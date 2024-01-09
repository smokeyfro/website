<template>
    <aside class="rel">
        <div class="bg:rgba(255,255,255,0.9) br:1px|solid|#ccc@xs h:full fixed@xs top:0@xs left:80@xs w:full w:200@xs flex flex:row flex:col@xs jc:center@xs z:10">
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
@media ( min-width: 768px ) {
  aside nav a:after {
    display: inline-block;
    color: transparent;
    content: "→";
    transition: color .3s ease-out;
    margin-left: 10px;
  }
  aside nav .router-link-active:after {
    color: #fc0;
  }
}
@media ( max-width: 768px ) {
  aside nav {
    padding: 0.5rem 1.5rem 1.1rem;
    border-bottom: 1px solid #fff;
    width: 100%;
    justify-content: center;
  }
}
aside nav .router-link-active {
  color: #111;
}

</style>
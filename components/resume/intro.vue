<template>
    <div class="intro h:100vh@lg mt:40 mt:0@lg flex">
      <div class="flex flex:col flex:row@lg jc:start ai:center gap:30 mt:-50">
        <svg-sf />
        <div>
          <h1 class="mt:15 mb:5">{{ data.name }}</h1>
          <p class="m:0 font:20">A {{ data.title }} working remotely from {{ data.location }}.</p>
          <div class="m:0 mt:15 font:18 color:#1f2226_:where(a) text:center text:left@md download flex gap:20 color:#222">
            <a href="#">
              <svg class="w:14 h:14 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><defs></defs><path d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"></path><path d="M6 14h12v8H6z"></path></svg>
						  Print
					  </a>
            <a href="/Chris-Rault-Resume-2022-Edition.pdf" download="">
              <svg class="w:14 h:14 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><defs></defs><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"></path></svg> 
              Download PDF
            </a>
            <a href="https://linkedin.com/in/chrisrault" target="_blank" rel="nofollow noopen" class="ml-5">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
</template>
<script setup lang="ts">
  defineProps<{
    data: [object, array]
  }>()
</script>
<style>
main .intro h1 {
  font-size: 50px;
  font-weight: 800;
}
</style>
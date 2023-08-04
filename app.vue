<template>
  <nuxt-page />
</template>
<script setup lang="ts">
  onMounted(async () => {
      const [{ initRuntime }, { default: config }] = await Promise.all([
          import('@master/css'),
          import('./master.css')
      ])
      initRuntime(config)
  })
</script>
<style>
  html, body, #__nuxt { 
    min-height: 100vh; 
  }
  html { 
    font-family: system, -apple-system, ".SFNSText-Regular", "San Francisco", "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif;
    overflow: hidden;
  }
  body { 
    margin: 0; 
    padding: 0;
    overflow: hidden;
    background-color: #fff;
    background-image: url('/topography.svg'); 
    background-repeat: repeat;
    animation: color 9s infinite linear;
  }
  .app {
    width: 100%;
    display: grid;
    min-height: 100vh;
  }
  @keyframes color {
    0%   { background-color: #33CCCC; }
    20%  { background-color: #33CC36; }
    40%  { background-color: #B8CC33; }
    60%  { background-color: #FCCA00; }
    80%  { background-color: #33CC36; }
    100% { background-color: #33CCCC; }
  }
  main > div {
    overflow-x: hidden;
    overflow-y: scroll;
    height: max-content;
    min-height: min-content;
  }
  .btn {
    display: inline-block;
    border: 0;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    outline: 2px solid;
  }
  .btn:hover {
    outline-color: #fc0;
  }
  .btn-primary {
    background: #1f1f19;
    outline-color: #1f1f19;
    color: #fff;
  }
  .btn-default {
    background: #fff;
    outline-color: #222;
    color: #222;
  }
  .btn-lg {
    padding: 10px 15px;
  }
</style>
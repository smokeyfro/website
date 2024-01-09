<template>
    <h2 class="mb:40">Projects</h2>
    <ul class="list-style:none m:0 p:0 grid-cols:1 grid-cols:2@md gap:20 gap:40@md">
      <li v-for="{ title, status, url, summary } in data" :key="id">
        <h3 class="m:0">{{ title }}</h3>
        <p class="my:5">{{ summary }}</p>
        <p class="m:0"><nuxt-link :to="url" class="f:bold text:20 text-decoration:underline color:#222">View project</nuxt-link></p>
      </li>
    </ul>
</template>
<script setup lang="ts">
  defineProps<{
    data: [object, array]
  }>()
</script>
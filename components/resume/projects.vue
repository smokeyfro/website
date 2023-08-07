<template>
    <h2 class="mb:40">Projects</h2>
    <ul class="list-style:none m:0 p:0 grid-cols:2 gap:40">
      <li v-for="{ tile, status, url, summary } in data" :key="id">
        <h3 class="m:0">{{ tile }}</h3>
        <p class="my:5">{{ summary }}</p>
        <p class="mt:0"><a :href="url" :title="`Check out ${name}`">View the project</a></p>
      </li>
    </ul>
</template>
<script setup lang="ts">
  defineProps<{
    data: [object, array]
  }>()
</script>
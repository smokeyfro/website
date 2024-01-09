<template>
    <h2 class="mb:40">Skills</h2>
    <ul class="list-style:none m:0 p:0 grid-cols:1 grid-cols:2@md gap:0 gap:40@md">
      <li v-for="{ title, description } in data" :key="id">
        <h3 class="m:0">{{ title }}</h3>
        <p class="mt:5">{{ description }}</p>
      </li>
    </ul>
</template>
<script setup lang="ts">
  defineProps<{
    data: [object, array]
  }>()
</script>
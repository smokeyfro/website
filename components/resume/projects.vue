<template>
    <h2>Projects</h2>
    <ul class="list-style:none m:0 p:0 grid-cols:2 gap:20">
      <li v-for="{ name, status, url, summary } in data" :key="id">
        <h3 class="m:0">{{ name }}</h3>
        <p class="mt:5">{{ summary }}</p>
        <p>{{ status }} &middot; <span>{{ url }}</span></p>
        <p></p>
      </li>
    </ul>
</template>
<script setup lang="ts">
  defineProps<{
    data: [object, array]
  }>()
</script>
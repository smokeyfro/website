<template>
    <!-- Skills -->
    <h2>Skills</h2>
    <ul class="list-style:none m:0 p:0 grid-cols:2 gap:20">
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
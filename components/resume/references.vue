<template>
    <h2 class="mb:40">References</h2>
    <ul class="list-style:none m:0 p:0 grid-cols:1 grid-cols:2@md gap:20 gap:40@md mb:70@md">
      <li v-for="{ title, role, company, relation, image, i } in data" :key="i">
        <h3 class="m:0">{{ title }}</h3>
        <p class="mt:5 mb:0">{{ role }} @ {{ company }}</p>
      </li>
    </ul>
</template>
<script setup lang="ts">
  defineProps<{
    data: [object, array]
  }>()
</script>
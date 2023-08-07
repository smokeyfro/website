<template>
    <h2 class="mb:40">References</h2>
    <ul class="list-style:none m:0 p:0 grid-cols:2 gap:40 mb:70">
      <li v-for="{ name, title, company, relation, image, i } in data" :key="i">
        <h3 class="m:0">{{ name }}</h3>
        <p class="mt:5 mb:0">{{ title }} @ {{ company }}</p>
      </li>
    </ul>
</template>
<script setup lang="ts">
  defineProps<{
    data: [object, array]
  }>()
</script>
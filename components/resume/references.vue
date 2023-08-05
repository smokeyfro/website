<template>
    <!-- References -->
    <h2>References</h2>
    <ul class="list-style:none m:0 p:0 grid-cols:2 gap:20">
      <li v-for="{ name, title, company, relation, image, i } in data" :key="i">
        <h3 class="m:0">{{ name }}</h3>
        <p class="mt:5">{{ title }} @ {{ company }}</p>
      </li>
    </ul>
</template>
<script setup lang="ts">
  defineProps<{
    data: [object, array]
  }>()
</script>
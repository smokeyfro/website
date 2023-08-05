<template>
    <!-- Experience -->
    <h2>Work experience</h2>
    <ul class="list-style:none m:0 p:0 grid-cols:2 gap:20">
      <li v-for="{ id, company, summary, role, location, date } in data" :key="id">
        <span class="color:#444 text:14">{{ location }} | {{ date }}</span>
        <h3 class="m:0">{{ role }} @ {{ company }}</h3>
        <p class="mt:5">{{ summary }}</p>
      </li>
    </ul>
</template>
<script setup lang="ts">
  defineProps<{
    data: [object, array]
  }>()
</script>
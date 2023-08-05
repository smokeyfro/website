<template>
    <!-- Education -->
    <h2>Education</h2>
    <ul class="list-style:none m:0 p:0 grid-cols:2 gap:20">
      <li v-for="{ topic, date, location, organization } in data" :key="id">
        <h3 class="m:0">{{ topic }}</h3>
        <p class="mt:5 mb:0">{{ date }} &middot; {{ organization }} - {{ location }}</p>
      </li>
    </ul>
</template>
<script setup lang="ts">
  defineProps<{
    data: [object, array]
  }>()
</script>
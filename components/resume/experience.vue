<template>
    <h2 class="mb:40">Work experience</h2>
    <ul class="list-style:none m:0 p:0 flex flex:col">
      <li v-for="{ id, company, summary, role, location, date } in data" :key="id" class="flex flex:col flex:row@md">
        <div class="color:#444 font:14 min-width:180px mt:13">{{ date }}</div>
        <div>
          <h3 class="m:0">{{ role }} @ {{ company }}</h3>
          <p class="mt:5">{{ summary }}</p>
        </div>
      </li>
    </ul>
</template>
<script setup lang="ts">
  defineProps<{
    data: [object, array]
  }>()
</script>
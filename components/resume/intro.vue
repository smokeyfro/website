<template>
    <div class="mt:40">
        <span>The online, always-up-to-date resume of</span>
        <h1 class="m:0">{{ data.name }}</h1>
        <p class="m:0">A {{ data.title }} working remotely from {{ data.location }}.</p>
    </div>
</template>
<script setup lang="ts">
  defineProps<{
    data: [object, array]
  }>()
</script>
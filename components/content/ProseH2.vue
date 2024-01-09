<template>
  <h2 :id="id">
    <slot />
  </h2>
</template>

<script setup lang="ts">
import { useRuntimeConfig } from '#imports'
defineProps<{ id?: string }>()
const heading = 2
</script>
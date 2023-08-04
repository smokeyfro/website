<script setup lang="ts">
import type { Sections } from '~/types'

defineProps<{
  tags: Array<string>
  section: Sections
}>()
</script>

<template>
  <ul>
    <li v-for="tag in tags" :key="tag" class="whitespace:nowrap">
      <nuxt-link :to="`/${section}/tags/${tag}`">
        {{ replaceHyphen(tag) }}
      </nuxt-link>
    </li>
  </ul>
</template>
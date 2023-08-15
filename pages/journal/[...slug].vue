<template>
  <nuxt-layout>
    <template #aside>
      <base-nav :subnav="NavLinks[5].subnav" />
    </template>
    <div v-if="page">
      <base-title>{{ page.title }}</base-title>
      <base-excerpt>{{ page.description }}</base-excerpt>
      <div v-if="page.tags && page.tags.length" class="flex ai:center jc:start gap:10 py:1 text:14">
        <span v-for="(tag, index) in page.tags" :key="index">
          {{ tag }}
        </span>
      </div>
      <content-renderer :value="page">
        <template #empty></template>
      </content-renderer>
    </div>
  </nuxt-layout>
</template>

<script setup lang="ts">
  import type { Post } from '~/types'
  const { path } = useRoute()
  const { data: page } = await useAsyncData(path.replace(/\/$/, ''),
    () => queryContent<Post>('journal')
      .where({ _path: path })
      .findOne(),
  )
</script>
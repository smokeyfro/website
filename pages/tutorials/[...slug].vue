<template>
  <nuxt-layout>
    <template v-slot:aside>
      <base-nav :subnav="NavLinks[4].subnav" />
    </template>
    <div class="max-width:760">
      <base-title>{{ page.title }}</base-title>
      <base-excerpt>{{ page.excerpt }}</base-excerpt>
      <div v-if="page.tags && page.tags.length" class="flex ai:center jc:start gap:15">
        <span v-for="(tag, index) in page.tags" :key="index" v-html="tag" />
      </div>
      <content-doc />
    </div>
  </nuxt-layout>
</template>
<script setup lang="ts">
  import type { Tutorial } from '~/types'
  const { path } = useRoute()
  const { data: page } = await useAsyncData(path.replace(/\/$/, ''),
    () => queryContent<Tutorial>(path)
      .only(['title','excerpt','tags'])
      .findOne(),
  )
</script>
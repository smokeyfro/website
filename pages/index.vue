<template>
<nuxt-layout name="home">
  <div class="grid-cols:2 h:full w:full" v-if="page">
    <div class="flex h:full ai:center ji:flex-end">
      <div class="space-y:6 text:xl p:80">
        <h1 class="color:rgba(19,23,27,0.94902) font:40 m:0">{{ page.title }}</h1>
        <p class="f:25 lh:1.4 mt:15" v-html="page.description" />
        <content-renderer :value="page" />
      </div>
    </div>
    <home-image />
  </div>
</nuxt-layout>
</template>
<script setup lang="ts">
  import type { Page } from '~/types'
  const { path } = useRoute()
  const { data: page } = await useAsyncData(path.replace(/\/$/, ''),
    () => queryContent<Page>('/')
      .where({ _path: path })
      .findOne(),
  )
</script>
<template>
<nuxt-layout name="home">
  <div class="grid-cols:2 h:full">
    <home-image />
    <div class="flex ai:center ji:flex-end h:full">
      <div class="max-w:3xl space-y:6 px:30 font:sans text:3xl">
        <h1 class="f:50 mb:0 color:rgba(19,23,27,0.94902)">{{ page.title }}</h1>
        <p class="f:25" v-html="page.excerpt" />
        <content-renderer :value="page" />
      </div>
    </div>
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
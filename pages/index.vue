<template>
<nuxt-layout name="home">
  <div class="grid-cols:2@xs h:full@xs w:full overflow:hidden@xs" v-if="page">
    <div class="flex flex:col flex:row@xs h:full ai:center@xs ji:flex-end@xs">
      <div class="p:25 p:40@xs p:80@md pr:0@xs">
        <h1 class="color:rgba(19,23,27,0.94902) font:30 font:40@xs m:0">{{ page.title }}</h1>
        <p class="f:18 f:22@xs lh:1.4 mt:15" v-html="page.description" />
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
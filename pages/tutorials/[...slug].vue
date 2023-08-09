<template>
  <nuxt-layout>
    <template v-slot:aside>
      <base-nav :subnav="NavLinks[4].subnav" />
    </template>
    <div class="max-width:760">
      <base-title>{{ page.title }}</base-title>
      <base-excerpt>{{ page.excerpt }}</base-excerpt>
      <div class="flex gap:10 mb:20">
        <span class="px:5 py:2"
        :class="{
                'bg:green color:#fff': page.topic === 'Learning Vue',
                'bg:orange color:#fff': page.topic === 'Going Headless',
              }">{{ page.topic }}</span>
        &middot;
        <span v-if="page.tags && page.tags.length" class="flex ai:center jc:start gap:15">
          <span v-for="(tag, index) in page.tags" :key="index" v-html="tag" class="bg:#ddd px:5 py:2" />
        </span>
        &middot;
        <span class="px:6 py:2">{{ formatDate(page.date) }}</span>
      </div>
      <content-doc :head="false" />
    </div>
  </nuxt-layout>
</template>
<script setup lang="ts">
  import type { Tutorial } from '~/types'
  const { path } = useRoute()
  const { data: page } = await useAsyncData(path.replace(/\/$/, ''),
    () => queryContent<Tutorial>(path)
      .only(['title','excerpt','date','topic','tags'])
      .findOne(),
  )
</script>
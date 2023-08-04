<template>
  <nuxt-layout>
    <template v-slot:aside>
      <base-nav :subnav="NavLinks[1].subnav" />
    </template>
    <!-- <h1 class="mb:5">{{ video.title }}</h1>
    <p class="mb:40">{{ video.excerpt }}</p> -->
      <lite-youtube
        :videoid="video.video_id"
        :playlabel="video.title"
        :start="video.start ? video.start : 0"
        params="controls=0&start=10&end=30&modestbranding=2&rel=0&enablejsapi=1"
        class="video"
      />
  </nuxt-layout>
</template>
<style>
.video {
  width: 100%;
  height: 650px;
  max-width: 100%;
  border-radius: 5px;
  overflow: hidden;
}
</style>
<script setup lang="ts">
  import type { VideoPreview } from '~/types'
  const { path } = useRoute()
  const { data: video } = await useAsyncData(path.replace(/\/$/, ''),
    () => queryContent<Video>('videos')
      .where({ _path: path })
      .findOne(),
  )
  const title: string = video.value?.title || ''
  const description: string = video.value?.excerpt || ''
  const image: string = video.value?.image || ''
  const ogImage: string = video.value?.image || ''
  useHead({
    title: video.value?.title || '',
    meta: [
      { 
        name: 'description', 
        content: description },
      {
        name: 'description',
        content: description,
      },
      { 
        property: 'og:site_name', 
        content: 'SmokeyFro' 
      },
      { 
        hid: 'og:type', 
        property: 'og:type', 
        content: 'website' 
      },
      {
        property: 'og:url',
        content: 'https://smokeyfro.com',
      },
      {
        property: 'og:title',
        content: title,
      },
      {
        property: 'og:description',
        content: description,
      },
      {
        property: 'og:image',
        content: ogImage || image,
      },
      { 
        name: 'twitter:site', 
        content: '@smokeyfro' 
      },
      { 
        name: 'twitter:card', 
        content: 'summary_large_image' 
      },
      {
        name: 'twitter:url',
        content: 'https://smokeyfro.com',
      },
      {
        name: 'twitter:title',
        content: title,
      },
      {
        name: 'twitter:description',
        content: description,
      },
      {
        name: 'twitter:image',
        content: ogImage || image,
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: `https://smokeyfro.com${path}`,
      },
    ],
  })
</script>
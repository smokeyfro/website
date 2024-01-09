<template>
  <nuxt-layout>
    <template v-slot:aside>
      <base-nav :subnav="NavLinks[1].subnav" />
    </template>
    <div v-if="page">
      <base-title>{{ page.title }}</base-title>
      <base-excerpt>{{ page.description }}</base-excerpt>
      <lite-youtube
        :videoid="page.video_id"
        :playlabel="page.title"
        :start="page.start ? page.start : 0"
        params="controls=0&modestbranding=2&rel=0&enablejsapi=1"
        class="video"
      />
    </div>
  </nuxt-layout>
</template>
<style>
.video {
  width: 100%;
  height: auto;
}
</style>
<script setup lang="ts">
  import type { Video } from '~/types'
  const { path } = useRoute()
  const { data: page } = await useAsyncData(path.replace(/\/$/, ''),
    () => queryContent<Video>('videos')
      .where({ _path: path })
      .findOne(),
  )
</script>
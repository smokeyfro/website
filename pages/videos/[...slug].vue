<template>
  <nuxt-layout>
    <template v-slot:aside>
      <base-nav :subnav="NavLinks[1].subnav" />
    </template>
    <base-title>{{ video.title }}</base-title>
    <base-excerpt>{{ video.excerpt }}</base-excerpt>
    <div class="w:full h:auto">
      <lite-youtube
        :videoid="video.video_id"
        :playlabel="video.title"
        :start="video.start ? video.start : 0"
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
  const { data: video } = await useAsyncData(path.replace(/\/$/, ''),
    () => queryContent<Video>('videos')
      .where({ _path: path })
      .findOne(),
  )
</script>
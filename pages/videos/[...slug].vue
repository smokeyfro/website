<template>
  <nuxt-layout>
    <template v-slot:aside>
      <base-nav :subnav="NavLinks[1].subnav" />
    </template>
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
  import type { Video } from '~/types'
  const { path } = useRoute()
  const { data: video } = await useAsyncData(path.replace(/\/$/, ''),
    () => queryContent<Video>('videos')
      .where({ _path: path })
      .findOne(),
  )
</script>
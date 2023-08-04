<template>
  <nuxt-layout>
    <template v-slot:aside>
      <base-nav :subnav="NavLinks[1].subnav" />
    </template>
    <base-title>Videos</base-title>
    <base-excerpt>I'm an amateur videographer and mostly shoot fauna and flora, wildlife, live music, food and festivals. Check out my gear list if you're interested.</base-excerpt>
    <ul class="list-style:none m:0 p:0 grid-cols:3 gap:20">
      <li v-for="{ _path: slug, title, excerpt } in videos" :key="slug">
        <nuxt-link :to="slug" class="text-decoration:none color:#222">
          <h2>{{ title }}</h2>
          <p>{{ excerpt }}</p>
        </nuxt-link>
      </li>
    </ul>
  </nuxt-layout>
</template>

<script setup lang="ts">
import type { Video } from '~/types'

const { data: videos } = await useAsyncData('videos',
  () => queryContent<Video>('videos')
    .where({ draft: { $ne: false } })
    .find(),
)
</script>
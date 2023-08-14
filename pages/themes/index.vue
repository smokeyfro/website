<template>
  <nuxt-layout name="two-col-scroll">
    <template v-slot:aside>
      <base-nav :subnav="NavLinks[3].subnav" />
    </template>
    <base-title>Themes</base-title>
    <base-excerpt>My growing collection of themes for multiple platforms.</base-excerpt>
    <ul class="list-style:none m:0 mt:-20 ml:-30 p:0 grid-cols:3">
      <li v-for="{ _path: slug, title, excerpt, image, platform, release_date } in themes" :key="slug">
        <nuxt-link :to="slug" class="block text-decoration:none color:#222 r:5">
          <nuxt-img v-if="image" provider="cloudinary" :src="image" width="500" height="300" fit="cover" :alt="title" class="max-width:100%" />
          <div class="px:30">
            <h2 class="m:0">{{ title }}</h2>
            <div class="flex ai:center gap:10 mt:25 mb:10">
              <span class="px:6 py:2 f:14 r:3"
                :class="{
                'bg:pink color:#fff': platform === 'Gridsome',
                'bg:blue color:#fff': platform === 'WordPress',
                'bg:green color:#fff': platform === 'Nuxt',
              }">{{ platform }}</span>
              &middot;
              <span>{{ release_date }}</span>
            </div>
            <p class="mb:10">{{ excerpt }}</p>
            <p class="mt:0 mb:0"><span class="f:bold t:25 bb:1|solid|#ccc">View details →</span></p>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </nuxt-layout>
</template>
<script setup lang="ts">
import type { Theme } from '~/types'

const { data: themes } = await useAsyncData('themes',
  () => queryContent<Theme>('themes')
    .where({ draft: { $ne: false } })
    .find(),
)
</script>
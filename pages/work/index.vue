<template>
  <nuxt-layout name="work">
    <template v-slot:aside>
      <base-nav :subnav="NavLinks[2].subnav" />
    </template>
    <div class="max-width:960 rel">
      <base-title>Work</base-title>
      <base-excerpt>Below you'll find a few examples of my work that showcase my overall design style and the types of projects I've worked on.</base-excerpt>
    </div>
    <ul class="list-style:none m:0 p:0 grid-cols:2 gap:30">
      <li v-for="{ _path: slug, title, description, image, type } in work" :key="slug">
        <nuxt-link :to="slug" class="text-decoration:none color:#222 block bg:#fff b:1|solid|#ccc">
          <div class="w:full h:300 overflow:hidden">
            <nuxt-img v-if="image" provider="cloudinary" :src="image" width="400" height="auto" fit="cover" format="webp" loading="lazy" :alt="title" class="max-width:100% w:full" />
          </div>
          <div class="inline-block p:30">
            <h2 class="m:0">{{ title }}</h2>
            <p class="mt:10 mb:5">{{ description }}</p>
            <div class="flex gap:10 mt:15">
              <span class="px:5 py:2"
              :class="{
                'bg:pink color:#fff': type === 'Gridsome',
                'bg:orange color:#fff': type === 'Joomla',
                'bg:brown color:#fff': type === 'Design',
                'bg:red color:#fff': type === 'Nuxt',
                'bg:blue color:#fff': type === 'WordPress',
              }">{{ type }}</span>
            </div>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </nuxt-layout>
</template>
<script setup lang="ts">
import type { PortfolioPreview } from '~/types'

const { data: work } = await useAsyncData('work',
  () => queryContent<PortfolioPreview>('work')
    .where({ draft: { $ne: false } })
    .sort({ date: -1 })
    .find(),
)
</script>
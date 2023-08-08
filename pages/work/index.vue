<template>
  <nuxt-layout>
    <template v-slot:aside>
      <base-nav :subnav="NavLinks[2].subnav" />
    </template>
    <base-title>Work</base-title>
    <base-excerpt>Below you'll find a few examples of my work that showcase my overall design style and the types of projects I've worked on.</base-excerpt>
    <ul class="list-style:none m:0 p:0 grid-cols:2 gap:40">
      <li v-for="{ _path: slug, title, excerpt, thumb } in work" :key="slug">
        <nuxt-link :to="slug" class="text-decoration:none color:#222 block bg:#fff">
          <nuxt-img v-if="thumb" :src="thumb" width="500" height="300" fit="cover" format="webp" loading="lazy" :alt="title" class="max-width:100% w:full" />
          <div class="bg:#fff p:30 inline-block">
            <h2 class="mt:10 mb:0">{{ title }}</h2>
            <p class="mt:10 mb:5">{{ excerpt }}</p>
            <p class="m:0"><nuxt-link :to="slug" class="f:bold text:25 text-decoration:underline color:#222">View project</nuxt-link></p>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </nuxt-layout>
</template>
<script setup lang="ts">
import type { Portfolio } from '~/types'

const { data: work } = await useAsyncData('work',
  () => queryContent<Portfolio>('work')
    .where({ draft: { $ne: false } })
    .sort({ date: -1 })
    .find(),
)
</script>
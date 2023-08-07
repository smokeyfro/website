<template>
  <nuxt-layout>
    <template v-slot:aside>
      <base-nav :subnav="NavLinks[3].subnav" />
    </template>
    <base-title>Themes > Vanilla</base-title>
    <base-excerpt>My growing collection of themes for Gridsome and WordPress.</base-excerpt>
    <ul class="list-style:none m:0 p:0 grid-cols:3 gap:20">
      <li v-for="{ _path: slug, title, excerpt } in themes" :key="slug">
        <nuxt-link :to="slug" class="text-decoration:none color:#222">
          <h2>{{ title }}</h2>
          <p>{{ excerpt }}</p>
        </nuxt-link>
      </li>
    </ul>
  </nuxt-layout>
</template>
<script setup lang="ts">
import type { Theme } from '~/types'

const { data: themes } = await useAsyncData('themes',
  () => queryContent<Theme>('themes')
    .where({ draft: { $ne: false }, platform: 'Vanilla' })
    .find(),
)
</script>
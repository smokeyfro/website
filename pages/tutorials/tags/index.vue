<template>
  <nuxt-layout>
    <template v-slot:aside>
      <base-nav :subnav="NavLinks[4].subnav" />
    </template>
    <base-title>Tutorial tags</base-title>
    <div class="max-width:960 mt:30">
      <tags-cloud :section="section" />
    </div>
  </nuxt-layout>
</template>
<script setup lang="ts">
  import type { Sections } from '~/types'

  const title: string = 'All my tutorial tags'
  const description: string = 'Here\'s a list of all the tags used in my tutorials.'
  const section: Sections = 'tutorials'

  useHead({
    title,
    meta: [{ name: 'description', content: description }],
  })
</script>
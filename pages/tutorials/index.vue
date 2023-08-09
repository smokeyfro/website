<template>
  <nuxt-layout>
    <template v-slot:aside>
      <base-nav :subnav="NavLinks[4].subnav" />
    </template>
    <base-title>{{ title }}</base-title>
    <base-excerpt>{{ description }}</base-excerpt>
    <!-- <topics-cloud :section="section" /> -->
    <ul class="list-style:none m:0 p:0 grid-cols:2 gap:30">
      <li v-for="{ _path: slug, title, excerpt, image } in tutorials" :key="slug">
        <nuxt-link :to="slug" class="text-decoration:none color:#222">
          <h2>{{ title }}</h2>
          <p>{{ excerpt }}</p>
        </nuxt-link>
      </li>
    </ul>
  </nuxt-layout>
</template>
<script setup lang="ts">
  import type { TutorialPreview, Sections } from '~/types'

  const { data: tutorials } = await useLazyAsyncData('tutorials',
    () => queryContent<TutorialPreview>('tutorials')
      .where({ topic: { $ne: 'WordPress' } })
      .sort({ date: -1 })
      .only(['title', 'slug', '_path', 'description', 'excerpt', 'image', 'topics', 'topic'])
      .find(),
  )

  const title: string = 'Tutorials'
  const description: string = 'I learn something new all the time and as such I like the share my discoveries in the hope that it will help someone else down the line.'
  const section: Sections = 'tutorials'

  useHead({
    title,
    meta: [{ name: 'description', content: description }],
  })
</script>
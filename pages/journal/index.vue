<template>
  <nuxt-layout>
    <template #aside>
      <base-nav :subnav="NavLinks[5].subnav" />
    </template>
    <base-title>{{ title }}</base-title>
    <base-excerpt>{{ description }}</base-excerpt>
    <ul class="list-style:none m:0 p:0 flex flex:col gap:40">
      <li v-for="{ _path: slug, title, description, date, topics } in posts" :key="slug">
        <nuxt-link :to="slug" class="flex gap:30 text-decoration:none color:#222">
          <div class="mt:10">
            <span class="min-width:180 w:180 block">{{ formatDate(date) }}</span>
            <span class="t:16 color:#666">#{{ topics[0] }}</span>
          </div>
          <div class="w:full">
            <!-- <span>{{ topic }}</span> <span v-for="{tag, i} in tags" :key="i"></span> -->
            <h2 class="mt:5 mb:0">{{ title }}</h2>
            <p class="mt:15">{{ description }}</p>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </nuxt-layout>
</template>

<script setup lang="ts">
  import type { PostPreview, Section } from '~/types'

  const { data: posts } = await useLazyAsyncData('journal',
    () => queryContent<PostPreview>('journal')
      .sort({ date: -1 })
      .only(['title', 'description','slug', '_path', 'thumb', 'topics'])
      .find(),
  )

  const title: string = 'Journal'
  const description: string = 'Updates about what I\'m working on, books I\'m reading, stuff I\'m thinking about, news on the farm, product releases and more.'
  const section: Section = 'journal'

  // useHead({
  //   title,
  //   meta: [{ name: 'description', content: description }],
  // })
</script>
<template>
  <nuxt-layout>
    <template #aside>
      <base-nav :subnav="NavLinks[5].subnav" />
    </template>
    <base-title>{{ title }}</base-title>
    <base-excerpt>{{ description }}</base-excerpt>
    <ul class="list-style:none m:0 p:0 grid-cols:3 gap:40">
      <li v-for="{ _path: slug, title, excerpt, image } in posts" :key="slug">
        <nuxt-link :to="slug" class="text-decoration:none color:#222">
          <h2 class="mt:5 mb:0">{{ title }}</h2>
          <p class="mt:15">{{ excerpt }}</p>
        </nuxt-link>
      </li>
    </ul>
  </nuxt-layout>
</template>

<script setup lang="ts">
  const posts = await queryContent('/journal')
    .sort({ date: -1 })
    .where({ _partial: false })
    .find()
    
  const title: string = 'Journal'
  const description: string = 'Updates about what I\'m working on, books I\'m reading, stuff I\'m thinking about, news on the farm, product releases and more.'
  const section: Sections = 'tutorials'

  useHead({
    title,
    meta: [{ name: 'description', content: description }],
  })
</script>
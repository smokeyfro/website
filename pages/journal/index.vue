<template>
  <nuxt-layout>
    <template #aside>
      <base-nav :subnav="NavLinks[5].subnav" />
    </template>
    <div class="max-width:960">
    <base-title>{{ title }}</base-title>
    <base-excerpt>{{ description }}</base-excerpt>
    <ul class="list-style:none m:0 p:0 flex flex:col gap:40">
      <li v-for="{ _path: slug, title, excerpt, date, topic } in posts" :key="slug">
        <nuxt-link :to="slug" class="flex gap:30 text-decoration:none color:#222">
          <span class="min-width:180 w:180 block mt:5">{{ formatDate(date) }}</span>
          <div class="w:full">
            <!-- <span>{{ topic }}</span> <span v-for="{tag, i} in tags" :key="i"></span> -->
            <h2 class="mt:5 mb:0">{{ title }}</h2>
            <p class="mt:15">{{ excerpt }}</p>
          </div>
        </nuxt-link>
      </li>
    </ul>
    </div>
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
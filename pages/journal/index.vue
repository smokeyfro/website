<template>
  <nuxt-layout>
    <template #aside>
      <base-nav :subnav="NavLinks[5].subnav" />
    </template>
    <base-title>{{ title }}</base-title>
    <base-excerpt>{{ description }}</base-excerpt>
    <content-list path="/journal" :query="{
      only: [ 'title', 'slug', '_path', 'description', 'excerpt' ], 
      sort: { date: -1 }
    }">
      <template v-slot="{ list }">
        <ul class="list-style:none m:0 p:0 grid-cols:3 gap:20">
          <li v-for="{ _path: slug, title, excerpt } in list" :key="slug">
            <nuxt-link :to="slug" class="text-decoration:none color:#222">
              <h2>{{ title }}</h2>
              <p>{{ excerpt }}</p>
            </nuxt-link>
          </li>
        </ul>
      </template>
      <template #not-found>
        <p>No articles found.</p>
      </template>
    </content-list>
  </nuxt-layout>
</template>

<script setup lang="ts">
  const title: string = 'Journal'
  const description: string = 'Updates about what I\'m working on, books I\'m reading, stuff I\'m thinking about, news on the farm, product releases and more.'
  const section: Sections = 'tutorials'

  useHead({
    title,
    meta: [{ name: 'description', content: description }],
  })
</script>
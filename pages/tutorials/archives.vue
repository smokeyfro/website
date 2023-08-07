<template>
  <nuxt-layout>
    <template v-slot:aside>
      <base-nav :subnav="NavLinks[4].subnav" />
    </template>
    <base-title>Archives</base-title>
    <base-excerpt>Older tutorials which are no longer relevant, or outdated.</base-excerpt>
    <content-list path="/tutorials" :query="{
      only: [ 'title', 'slug', '_path', 'description', 'excerpt', 'image', 'topics', 'topic' ], 
      where: ({ topic: 'WordPress' }), sort: { date: -1 }
    }">
      <template v-slot="{ list }">
        <ul class="list-style:none m:0 p:0 grid-cols:2 gap:30">
          <li v-for="{ _path: slug, title, excerpt, image } in list" :key="slug">
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
  const title: string = 'All my tutorials'
  const description: string = 'Here\'s a list of all my tutorials'

  useHead({
    title,
    meta: [{ name: 'description', content: description }],
  })
</script>
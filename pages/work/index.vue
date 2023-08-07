<template>
  <nuxt-layout>
    <template v-slot:aside>
      <base-nav :subnav="NavLinks[2].subnav" />
    </template>
    <base-title>Portfolio</base-title>
    <base-excerpt>Below you'll find a few examples of my work that showcase my overall design style and the types of projects I've worked on.</base-excerpt>
    <content-list path="/work" :query="{
      only: [ 'title', 'slug', '_path', 'excerpt', 'thumb', 'topic' ], 
      where: ({ draft: { $ne: true } }), sort: { date: -1 }
    }">
      <template v-slot="{ list }">
        <ul class="list-style:none m:0 p:0 grid-cols:2 gap:30">
          <li v-for="{ _path: slug, title, excerpt, thumb, topic } in list" :key="slug">
            <nuxt-link :to="slug" class="text-decoration:none color:#222">
              <nuxt-img v-if="thumb" :src="thumb" width="500" height="300" fit="cover" format="webp" loading="lazy" :alt="title" class="bb:1|solid|#ccc" />
              <div>
                <h2 class="mt:10 mb:0">{{ title }}</h2>
                <p class="mt:5">{{ excerpt }}</p>
              </div>
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
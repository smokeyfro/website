<template>
  <nuxt-layout>
    <template v-slot:aside>
      <base-nav :subnav="NavLinks[3].subnav" />
    </template>
    <base-title>Themes > Gridsome</base-title>
    <base-excerpt>My growing collection of themes for Gridsome and WordPress.</base-excerpt>
    <content-list path="/themes" :query="{
      only: [ 'title', 'slug', '_path', 'description', 'excerpt' ], 
      where: ({ platform: 'Gridsome' }), sort: { date: -1 }
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
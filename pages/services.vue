<template>
  <nuxt-layout>
    <template v-slot:aside>
      <base-nav :subnav="NavLinks[2].subnav" />
    </template>
    <base-title>Services</base-title>
    <base-excerpt>Below you'll find a few examples of my work that showcase my overall design style and the types of projects I've worked on.</base-excerpt>
    <ul class="list-style:none m:0 p:0 grid-cols:3 gap:20">
      <li v-for="{ _path: slug, title, excerpt } in servicePosts" :key="slug">
        <nuxt-link :to="slug" class="text-decoration:none color:#222">
          <h2>{{ title }}</h2>
          <p>{{ excerpt }}</p>
        </nuxt-link>
      </li>
    </ul>
  </nuxt-layout>
</template>

<script setup lang="ts">
const servicePosts = await queryContent('/services')
  .where({ _partial: false })
  .find()
</script>
<template>
  <nuxt-layout>
    <template v-slot:aside>
      <base-nav :subnav="NavLinks[2].subnav" />
    </template>
    <base-title>Services</base-title>
    <base-excerpt>Below you'll find a few examples of my work that showcase my overall design style and the types of projects I've worked on.</base-excerpt>
    <ul class="list-style:none m:0 p:0 grid-cols:2 gap:50">
      <li v-for="{ title, description, icon, i } in servicePosts" :key="i" class="flex jc:start gap:30">
          <nuxt-img v-if="icon" provider="cloudinary" :src="icon" width="50" height="50" />
          <div>
            <h2 class="mt:0">{{ title }}</h2>
            <p class="m:0">{{ description }}</p>
          </div>
      </li>
    </ul>
  </nuxt-layout>
</template>

<script setup lang="ts">
const servicePosts = await queryContent('/services')
  .where({ _partial: false })
  .only(['title','description','icon'])
  .find()
</script>
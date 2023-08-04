<template>
  <nuxt-layout>
    <template v-slot:aside>
      <base-nav :subnav="NavLinks[1].subnav" />
    </template>
    <base-title>Photos</base-title>
    <base-excerpt>I've always had a fascination with photography and while I'd never consider myself more than an amateur, it's a past time I enjoy and so I pursue it.</base-excerpt>
    <ul class="list-style:none m:0 mt:50 p:0 grid-cols:2 gap:40">
      <li v-for="{ _path: slug, title, excerpt, image } in photos" :key="slug">
        <nuxt-link :to="slug" class="text-decoration:none color:#222">
          <nuxt-img v-if="image" :src="image" provider="cloudinary" :alt="title" class="w:full h:auto r:5" />
          <div v-else class="w:full h:full"></div>
          <h2 class="mt:5 mb:0">{{ title }}</h2>
          <p class="mt:0">{{ excerpt }}</p>
        </nuxt-link>
      </li>
    </ul>
  </nuxt-layout>
</template>
<script setup lang="ts">
const photos = await queryContent('photos')
  .where({ _partial: false })
  .find()
</script>
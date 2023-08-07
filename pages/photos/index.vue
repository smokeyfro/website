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
          <nuxt-img v-if="image" :src="image" provider="cloudinary" width="530" height="300" fit="cover" :alt="title" class="r:5" />
        </nuxt-link>
        <h2 class="mt:20 mb:20">{{ title }}</h2>
        <p class="mt:10 mb:15 font:25 lh:1.3">{{ excerpt }}</p>
        <p class="mt:0"><nuxt-link :to="slug" class="f:bold text:25 text-decoration:underline color:#222">View album</nuxt-link></p>
      </li>
    </ul>
  </nuxt-layout>
</template>
<script setup lang="ts">
const photos = await queryContent('photos')
  .where({ _partial: false })
  .find()
</script>
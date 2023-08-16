<template>
  <nuxt-layout>
    <template v-slot:aside>
      <base-nav :subnav="NavLinks[2].subnav" />
    </template>
    <div v-if="page !== null" class="grid grid-cols:2 gap:50">
      <div>
        <base-title>{{ page.title }}</base-title>
        <base-excerpt>{{ page.description }}</base-excerpt>
        <p class="my:10" v-if="page.url && page.status != 'Offline'">
          <a :href="page.url" target="_blank" class="btn btn-lg btn-primary">View the site <!--<img src="/external.svg" alt="External link" class="inline-block w-3 h-3">--></a>
        </p>
        <ul class="grid grid-cols:2 gap:20 list-style:none p:0 m:0 mt:30">
          <li class="p:0 m:0 mb:3 truncate" v-if="page.company">
            <strong class="block">Company</strong>{{ page.company }}
          </li>
          <li class="p:0 m:0 mb:3" v-if="page.date">
            <strong class="block">Date</strong>{{ new Date(page.date).toLocaleDateString("en-GB") }}
          </li>
          <li class="p:0 m:0 mb:3 truncate" v-if="page.url && page.status != 'Offline'">
            <strong class="block">Url</strong><a :href="page.url" target="_blank" rel="nofollow noopener" class="font-normal">{{ page.url }}</a>
          </li>
          <li class="p:0 m:0" v-if="page.type">
            <strong class="block">Type</strong>{{ page.type }}
          </li>
          <li class="p:0 m:0" v-if="page.status">
            <strong class="block">Status</strong>{{ page.status }}
          </li>
        </ul>
        <div class="grid grid-cols:2 gap:20">
          <div v-if="page.services">
            <h2 class="">Skills Used</h2>
            <ul class="list-style:none p:0 m:0">
              <li v-for="item in page.services">{{ item }}</li>
            </ul>
          </div>
          <div v-if="page.stack">
            <h2 class="">Stack</h2>
            <ul class="list-style:none p:0 m:0">
              <li v-for="item in page.stack">{{ item }}</li>
            </ul>
          </div>
        </div>
        </div>
      <div>
        <nuxt-img 
          v-if="page.image" 
          :src="page.image" 
          :alt="page.title" 
          provider="cloudinary"
          class="r:5 h:auto w:full b:2|solid|#ddd" />
      </div>
    </div>
    <div class="markdown pt:6 my:5" v-if="page">
      <h2 class="text:base font:bold my:3">About</h2>
      <div class="text:xl">
        <content-renderer :value="page">
          <template #empty></template>
        </content-renderer>
      </div>
    </div>
    <silent-box v-if="page" :gallery="page.gallery" class="gallery grid-cols:3 gap:20 mt:50"></silent-box>
  </nuxt-layout>
</template>
<style>
.silentbox-item {
  border-radius: 5px;
  overflow: hidden;
}
.silentbox-item img {
  width: 350px;
  height: 230px;
  object-fit: cover;
}
</style>
<script setup lang="ts">
import type { Portfolio } from '~/types'

const { path } = useRoute()

const { data: page } = await useAsyncData(path.replace(/\/$/, ''),
  () => queryContent<Portfolio>('work')
    .where({ _path: path })
    .findOne(),
)
</script>
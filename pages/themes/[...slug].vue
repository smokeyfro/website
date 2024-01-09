<template>
  <nuxt-layout name="two-col-scroll">
    <template v-slot:aside>
      <base-nav :subnav="NavLinks[3].subnav" />
    </template>
    <div v-if="page" class="grid grid-cols:2 gap:50">
      <div>
        <base-title>{{ page.title }}</base-title>
        <base-excerpt>{{ page.description }}</base-excerpt>
        <div class="bg:#fff mb:20 p:30 r:5 b:1|solid|#ddd">
          <ul class="m:0 p:0 list-style:none flex ai:end jc:start">
            <li>
              <span class="block f:16">Platform:</span>
              <strong>{{ page.platform }}</strong>
            </li>
            <li>
              <span class="block f:16">Type:</span>
              <strong>{{ page.type }}</strong>
            </li>
            <li>
              <span class="block f:16">Released:</span>
              <strong>{{ page.release_date }}</strong>
            </li>
          </ul>
          <div class="mt:20">
            <btn variant="primary" size="lg" :href="page.download_theme" class="mr:30">Download</btn>
            <btn variant="default" size="lg" :href="page.repo_url">Repo</btn>
          </div>
        </div>
      </div>
      <div class="mt:-30">
        <nuxt-img 
          v-if="page.image" 
          :src="page.image" 
          :alt="page.title" 
          provider="cloudinary" />
      </div>
    </div>
    <div v-if="page.gallery">
      <silent-box :gallery="page.gallery" class="gallery grid-cols:4 gap:30 mt:50"></silent-box>
      <content-renderer :value="page">
        <template #empty></template>
      </content-renderer>
    </div>
  </nuxt-layout>
</template>
<script setup lang="ts">
  import type { Theme } from '~/types'
  const { path } = useRoute()
  const { data: page } = await useAsyncData(path.replace(/\/$/, ''),
    () => queryContent<Theme>('themes')
      .where({ _path: path })
      .findOne(),
  )
  const title: string = page.value?.title || ''
  const description: string = page.value?.description || ''
  const image: string = page.value?.image || ''
  const ogImage: string = page.value?.image || ''
  useHead({
    title: page.value?.title || '',
    meta: [
      { 
        name: 'description', 
        content: description },
      {
        name: 'description',
        content: description,
      },
      { 
        property: 'og:site_name', 
        content: 'SmokeyFro' 
      },
      { 
        hid: 'og:type', 
        property: 'og:type', 
        content: 'website' 
      },
      {
        property: 'og:url',
        content: 'https://smokeyfro.com',
      },
      {
        property: 'og:title',
        content: title,
      },
      {
        property: 'og:description',
        content: description,
      },
      {
        property: 'og:image',
        content: ogImage || image,
      },
      { 
        name: 'twitter:site', 
        content: '@smokeyfro' 
      },
      { 
        name: 'twitter:card', 
        content: 'summary_large_image' 
      },
      {
        name: 'twitter:url',
        content: 'https://smokeyfro.com',
      },
      {
        name: 'twitter:title',
        content: title,
      },
      {
        name: 'twitter:description',
        content: description,
      },
      {
        name: 'twitter:image',
        content: ogImage || image,
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: `https://smokeyfro.com${path}`,
      },
    ],
  })
</script>
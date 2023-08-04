<template>
  <nuxt-layout>
    <template v-slot:aside>
      <base-nav :subnav="NavLinks[3].subnav" />
    </template>
    <div v-if="page" class="grid grid-cols:2 gap:50">
      <div>
        <base-title>{{ page.title }}</base-title>
        <base-excerpt>{{ page.excerpt }}</base-excerpt>
        <div class="mb:35">
          <span>{{ page.platform }}</span> &middot; <span>{{ page.type }}</span> &middot; <span>{{ page.release_date }}</span>
        </div>
        <div>
          <btn variant="primary" size="lg" :href="page.download_theme" class="mr:30">Download</btn>
          <btn variant="default" size="lg" :href="page.repo_url">Repo</btn>
        </div>
      </div>
      <div>
        <nuxt-img 
          v-if="page.image" 
          :src="page.image" 
          :alt="page.title" 
          class="r:5 h:auto w:full b:2|solid|#ddd" />
      </div>
    </div>
    <div>
      <client-only>
        <silent-box :gallery="page.gallery" class="gallery grid-cols:3 gap:20 mt:50"></silent-box>
      </client-only>
    </div>
  </nuxt-layout>
</template>
<script setup lang="ts">
  import type { Theme } from '~/types'
  const { path } = useRoute()
  const { data: page } = await useAsyncData(path.replace(/\/$/, ''),
    () => queryContent<Theme>('/themes')
      .where({ _path: path })
      .findOne(),
  )
  const title: string = page.value?.title || ''
  const description: string = page.value?.excerpt || ''
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
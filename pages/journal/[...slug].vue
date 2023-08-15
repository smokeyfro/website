<template>
  <nuxt-layout>
    <template #aside>
      <base-nav :subnav="NavLinks[5].subnav" />
    </template>
    <div v-if="page">
      <base-title>{{ page.title }}</base-title>
      <base-excerpt>{{ page.description }}</base-excerpt>
      <div v-if="page.tags && page.tags.length" class="flex ai:center jc:start gap:10 py:1 text:14">
        <span v-for="(tag, index) in page.tags" :key="index">
          {{ tag }}
        </span>
      </div>
      <content-renderer :value="page">
        <template #empty></template>
      </content-renderer>
    </div>
  </nuxt-layout>
</template>

<script setup lang="ts">
  import type { Post } from '~/types'
  const { path } = useRoute()

const { data: page } = await useAsyncData(path.replace(/\/$/, ''),
  () => queryContent<Post>('journal')
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
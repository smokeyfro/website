<template>
  <nuxt-layout>
    <template #aside>
      <base-nav :subnav="NavLinks[5].subnav" />
    </template>
    <div v-if="page">
    <base-title>{{ page.title }}</base-title>
    <base-excerpt>{{ page.excerpt }}</base-excerpt>
    <div
        v-if="page.tags && page.tags.length"
        class="flex items-center justify-start py-1 text-sm"
      >
        <div v-for="(tag, index) in page.tags" :key="index" class="pl-2">
          <span
            class="mr-2 inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium leading-4 text-stone-800"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    <content-doc :path="$route.params.slug ? `/journal/${$route.params.slug[0]}` : '/journal'">
      <template #not-found>
        <h2>({{ $route.params.slug }}) not found</h2>
      </template>
    </content-doc>
    </div>
  </nuxt-layout>
</template>

<script setup lang="ts">
  import type { Post } from '~/types'
  const { path } = useRoute()
  const { data: page } = await useAsyncData(path.replace(/\/$/, ''),
    () => queryContent<Post>('/journal')
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
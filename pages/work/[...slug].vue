<template>
  <nuxt-layout>
    <template v-slot:aside>
      <base-nav :subnav="NavLinks[2].subnav" />
    </template>
    <div v-if="page" class="grid grid-cols:2 gap:50">
      <div>
        <base-title>{{ page.title }}</base-title>
        <base-excerpt>{{ page.excerpt }}</base-excerpt>
        <p class="my:10" v-if="page.url && page.status != 'Offline'">
          <a :href="page.url" target="_blank" class="btn btn:large btn:primary">View the site <!--<img src="/external.svg" alt="External link" class="inline-block w-3 h-3">--></a>
        </p>
        <ul class="grid grid-cols:2 gap:20 list-style:none p:0 m:0 mt:30">
          <li class="p:0 m:0 mb:3 truncate">
            <strong class="block">Company</strong>{{ page.company }}
          </li>
          <li class="p:0 m:0 mb:3">
            <strong class="block">Date</strong>{{ new Date(page.date).toLocaleDateString("en-GB") }}
          </li>
          <li class="p:0 m:0 mb:3 truncate" v-if="page.url && page.status != 'Offline'">
            <strong class="block">Url</strong><a :href="page.url" target="_blank" rel="nofollow noopener" class="font-normal">{{ page.url }}</a>
          </li>
          <li class="p:0 m:0">
            <strong class="block">Type</strong>{{ page.type }}
          </li>
          <li class="p:0 m:0">
            <strong class="block">Status</strong>{{ page.status }}
          </li>
        </ul>
        <div class="grid grid-cols:2 gap:20">
          <div>
            <h2 class="">Skills Used</h2>
            <ul class="list-style:none p:0 m:0">
              <li v-for="item in page.services">{{ item }}</li>
            </ul>
          </div>
          <div>
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
          class="r:5 h:auto w:full b:2|solid|#ddd" />
      </div>
    </div>
    <div class="markdown pt:6 my:5">
      <h2 class="text:base font:bold my:3">About</h2>
      <div class="text:xl">
          <!-- <ContentRenderer :key="page._id" :value="page" /> -->
          <ContentRenderer :value="page">
            <template #empty>
              <p>No content found.</p>
            </template>
          </ContentRenderer>
      </div>
    </div>
    <client-only>
      <silent-box :gallery="page.gallery" class="gallery grid-cols:3 gap:20 mt:50"></silent-box>
    </client-only>
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

// const { data } = await useAsyncData('prev-next',
//   () => queryContent<PrevNext>('blog')
//     .where({ published: { $ne: false }, featured: { $ne: true } })
//     .sort({ date: -1 })
//     .only(['_path', 'title'])
//     .findSurround(path),
// )
// const [prev, next] = data.value || []
// const section: Sections = 'blog'
const title: string = page.value?.title || ''
const description: string = page.value?.excerpt || ''
const image: string = page.value?.image || ''
const ogImage: string = page.value?.image || ''

useHead({
  title: page.value?.title || '',
  meta: [
    { name: 'description', content: description },
    {
      name: 'description',
      content: description,
    },
    // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
    { property: 'og:site_name', content: 'Debbie Codes' },
    { hid: 'og:type', property: 'og:type', content: 'website' },
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
    // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
    { name: 'twitter:site', content: '@smokeyfro' },
    { name: 'twitter:card', content: 'summary_large_image' },
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
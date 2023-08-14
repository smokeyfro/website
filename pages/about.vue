<template>
  <nuxt-layout>
    <template v-slot:aside>
      <base-nav :subnav="NavLinks[1].subnav" />
    </template>
    <div v-if="page">
      <base-title>{{ page.title }}</base-title>
      <base-excerpt>{{ page.description }}</base-excerpt>
      <ContentRenderer :value="page">
        <template #empty>
          <p>No content found.</p>
        </template>
      </ContentRenderer>
    </div>   
  </nuxt-layout>
</template>

<script setup lang="ts">
  import type { Page } from '~/types'
  const { path } = useRoute()
  const { data: page } = await useAsyncData(path.replace(/\/$/, ''),
    () => queryContent<Page>('/about')
      .where({ _path: path })
      .findOne(),
  )
  const title: string = page.value?.title || ''
  const description: string = page.value?.description || ''
</script>
<style>
.about-image img {
  position: relative;
  bottom: -100px;
}
</style>
<template>
  <nuxt-layout>
    <template v-slot:aside>
      <base-nav :subnav="NavLinks[4].subnav" />
    </template>
    <div class="max-width:760">
      <base-title>{{ page?.title }}</base-title>
      <base-excerpt>{{ page?.excerpt }}</base-excerpt>
      <div class="text:xl ">
          <ContentRenderer :value="page">
            <template #empty>
              <p>No content found.</p>
            </template>
          </ContentRenderer>
      </div>
    </div>
  </nuxt-layout>
</template>
<script setup lang="ts">
  import type { Tutorial } from '~/types'
  const { path } = useRoute()
  const { data: page } = await useAsyncData(path.replace(/\/$/, ''),
    () => queryContent<Tutorial>('tutorials')
      .where({ _path: path })
      .findOne(),
  )
</script>
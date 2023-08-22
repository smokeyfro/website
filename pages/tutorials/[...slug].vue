<template>
  <nuxt-layout>
    <template v-slot:aside>
      <base-nav :subnav="NavLinks[4].subnav" />
    </template>
    <div v-if="page !== null">
      <base-title>{{ page.title }}</base-title>
      <base-excerpt>{{ page.description }}</base-excerpt>
      
      <content-renderer :value="page">
        <template #empty></template>
      </content-renderer>
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
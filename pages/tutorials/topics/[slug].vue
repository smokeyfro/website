<script setup lang="ts">
import type { Tutorial, Sections } from '~/types'

const {
  params: { slug },
} = useRoute()

const { data: tutorials } = await useAsyncData(`tutorials-${slug}`,
  () => queryContent<Tutorial>('tutorials')
    .where({ published: { $ne: false }, topics: { $contains: slug } })
    .sort({ date: -1 })
    .find(),
)

const topic: string = replaceHyphen(slug as string)
const title: string = 'Tutorials'
const description: string = 'My technical tutorials, currently focussed on topics relating to the jamstack.'
const section: Sections = 'tutorials'

useHead({
  title,
  meta: [{ name: 'description', content: description }],
})
</script>

<template>
  <nuxt-layout>
    <template v-slot:aside>
      <base-nav :subnav="NavLinks[4].subnav" />
    </template>
    <div class="max-width:960">
    <base-title>{{ title }}</base-title>
    <base-excerpt>{{ description }}</base-excerpt>
    <topics-cloud :section="section" />
    <ul v-if="tutorials !== null" class="list-style:none m:0 p:0 flex flex:col gap:30">
      <li v-for="{ _path: slug, title, excerpt, image } in tutorials" :key="slug">
        <nuxt-link :to="slug" class="text-decoration:none color:#222">
          <h2>{{ title }}</h2>
          <p>{{ excerpt }}</p>
        </nuxt-link>
      </li>
    </ul>
    </div>
  </nuxt-layout>
</template>
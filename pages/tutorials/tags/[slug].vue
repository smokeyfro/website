<script setup lang="ts">
import type { Tutorial, Sections } from '~/types'

const {
  params: { slug },
} = useRoute()

const { data: tutorials } = await useAsyncData(`tutorials-${slug}`,
  () => queryContent<Tutorial>('tutorials')
    .where({ published: { $ne: false }, tags: { $contains: slug } })
    .sort({ date: -1 })
    .find(),
)

const topic: string = replaceHyphen(slug as string)
const title: string = `Tutorials > ${topic}`
const description: string = `Here's a list of all my tutorials with the ${topic} tag`
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
      <base-title>Tutorials tagged with {{ topic }}</base-title>
      <tags-cloud :section="section" />
    </div>
    <ul v-if="tutorials !== null" class="list-style:none m:0 p:0 grid-cols:3 gap:30">
      <li v-for="{ _path: slug, title, excerpt, image } in tutorials" :key="slug">
        <nuxt-link :to="slug" class="text-decoration:none color:#222">
          <nuxt-img v-if="image" :src="image" :alt="title" class="w:full h:auto r:5" />
          <h2>{{ title }}</h2>
          <p>{{ excerpt }}</p>
        </nuxt-link>
      </li>
    </ul>
    <tags-empty v-else />
  </nuxt-layout>
</template>
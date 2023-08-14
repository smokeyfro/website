<script setup lang="ts">
import type { Tutorial, Sections } from '~/types'

const {
  params: { slug },
} = useRoute()

const { data: tutorials } = await useAsyncData(`tutorials-${slug}`,
  () => queryContent<Tutorial>('tutorials')
    .where({ published: { $ne: false }, topics: { $contains: slug } })
    .only(['title', 'slug', '_path', 'description', 'thumb', 'topics', 'topic', 'tags'])
    .sort({ date: -1 })
    .find(),
)

const topic: string = replaceHyphen(slug as string)
const title: string = 'Tutorials'
const description: string = 'My technical tutorials focussed on topics relating to the jamstack.'
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
    <ul class="list-style:none m:0 mt:40 p:0 flex flex:col gap:40">
      <li v-for="{ _path: slug, title, thumb, topic, tags } in tutorials" :key="slug">
        <nuxt-link :to="slug" class="text-decoration:none color:#222 bg:#fff {bg:#f7f7f7}:hover ~all|300ms|ease-in-out r:5 overflow:hidden flex ai:center b:1|solid|#ccc">
          <nuxt-img v-if="thumb" provider="cloudinary" :src="thumb" fit="cover" :alt="title" class="max-width:100% w:400 h:300 object-fit:cover" />
          <div class="py:40 px:55">
            <h2 class="m:0">{{ title }}</h2>
            <div class="flex ai:center gap:10 mt:25 mb:10">
              <span class="px:6 py:2 f:14 r:3"
                :class="{
                'bg:pink color:#fff': topic === 'Going Headless',
                'bg:green color:#fff': topic === 'Learning Vue',
              }">{{ topic }}</span>
              &middot;
              <span v-if="tags && tags.length" class="flex ai:center jc:start gap:15">
                <span v-for="(tag, index) in tags" :key="index" v-html="tag" class="bg:#ddd px:6 py:2 f:14 r:3" />
              </span>
            </div>
            <!-- <p class="mb:10">{{ excerpt }}</p> -->
            <p class="mt:0 mb:0"><span class="f:bold t:25 bb:1|solid|#ccc">Read now →</span></p>
          </div>
        </nuxt-link>
      </li>
    </ul>
    </div>
  </nuxt-layout>
</template>
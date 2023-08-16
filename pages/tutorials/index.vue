<template>
  <nuxt-layout>
    <template v-slot:aside>
      <base-nav :subnav="NavLinks[4].subnav" />
    </template>
    <base-title>{{ title }}</base-title>
    <base-excerpt>{{ description }}</base-excerpt>
    <topics-cloud />
    <ul class="list-style:none m:0 mt:40 p:0 flex flex:col gap:40">
      <li v-for="{ _path: slug, title, thumb, topic, tags } in tutorials" :key="slug">
        <nuxt-link :to="slug" class="text-decoration:none color:#222 bg:#fff {bg:#f7f7f7}:hover ~all|300ms|ease-in-out r:5 overflow:hidden flex ai:center b:1|solid|#ccc">
          <nuxt-img v-if="thumb" provider="cloudinary" :src="thumb" fit="cover" :alt="title" class="max-width:100% w:400 h:300 object-fit:cover" />
          <div class="py:40 px:55">
            <h2 class="m:0">{{ title }}</h2>
            <div class="flex ai:center gap:10 mt:25 mb:10">
              <span class="px:6 py:2 f:14 r:3 color:#fff"
                :class="{
                'bg:pink': topic === 'Going Headless',
                'bg:green': topic === 'Learning Vue',
              }">{{ topic }}</span>
              &middot;
              <span v-if="tags && tags.length" class="flex ai:center jc:start gap:15">
                <span v-for="(tag, index) in tags" :key="index" v-html="tag" class="bg:#ddd px:6 py:2 f:14 r:3" />
              </span>
            </div>
            <p class="mt:0 mb:0"><span class="f:bold t:25 bb:1|solid|#ccc">Read now →</span></p>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </nuxt-layout>
</template>
<script setup lang="ts">
  import type { TutorialPreview, Section } from '~/types'

  const { data: tutorials } = await useLazyAsyncData('tutorials',
    () => queryContent<TutorialPreview>('tutorials')
      .where({ topic: { $ne: 'WordPress' } })
      .sort({ date: -1 })
      .only(['title', 'slug', '_path', 'thumb', 'topics', 'topic', 'tags'])
      .find(),
  )

  const title: string = 'Tutorials'
  const description: string = 'My technical tutorials focussed on topics relating to the jamstack.'
  const section: Section = 'tutorials'

  useHead({
    title,
    meta: [{ name: 'description', content: description }],
  })
</script>
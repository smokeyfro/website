<script setup lang="ts">
  import type { Sections } from '~/types'

  interface Props {
    section: Sections
  }

  const props = defineProps<Props>()

  const flatten = (tags: Array<any>, key = 'tags') => {
    const _tags = tags
      .map((tag) => {
        let _tag = tag
        if (tag.tags) {
          const flattened = flatten(tag[key])
          _tag = flattened
        }
        return _tag
      })
      .flat(1)

    return _tags
  }

  const { data } = await useAsyncData('tags', () => queryContent(props.section)
    .only(["tags"])
    .where({ published: { $ne: false } })
    .find());
    
  const articleTags = [...new Set(flatten(data.value, 'tags'))];
  const sortedArticleTags = articleTags.sort()
</script>

<template>
  <ul aria-label="tags" class="list-style:none m:0 p:0 flex flex:wrap gap:20 mb:30">
    <li v-for="(tag, i) in sortedArticleTags" :key="tag+i" class="m:0 p:0 block">
      <nuxt-link :to="`/${section}/tags/${tag}`" class="block bg:#fff b:1px|solid|#999 outline:2px|solid|rgba(0,0,0,0) outline:2px|solid|rgba(0,0,0,0.2):hover p:4|10|6  r:5 text:none">
        {{ replaceHyphen(tag) }}
      </nuxt-link>
    </li>
  </ul>
</template>

<style scoped>
.router-link-exact-active {
  background: #1f2226;
  border-color: #1f2226;
  color: #fff;
}
</style>
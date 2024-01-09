<script setup lang="ts">
  import type { Section } from '~/types'

  interface Props {
    section: Section
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
  <ul aria-label="tags" class="list-style:none m:0 p:0 flex flex:wrap gap:30 mb:30">
    <li v-for="(tag, i) in sortedArticleTags" :key="tag+i" class="m:0 p:0 block">
      <nuxt-link :to="`/${section}/tags/${tag}`" class="block f:30 color:#222 bg:#fff:hover px:8 text:none">
        #{{ replaceHyphen(tag) }}
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
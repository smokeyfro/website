<script setup lang="ts">
  import type { Section } from '~/types'

  interface Props {
    section: Section
  }

  const props = defineProps<Props>()

  const flatten = (topics: Array<any>, key = 'topics') => {
    const _topics = topics
      .map((topic) => {
        let _topic = topic
        if (topic.topics) {
          const flattened = flatten(topic[key])
          _topic = flattened
        }
        return _topic
      })
      .flat(1)

    return _topics
  }

  const { data } = await useAsyncData('topics', () => queryContent(props.section)
    .only(["topics", "topic"])
    .where({ published: { $ne: false }, topic: { $ne: 'WordPress' }})
    .find());
    
  const articleTopics = [...new Set(flatten(data.value, 'topics'))];
  const sortedArticleTopics = articleTopics.sort()
</script>

<template>
  <ul aria-label="topics" class="topics list-style:none m:0 p:0 inline-flex ai:flex-start mb:30 font:20 text:capitalize r:5 bg:#fff b:1|solid|#1f2226 overflow:hidden">
    <li><nuxt-link :to="`/${section}`" class="bg:#fff color:#222 block p:10|20 text:none">All topics</nuxt-link></li>
    <li v-for="(topic, i) in sortedArticleTopics" :key="topic+i">
      <nuxt-link :to="`/${section}/topics/${topic}`" class="bg:#fff color:#222 block p:10|20 text:none">
        {{ replaceHyphen(topic) }}
      </nuxt-link>
    </li>
  </ul>
</template>

<style scoped>
.router-link-exact-active {
  background: #1f2226;
  color: #fff;
}
.topics li:not(:last-of-type) {
  border-right: 1px solid #1f2226;
}
</style>
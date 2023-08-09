<template>
  <nuxt-layout>
    <template v-slot:aside>
      <base-nav :subnav="NavLinks[4].subnav" />
    </template>
    <div class="max-width:760">
      <base-title>{{ doc.title }}</base-title>
      <base-excerpt>{{ doc.excerpt }}</base-excerpt>
      <div v-if="doc.tags && doc.tags.length" class="flex ai:center jc:start gap:15">
        <span v-for="(tag, index) in doc.tags" :key="index" v-html="tag" />
      </div>
      <content-doc />
    </div>
  </nuxt-layout>
</template>
<script setup lang="ts">
  const { path } = useRoute()
  const { data: doc } = await useLazyAsyncData(`content-${path}`, () => {
    return queryContent().where({ _path: path }).findOne();
  });
</script>
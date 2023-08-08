<template>
  <nuxt-layout>
    <template v-slot:aside>
      <base-nav :subnav="NavLinks[4].subnav" />
    </template>
    <div class="max-width:760">
      <!-- <ContentDoc v-slot="{ doc }">
        <base-title>{{ doc.title }}</base-title>
        <base-excerpt>{{ doc.excerpt }}</base-excerpt>
        <ContentRenderer :value="doc" />
      </ContentDoc> -->

       <ContentRenderer :value="doc">
       <base-title>{{ doc.title }}</base-title>
        <base-excerpt>{{ doc.excerpt }}</base-excerpt>
        <ContentRendererMarkdown :value="doc" />
        <template #empty>
          <p class="text-center mt-6">🤷🏼‍♂️ No content.</p>
        </template>
      </ContentRenderer>
    </div>
  </nuxt-layout>
</template>
<script setup lang="ts">
  const { path } = useRoute()
  const { data: doc } = await useAsyncData(`content-${path}`, () => {
    return queryContent().where({ _path: path }).findOne();
  });
</script>
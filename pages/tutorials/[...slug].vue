<template>
  <nuxt-layout>
    <template v-slot:aside>
      <base-nav :subnav="NavLinks[4].subnav" />
    </template>
    <div class="max-width:760">
      <div class="text:xl ">
        <ContentDoc v-slot="{ doc }">
          <base-title>{{ doc.title }}</base-title>
          <base-excerpt>{{ doc.excerpt }}</base-excerpt>
          <ContentRenderer :value="doc" />
        </ContentDoc>
      </div>
    </div>
  </nuxt-layout>
</template>
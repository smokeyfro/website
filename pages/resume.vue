<template>
  <nuxt-layout>
    <template v-slot:aside>
      <base-nav :subnav="NavLinks[2].subnav" />
    </template>
    <resume-intro :data="resume[0].info[0]" />
    <resume-experience :data="resume[0].experience" />
    <resume-skills :data="resume[0].skills" />
    <resume-projects :data="resume[0].projects" />
    <resume-references :data="resume[0].references" />
    <resume-education :data="resume[0].education" />
    <resume-contact :data="resume[0].contact[0]" />
  </nuxt-layout>
</template>

<script setup lang="ts">
const resume = await queryContent('/data/resume')
  .where({ _partial: false })
  .find()
</script>
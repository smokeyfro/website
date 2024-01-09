<template>
  <nuxt-layout>
    <template v-slot:aside>
      <base-nav :subnav="NavLinks[2].subnav" />
    </template>
    <div class="resume">
      <resume-intro :data="resume[0].info[0]" />
      <resume-experience :data="resume[0].experience" />
      <resume-skills :data="resume[0].skills" />
      <resume-projects :data="resume[0].projects" />
      <resume-references :data="resume[0].references" />
      <resume-education :data="resume[0].education" />
      <resume-contact :data="resume[0].contact[0]" />
    </div>
  </nuxt-layout>
</template>

<script setup lang="ts">
const resume = await queryContent('/data/resume')
  .where({ _partial: false })
  .find()
</script>
<style>
.resume h2 {
  text-transform: uppercase;
  font-size: 44px;
  font-weight: 800;
  position: relative;
  z-index: 2;
  display: inline-block;
  margin-top: 100px;
}
.resume h2:after {
  content: '';
  display: block;
  width: 100%;
  border-bottom: 4px solid #fc0;
  position: relative;
  top: 3px;
  z-index: 1;
}
</style>
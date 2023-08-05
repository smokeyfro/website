<template>
  <nuxt-layout>
    <template v-slot:aside>
      <base-nav :subnav="NavLinks[2].subnav" />
    </template>
    <div class="max-width:900">
      <base-title>Experience</base-title>
      <base-excerpt>I've been working online for just shy of two decades and in that time I co-founded a small agency and brought a number of digital brands to market.</base-excerpt>
      <ul class="list-style:none m:0 p:0 flex flex:col gap:10">
        <li v-for="{ id, company, summary, role, location, date } in resume[0].experience" :key="id">
          <span class="color:#444 text:12">{{ location }} | {{ date }}</span>
          <h2 class="m:0">{{ role }} @ {{ company }}</h2>
          <p class="mt:0">{{ summary }}</p>
        </li>
      </ul>
    </div>
  </nuxt-layout>
</template>
<script setup lang="ts">
const resume = await queryContent('/data/resume')
  .where({ _partial: false })
  .find()
</script>
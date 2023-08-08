<template>
  <nuxt-layout name="two-col-scroll">
    <template v-slot:aside>
      <base-nav :subnav="NavLinks[1].subnav" />
    </template>
    <div class="p:80">
      <base-title>Changelog</base-title>
      <base-excerpt>This is where I list the changes made to this website over time.</base-excerpt>
      <!-- <hr class="max-width:760 block mx:0 bt:1px|#ccc h:0" /> -->
      <ul class="list-style:none m:0 p:0 flex gap:20 text:14">
        <li class="flex jc:start gap:10">
          <span><svg xmlns="http://www.w3.org/2000/svg" stroke="green" width="24" height="24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block mr-2 bg-transparent"><circle cx="12" cy="12" r="4"></circle><path d="M1.05 12H7M17.01 12h5.95"></path></svg></span>
          <span>New</span>
        </li>
        <li class="flex jc:start gap:10">
          <span><svg xmlns="http://www.w3.org/2000/svg" stroke="orange" width="24" height="24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block mr-2 bg-transparent"><circle cx="12" cy="12" r="4"></circle><path d="M1.05 12H7M17.01 12h5.95"></path></svg></span>
          <span>Improvement</span>
        </li>
        <li class="flex jc:start gap:10">
          <span><svg xmlns="http://www.w3.org/2000/svg" stroke="red" width="24" height="24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block mr-2 bg-transparent"><circle cx="12" cy="12" r="4"></circle><path d="M1.05 12H7M17.01 12h5.95"></path></svg></span>
          <span>Bug fix</span>
        </li>
        <li class="flex jc:start gap:10">
          <span><svg xmlns="http://www.w3.org/2000/svg" stroke="blue" width="24" height="24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block mr-2 bg-transparent"><circle cx="12" cy="12" r="4"></circle><path d="M1.05 12H7M17.01 12h5.95"></path></svg></span>
          <span>Content</span>
        </li>
      </ul>
      <ul class="list-style:none m:0 p:0">
        <li v-for="{ title, updates } in changelog" :key="slug">
            <h2>{{ formatDate(title) }}</h2>
            <ul>
              <li v-for="{ title, type, i} in updates" :key="i" class="flex gap:30 jc:start">
                <span><svg :class="type" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block mr-2 bg-transparent"><circle cx="12" cy="12" r="4"></circle><path d="M1.05 12H7M17.01 12h5.95"></path></svg></span>
                <span>{{ title }}</span>
              </li>
            </ul>
        </li>
      </ul>
    </div>
  </nuxt-layout>
</template>

<script setup lang="ts">
const changelog = await queryContent('release-notes')
  .where({ _partial: false })
  .sort({ date: -1 })
  .find()
</script>

<style>
.new {
  stroke: green;
}
.improvement {
  stroke: orange;
}
.fix {
  stroke: red;
}
.content {
  stroke: blue;
}
</style>
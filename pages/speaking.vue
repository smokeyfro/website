<template>
  <nuxt-layout>
    <template v-slot:aside>
      <base-nav :subnav="NavLinks[2].subnav" />
    </template>
    <base-title>Speaking</base-title>
    <base-excerpt>I am passionate about sharing my craft and have had the privilage of speaking at a number of technology related conferences and meetups.</base-excerpt>
    <hr class="my:60" />
    <h2>Topics I get excited about</h2>
    <p class="">These are the topics that are currently getting me excited. I'll update these over time as my interests develop.</p>
    <ul class="list-style:none m:0 p:0 grid-cols:2 gap:40">
      <li v-for="{ id, title, summary } in speakingTopics[0].topics" :key="id" class="m:0">
        <h3 class="mt:0 mb:10">{{ title }}</h3>
        <p class="m:0">{{ summary }}</p>
      </li>
    </ul>
    <hr class="mt:60" />
    <h2 class="mt:60">Past talks</h2>
    <p class="mb:30">Below are some of my past talks from when I was still working with Joomla!.</p>
    <ul class="list-style:none m:0 p:0 grid-cols:2 gap:30">
      <li v-for="{ id, title, summary, event } in speakingTopics[0].talks" :key="id">
        <h3 class="m:0">{{ title }}</h3>
        <p class="my:15">{{ summary }}</p>
        <ul class="m:0 p:0 list-style:none flex flex:col gap:10">
            <li v-for="(item, i) in event">
                <h4 class="m:0">{{ item.name }}</h4>
                <p class="m:0">{{ item.date }} &middot; {{ item.location }}</p>
                <ul class="m:0 mt:15 p:0 list-style:none">
                    <li v-for="(item, i) in item.links">
                        <a :href="item.url" :title="item.title">
                            {{ item.text }}
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
      </li>
    </ul>
  </nuxt-layout>
</template>

<script setup lang="ts">
const speakingTopics = await queryContent('/data/talks')
  .where({ _partial: false })
  .find()
</script>
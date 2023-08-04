<template>
  <nuxt-layout>
    <template v-slot:aside>
      <base-nav :subnav="NavLinks[2].subnav" />
    </template>
    <base-title>Speaking</base-title>
    <base-excerpt>I am passionate about sharing my craft and have had the privilage of speaking at a number of technology related conferences and meetups.</base-excerpt>
    <h2>Topics I get excited about</h2>
    <p>These are the topics that are currently getting me excited. I'll update these over time as my interests develop.</p>
    <ul class="list-style:none m:0 p:0 grid-cols:2 gap:20">
      <li v-for="{ id, title, summary } in speakingTopics[0].topics" :key="id">
        <h3>{{ title }}</h3>
        <p>{{ summary }}</p>
      </li>
    </ul>
    <h2>Past talks</h2>
    <p>Below are some of my past talks from when I was still working with Joomla!.</p>
    <ul class="list-style:none m:0 p:0 grid-cols:2 gap:20">
      <li v-for="{ id, title, summary, event } in speakingTopics[0].talks" :key="id">
        <h3>{{ title }}</h3>
        <p>{{ summary }}</p>
        <ul>
            <li v-for="(item, i) in event">
                <h4>{{ item.name }}</h4>
                <p>{{ item.date }} || {{ item.location }}</p>
                <ul>
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
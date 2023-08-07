<template>
  <nuxt-layout>
    <template v-slot:aside>
      <base-nav :subnav="NavLinks[1].subnav" />
    </template>
    <base-title>Videos</base-title>
    <base-excerpt>I'm an amateur videographer and mostly shoot fauna and flora, wildlife, live music, food and festivals. Check out my gear list if you're interested.</base-excerpt>
    <content-list path="/videos" :query="{
      only: [ 'title', 'slug', '_path', 'description', 'excerpt' ], 
      sort: { date: -1 }
    }">
      <template v-slot="{ list }">
        <ul class="list-style:none m:0 p:0 bt:1|solid|#222 videos">
          <li v-for="{ _path: slug, title, excerpt } in list" :key="slug">
            <nuxt-link :to="slug" class="text-decoration:none color:#222 flex ai:center gap:40 bb:1|solid|#222 py:20">
              <svg class="w:26 h:26" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M10 8l6 4-6 4V8z"></path></svg>
              <h2 class="m:0 w:1/3 f:25 f:bold lh:1.2">{{ title }}</h2>
              <p class="m:0 w:2/3">{{ excerpt }}</p>
            </nuxt-link>
          </li>
        </ul>
      </template>
      <template #not-found>
        <p>No articles found.</p>
      </template>
    </content-list> 
  </nuxt-layout>
</template>
<style>
  .videos a svg {
    opacity: .5;
  }
  .videos a:hover svg {
    opacity: 1;
  }
</style>
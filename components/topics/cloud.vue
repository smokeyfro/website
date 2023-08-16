<template>
  <ul aria-label="topics" class="topics list-style:none m:0 p:0 inline-flex ai:flex-start mb:30 font:20 text:capitalize r:5 bg:#fff b:1|solid|#1f2226 overflow:hidden">
    <li>
      <nuxt-link to="/tutorials" class="bg:#fff color:#222 block p:10|20 text:none">All topics</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/tutorials/topics/going-headless" slug="going-headless" class="bg:#fff color:#222 block p:10|20 text:none">Going Headless</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/tutorials/topics/learning-vue" slug="learning-vue" class="bg:#fff color:#222 block p:10|20 text:none">Learning Vue</nuxt-link>
    </li>
  </ul>
</template>
<style scoped>
.topics .router-link-exact-active {
  background: #1f2226;
  color: #fff;
}
.topics li:not(:last-of-type) {
  border-right: 1px solid #1f2226;
}
</style>
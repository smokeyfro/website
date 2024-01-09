<template>
    <nav class="flex flex:row flex:col@xs gap:15 f:20 pl:59@sm mt:10 mt:0@xs pl:0@xs" role="navigation">
        <nuxt-link v-for="{ url, title, text } in subnav" :to="url" :title="title">
            <span>{{ text }}</span>
        </nuxt-link>
    </nav>
</template>
<script setup lang="ts">
const props = defineProps({
  subnav: {
    type: Array<String>,
    default: []
  }
})
</script>
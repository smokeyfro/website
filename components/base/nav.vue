<template>
    <nav class="flex flex:col gap:15 f:20" role="navigation">
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
<template>
    <nav class="flex flex:col gap:5 text-decoration:none_:where(a) color:#222_:where(a)" role="navigation">
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
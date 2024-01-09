<script setup lang="ts">
interface VideoProps {
    id: string,
    title: string,
}
</script>
<template>
    <div class="video-wrap">
        <lite-youtube
            :videoid="id"
            :playlabel="title"
            :start="0"
            params="controls=0&start=10&end=30&modestbranding=2&rel=0&enablejsapi=1"
            class="video"
        />
    </div>
</template>
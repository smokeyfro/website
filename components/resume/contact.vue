<template>
    <h2 class="mb:40">Contact</h2>
    <ul class="grid grid-cols:2 gap:10 p:0 ml:0 list-style:none reset contact-info">
        <li>
            <span class="block text-sm text-gray-600">Website</span>
            <strong>{{ data.website }}</strong>
        </li>
        <li>
            <span class="block text-sm text-gray-600">Email</span>
            <strong>{{ data.email }}</strong>
        </li>
        <li>
            <span class="block text-sm text-gray-600">Phone</span>
            <strong>{{ data.mobile }}</strong>
        </li>
        <li>
            <span class="block text-sm text-gray-600">Whatsapp</span>
            <strong>{{ data.mobile }}</strong>
        </li>
        <li>
            <span class="block text-sm text-gray-600">Instagram</span>
            <strong><a :href="`https://instagram.com/${data.handle}`" target="_blank">View my snaps</a></strong>
        </li>
        <li>
            <span class="block text-sm text-gray-600">On the web</span>
            <strong>{{ data.handle }}</strong>
        </li>
        <li>
            <span class="block text-sm text-gray-600">Timezone</span>
            <strong>{{ data.timezone }}</strong>
        </li>
        <li>
            <span class="block text-sm text-gray-600">Linkedin</span>
            <a :href="`https://www.linkedin.com/in/${data.linkedin}`" class="font-bold text-black no-underline">{{ data.linkedin }}</a>
        </li>
    </ul>
</template>
<script setup lang="ts">
  defineProps<{
    data: [object, array]
  }>()
</script>
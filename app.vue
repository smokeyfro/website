<template>
  <nuxt-page />
</template>
<script setup lang="ts">
  onMounted(async () => {
      const [{ initRuntime }, { default: config }] = await Promise.all([
          import('@master/css'),
          import('./master.css')
      ])
      initRuntime(config)
  })

const description = ''
const ogTitle = ''
const twitterDescription = ''
const twitterCard = 'https://smokeyfro.com/twitter-card.png'
const mySite = 'https://smokeyfro.com'
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  charset: 'utf-8',
  title: ogTitle,
  titleTemplate: title =>
    title !== ogTitle
      ? `${title} · SmokeyFro`
      : title,
  meta: [
    {
      name: 'description',
      content:
          description,
    },
    { 
      property: 'og:site_name', 
      content: mySite 
    },
    { 
      property: 'og:type', 
      content: 'website' 
    },
    {
      property: 'og:url',
      content: mySite,
    },
    {
      property: 'og:title',
      content: ogTitle
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:image',
      content: twitterCard,
    },
    { 
      name: 'twitter:site', 
      content: '@smokeyfro' 
    },
    { 
      name: 'twitter:card', 
      content: 'summary_large_image' 
    },
    {
      name: 'twitter:url',
      content: mySite,
    },
    {
      name: 'twitter:title',
      content: ogTitle,
    },
    {
      name: 'twitter:description',
      content: twitterDescription,
    },
    {
      name: 'twitter:image',
      content: twitterCard,
    },
  ],
  link: [
    { 
      rel: 'icon', 
      type: 'image/x-icon', 
      href: '/favicon.png' 
    },
    {
      rel: 'canonical',
      href: mySite,
    },
  ],
})
</script>
<style>
  html, body, #__nuxt { 
    min-height: 100vh; 
  }
  html { 
    overflow: hidden;
  }
  body { 
    margin: 0; 
    padding: 0;
    overflow: hidden;
    background-color: #fff;
    background-image: url('/topography.svg'); 
    background-repeat: repeat;
    /* animation: color 9s infinite linear; */
    font-family: "Lora";
    font-weight: 400;
  }
  .app {
    width: 100%;
    display: grid;
    min-height: 100vh;
  }
  main {
    overflow-x: auto;
  }
  /* @keyframes color {
    0%   { background-color: #33CCCC; }
    20%  { background-color: #33CC36; }
    40%  { background-color: #B8CC33; }
    60%  { background-color: #FCCA00; }
    80%  { background-color: #33CC36; }
    100% { background-color: #33CCCC; }
  } */
  main > div {
    height: max-content;
    min-height: min-content;
  }
  h1, h2, h3, h4, h5, p, li {
    font-family: "Lora";
    color: #1f2226;
  }
  h1 {
    font-weight: 700;
  }
  h2 {
    font-weight: 700;
    font-size: 40px;
    line-height: 1;
    margin-bottom: 1rem;
  }
  h3 {
    font-size: 30px;
  }
  p, li {
    color: #1f2226;
    line-height: 1.5;
    font-size: 19px;
    font-weight: 400;
  }
  p, ul {
    margin-bottom: 2rem;
  }
  ul, ol {
    padding-left: 1.2rem;
  }
  code {
    max-width: 100%;
    white-space: break-spaces;
    font-size: 1.2rem;
    line-height: 1.6rem;
  }
  .btn {
    font-family: "Mandali";
    display: inline-block;
    border: 0;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    outline: 2px solid;
  }
  .btn:hover {
    outline-color: #fc0;
  }
  .btn-primary {
    background: #1f1f19;
    outline-color: #1f1f19;
    color: #fff;
  }
  .btn-default {
    background: #fff;
    outline-color: #222;
    color: #222;
  }
  .btn-lg {
    padding: 10px 15px;
  }
  .silentbox-item {
    overflow: hidden;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .silentbox-item img {
    border-radius: 5px;
    width: 350px;
    height: 230px;
  }
</style>
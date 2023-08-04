<template>
  <nuxt-layout>
    <template v-slot:aside>
      <base-nav :subnav="NavLinks[4].subnav" />
    </template>
    <base-title>Tutorials</base-title>
    <base-excerpt>I learn something new all the time and as such I like the share my discoveries in the hope that it will help someone else down the line.</base-excerpt>
    <topics-cloud :section="section" />
    <ul class="list-style:none m:0 p:0 grid-cols:2 gap:30">
      <li v-for="{ _path: slug, title, excerpt, image } in tutorials" :key="slug">
        <nuxt-link :to="slug" class="text-decoration:none color:#222">
          <h2>{{ title }}</h2>
          <p>{{ excerpt }}</p>
        </nuxt-link>
      </li>
    </ul>
  </nuxt-layout>
</template>
<script setup lang="ts">
  import type { TutorialPreview, Sections } from '~/types'

  const { data: tutorials } = await useAsyncData('tutorials',
    () => queryContent<TutorialPreview>('tutorials')
      .where({ topic: { $ne: 'WordPress' } })
      .sort({ date: -1 })
      .only(['title', 'slug', 'description', 'excerpt', 'image', 'topics', 'topic'])
      .find(),
  )

  // const flatten = (topics: Array<any>, key = 'topic') => {
  //   const _topics = topics
  //     .map((topic) => {
  //       let _topic = topic
  //       if (topic.topics) {
  //         const flattened = flatten(topic[key])
  //         _topic = flattened
  //       }
  //       return _topic
  //     })
  //     .flat(1)

  //   return _topics
  // }

  // const { data } = await useAsyncData('topics', () => queryContent('tutorials')
  //   .only(["topic"])
  //   .where({ topic: { $ne: 'WordPress' } })
  //   .find());
    
  // const articleTopics = [...new Set(flatten(data.value, 'topics'))];
  // const sortedArticleTopics = articleTopics.sort()

	// create an array of topics from the products
	// const topics = tutorials.value[0].body.reduce((acc, tutorial) => {
	// 	if (!acc.includes(tutorial.topic)) {
	// 		acc.push(tutorial.topic);
	// 	}
	// 	return acc;
	// }, []);

	//var used to store the active category
	// const activeTopic = ref(null);

	// function used to set the active category
	// const setTopic = (topic) => {
	// 	activeTopic.value = topic;
	// 	useRouter().push({
	// 		query: {
	// 			topic: topic,
	// 		},
	// 	});
	// };

	// set category on mount if it exist in query
	// onMounted(() => {
	// 	if (useRoute().query.topic) {
	// 		activeTopic.value = useRoute().query.topic;
	// 	}
	// });
  
  // function used to filter the products by category
	// const filterTuts = computed(() => {
	// 	if (!activeTopic.value) {
	// 		return tutorials.value[0].body;
	// 	}
	// 	return tutorials.value[0].body.filter((tutorial) => {
	// 		return (
	// 			tutorial.topic.toLowerCase() == activeTopic.value.toLowerCase()
	// 		);
	// 	});
	// });

  const title: string = 'All my tutorials'
  const description: string = 'Here\'s a list of all my tutorials'
  const section: Sections = 'tutorials'

  useHead({
    title,
    meta: [{ name: 'description', content: description }],
  })
</script>
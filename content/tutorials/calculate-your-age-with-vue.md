---
title:  How to calculate your age with Vue
slug: calculate-your-age-with-vue
date: 2019-09-02
published: true
tags: ['vue', 'snippets', 'computed']
image: v1690984745/tuts/calculate-age-vue.jpg
thumb: v1690984745/tuts/calculate-age-vue.jpg
topics: ['learning-vue']
topic: Learning Vue
category: Learning Vue
difficulty: Easy
type: Article
description: "Yesterday I finally started updating my new portfolio content and when I got to the about page on my old site, I noticed my age was still set to 35. Whoops."
---
This is partly due to me spreading myself too thin and part of the motivation behind pulling all my side projects under a single roof.

While it's easy to remedy (just set a reminder to update the dang age man!), a better solution would be to have the age value update automatically. Similarly to how one would auto update the copyright date in a sites footer.

Doing this is in php would be pretty trivial, but being that it's not something I've done before in Vue.js, it took a bit of tinkering to get working.

I'm using Nuxt for my site, but this will apply to any Vue.js project. Here is the snippet, added as computed properties:

```js
<script>
    export default {
      computed:{
        calculateAge: function() {
          let currentDate = new Date();
          let birthDate = new Date("1980/12/31");
          let difference = currentDate - birthDate;
          let age = Math.floor(difference/31557600000);
          return age
        }
      }
    }
</script>
```
For my site I used the same principle to automatically calculate the number of years I've been working on the web.

Here is the updated version:

```js
<script>
    export default {
      computed:{
        calculateAge: function() {
          let currentDate = new Date();
          let birthDate = new Date("1980/12/31");
          let difference = currentDate - birthDate;
          let age = Math.floor(difference/31557600000);
          return age
        },
        calculateExperience: function() {
          let currentDate = new Date();
          let startDate = new Date("2001/02/01");
          let difference = currentDate - startDate;
          let experience = Math.floor(difference/31557600000);
          return experience
        }
      }
    }
</script>
```

Here is how we do the same using the new composition api in vue 3:

```ts
<script setup lang="ts">
import { ref } from 'vue';

const currentDate = new Date();

// Create reactive values using ref
const birthDate = new Date("1980/12/31");
const age = ref<number>(0); // Initialize with default value
const differenceInMilliseconds = currentDate - birthDate;
age.value = Math.floor(differenceInMilliseconds / 31557600000);

const startDate = new Date("2001/02/01");
const experience = ref<number>(0); // Initialize with default value
const experienceDifferenceInMilliseconds = currentDate - startDate;
experience.value = Math.floor(experienceDifferenceInMilliseconds / 31557600000);
</script>
```

I could probably simplify this into a single re-usable function, but it does the trick for now. I'll likely cover that in a later post when I start to refactor all of my code. 

Now that the methods are setup, we can output the values in our template using:

```html
<p>I've lived on planet earth for {{ calculateAge }} years and have worked on the web for {{ calculateExperience }} of them.</p>
```

Which outputs as:

*I've lived on planet earth for 38 years and have worked on the web for 18 of them.*

Just another example of how Vue.js makes implementing your ideas that much easier. I should also add that I realise this is trivial to do in vanilla js or jQuery, but that is not really the point. I'm simply sharing neat tricks as I figure them out, in the hopes that they might help someone else down the line.

Until next time, 
SmokeyFro out.
---
title: SavvyGarden
slug: savvygarden
description: SavvyGarden started as a weekend project to build a comprehensive database of companion plants that I could use to plan our food production efforts on the farm.
type: Nuxt
company: Internal
contact: NA
order: 
featured: true
thumb: "v1690984745/work/savvygarden-v2.png"
image: "v1690984745/work/savvygarden-v2.png"
gallery:
- thumbnail: "https://res.cloudinary.com/smokeyfro/image/upload/v1690984745/work/savvygarden-v2.png"
  src: "https://res.cloudinary.com/smokeyfro/image/upload/v1690984745/work/savvygarden-v2.png"
  alt: "Home"
  title: "Home"
- thumbnail: "https://res.cloudinary.com/smokeyfro/image/upload/v1690984745/work/savvygarden-guilds.png"
  src: "https://res.cloudinary.com/smokeyfro/image/upload/v1690984745/work/savvygarden-guilds.png"
  alt: "Guilds Index"
  title: "WIP Shop Layout"
- thumbnail: "https://res.cloudinary.com/smokeyfro/image/upload/v1690984745/work/savvygarden-shop.png"
  src: "https://res.cloudinary.com/smokeyfro/image/upload/v1690984745/work/savvygarden-shop.png"
  alt: "Shop Index"
  title: "Shop Index"
url: https://savvygarden.app
status: Online
services: ['UI Design','Wireframing','Prototyping','Development']
tools: ['Figma']
stack: ['Vue', 'Airtable', 'Gridsome', 'CommerceJS', 'TailwindCSS']
testimonial: 
date: 2021-02-01
---
SavvyGarden started as a fun weekend project to create a searchable list of companion plants that I could use as a reference tool for the farm. I used Airtable to easily maintain the list of plants, along with their friends and foes. I chose Gridsome as the static site generator, Tailwind for the front-end styling and configured it up as a progressive-web-app (otherwise known as a PWA).

The first version was intentionally simple, with an auto focussed search input, making it easy to filter the results to find the plant you're looking for. 

I also added an extra column to the plants sheet for "other names" to use it as a lookup field for the search. That way, if you type in coriander, dhania, or cilantro the correct result would show up.

I recently released an update, which adds the following improvements:

- Increases the plant count to 200
- New section for plant guilds
- Some much-needed design love
- New ways to filter and view the content
- Dark-mode

I'm currently working on a built-in shop to sell gardening-related merch, music, posters, jewelry, and art. The shop is being built from scratch in Gridsome, using CommerceJS as the headless commerce backend. 

The app is free, works offline, has no tracking or ads, and will remain so. I may add a subscription service later, but that would for value-added tools and independent of the core app.
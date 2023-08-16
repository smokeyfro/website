---
title: New Jamstack site for my dad
slug: new-jamstack-site-for-my-dad
date: 2022-05-01
published: true
tags:
  - updates
  - life
  - work
topics:
  - client-projects
description: I recently had a few days over in the week after completing a new client project, so without anything else directly competing for my time, I figured it would be a good opportunity to work on a new site for my dad, who is a natural health practitioner and coach.
---
The previous site was thrown together in a day on WordPress.com and a few years down the line and around 200 posts, the site quickly became hard to navigate and even harder to surface content.

![https://health-coach.co.za](v1691063835/work/healthcoach-home.png)

The site was built using Gridsome, with Ghost as the backend for content pages and posts. This is my second headless Ghost project (the first being my journal), where I'm using a free Ghost hosting service which is linked via a subdomain on the site (ie, write.domain.com). This worked really well for my personal site so I decided to use the same approach for my dads site. Especially with all the great updates Ghost has been receiving in recent years - like subscription / audience management, with built in.

I chose Gridsome because of how easy it is to connect different sources of data (WordPress, Ghost, Airtable, a custom API's, etc) and generate static markup for every page on the site, then splash in a bit of javascript for hydration and some Vue goodness and the results speak for themselves.

Some of the fun bits I enjoyed working on:

- The new topics page, which helps surface content based on topic
- The search with search suggestions
- Contextual sub-navigation (with pulsating divider)
- The logo focus animation

There's lots more I want to do on the site, like making the topic / tag pages a bit more comprehensive, make broader topic landing pages that can aggregate related topics into more of a magazine style flow, take full advantage of Ghosts list/audience/subscription features and at some point a directory of ailments/remedies.

Check it out -> https://health-coach.co.za

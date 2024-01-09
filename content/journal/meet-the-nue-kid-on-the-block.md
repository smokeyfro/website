---
title: Meet the Nue kid on the block
slug: meet-the-nue-kid-on-the-block
date: 2023-09-20
published: true
tags: ['os', 'ubuntu', 'tools']
topics: ['tools-of-the-trade']
description: It’s 7am on a Tuesday. I’d planned on sleeping in after burning the midnight oil deep-diving into Astro, building a foodie-inspired theme as a way to familiarize myself with it’s internals. 
---

The day starts with my usual routine, fill the kettle with a flask-and-cup of water, fire up the rocket-stove, take in the beauty of the Glade and consider the day ahead.

While manning the rocket-stove, I casually check my mail to see whether a recent recruiter has responded to my application. While scrolling my inbox I notice a new edition of Bytes (a newsletter by Tyler from ui.dev) and just as I get to the end, I notice a mention of a new front-end framework called Nue, that is said to rival Vue, React, Svelte and even (gaasp) Astro. 

Before jumping in, I feel some context is in order. I recently moved back to my farm (this time back into the caravan, after finding a tenant to rent my cottage) after a two-month house-sitting gig over August and October. Shortly before, my bag containing all my work and filming gear was stolen, leaving me in a pretty precarious situation, where getting out of it is somewhat challenging (not being able to work to replace all that was stolen). The house-sitting gig provided me with the cashflow to back and forward pay the bills, give me a stable working environment, free from loadshedding woes and a bit of breathing room to get back onto my feet.

Towards the second last week I was contacted by a recruiter for a remote gig and in a panic realized my resume was outdated, as was all the contact info and recent projects on my portfolio. I’d managed to borrow a laptop from a friend and quickly spun up my dev environment to update all the things. To my dismay, Gridsome (which I’ve long since been a fan of, used on a bunch of projects and even put together a team to build some sweet tooling) has been on a slow and steady decline and I ran into a bunch of issues preventing me from being able to update the site. I’d already jumped on the Nuxt 3 bandwagon on a number of client projects and a few of my own (SavvyGarden). Being that I felt pretty comfortable with Nuxt (being based on Vue), I decided to rebuild my site using it.

At first things went smoothly and I was able to re-produce and refine what I had before. Then I ran into an issue where everything worked perfectly on my local dev, but on the live dev site, none of the single layouts were rendering any content. Then all of a sudden, the single portfolio content started showing up. I approached it from multiple angles, looking at what was different between the various templates, but still wasted at least a week trying to figure it out. Looking at the front-end output and the cryptic errors I was receiving, I remember thinking to myself, you can call yourself a Nuxt developer, but you really have no grasp of what’s happening in the background and looking at all the code that was being outputted, that I didn’t put there just gave me an even greater sense of anxiety.

To be fair, when I finally did get around to asking for help on Discord, Daniel and a few other Nuxters were quick to respond and point out it was due to effing scrollbar package I was using. Eish, Christopher. I’ve been doing this for over 20 years and still get tripped up by the silliest things.

Like all of you, I’d also been keeping track of the new kid on the block, Astro – who promises almost no js on the client, which definitely struck a cord with me. It’s something I’ve spent a lot of time thinking of – what are the trade-off’s and alternatives to front-end frameworks that are growing more complex and require more time-investment to learn/upgrade/debug/learn/repeat.

So after feeling like Nuxt wasn’t the right fit, being that most of the site is content-based, with sprinkles of interactivity. So on to Astro then. I’ve spent a few days digging through the docs, dug through all the available Astro themes, managed to replicate most of the functionality from the current site and start a new theme from scratch. All was going well until I saw the mention of Nue.js. Now I’m planning on starting all over. Again. Yes, the Nuxt version of 90% complete. Yes the Astro version of 60% complete. The thing is, I’m a perfectionist and always strive to pick the right tool for the job. 

Using Nuxt would definitely work just fine, but despite it being touted as fully static, it took quite a bit of head scratching to get to work properly and there is still more to be done to get it finished. The Astro version is content-first, no front-end framework, occasionally reaching out for some native Javascript when needed, but still adds to the overall complexity. 

At the same time I’m using Master CSS, which is a pretty impressive alternative to other popular utility css frameworks (Tailwind, UnoCSS, etc). Unlike the aforementioned libraries, Master CSS touts itself as being a css rendering engine, much like native CSS. I digress, but the point is, I’m definitely not working at my optimum learning two new frameworks simultaneously, each with their own similarities and nuances. 

So then this morning I discover Nue (sounding a tad bit to similar to Vue, but inspired by the Finish word Nueue) and while I’ve never heard of Tero Piirainen, boy is this dude speaking my language. Firstly his assessment of the state of the web, the trade-offs all these front-end tools introduce and how far we’ve deviated from the core essentials of the web. 

The project is split up into six ambitious goals:

NueJS – the core framework, taking on the likes of React, Vue and Svelte. Weighing in at only 14kb, stripped down to the bare-essentials, while still providing similar functionality to the others. This is currently available, with the other 5 being released as they are ready. Tero reckons most are already working and being worked on in private repos until they are polished enough for release. 

NueCSS – a css framework that focusses on bring back the cascade and re-usability of native CSS. Using native css (and what looks similar to postcss for the shorthand and nesting), this would eliminate needing to learn a new utility framework nomenclature and just write standard (along with some intelligent tooling).

NueMVC – self touted by Tero as tooling to build single-page apps that scale, replacing Vue/React router, Redux and the alike. Sounding good so far.

NueUI – a library of re-usable components (which after going through every page of the website, docs and repos are a breath of fresh air. Using native attributes to define components, the server-side first rendering approach, with optional client-side hydration, fully client or hybrid – pretty much the sky is the limit.

NueMark – Teros own flavor of markdown, which looks familiar and a tad different. I’ll need to dig through the docs content a bit more to tell what exactly the differences are, but so far, I’m seeing a mix of markdown, haml and json – all familiar, all supported out the box. 

NueKit – The final cherry on top to pull it all together and a better comparison to Vite, Next, Nuxt and Astro. Sveltekit isn’t mentioned here, but I’m assuming that would fall under this category. 

I didn’t see any mention of NueStudio, aka a slick integrated content editor (which both Nuxt and Astro are working on) – but that maybe that it’s not regarded as getting the initial parts in place. I just hope Teros doesn’t follow suite to Nuxt and Astro by placing it behind a subscription. 

Don’t get me wrong, I know Open Source projects need to generate an income to remain stable, but the editing part (especially when it comes to markdown) is a pretty integral part when it comes to non-devs. Yes, markdown has been around for ages and it’s pretty straight-forward to learn for non-techies, but having to explain that to a client along with providing a non-technical way to commit content changes to the repository is a bit to ask. 

I’d be more inclined to pay if the core editor (covering all the edge use-cases) was free, while paired with a plugin eco-system, with both free and plugins that take it even further. Think Yoasts SEO plugin, or auto generated images or copy with Midjourney/ChatGPT. I’m also not a fan of subscriptions. I get the appeal, but committing to a learning a tool, only to have to cancel when cashflow is not ayoba in my books. That said, I’d happily save up and pay for something that genuinely saves me time or adds value to my current workflow, but I prefer to pay up-front, either for the lifetime of the product or with a reduced annual (predictable) upgrade fee.

After reading through the site/docs/repo, I gotta say I’m pretty excited about this one. So much so that I’m forking the site to start seeing how much of my current Astro site can be reproduced with what’s currently available. While NueJS is the only part officially available, digging through the repo code many of the parts of being used through out the site.

So, if you haven’t already, head over to https://nuejs.org to learn more about this exciting new contender to the front-end space and if you’re half as excited as I am, you will join me as an early adopter and see where we can help Teros achieve his March, 2024 release goal. Pull requests are open on the site repo, so helping out with the docs, writing tutorials, creating proof-of-concepts or just spreading the word will help. I’m excited to get back to the fundamentals of web-design, reduce the complexity of my dev/build process, while striving to build faster sites and apps that are progressively enhanced to add interactivity, but always static at their core.
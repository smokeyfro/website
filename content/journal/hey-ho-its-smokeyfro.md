---
title: Hey ho, it's SmokeyFro!
slug: hey-ho-its-smokeyfro
date: 2019-09-02
published: true
tags: ['updates', 'life', 'work']
series: false
image: 
canonical_url: false
topics: ['updates'] 
searchTerms: ['updates']
excerpt: It's been a long time coming, but I finally got around to creating a personal site that I'm proud of. This a complete rebuild of my tired (and somewhat half-arsed) version, which lived over at devignerforhire.com for a couple years.
---
The motivation behind the rebuild was multi-fold...

Firstly, I was never really happy with the old site. It was somewhat rushed and never finished and has been a thorn in my side for way too long. The story of the cobblers shoes comes to mind.

Second, I have a bunch of side projects which have been sitting stagnant gathering dust and rather than bouncing between them, bring the relevant stuff like my themes, tutorials, design resources, videos, photos under a single roof will allow my to continue to iterate and improve.

Third, I wanted to setup the ability for people to sponsor tutorials, as a way of generating some revenue through the site.

Lastly, I wanted a project where I could test out different components of the JAMstack and showcase my skills as a designer and front-end developer.
What's under the hood?

Now that's taken care of, I'm guessing you're wondering what is powering this badboy. I'll be writing a full rundown in the new year, but in the meantime, the basic components include:

- Gridsome, a Vue.js based static site generator that consumes content from different sources.
- Static site hosting on Zeit Now.
- The themes, portfolio and side-projects content is generated from Markdown files, the blog and tutorials are coming from Ghost (where I'm writing this post), the upcoming tutorials list is coming from Google Sheets and lastly my resume and experience pages content is saved as a haml file.
- The code is hosted on Github and is set to auto deploy when new commits are made to the master branch. There is also a deploy hook setup to rebuild when any public content is changed or added in Ghost.
- I have Ghost installed locally (enabling my to write without an internet connection) and exposed to Zeit using Ngrok. I tried a few other port-tunneling services, but Ngrok seemed the most stable. I'll write more on that in another post.
- For the search I decided on Flexsearch, which works nicely with Gridsome thanks this plugin. I extended my markdown files with a frontmatter field for search term grouping, so if you search for themes, it shows you all the themes or by content type or topic.
- I'm using PostCSS, along with Nested and Imports and PurgeCSS to strip out any unnecessary styles.

## What's next?

While the site in it's current form is definitely a big improvement from the latest version, there are still a bunch of things I'm not quite happy with, which I'll be tackling in the coming weeks. Here is a list of the improvements I have lined up:

- Review / improve the sites content (starting with my portfolio and projects)
- Replace the Instagram implementation on the photos page with a home baked gallery system.
- Replace Markdown with Cockpit to author my portfolio, side-project and other static content. This is already implemented, but there is a bug in the Cockpit Gridsome source that was preventing me from pushing updates to Zeit Now.
- Overall the lightbox to be more user-friendly on mobile.
- Resize images coming from external sources (ie, not Markdown). This is dependant on a few improvements needed in the External Images plugin.
- Replace all custom css with Tailwind classes where possible.
- Further refactor the layouts, templates and components. I'm tackling these as I go, but there is still a lot of repetition and not nearly as D.R.Y. (don't repeat yourself) as I'd like.
- Set the items in the upcoming tutorials list to be clickable, linking to sponsor page with the tutorial preselected.
- Finish implementing Puppeteer to automatically generate the PDF version of my resume on each new build.
- Finish styling the print version of my resume to match the PDF generated version.
- Refine the work / side-project single layouts.
- Get the inline demo working on the single theme layouts. I had this working locally, but ran into some issues with the iframe permissions when pushed to the live site. Will need to look into this further.
- More testing / refinements on physical devices.
- Review / refine all the meta content across the site.
- Overhaul the single service page, with examples of relevant work.
- Implement automatic social card images using Puppeteer.
- Set the browser wrapper to detect your operating system and style the browser chrome accordingly. You can see the browser wrapper on the work and side-project indexes.
- Further improve the sites performance. It's pretty fast as it is, but there are a couple more things which should improve the first paint / content loaded time.

I'm sure I've left over a few items, but that should give you an idea of what is coming next. I don't think I'll ever be done, but I don't think it's a bad start for SmokeyFro v1 :)

For anyone interested in how the site was built, the github repo is available here and is MIT licensed, meaning you can do pretty much whatever you'd like with the code, as long as you keep the credits intact. All I ask is that you'd don't be a dick and clone the site as is and pass it off as your own work. Same goes for changing a few colors and then selling it as a theme. Not that I'd give it much thought. As the saying goes: imitation is the highest form of flattery.

Now that I have a foundation I am happy with, I can get on to finishing the first of the Gridsome starters I have in the works. I have some ideas I'd like to get feedback on from the Community, like whether there is any interest in paid starters, but I'll put down my thoughts in a separate post.

I've done extensive testing on the devices I have available, but if you notice anything funky, please be sure to let me know via my contact form.

That's it for now, so until next time, stay Smokey!
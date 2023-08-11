import type { Navigation } from '~/types'

export const NavLinks: Navigation[] = [
    {
        url: '/',
        text: 'Home',
        title: 'About this guy called SmokeyFro',
        icon: ''
    },
    {
        url: '/about',
        text: 'About',
        title: 'About this guy called SmokeyFro',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd" viewBox="0 0 22 22"><defs /><circle cx="12" cy="12" r="10" fill="none" stroke-width="2" transform="translate(-1 -1.001)" /><path fill="none" stroke-width="2" d="M11 14.999v-4M11 6.999h.01" /></svg>',
        subnav: [
            {
                url: '/about',
                text: 'About',
                title: 'About',
            },
            {
                url: '/photos',
                text: 'Photos',
                title: 'Photos',
            },
            {
                url: '/videos',
                text: 'Videos',
                title: 'Videos',
            },
            {
                url: '/credits',
                text: 'Credits',
                title: 'Credits',
            },
        ]
    },
    {
        url: '/work',
        text: 'Work',
        title: 'View my work',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd" viewBox="0 0 22 20"><defs /><g fill="none" stroke-width="2"><path d="M21 6.999a2 2 0 00-2-2H3a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2v-10z" /><path d="M15 18.999v-16c0-1.097-.903-2-2-2H9c-1.097 0-2 .903-2 2v16"/></g></svg>',
        subnav: [
            {
                url: '/work',
                text: 'Portfolio',
                title: 'Portfolio',
            },
            {
                url: '/services',
                text: 'Services',
                title: 'Services',
            },
            {
                url: '/speaking',
                text: 'Speaking',
                title: 'Speaking',
            },
            {
                url: '/resume',
                text: 'Resume',
                title: 'Resume',
            },
        ]
    },
    {
        url: '/themes',
        text: 'Themes',
        title: 'Explore my themes',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><defs/><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
        subnav: [
            {
                url: '/themes',
                text: 'Themes',
                title: 'Themes',
            },
            {
                url: '/themes/nuxt',
                text: 'Nuxt',
                title: 'Nuxt',
            },
            {
                url: '/themes/gridsome',
                text: 'Gridsome',
                title: 'Gridsome',
            },
            {
                url: '/themes/vanilla',
                text: 'Vanilla',
                title: 'Vanilla',
            },
            {
                url: '/themes/wordpress',
                text: 'WordPress',
                title: 'WordPress',
            },
        ]
    },
    {
        url: '/tutorials',
        text: 'Tutorials',
        title: 'Learn something new',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd" viewBox="0 0 22 22"><defs /><circle cx="12" cy="12" r="10" fill="none" stroke-width="2" transform="translate(-1 -1.001)" /><path fill="none" stroke-width="2" d="M15.24 6.759l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" /></svg>',
        subnav: [
            {
                url: '/tutorials',
                text: 'Tutorials',
                title: 'Tutorials',
            },
            {
                url: '/tutorials/archives',
                text: 'Archives',
                title: 'Archives',
            },
            {
                url: '/tutorials/tags',
                text: 'Tags',
                title: 'Tags',
            },
        ]
    },
    {
        url: '/journal',
        text: 'Journal',
        title: 'Find out what I\'m working on',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><defs/><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>',
        subnav: [
            {
                url: '/journal',
                text: 'Journal',
                title: 'Journal',
            },
            {
                url: '/subscribe',
                text: 'Subscribe',
                title: 'Subscribe',
            },
            {
                url: '/feed',
                text: 'Feed',
                title: 'Feed',
            }
        ]
    },
    {
        url: '/contact',
        text: 'Contact',
        title: 'Get in touch',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd" viewBox="0 0 22 22"><defs /><path fill="none" stroke-width="2" d="M21 .999l-11 11M21 .999l-7 20-4-9-9-4 20-7z" /></svg>'
    },
]

export const UtilityLinks: Navigation[] = [
    {
        url: '/changelog',
        text: 'Changelog',
        title: '',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3"></path></svg>'
    }
]
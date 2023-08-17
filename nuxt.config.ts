// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/plausible', '@nuxt/devtools'],
    routeRules: {
        '/': {redirect: '/it-IT/'},
    },
    devtools: {
        enabled: true
    }, tailwindcss: {
        viewer: false,
    }, plausible: {
        domain: 'hyperbit.it',
        autoPageviews: true,
        trackLocalhost: false,
        autoOutboundTracking: true,
        apiHost: 'https://stats.hyperbit.it',
    }, devtoold: {
        enabled: true,
    }, pages: true, components: true, app: {
        head: {
            charset: 'utf-16',
            title: 'HyperBit SRLs',
            viewport: 'width=device-width, initial-scale=1',
            meta: [{property: 'og:title', content: 'HyperBit SRLs'}, {
                property: 'og:description', content: 'HyperBit - We connect the world 🔌'
            }, {property: 'og:type', content: 'website'}, {
                property: 'og:url', content: 'https://hyperbit.it'
            }, {property: 'og:image', content: 'https://hyperbit.it/publicCover.png'}, {
                property: 'og:site_name', content: 'HyperBit SRLs'
            }, {property: 'og:locale', content: 'it_IT'},],
            link: [{rel: 'icon', type: 'image/x-icon', href: '/HyperBit_Dark_Logo.svg'}],
        },
    },
})

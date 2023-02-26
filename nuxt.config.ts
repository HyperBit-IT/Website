// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    pages: true,
    components: true,
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: '~/tailwind.config.js',
        exposeConfig: false,
        injectPosition: 0,
        viewer: true,
    },
    app: {
        head: {
            charset: 'utf-16',
            title: 'HyperBit SRLs',
            viewport: 'width=device-width, initial-scale=1',
            meta: [
                {property: 'og:title', content: 'HyperBit SRLs'},
                {property: 'og:description', content: 'HyperBit SRLs home page'},
                {property: 'og:type', content: 'website'},
                {property: 'og:url', content: 'https://hyperbit.it'},
                {property: 'og:image', content: 'https://hyperbit.it/publicCover.png'},
                {property: 'og:site_name', content: 'HyperBit SRLs'},
                {property: 'og:locale', content: 'it_IT'},
            ],
            link: [{rel: 'icon', type: 'image/x-icon', href: '/HyperBit_Dark_Logo.svg'}],
            script: [// Add plausible analytics
                {src: 'https://plausible.io/js/plausible.js', async: true, defer: true, 'data-domain': 'hyperbit.it'},]
        },
    },
})

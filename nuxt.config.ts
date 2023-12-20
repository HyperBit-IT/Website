// https://nuxt.com/docs/api/configuration/nuxt-config
import {dirname, resolve} from 'node:path'
import {fileURLToPath} from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'

export default defineNuxtConfig({
    colorMode: {preference: "light"},
    devtools: {enabled: true},
    modules: ["@nuxt/ui", '@nuxtjs/plausible'],
    build: {
        transpile: ["vue-i18n"]
    },
    ui: {
        global: true,
    },
    plausible: {
        domain: 'hyperbit.it',
        autoPageviews: true,
        trackLocalhost: false,
        autoOutboundTracking: true,
        apiHost: 'https://stats.hyperbit.it',
    },
    vite: {
        plugins: [
            VueI18nVitePlugin({
                    runtimeOnly: true,
                    include:
                        [
                            resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json')
                        ]
                }
            )
        ]
    },
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
})

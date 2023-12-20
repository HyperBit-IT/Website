import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'
import it from '../locales/it.json'
import de from '../locales/de.json'


export default defineNuxtPlugin(({ vueApp }) => {
    const i18n = createI18n({
        legacy: false,
        globalInjection: true,
        locale: 'it',
        fallbackLocale: 'en',
        messages: {
            en,
            it,
            de
        }
    })
    vueApp.use(i18n)
})

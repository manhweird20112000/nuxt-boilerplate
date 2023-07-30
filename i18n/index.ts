import en from './en.json'
import vi from './vi.json'

export default defineI18nConfig(() => ({
    locales: ['en', 'vi'],
    legacy: false,
    locale: 'vi',
    lazy: true,
    detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected', // can change
        redirectOn: 'root'
    },
    messages: {
        en, vi
    }
}))

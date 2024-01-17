import en from './en.json'
import vi from './vi.json'

import { KEY_LANGUAGE } from '~/constants'

export default defineI18nConfig(() => ({
  locales: ['en', 'vi'],
  fallbackLocaleL: 'vi',
  legacy: false,
  locale: getStorage(KEY_LANGUAGE) || 'vi',
  lazy: true,
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: KEY_LANGUAGE, // can change
    redirectOn: 'root'
  },
  messages: {
    en, vi
  }
}))

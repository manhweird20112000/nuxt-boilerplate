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
    cookieKey: 'i18n_redirected', // can change
    redirectOn: 'root'
  },
  messages: {
    en, vi
  },
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US'
      },
      {
        code: 'vi',
        iso: 'vi-VN'
      }
    ]
  }
}))

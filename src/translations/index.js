import { createI18n } from 'vue-i18n'
import en from '@/translations/locales/en'
import ptBR from '@/translations/locales/pt-BR'

export const createTranslations = (admin) => createI18n({
  legacy: false,
  globalInjection: true,
  locale: admin.options.locale || 'pt-BR',
  fallbackLocale: 'en',
  messages: {
    en,
    'pt-BR': ptBR
  }
})

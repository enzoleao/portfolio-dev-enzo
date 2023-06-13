import i18n from 'i18next'
import enTranslation from './public/locales/en/common.json'
import ptTranslation from './public/locales/pt/common.json'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: enTranslation,
  },
  pt: {
    translation: ptTranslation,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'pt', // Defina o idioma padrão aqui
  fallbackLng: 'pt', // Defina o idioma de fallback aqui
  interpolation: {
    escapeValue: false,
  },
})

export default i18n

import i18n, { FallbackLng, FallbackLngObjList } from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import toast from "react-hot-toast";


export const availableLocales = [
  'en',
  'zh-Hans'
] as const

const fallbacks = {
  zh: ['zh-Hans', 'en']
} as FallbackLngObjList


i18n
  .use(LanguageDetector) // 探测浏览器的默认语言
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // 这里的配置项 todo
    detection: {
      order: ['navigator'],
    },
    fallbackLng: {
      // 选择的语言不可用时,使用这里配置的
      ...fallbacks,
      ...{ default: ['en']},
    } as FallbackLng
  })

for (const locale of availableLocales) {
  import(`./locales/${locale}.json`)
    .then(translation => {
      console.log(locale, translation)
      i18n.addResourceBundle(locale, 'translation', translation.default, true, true)
    })
    .catch(err => {
      toast.error(`Failed to load lcoale "${locale}".\n${err}`, { duration: 5000})
    })
}


export default i18n
export type TLocale = typeof availableLocales[number]
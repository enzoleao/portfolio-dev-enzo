/* eslint-disable react-hooks/exhaustive-deps */
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { ContextProvider } from '../Context/useContext'
import { appWithTranslation } from 'next-i18next'
import i18n from '../../i18n'
function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const { lang } = router.query
  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang.toString())
    }
  }, [lang])
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  )
}
export default appWithTranslation(App)

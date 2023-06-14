/* eslint-disable react-hooks/exhaustive-deps */
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { ContextProvider } from '../Context/useContext'
import { appWithTranslation } from 'next-i18next'
import i18n from '../../i18n'
import Head from 'next/head'
import 'primereact/resources/themes/lara-light-indigo/theme.css' // theme
import 'primereact/resources/primereact.css' // core css
import 'primeicons/primeicons.css' // icons
import 'primeflex/primeflex.css'
import './flags.css'
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
      <Head>
        <title>Developer</title>
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <Component {...pageProps} />
    </ContextProvider>
  )
}
export default appWithTranslation(App)

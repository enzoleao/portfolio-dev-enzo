import styles from './About.module.scss'
import Typed from 'react-typed'
import { useEffect } from 'react'
import { useContextProvider } from '@/src/Context/useContext'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
const fadeIn = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 3,
    },
  },
}
export default function About() {
  const { setShowScroll } = useContextProvider()
  const { t } = useTranslation()
  useEffect(() => {
    const handleScroll = async () => {
      const timeline = document.getElementById('section1')
      const rect = timeline?.getBoundingClientRect()
      /* @ts-ignore: Unreachable code error */
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0
      // eslint-disable-next-line no-unused-expressions
      isVisible === true ? setShowScroll('ABOUT') : false
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [setShowScroll])

  return (
    <div className={styles.aboutContainer} id="section1">
      <div id="about">
        <div>
          <span className={styles.namePortfolio}>
            <p>
              <Typed
                showCursor={false}
                strings={[t('apresentation')]}
                startDelay={60}
                typeSpeed={40}
              />
            </p>
            <p className={styles.webDeveloper}>
              <Typed
                showCursor={false}
                strings={[t('profession')]}
                typeSpeed={40}
                startDelay={1300}
              />
            </p>
          </span>
          <p className={styles.experiencesTextLeft}>
            <Typed
              strings={['experience']}
              startDelay={2500}
              showCursor={false}
              typeSpeed={40}
            />
          </p>
        </div>
      </div>
      <div>
        <motion.img
          src="https://github.com/enzoleao.png"
          alt="Imagem"
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className={styles.meImage}
        />
      </div>
    </div>
  )
}

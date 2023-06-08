import { useEffect } from 'react'
import styles from './About.module.scss'
import Typed from 'react-typed'
import { useContextProvider } from '@/src/Context/useContext'
export default function About() {
  const { setShowScroll } = useContextProvider()
  useEffect(() => {
    const handleScroll = async () => {
      const timeline = document.getElementById('section1')
      const rect = timeline?.getBoundingClientRect()
      /* @ts-ignore: Unreachable code error */
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0
      console.log(isVisible)
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
                strings={['Hi, Im Enzo, a']}
                typeSpeed={40}
              />
            </p>
            <p className={styles.webDeveloper}>
              <Typed
                showCursor={false}
                strings={['Web Developer']}
                typeSpeed={40}
                startDelay={1300}
              />
            </p>
          </span>

          <p className={styles.experiencesTextLeft}>
            <Typed
              strings={[
                ' I have experience with projects using React and Next in the Front-End and Node and Express for the Back-End',
              ]}
              startDelay={2500}
              showCursor={false}
              typeSpeed={40}
            />
          </p>
        </div>
        <div></div>
      </div>
      <div></div>
    </div>
  )
}

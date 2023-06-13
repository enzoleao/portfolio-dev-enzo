import styles from './Projects.module.scss'
import Image from 'next/image'
import AgendamentoImage from '../../../public/images/agendamento_pmpa.png'
import ciapImage from '../../../public/images/ciap_pmpa.png'
import Link from 'next/link'
import { Timeline } from 'antd'
import { useEffect, useState } from 'react'
import { useContextProvider } from '@/src/Context/useContext'
import { useTranslation } from 'react-i18next'
export default function Projects() {
  const [showItems, setShowItems] = useState(false)
  const { setShowScroll } = useContextProvider()
  const { t } = useTranslation()
  useEffect(() => {
    const handleScroll = async () => {
      const timeline = document.getElementById('section2')
      const rect = timeline?.getBoundingClientRect()
      /* @ts-ignore: Unreachable code error */
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0

      setShowItems(isVisible)
      // eslint-disable-next-line no-unused-expressions
      isVisible === true ? setShowScroll('PROJECTS') : false
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [setShowScroll])
  return (
    <div className={styles.projectsContainer} id="section2">
      <div
        id="section2"
        className={`${styles.timeline} ${showItems && styles.show}`}
      >
        <Timeline
          mode="alternate"
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '80px',
          }}
          items={[
            {
              className: styles.timelineItem,
              color: 'none',
              children: (
                <>
                  <div className="flex w-full">
                    <Image
                      src={AgendamentoImage}
                      alt="teste"
                      className={styles.projectsImages}
                    />
                  </div>
                </>
              ),
              label: (
                <div>
                  <h3>
                    <Link href="https://agendamentopmpa.com.br">
                      {t('projects.scheduling.name')}
                    </Link>
                  </h3>
                  <h4>01/07/2022 - 01/03/2023</h4>
                  <span className={styles.labelStyle}>
                    <p>{t('projects.scheduling.about')}</p>
                  </span>
                </div>
              ),
            },
            {
              className: styles.timelineItem,
              children: (
                <>
                  <Image
                    className={styles.projectsImages}
                    src={ciapImage}
                    alt="teste"
                  />
                </>
              ),
              color: 'none',
              label: (
                <>
                  <h3>
                    <Link href="https://ciap-front-end-project.vercel.app">
                      {t('projects.medicalReportManagment.name')}
                    </Link>
                  </h3>
                  <h4>01/03/2023 - Now</h4>
                  <span className={styles.labelStyleRight}>
                    <p>{t('projects.medicalReportManagment.about')}</p>
                  </span>
                </>
              ),
            },
          ]}
        />
      </div>
    </div>
  )
}

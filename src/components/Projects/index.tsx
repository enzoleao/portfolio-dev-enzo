/* eslint-disable react-hooks/rules-of-hooks */
import Image from 'next/image'
import styles from './Projects.module.scss'
import sipmImage from '../../../public/images/agendamento_pmpa.png'
import ciapImage from '../../../public/images/ciap_pmpa.png'
import { useEffect, useState } from 'react'
import { useContextProvider } from '@/src/Context/useContext'
import { useTranslation } from 'react-i18next'
import { Timeline } from 'primereact/timeline'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'

export default function Projects() {
  const [showItems, setShowItems] = useState(false)
  const { setShowScroll } = useContextProvider()

  const { t } = useTranslation()
  const events = [
    {
      status: t('projects.scheduling.name'),
      date: '01/07/2022 - 01/03/2023',
      image: sipmImage,
      about: t('projects.scheduling.about'),
      link: 'https://agendamentopmpa.com.br/',
      icon: 'pi pi-check',
      color: '#607D8B',
    },
    {
      status: t('projects.medicalReportManagment.name'),
      date: '01/03/2023 - Now',
      image: ciapImage,
      about: t('projects.medicalReportManagment.about'),
      link: 'https://ciap-front-end-project.vercel.app/',
      icon: 'pi pi-spin pi-spinner',
      color: '#607D8B',
    },
  ]
  const customizedMarker = (item: any) => {
    return (
      <span
        className="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1"
        style={{ backgroundColor: item.color }}
      >
        <i className={item.icon}></i>
      </span>
    )
  }

  const customizedContent = (item: any) => {
    return (
      <Card
        className={styles.cardProjects}
        title={item.status}
        subTitle={item.date}
      >
        {item.image && (
          <Image
            src={item.image}
            alt={item.name}
            width={200}
            className={styles.imageCard}
          />
        )}
        <p className="text-justify">{item.about}</p>
        <a href={item.link}>
          <Button label="Visitar" className="p-button-text"></Button>
        </a>
      </Card>
    )
  }
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
        <div className="card">
          <Timeline
            value={events}
            align="alternate"
            marker={customizedMarker}
            content={customizedContent}
          />
        </div>
      </div>
    </div>
  )
}

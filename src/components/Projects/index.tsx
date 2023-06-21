/* eslint-disable react-hooks/rules-of-hooks */

import styles from './Projects.module.scss'

import { useEffect, useState } from 'react'
import { useContextProvider } from '@/src/Context/useContext'
import { useTranslation } from 'react-i18next'
import { Timeline } from 'primereact/timeline'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { Image } from 'antd'

export default function Projects() {
  const [showItems, setShowItems] = useState(false)
  const { setShowScroll } = useContextProvider()

  const { t } = useTranslation()
  const events = [
    {
      id: 1,
      status: t('projects.scheduling.name'),
      date: '01/07/2022 - 01/03/2023',
      image: 'https://i.imgur.com/0SVFwPr.png',
      about: t('projects.scheduling.about'),
      link: 'https://agendamentopmpa.com.br/',
      icon: 'pi pi-check',
      color: '#4BB543',
      name: 'teste',
    },
    {
      id: 2,
      status: t('projects.medicalReportManagment.name'),
      date: '01/03/2023 - Now',
      image: 'https://i.imgur.com/d7T5deL.png',
      about: t('projects.medicalReportManagment.about'),
      link: 'https://ciap-front-end-project.vercel.app/',
      icon: 'pi pi-spin pi-spinner',
      color: '#607D8B',
      name: 'teste',
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
        className={`${item.id % 2 === 0 ? styles.timeline : styles.timeline2} ${
          showItems && styles.show
        }`}
        title={<p className="text-blue-900">{item.status}</p>}
        subTitle={<p className="text-blue-900">{item.date}</p>}
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
          <Button
            label="Visitar"
            className="p-button-text text-blue-900"
          ></Button>
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
      <div id="section2">
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

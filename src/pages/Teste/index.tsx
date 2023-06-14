import React from 'react'
import { Timeline } from 'primereact/timeline'
import { Card } from 'primereact/card'
import styles from './TimelineDemo.module.scss'
import sipmImage from '../../../public/images/agendamento_pmpa.png'
import ciapImage from '../../../public/images/ciap_pmpa.png'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
export default function TemplateDemo() {
  const { t } = useTranslation()
  const events = [
    {
      status: t('projects.scheduling.name'),
      date: '01/07/2022 - 01/03/2023',
      color: '#fff',
      image: sipmImage,
      about: t('projects.scheduling.about'),
    },
    {
      status: t('projects.medicalReportManagment.name'),
      date: '01/03/2023 - Now',
      color: '#fff',
      image: ciapImage,
      about: t('projects.medicalReportManagment.about'),
    },
  ]
  t('')
  const customizedMarker = (item) => {
    return (
      <span
        className="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1"
        style={{ backgroundColor: item.color }}
      >
        <i className={item.icon}></i>
      </span>
    )
  }

  const customizedContent = (item) => {
    return (
      <Card className={styles.teste} title={item.status} subTitle={item.date}>
        {item.image && (
          <Image
            src={item.image}
            alt={item.name}
            width={200}
            className="shadow-1"
          />
        )}
        <p>{item.about}</p>
      </Card>
    )
  }

  return (
    <div className="card ">
      <Timeline
        value={events}
        align="alternate"
        className={styles.teste}
        marker={customizedMarker}
        content={customizedContent}
      />
    </div>
  )
}

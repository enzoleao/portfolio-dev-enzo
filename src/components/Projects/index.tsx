import { Timeline } from 'antd'
import styles from './Projects.module.scss'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import AgendamentoImage from '../../../public/images/agendamento_pmpa.png'
export default function Projects() {
  const [showItems, setShowItems] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const timeline = document.getElementById('timeline')
      const rect = timeline?.getBoundingClientRect()
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0
      setShowItems(isVisible)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <div className={styles.projectsContainer} id="section2">
      <div
        id="timeline"
        className={`${styles.timeline} ${showItems && styles.show}`}
      >
        <Timeline
          mode="alternate"
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
          items={[
            {
              className: styles.timelineItem,
              children: (
                <>
                  <div className="flex w-full">
                    <Image height={250} src={AgendamentoImage} alt="teste" />
                  </div>
                </>
              ),
              label: (
                <>
                  <h4>01/07/2022 - 01/03/2023</h4>
                  <span className="max-w-[1rem]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                  </span>
                </>
              ),
            },
            {
              className: styles.timelineItem,
              children: (
                <>
                  <Image
                    ///  style={{ marginLeft: '-174px' }}
                    height={250}
                    src={AgendamentoImage}
                    alt="teste"
                  />
                </>
              ),
              label: (
                <>
                  <h4>01/07/2022 - 01/03/2023</h4>
                  <span className="max-w-[1rem]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
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

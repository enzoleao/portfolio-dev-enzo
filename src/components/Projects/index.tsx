import styles from './Projects.module.scss'
import Image from 'next/image'
import AgendamentoImage from '../../../public/images/agendamento_pmpa.png'
import ciapImage from '../../../public/images/ciap_pmpa.png'
import { Timeline } from 'antd'
import { useEffect, useState } from 'react'
import { useContextProvider } from '@/src/Context/useContext'
export default function Projects() {
  const [showItems, setShowItems] = useState(false)
  const { setShowScroll } = useContextProvider()
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
            gap: '20px',
          }}
          items={[
            {
              className: styles.timelineItem,
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
                <>
                  <h3>SISTEMA DE AGENDAMENTO DA SIPM</h3>
                  <h4>01/07/2022 - 01/03/2023</h4>
                  <span className="text-justify">
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
                    className={styles.projectsImages}
                    src={ciapImage}
                    alt="teste"
                  />
                </>
              ),
              label: (
                <>
                  <h3>SISTEMA DE GESTÃO DE PRONTUÁRIO DO CIAP</h3>
                  <h4>01/07/2022 - 01/03/2023</h4>
                  <span className=" text-justify">
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

import styles from './Technologies.module.scss'
import {
  SiTailwindcss,
  SiTypescript,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiNextdotjs,
  SiLaravel,
  SiExpress,
  SiSequelize,
  SiReact,
  SiSass,
  SiNodedotjs,
  SiGit,
} from 'react-icons/si'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/scss/autoplay'
import { useEffect } from 'react'
import { useContextProvider } from '@/src/Context/useContext'
import { Card, Progress } from 'antd'

export default function Technologies() {
  const { setShowScroll } = useContextProvider()
  useEffect(() => {
    const handleScroll = async () => {
      const timeline = document.getElementById('section3')
      const rect = timeline?.getBoundingClientRect()
      /* @ts-ignore: Unreachable code error */
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0

      // eslint-disable-next-line no-unused-expressions
      isVisible === true ? setShowScroll('TECHNOLOGIES') : false
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [setShowScroll])
  const technologies = [
    {
      id: 1,
      icon: <SiReact className={styles.technologiesIcons} />,
      progress: <Progress percent={80} showInfo={false} steps={5} />,
    },
    {
      id: 2,
      icon: <SiNextdotjs className={styles.technologiesIcons} />,
      progress: <Progress percent={80} showInfo={false} steps={5} />,
    },
    {
      id: 3,
      icon: <SiTypescript className={styles.technologiesIcons} />,
      progress: <Progress percent={80} showInfo={false} steps={5} />,
    },
    {
      id: 4,
      icon: <SiSass className={styles.technologiesIcons} />,
      progress: <Progress percent={80} showInfo={false} steps={5} />,
    },
    {
      id: 5,
      icon: <SiTailwindcss className={styles.technologiesIcons} />,
      progress: <Progress percent={80} showInfo={false} steps={5} />,
    },
    {
      id: 6,
      icon: <SiNodedotjs className={styles.technologiesIcons} />,
      progress: <Progress percent={80} showInfo={false} steps={5} />,
    },
    {
      id: 7,
      icon: <SiExpress className={styles.technologiesIcons} />,
      progress: <Progress percent={80} showInfo={false} steps={5} />,
    },
    {
      id: 8,
      icon: <SiLaravel className={styles.technologiesIcons} />,
      progress: <Progress percent={80} showInfo={false} steps={5} />,
    },
    {
      id: 9,
      icon: <SiMysql className={styles.technologiesIcons} />,
      progress: <Progress percent={80} showInfo={false} steps={5} />,
    },
    {
      id: 10,
      icon: <SiPostgresql className={styles.technologiesIcons} />,
      progress: <Progress percent={80} showInfo={false} steps={5} />,
    },
    {
      id: 11,
      icon: <SiPrisma className={styles.technologiesIcons} />,
      progress: <Progress percent={80} showInfo={false} steps={5} />,
    },
    {
      id: 12,
      icon: <SiSequelize className={styles.technologiesIcons} />,
      progress: <Progress percent={80} showInfo={false} steps={5} />,
    },
    {
      id: 13,
      icon: <SiGit className={styles.technologiesIcons} />,
      progress: <Progress percent={80} showInfo={false} steps={5} />,
    },
  ]
  const frontEndSkills = []
  return (
    <div id="section3" className={styles.technologiesContainer}>
      <div className={styles.cardEdit}>
        <div>
          <p>Front-End</p>
          <Card bordered={false} style={{ width: 300 }}>
            <p>• Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </div>
        <div>
          <p>Back-End</p>
          <Card bordered={false} style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </div>
      </div>
      <span>
        <Swiper
          breakpoints={{
            992: {
              width: 992,
              slidesPerView: 6,
            },
            1200: {
              width: 1200,
              slidesPerView: 6,
            },
          }}
          style={{ width: '80%' }}
          spaceBetween={30}
          speed={3000}
          loop={true}
          freeMode={true}
          noSwiping={true}
          slideToClickedSlide={false}
          slidesPerView="auto"
          autoplay={{
            delay: 0,
            disableOnInteraction: true,
            reverseDirection: false,
          }}
          modules={[Autoplay]}
          className={styles.swiperWrapper}
        >
          <div></div>
          {technologies.map((i) => {
            return (
              <SwiperSlide key={i.id} className={styles.swiperSlide}>
                {
                  <>
                    {i.icon}
                    {i.progress}
                  </>
                }
              </SwiperSlide>
            )
          })}
        </Swiper>
      </span>
    </div>
  )
}

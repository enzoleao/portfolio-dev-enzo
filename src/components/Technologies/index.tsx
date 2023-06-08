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
  return (
    <div id="section3" className={styles.technologiesContainer}>
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
          <SwiperSlide className={styles.swiperSlide}>
            <SiReact className={styles.technologiesIcons} />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <SiNextdotjs className={styles.technologiesIcons} />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <SiTypescript className={styles.technologiesIcons} />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <SiSass className={styles.technologiesIcons} />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <SiTailwindcss className={styles.technologiesIcons} />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <SiNodedotjs className={styles.technologiesIcons} />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <SiExpress className={styles.technologiesIcons} />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <SiLaravel className={styles.technologiesIcons} />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <SiMysql className={styles.technologiesIcons} />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <SiPostgresql className={styles.technologiesIcons} />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <SiPrisma className={styles.technologiesIcons} />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <SiSequelize className={styles.technologiesIcons} />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <SiGit className={styles.technologiesIcons} />
          </SwiperSlide>
        </Swiper>
      </span>
    </div>
  )
}

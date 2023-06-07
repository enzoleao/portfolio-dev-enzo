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
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper'
import 'swiper/css'

export default function Technologies() {
  return (
    <div id="section3" className={styles.technologiesContainer}>
      <span>
        <Swiper
          slidesPerView={5}
          autoplay={{
            delay: 20,
            disableOnInteraction: false,
          }}
          speed={1000}
          modules={[Autoplay, FreeMode]}
          freeMode={true}
          style={{ width: '80%' }}
          spaceBetween={50}
        >
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

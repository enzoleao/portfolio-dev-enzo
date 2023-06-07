// Import Swiper React components
import styles from './styles.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper'
import 'swiper/css'

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={5}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, FreeMode]}
        freeMode={true}
        className="w-full h-full"
      >
        <SwiperSlide className={styles.swiperSlide}>Slide 1</SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>Slide 2</SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>Slide 3</SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>Slide 4</SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>Slide 5</SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>Slide 6</SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>Slide 7</SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>Slide 8</SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>Slide 9</SwiperSlide>
      </Swiper>
    </>
  )
}

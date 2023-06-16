import styles from './Home.module.scss'
import Header from '@/src/components/Header'
import About from '@/src/components/About'
import Projects from '@/src/components/Projects'
import Technologies from '@/src/components/Technologies'
import Sidebar from '@/src/components/Sidebar'
import { useContextProvider } from '@/src/Context/useContext'
import ContatModal from '@/src/components/ContactModal'
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai'
import { HiOutlineClipboardList } from 'react-icons/hi'
import { useTranslation } from 'next-i18next'
export default function Home() {
  const { i18n } = useTranslation()
  const { showSideBarButton } = useContextProvider()
  return (
    <div className={styles.homeWrapper}>
      <Sidebar />
      <Header />
      <div onClick={showSideBarButton(false)} className={styles.homeContainer}>
        <About />
        <Projects />
        <Technologies />
      </div>
      <footer className={styles.footerHome}>
        <div>
          <p>&copy; 2023. Todos os direitos reservados.</p>
        </div>
        <div className="flex items-center  justify-center ">
          <a href="https://github.com/enzoleao">
            <AiOutlineGithub className={styles.footerIcons} />
          </a>
          <a href="https://www.linkedin.com/in/enzo-le%C3%A3o-976270202/">
            <AiFillLinkedin className={styles.footerIcons} />
          </a>
          <a
            href={`${
              i18n.language === 'en'
                ? 'https://drive.google.com/file/d/1jlDGgB6c6mElKkfioMGU_HNxNu3LcJIV/view'
                : 'https://drive.google.com/file/d/1W-C73hWfBf3n9xT-AzoA8ecXKyHIAowQ/view?usp=drivesdk'
            }`}
          >
            <HiOutlineClipboardList className={styles.footerIcons} />
          </a>
        </div>
      </footer>
      <ContatModal />
    </div>
  )
}

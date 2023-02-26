import styles from './Home.module.scss'
import Header from '@/src/components/Header'
import About from '@/src/components/About'
import Projects from '@/src/components/Projects'
import Technologies from '@/src/components/Technologies'
import Sidebar from '@/src/components/Sidebar'
import { useContextProvider } from '@/src/Context/useContext'
import ContatModal from '@/src/components/ContactModal'
export default function Home() {
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
      <ContatModal />
    </div>
  )
}

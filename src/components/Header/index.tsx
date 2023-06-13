import styles from './Header.module.scss'
import Image from 'next/image'
import BrasilImg from '../../../public/images/brasil.svg'
import UsaImg from '../../../public/images/bandeira-estados-unidos.svg'
import { Link, animateScroll as scroll } from 'react-scroll'
import { FaConnectdevelop } from 'react-icons/fa'
import { useContextProvider } from '@/src/Context/useContext'
import { RxHamburgerMenu } from 'react-icons/rx'

export default function Header() {
  const {
    headerSelectedOptions,
    setShowScroll,
    showSideBarButton,
    showContactModalViewer,
  } = useContextProvider()

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  return (
    <div className={styles.headerContainer}>
      <RxHamburgerMenu
        onClick={showSideBarButton(true)}
        className={styles.buttonSideBar}
      />
      <FaConnectdevelop onClick={scrollToTop} className={styles.iconHeader} />
      <ul>
        <li
          className={
            headerSelectedOptions === 'ABOUT' ? styles.liActive : styles.li
          }
        >
          <Link
            className="headerTest"
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setShowScroll('ABOUT')}
          >
            ABOUT
          </Link>
        </li>
        <li
          className={
            headerSelectedOptions === 'PROJECTS' ? styles.liActive : styles.li
          }
        >
          <Link
            onClick={() => setShowScroll('PROJECTS')}
            className="headerLetters"
            activeClass="active"
            to="section2"
            spy={true}
            smooth={true}
            duration={500}
          >
            PROJECTS
          </Link>
        </li>
        <li
          className={
            headerSelectedOptions === 'TECHNOLOGIES'
              ? styles.liActive
              : styles.li
          }
        >
          <Link
            onClick={() => setShowScroll('TECHNOLOGIES')}
            id="headerLetters"
            activeClass="active"
            to="section3"
            spy={true}
            smooth={true}
            duration={500}
            height={100}
          >
            TECHNOLOGIES
          </Link>
        </li>
        <li className={styles.li} onClick={showContactModalViewer}>
          CONTACT
        </li>
        <li className={styles.coutriesLi}>
          <Image
            onClick={() => console.log('brasil')}
            width={15}
            height={15}
            alt="BRASIL"
            src={BrasilImg}
          />
          <Image
            onClick={() => console.log('USA')}
            width={15}
            height={15}
            alt="USA"
            src={UsaImg}
          />
        </li>
      </ul>
    </div>
  )
}

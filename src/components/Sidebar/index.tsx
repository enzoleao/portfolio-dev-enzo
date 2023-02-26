import styles from './Sidebar.module.scss'
import { AiOutlineClose } from 'react-icons/ai'
import { useContextProvider } from '@/src/Context/useContext'
import { Link } from 'react-scroll'
export default function Sidebar() {
  const {
    showSidebar,
    showSideBarButton,
    setShowScroll,
    showContactModalViewer,
    headerSelectedOptions,
  } = useContextProvider()

  return (
    <div
      className={
        showSidebar ? styles.sideBarContainerVisible : styles.sideBarContainer
      }
    >
      <AiOutlineClose
        onClick={showSideBarButton(false)}
        className={styles.sideBarCloseButton}
        color="#f0efef"
      />
      <ul>
        <li
          className={
            headerSelectedOptions === 'ABOUT'
              ? styles.liActive
              : styles.liDefault
          }
        >
          <Link
            className="headerTest"
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setShowScroll('ABOUT')}
          >
            ABOUT
          </Link>
        </li>
        <li
          className={
            headerSelectedOptions === 'PROJECTS'
              ? styles.liActive
              : styles.liDefault
          }
        >
          <Link
            onClick={() => setShowScroll('PROJECTS')}
            className="headerLetters"
            activeClass="active"
            to="section2"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            PROJECTS
          </Link>
        </li>
        <li
          className={
            headerSelectedOptions === 'TECHNOLOGIES'
              ? styles.liActive
              : styles.liDefault
          }
        >
          <Link
            onClick={() => setShowScroll('TECHNOLOGIES')}
            id="headerLetters"
            activeClass="active"
            to="section3"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            height={100}
          >
            TECHNOLOGIES
          </Link>
        </li>
        <li className={styles.liDefault} onClick={showContactModalViewer}>
          <a>CONTACT </a>
        </li>
      </ul>
    </div>
  )
}

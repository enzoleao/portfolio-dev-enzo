import styles from './Header.module.scss'
import { Link, animateScroll as scroll } from 'react-scroll'
import { FaConnectdevelop } from 'react-icons/fa'
import { useContextProvider } from '@/src/Context/useContext'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Select, Space } from 'antd'
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
  const handleChange = (value: string) => {
    console.log(`selected ${value}`)
  }
  const selectStyle = {
    backgroundColor: 'transparent',
    color: 'white', // Cor do texto dentro do select
    border: 'none', // Removendo a borda
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
        <Space wrap>
          <Select
            className={styles.selectLanguage}
            defaultValue="PT-BR"
            style={{ width: 120, position: 'absolute', marginLeft: '50px' }}
            onChange={handleChange}
            options={[
              { value: 'PT-BR', label: 'PT-BR' },
              { value: 'EN-US', label: 'EN-US' },
            ]}
          />
        </Space>
      </ul>
    </div>
  )
}

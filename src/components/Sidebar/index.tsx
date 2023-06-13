import styles from './Sidebar.module.scss'
import { AiOutlineClose } from 'react-icons/ai'
import { useContextProvider } from '@/src/Context/useContext'
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'
export default function Sidebar() {
  const {
    showSidebar,
    showSideBarButton,
    setShowScroll,
    showContactModalViewer,
    headerSelectedOptions,
  } = useContextProvider()
  const { t } = useTranslation()
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
            {t('header.about')}
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
            {t('header.projects')}
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
            {t('header.technologies')}
          </Link>
        </li>
        <li className={styles.liDefault} onClick={showContactModalViewer}>
          <a>{t('header.contact')}</a>
        </li>
      </ul>
      <div className={styles.iconSideBarFooter}>
        <img
          alt="sidebarfooterIcon"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAACEElEQVR4nO1YsU7cQBRcIiVIKSkpUqVIRwFSoEQ63nMRKTTwCaQKHwBIV3H7TspFpEiRKlXyB6GhPPyeEVemR4QmUgokGkCANtpjrZwOOLxrG1nBU9rWevxmZzy2UjVq/M8wZgy1xEDcVVVERMkskhggPlBVBJJ8tASR+IOqpLwkh5bgQkteq6oBW7tzbnq/LFn1aOWFDk+g5n0vJ5p/8lqj3FiTuNtfs8MTuci9afaeAwn3J6F539e9SHJ4m7x2rWt3C9t7BJGb/tJ7CsQ/0n3UoO6LouRttHcnbfQ4kjvRp+1xP3bGjAHx1/4Cmv/AZvyqaPdCi18i8W9H8nuzaZ4o3wmAlhPQyXRZ7gWdTKGWYzeIz9luoGXDpf/5QisBH3Ih7oV2Mo8kp26S6yMvRuJ3jtxVpHlJPVA4o07eIsmFM9bqHU8SL4KWSzfu9w8dzqCTlXQ4SLw8RC6ZBy1nLk7WQsgVEc5W4nR7IcXYP9ho781YM7gTWyoUZnQ4ZyfJW6lBLbfCCEb3hHMwQW8nlfjuxVEJkslJJVYrzJIgg07yiRnMWa3scDInyK1OKlFeGNhemRMENHdubNQS5IWQV51vWcBAeQfLApJ88yoLw3ULNB/dVbcwQN7hurXU/PlMlVJYTVg4F1JYs1T+KDCcC6v89wHr794cqL978yKNiShHtSoV106UuJK/NWrUUMXhL4nWa4MSTsmUAAAAAElFTkSuQmCC"
        />
      </div>
    </div>
  )
}

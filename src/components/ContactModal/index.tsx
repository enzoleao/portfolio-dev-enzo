import emailjs from '@emailjs/browser'
import { useContextProvider } from '@/src/Context/useContext'
import styles from './ContactModal.module.scss'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlinePaperAirplane } from 'react-icons/hi'
import { useRef, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import { useTranslation } from 'react-i18next'
export default function ContatModal() {
  const { showContactModal, closeContactModal } = useContextProvider()
  const { t } = useTranslation()
  const [loading, setLoading] = useState('default')
  const form = useRef<HTMLFormElement | any>()
  const sendEmail = (e: any) => {
    e.preventDefault()
    setLoading('loading')
    emailjs
      .sendForm(
        `${process.env.YOUR_SERVICE_ID}`,
        `${process.env.YOUR_TEMPLATE_ID}`,
        form.current,
        `${process.env.YOUR_PUBLIC_KEY}`,
      )
      .then(
        (result: any) => {
          setLoading('success')
          setTimeout(() => {
            setLoading('default')
            closeContactModal(false)
          }, 3000)
        },
        () => {
          setLoading('error')
        },
      )
  }
  return (
    <div
      className={
        showContactModal
          ? styles.contactModalContainerShowing
          : styles.contactModalContainer
      }
      onClick={(e) => {
        e.stopPropagation()
        closeContactModal(false)
      }}
    >
      <main
        onClick={(e) => e.stopPropagation()}
        className={styles.mainContactModal}
      >
        <header>
          <HiOutlinePaperAirplane className={styles.airPlaneContactUs} />
          <p>{t('contactModal.contact')}</p>
          <AiOutlineClose
            onClick={() => closeContactModal(false)}
            color="#0A192F"
            className={styles.closeModalButton}
          />
        </header>
        <hr />
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" required type="text" name="user_name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" required type="email" name="user_email" />
          </div>
          <div>
            <label htmlFor="message">{t('contactModal.message')}</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <footer>
            {(() => {
              switch (loading) {
                case 'default':
                  return <button type="submit">Enviar</button>
                case 'loading':
                  return <CircularProgress color="inherit" />
                case 'success':
                  return (
                    <CheckCircleOutlineIcon
                      className={styles.loadingAndErrorIcon}
                    />
                  )
                case 'error':
                  return (
                    <ErrorOutlineIcon className={styles.loadingAndErrorIcon} />
                  )
                default:
                  return null
              }
            })()}
          </footer>
        </form>
      </main>
    </div>
  )
}

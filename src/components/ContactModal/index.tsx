import { useContextProvider } from '@/src/Context/useContext'
import styles from './ContactModal.module.scss'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlinePaperAirplane } from 'react-icons/hi'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function ContatModal() {
  console.log(`${process.env.YOUR_PUBLIC_KEY}`)
  const { showContactModal, closeContactModal } = useContextProvider()
  const form = useRef<HTMLFormElement | any>()
  const sendEmail = (e: any) => {
    e.preventDefault()
    emailjs
      .sendForm(
        `${process.env.YOUR_SERVICE_ID}`,
        `${process.env.YOUR_TEMPLATE_ID}`,
        form.current,
        `${process.env.YOUR_PUBLIC_KEY}`,
      )
      .then(
        (result: any) => {
          console.log(result.text)
        },
        (error: any) => {
          console.log(error.text)
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
          <p>Contact</p>
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
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <footer>
            <button type="submit">Enviar</button>
          </footer>
        </form>
      </main>
    </div>
  )
}

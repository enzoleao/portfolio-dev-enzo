import { useContextProvider } from '@/src/Context/useContext'
import styles from './ContactModal.module.scss'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlinePaperAirplane } from 'react-icons/hi'
export default function ContatModal() {
  const { showContactModal, closeContactModal } = useContextProvider()

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
        <form action="">
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" required type="text" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" required type="email" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea name="" id="message" required></textarea>
          </div>
          <footer>
            <button type="submit">Enviar</button>
          </footer>
        </form>
      </main>
    </div>
  )
}

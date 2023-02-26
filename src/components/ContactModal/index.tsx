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
          : styles.contactModalContaine
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
            color="red"
            className={styles.closeModalButton}
          />
        </header>
        <hr />
        <form action="">
          <input type="text" />
          <input type="text" />
        </form>
      </main>
    </div>
  )
}

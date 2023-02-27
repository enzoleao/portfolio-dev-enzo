import styles from './Technologies.module.scss'
import { FaNodeJs, FaSass, FaReact, FaCss3Alt } from 'react-icons/fa'
import { SiTailwindcss, SiTypescript, SiJavascript } from 'react-icons/si'

export default function Technologies() {
  return (
    <div id="section3" className={styles.technologiesContainer}>
      <span>
        <SiJavascript className={styles.technologiesIcons} />
        <SiTypescript className={styles.technologiesIcons} />
        <FaNodeJs className={styles.technologiesIcons} />
        <FaReact className={styles.technologiesIcons} />
        <FaCss3Alt className={styles.technologiesIcons} />
        <FaSass className={styles.technologiesIcons} />
        <SiTailwindcss className={styles.technologiesIcons} />
      </span>
    </div>
  )
}

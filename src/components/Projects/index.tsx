import styles from './Projects.module.scss'
import Image from 'next/image'
import agendamentoPmpa from '../../../public/images/agendamento_pmpa.png'
import prontuarioCiap from '../../../public/images/ciap_pmpa.png'
import prototipoDashboard from '../../../public/images/prototipo_dashboard.png'
export default function Projects() {
  return (
    <div className={styles.projectsContainer} id="section2">
      <div className={styles.projectSections}>
        <Image src={agendamentoPmpa} alt="image-agendamentopmpa" />
        <p>SISTEMA DE AGENDAMENTO PMPA</p>
      </div>
      <div className={styles.projectSections}>
        <Image src={prontuarioCiap} alt="image-agendamentopmpa" />
        <p>SISTEMA DE PRONTUARIO CIAP</p>
      </div>
      <div className={styles.projectSections}>
        <Image src={prototipoDashboard} alt="image-agendamentopmpa" />
        <p>PROTOTIPO DE DASHBOARD</p>
      </div>
    </div>
  )
}

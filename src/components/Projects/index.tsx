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
        <p>
          Neste projeto foi realizado o desenvolvimento de um sistema de
          agendamento para uma Subseção da PMPA para retirada de funcional
        </p>
        <a href="https://agendamentopmpa.com.br/">
          SISTEMA DE AGENDAMENTO PMPA
        </a>
      </div>
      <div className={styles.projectSections}>
        <Image src={prontuarioCiap} alt="image-agendamentopmpa" />
        <p>
          Este projeto vem sendo desenvolvido para o uso dos militares da que
          atuam no CIAP PMPA, para o gerenciamento de prontuários
        </p>
        <a href="https://ciap-front-end-project.vercel.app/">
          SISTEMA DE PRONTUARIO CIAP
        </a>
      </div>
      <div className={styles.projectSections}>
        <Image src={prototipoDashboard} alt="image-agendamentopmpa" />
        <p>
          Neste projeto foi realizado o desenvolvimento para testes de
          responsividade e bibliotecas de gráficos
        </p>
        <a href="https://templatefinal.vercel.app/">PROTOTIPO DE DASHBOARD</a>
      </div>
    </div>
  )
}

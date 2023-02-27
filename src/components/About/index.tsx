import styles from './About.module.scss'
export default function About() {
  return (
    <div className={styles.aboutContainer} id="section1">
      <div>
        <div>
          <span className={styles.namePortfolio}>
            <p>Hi, Im Enzo, a</p>
            <p className={styles.webDeveloper}>Web Developer</p>
          </span>
          <p className={styles.experiencesTextLeft}>
            I have experience with projects using React and Next in the
            Front-End and Node & Express for the Back-End
          </p>
        </div>
        <div></div>
      </div>
      <div></div>
    </div>
  )
}

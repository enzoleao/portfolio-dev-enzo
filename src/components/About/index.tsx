import styles from './About.module.scss'
import Typed from 'react-typed'
export default function About() {
  return (
    <div className={styles.aboutContainer} id="section1">
      <div>
        <div>
          <span className={styles.namePortfolio}>
            <p>
              <Typed
                showCursor={false}
                strings={['Hi, Im Enzo, a']}
                typeSpeed={40}
              />
            </p>
            <p className={styles.webDeveloper}>
              <Typed
                showCursor={false}
                strings={['Web Developer']}
                typeSpeed={40}
                startDelay={1300}
              />
            </p>
          </span>

          <p className={styles.experiencesTextLeft}>
            <Typed
              strings={[
                ' I have experience with projects using React and Next in the Front-End and Node and Express for the Back-End',
              ]}
              startDelay={2500}
              showCursor={false}
              typeSpeed={40}
            />
          </p>
        </div>
        <div></div>
      </div>
      <div></div>
    </div>
  )
}

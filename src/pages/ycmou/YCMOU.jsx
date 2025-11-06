import React from 'react'
import styles from './ycmou.module.css'

function YCMOU() {
  return (
    <div>
         <div className={styles.container}>
              <h1 className={styles.heading}>YCMOU</h1>
              <p className={styles.paragraph}>
                Welcome to YCMOU For more details, please visit our official website by clicking the link below.
              </p>
              <a 
                className={styles.link}
                href="https://ycmouoa.digitaluniversity.ac/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Visit YCMOU
              </a>
            </div>
    </div>
  )
}

export default YCMOU
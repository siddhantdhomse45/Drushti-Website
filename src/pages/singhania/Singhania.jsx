import React from 'react'
import styles from './singhania.module.css'

function YCMOU() {
  return (
    <div>
         <div className={styles.container}>
              <h1 className={styles.heading}>Singhania</h1>
              <p className={styles.paragraph}>
                Welcome to Singhania For more details, please visit our official website by clicking the link below.
              </p>
              <a 
                className={styles.link}
                href="https://singhaniauniversity.ac.in/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Visit Singhania University
              </a>
            </div>
    </div>
  )
}

export default YCMOU
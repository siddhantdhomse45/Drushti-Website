import React from 'react'
import styles from './bharathi.module.css'

function BharathiUniversity() {
  return (
    <div>
         <div className={styles.container}>
              <h1 className={styles.heading}>Bharathi University</h1>
              <p className={styles.paragraph}>
                Welcome to Bharathi University For more details, please visit our official website by clicking the link below.
              </p>
              <a 
                className={styles.link}
                href="https://www.bvuniversity.edu.in/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Visit Bharathi University
              </a>
            </div>
    </div>
  )
}

export default BharathiUniversity
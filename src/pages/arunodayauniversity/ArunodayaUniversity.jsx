// ArunodayaUniversity.jsx
import React from 'react';
import styles from './ArunodayaUniversity.module.css'; // Import the CSS module

function ArunodayaUniversity() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Arunodaya University</h1>
      <p className={styles.paragraph}>
        Welcome to Arunodaya University! For more details, please visit our official website by clicking the link below.
      </p>
      <a 
        className={styles.link}
        href="https://www.arunodayauniversity.ac.in" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Visit Arunodaya University
      </a>
    </div>
  );
}

export default ArunodayaUniversity;

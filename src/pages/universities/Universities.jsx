import React from "react";
import { Link } from "react-router-dom";
import styles from "./Universities.module.css";

const Universities = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>UNIVERSITIES | COLLABORATIONS | RESULTS</h1>
      <p className={styles.subheading}>Our collaboration with universities</p>
      <blockquote className={styles.quote}>
        "AFTER MUTUAL RESPECT AND UNDERSTANDING ARE ACHIEVED, IT IS POSSIBLE TO ESTABLISH REAL, SINCERE RELATIONSHIP WHICH IS THE FOUNDATION OF A SOLID LONG TERM COLLABORATION"
      </blockquote>
      <div className={styles.grid}>
        <div className={styles.card}>
          <a
            href="https://www.arunodayauniversity.ac.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.softkeyeducation.com/img/team/4.jpg"
              alt="Arunodaya University"
            />
          </a>
          <h3>ARUNODAYA UNIVERSITY</h3>
        </div>
        <div className={styles.card}>
          <a
            href="https://ycmouoa.digitaluniversity.ac/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/en/9/9b/Yashwantrao_Chavan_Maharashtra_Open_University_logo.png"
              alt="YCMOU"
            />
          </a>
          <h3>YASHWANTRAO CHAVAN MAHARASHTRA OPEN UNIVERSITY</h3>
        </div>
        <div className={styles.card}>
          <a
            href="https://singhaniauniversity.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://singhaniauniversity.ac.in/wp-content/uploads/2024/05/SU-Logo-transparent-v5.png"
              alt="Singhania University"
            />
          </a>
          <h3>SINGHANIA UNIVERSITY</h3>
        </div>
        <div className={styles.card}>
          <a
            href="https://www.bvuniversity.edu.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://medbots.in/uploads/exams/exam_images/law_(30).jpg"
              alt="Bharati Vidyapeeth"
            />
          </a>
          <h3>BHARATI VIDYAPEETH DEEMED UNIVERSITY</h3>
        </div>
      </div>
    </div>
  );
};

export default Universities;

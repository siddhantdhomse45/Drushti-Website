import React from "react";
import styles from "./DiplomaEngg.module.css";

const DiplomaEngg = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
        <h2>DIPLOMA ENGINEERING</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Program</th>
              <th>Duration</th>
              <th>Semester</th>
              <th>Eligibility</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mechanical, Civil, Electrical, Computer Science, Electronics & Telecommunication, Automobile,</td>
              <td>3 Years</td>
              <td>6 Sem</td>
              <td>10th Passed with Maths, Science and English,</td>
            </tr>
            
            <tr>
              <td>Lateral Entry to 3rd Semester / 2nd Year</td>
              <td>2 Years</td>
              <td>4 Sem</td>
              <td>12th Passed with Physics, Chemistry, Math’s, and English or 12th Technical / MCVC or ITI 2 Years,</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DiplomaEngg;
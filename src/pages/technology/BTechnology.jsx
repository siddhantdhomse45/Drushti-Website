import React from "react";
import styles from "./BTechnology.module.css";

const BTechnology = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
        <h2>BACHELOR OF TECHNOLOGY (B-Tech)</h2>
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
              <td>Mechanical, Civil, Electrical, Chemical, Computer Science, Electronics & Telecommunication,</td>
              <td>4 Years</td>
              <td>8 Sem</td>
              <td>	10 + 2 Passed with Physics, Chemistry & Mathematics,</td>
            </tr>
            
            <tr>
              <td>Lateral Entry to 3rd Semester / 2nd Year</td>
              <td>3 Years</td>
              <td>6 Sem</td>
              <td>Diploma in Engineering / BSC (PCM)
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BTechnology;



import styles from "./DiplomaEngg.module.css";

// eslint-disable-next-line react/prop-types
const DiplomaEngg = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>

        <h2 className={styles.heading}>DIPLOMA ENGINEERING</h2>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Program</th>
              <th>Duration</th>
              <th>Semester</th>
              <th>Eligibility</th>
              <th>Syllabus</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                Mechanical, Civil, Electrical, Computer Science, Electronics &
                Telecommunication, Automobile
              </td>
              <td>3 Years</td>
              <td>6 Sem</td>
              <td>10th Passed with Maths, Science and English</td>
              <td>
                <a
                  href="https://bteup.ac.in/Syllabus/folder1920/367%20mechanical%20engineeing%20nsqf%20based%20nittr.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadButton}
                >
                   Download 
                </a>
              </td>
            </tr>

            <tr>
              <td>Lateral Entry to 3rd Semester / 2nd Year</td>
              <td>2 Years</td>
              <td>4 Sem</td>
              <td>
                12th Passed with PCM or Technical / MCVC or ITI (2 Years)
              </td>
              <td>
                <a
                  href="https://bteup.ac.in/Syllabus/folder1920/367%20mechanical%20engineeing%20nsqf%20based%20nittr.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadButton}
                >
                   Download 
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DiplomaEngg;

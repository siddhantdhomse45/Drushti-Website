// import styles from "./PGDiploma.module.css";

// // eslint-disable-next-line react/prop-types
// const PGDiploma = ({ onClose }) => {
//     return (
//         <div className={styles.modalOverlay}>
//             <div className={styles.modalContent}>
//                 <button className={styles.closeButton} onClick={onClose}>
//                     Close
//                 </button>
//                 <h2>Certificate Courses</h2>
//                 <table className={styles.table}>
//                     <thead>
//                         <tr>
//                             <th>Program</th>
//                             <th>Duration</th>
//                             <th>Eligibility</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td>Material Management</td>
//                             <td>1 Year</td>
//                             <td>Graduation</td>
//                         </tr>
//                         <tr>
//                             <td>English Language Teaching</td>
//                             <td>1 Year</td>
//                             <td>Graduation</td>
//                         </tr>
//                         <tr>
//                             <td>International Business Teaching</td>
//                             <td>1 Year</td>
//                             <td>Graduation</td>
//                         </tr>
//                         <tr>
//                             <td>Library Automation & Networking</td>
//                             <td>1 Year</td>
//                             <td>Graduation</td>
//                         </tr>
//                         <tr>
//                             <td>Sports Management</td>
//                             <td>1 Years</td>
//                             <td>Graduation</td>
//                         </tr>
                        
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default PGDiploma;


import styles from "./PGDiploma.module.css";

const PGDiploma = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>✕</button>

        <h2 className={styles.title}>POST GRADUATE DIPLOMA & CERTIFICATE COURSES</h2>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Program</th>
              <th>Duration</th>
              <th>Eligibility</th>
              <th>Syllabus</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>PG Diploma in Material Management</td>
              <td>1 Year</td>
              <td>Graduation</td>
              <td>
                <a
                  href="https://unipune.ac.in/Syllabi_PDF/revised_2010/mang/PGDMLM.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadButton}
                >
                  View PDF
                </a>
              </td>
            </tr>

            <tr>
              <td>PG Diploma in English Language Teaching</td>
              <td>1 Year</td>
              <td>Graduation</td>
              <td>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadButton}
                >
                  View PDF
                </a>
              </td>
            </tr>

            <tr>
              <td>PG Diploma in International Business</td>
              <td>1 Year</td>
              <td>Graduation</td>
              <td>
                <a
                  href="https://unipune.ac.in/university_files/Exam_Forms/Commerce/pgdiploma%20in%20international%20business.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadButton}
                >
                  View PDF
                </a>
              </td>
            </tr>

            <tr>
              <td>PG Diploma in Library Automation & Networking</td>
              <td>1 Year</td>
              <td>Graduation</td>
              <td>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadButton}
                >
                  View PDF
                </a>
              </td>
            </tr>

            <tr>
              <td>PG Diploma in Sports Management</td>
              <td>1 Year</td>
              <td>Graduation</td>
              <td>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadButton}
                >
                  View PDF
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PGDiploma;

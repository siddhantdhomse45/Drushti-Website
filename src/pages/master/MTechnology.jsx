// import React from "react";
// import styles from "./MTechnology.module.css";

// const MTechnology = ({ onClose }) => {
//   return (
//     <div className={styles.modalOverlay}>
//       <div className={styles.modalContent}>
//         <button className={styles.closeButton} onClick={onClose}>
//           Close
//         </button>
//         <h2>MASTER OF TECHNOLOGY (M-Tech)</h2>
//         <table className={styles.table}>
//           <thead>
//             <tr>
//               <th>Program</th>
//               <th>Duration</th>
//               <th>Semester</th>
//               <th>Eligibility</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Mechanical, Civil, Electrical, Chemical, Computer Science, Electronics & Telecommunication,</td>
//               <td>2 Years</td>
//               <td>4 Sem</td>
//               <td>B.E/ B-Tech</td>
//             </tr>
            
//             <tr>
//               <td>M. Tech in IT*</td>
//               <td>6 Months</td>
//               <td>1 Sem</td>
//               <td>BE/ B.tech/ AMIE in any discipline or MCA/ MSC (CS/IT), / MSC(IT) / MCM or MSC with Mathematics, as major, DOEACC ‘B’ level</td>
//             </tr>
            
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MTechnology;


import React from "react";
import styles from "./MTechnology.module.css";

const MTechnology = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>

        <h2 className={styles.title}>MASTER OF TECHNOLOGY (M-Tech)</h2>

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
              <td>M.Tech (Regular) – All Branches</td>
              <td>2 Years</td>
              <td>4 Sem</td>
              <td>B.E / B.Tech</td>
              <td>
                <a
                  href="https://collegecirculars.unipune.ac.in/sites/documents/Syllabus2023/M.Tech%20(Regular)%20Syllabus%20-%20NEP%202023_19092023.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadButton}
                >
                  View PDF
                </a>
              </td>
            </tr>

            <tr>
              <td>M.Tech in Civil & Environmental Engineering</td>
              <td>2 Years</td>
              <td>4 Sem</td>
              <td>B.E / B.Tech (Civil or Environmental)</td>
              <td>
                <a
                  href="https://collegecirculars.unipune.ac.in/sites/documents/Syllabus2023/M.tech%20(CE%20board)%20_all%20syllabus_29052023.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadButton}
                >
                  View PDF
                </a>
              </td>
            </tr>

            <tr>
              <td>M.Tech in Biotechnology Engineering</td>
              <td>2 Years</td>
              <td>4 Sem</td>
              <td>B.E / B.Tech in Biotechnology or equivalent</td>
              <td>
                <a
                  href="https://www.unipune.ac.in/Syllabi_PDF/revised-2015/engineering/MTech-2014-20-8-15.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadButton}
                >
                  View PDF
                </a>
              </td>
            </tr>

            <tr>
              <td>M.Tech in Data Science & Artificial Intelligence</td>
              <td>2 Years</td>
              <td>4 Sem</td>
              <td>B.E / B.Tech in CS, IT, or related field</td>
              <td>
                <a
                  href="https://sppudocs.unipune.ac.in/sites/news_events/dept_circulars/Lists/Technology/Attachments/105/MTechData%20Science%20Enterance%20Exam%20Syllabus_25052024.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadButton}
                >
                  View PDF
                </a>
              </td>
            </tr>

            <tr>
              <td>M.Tech in Mechanical Design Engineering</td>
              <td>2 Years</td>
              <td>4 Sem</td>
              <td>B.E / B.Tech in Mechanical Engineering</td>
              <td>
                <a
                  href="https://www.pccoepune.com/pdf/Syllabus-Booklet-of-M.Tech.-Mechanical-(Design).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadButton}
                >
                  View PDF
                </a>
              </td>
            </tr>

            <tr>
              <td>M.Tech in VLSI & Embedded Systems</td>
              <td>2 Years</td>
              <td>4 Sem</td>
              <td>B.E / B.Tech in Electronics / Electrical / CS</td>
              <td>
                <a
                  href="https://rgicdn.s3.ap-south-1.amazonaws.com/ghrcempune/pdf/M.Tech-2020-Syllabus.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadButton}
                >
                  View PDF
                </a>
              </td>
            </tr>

            <tr>
              <td>M.Tech in Modeling & Simulation</td>
              <td>2 Years</td>
              <td>4 Sem</td>
              <td>Graduation in Science / Engineering / Technology</td>
              <td>
                <a
                  href="https://www.unipune.ac.in/syllabi_pdf/revised_2011/sci/mtech_modeling_simulation_6-3-12.pdf"
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

export default MTechnology;

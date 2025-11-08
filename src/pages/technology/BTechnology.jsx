// import React from "react";
// import styles from "./BTechnology.module.css";

// const BTechnology = ({ onClose }) => {
//   return (
//     <div className={styles.modalOverlay}>
//       <div className={styles.modalContent}>
//         <button className={styles.closeButton} onClick={onClose}>
//           Close
//         </button>
//         <h2>BACHELOR OF TECHNOLOGY (B-Tech)</h2>
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
//               <td>4 Years</td>
//               <td>8 Sem</td>
//               <td>	10 + 2 Passed with Physics, Chemistry & Mathematics,</td>
//             </tr>
            
//             <tr>
//               <td>Lateral Entry to 3rd Semester / 2nd Year</td>
//               <td>3 Years</td>
//               <td>6 Sem</td>
//               <td>Diploma in Engineering / BSC (PCM)
//               </td>
//             </tr>
            
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default BTechnology;







import React from "react";
import styles from "./BTechnology.module.css";

const btechPrograms = [
  {
    program: "Mechanical Engineering",
    duration: "4 Years",
    semester: "8 Sem",
    eligibility: "10 + 2 Passed with Physics, Chemistry & Mathematics",
    // pdf: "https://collegecirculars.unipune.ac.in/sites/documents/Syllabus2024/B.Tech%20Mechanical%20Engineering%20Syllabus.pdf",
  },
  {
    program: "Civil Engineering",
    duration: "4 Years",
    semester: "8 Sem",
    eligibility: "10 + 2 Passed with Physics, Chemistry & Mathematics",
    // pdf: "https://collegecirculars.unipune.ac.in/sites/documents/Syllabus2024/B.Tech%20Civil%20Engineering%20Syllabus.pdf",
  },
  {
    program: "Electrical Engineering",
    duration: "4 Years",
    semester: "8 Sem",
    eligibility: "10 + 2 Passed with Physics, Chemistry & Mathematics",
    // pdf: "https://collegecirculars.unipune.ac.in/sites/documents/Syllabus2024/B.Tech%20Electrical%20Engineering%20Syllabus.pdf",
  },
  {
    program: "Chemical Engineering",
    duration: "4 Years",
    semester: "8 Sem",
    eligibility: "10 + 2 Passed with Physics, Chemistry & Mathematics",
    // pdf: "https://collegecirculars.unipune.ac.in/sites/documents/Syllabus2024/B.Tech%20Chemical%20Engineering%20Syllabus.pdf",
  },
  {
    program: "Computer Science Engineering",
    duration: "4 Years",
    semester: "8 Sem",
    eligibility: "10 + 2 Passed with Physics, Chemistry & Mathematics",
    // pdf: "https://collegecirculars.unipune.ac.in/sites/documents/Syllabus2024/B.Tech%20Computer%20Science%20Syllabus.pdf",
  },
  {
    program: "Electronics & Telecommunication Engineering",
    duration: "4 Years",
    semester: "8 Sem",
    eligibility: "10 + 2 Passed with Physics, Chemistry & Mathematics",
    // pdf: "https://collegecirculars.unipune.ac.in/sites/documents/Syllabus2024/B.Tech%20Electronics%20%26%20Telecommunication%20Syllabus.pdf",
  },
  {
    program: "Lateral Entry to 3rd Semester / 2nd Year (All Branches)",
    duration: "3 Years",
    semester: "6 Sem",
    eligibility: "Diploma in Engineering / BSC (PCM)",
    // pdf: "https://collegecirculars.unipune.ac.in/sites/documents/Syllabus2024/B.Tech%20Lateral%20Entry%20Syllabus.pdf",
  },
];

const BTechnology = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.headerRow}>
          <h2>BACHELOR OF TECHNOLOGY (B-Tech)</h2>
          <button className={styles.closeButton} onClick={onClose}>
            Close
          </button>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Program</th>
                <th>Duration</th>
                <th>Semester</th>
                <th>Eligibility</th>
                {/* <th>Download Syllabus</th> */}
              </tr>
            </thead>
            <tbody>
              {btechPrograms.map((prog, idx) => (
                <tr key={idx}>
                  <td>{prog.program}</td>
                  <td>{prog.duration}</td>
                  <td>{prog.semester}</td>
                  <td>{prog.eligibility}</td>
                  {/* <td>
                    <a
                      href={prog.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.downloadButton}
                      download
                    >
                      Download PDF
                    </a>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BTechnology;
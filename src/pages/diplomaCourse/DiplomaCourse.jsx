// import React from "react";
// import styles from "./DiplomaCourse.module.css";

// const DiplomaCourse = ({ onClose }) => {
//     return (
//         <div className={styles.modalOverlay}>
//             <div className={styles.modalContent}>
//                 <button className={styles.closeButton} onClick={onClose}>
//                     Close
//                 </button>
//                 <h2>Diploma Courses</h2>
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
//                             <td>Computer Teacher Training</td>
//                             <td>1 Years</td>
//                             <td>Graduation</td>
//                         </tr>
//                         <tr>
//                             <td>Computer Application</td>
//                             <td>1 Years</td>
//                             <td>Graduation</td>
//                         </tr>
//                         <tr>
//                             <td>Business Management</td>
//                             <td>1 Years</td>
//                             <td>Graduation</td>
//                         </tr>
//                         <tr>
//                             <td>Industrial Management</td>
//                             <td>1 Years</td>
//                             <td>Graduation</td>
//                         </tr>
//                         <tr>
//                             <td>Marketing Management</td>
//                             <td>1 Years</td>
//                             <td>Graduation</td>
//                         </tr>
//                         <tr>
//                             <td>Animation</td>
//                             <td>1 Years</td>
//                             <td>Graduation</td>
//                         </tr>
//                         <tr>
//                             <td>House Keeping	</td>
//                             <td>6 Months</td>
//                             <td>HSC</td>
//                         </tr>
//                         <tr>
//                             <td>Financial Management</td>
//                             <td>6 Months</td>
//                             <td>HSC</td>
//                         </tr>
//                         <tr>
//                             <td>Fire Safety</td>
//                             <td>1 Years</td>
//                             <td>Graduation</td>
//                         </tr>
//                         <tr>
//                             <td>Pre-primary Teacher Education</td>
//                             <td>1 Years</td>
//                             <td>Graduation</td>
//                         </tr>
//                         <tr>
//                             <td>Montessori Teacher Education</td>
//                             <td>1 Years</td>
//                             <td>Graduation</td>
//                         </tr>
//                         <tr>
//                             <td>Hotel Management & Catering Technology</td>
//                             <td>1 Years</td>
//                             <td>Graduation</td>
//                         </tr>
//                         <tr>
//                             <td>Library Information Science</td>
//                             <td>1 Years</td>
//                             <td>Graduation</td>
//                         </tr>
//                         <tr>
//                             <td>Food & Nutrition</td>
//                             <td>1 Years</td>
//                             <td>Graduation</td>
//                         </tr>
//                         <tr>
//                             <td>ICT Application in Library</td>
//                             <td>1 Years</td>
//                             <td>Graduation</td>
//                         </tr>
//                         <tr>
//                             <td>Computer Literacy Program</td>
//                             <td>1 Years</td>
//                             <td>Graduation</td>
//                         </tr>
//                         <tr>
//                             <td>Disaster Management</td>
//                             <td>1 Years</td>
//                             <td>Graduation</td>
//                         </tr>
//                         <tr>
//                             <td>Industrial Safety</td>
//                             <td>1 Years</td>
//                             <td>Graduation</td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default DiplomaCourse;








import styles from "./DiplomaCourse.module.css";

// eslint-disable-next-line react/prop-types
const DiplomaCourse = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>
        <h2 className={styles.heading}>Diploma Courses</h2>

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
              <td>Computer Teacher Training</td>
              <td>1 Year</td>
              <td>Graduation</td>
              <td>
                <a
                  href="https://www.nielit.gov.in/content/ctt-course"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadButton}
                >
                  View Syllabus
                </a>
              </td>
            </tr>

            <tr>
              <td>Computer Application</td>
              <td>1 Year</td>
              <td>Graduation</td>
              <td>
                <a
                  href="https://ignou.ac.in/userfiles/DCA%20Syllabus.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadButton}
                >
                  View PDF
                </a>
              </td>
            </tr>

            <tr>
              <td>Business Management</td>
              <td>1 Year</td>
              <td>Graduation</td>
              <td>
                <a
                  href="https://sgbau.ac.in/syllabus/pdf/Commerce/Diploma-Business-Management-2015.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadButton}
                >
                  View PDF
                </a>
              </td>
            </tr>

            <tr>
              <td>Industrial Management</td>
              <td>1 Year</td>
              <td>Graduation</td>
              <td>
                <a
                  href="https://msbte.org.in/syllabus-search/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadButton}
                >
                  View Syllabus
                </a>
              </td>
            </tr>

            <tr>
              <td>Marketing Management</td>
              <td>1 Year</td>
              <td>Graduation</td>
              <td>
                <a
                  href="https://sgbau.ac.in/syllabus/pdf/Commerce/Diploma-Marketing-Management-2015.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadButton}
                >
                  View PDF
                </a>
              </td>
            </tr>

            <tr>
              <td>Animation</td>
              <td>1 Year</td>
              <td>Graduation</td>
              <td>
                <a
                  href="https://ycmou.ac.in/media/post_image/Syllabus_for_Diploma_in_Animation.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadButton}
                >
                  View PDF
                </a>
              </td>
            </tr>

            <tr>
              <td>House Keeping</td>
              <td>6 Months</td>
              <td>HSC</td>
              <td>
                <a
                  href="https://nchm.nic.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadButton}
                >
                  View Course
                </a>
              </td>
            </tr>

            <tr>
              <td>Financial Management</td>
              <td>6 Months</td>
              <td>HSC</td>
              <td>
                <a
                  href="https://sgbau.ac.in/syllabus/pdf/Commerce/Diploma-Financial-Management-2015.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadButton}
                >
                  View PDF
                </a>
              </td>
            </tr>

            <tr>
              <td>Fire Safety</td>
              <td>1 Year</td>
              <td>Graduation</td>
              <td>
                <a
                  href="https://nfscnagpur.nic.in/assets/docs/CourseSyllabus.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadButton}
                >
                   View PDF
                </a>
              </td>
            </tr>
            <tr>
              <td>Pre-primary Teacher Education</td>
              <td>1 Year</td>
              <td>Graduation</td>
              <td>
                <a
                  href="https://www.ncte.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadButton}
                >
                  Visit NCTE
                </a>
              </td>
            </tr>

            <tr>
              <td>Montessori Teacher Education</td>
              <td>1 Year</td>
              <td>Graduation</td>
              <td>
                <a
                  href="https://www.nimtt.in/courses/montessori-teacher-training"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadButton}
                >
                  View Course
                </a>
              </td>
            </tr>

            <tr>
              <td>Hotel Management & Catering Technology</td>
              <td>1 Year</td>
              <td>Graduation</td>
              <td>
                <a
                  href="https://nchm.nic.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadButton}
                >
                  View Syllabus
                </a>
              </td>
            </tr>

            <tr>
              <td>Library Information Science</td>
              <td>1 Year</td>
              <td>Graduation</td>
              <td>
                <a
                  href="https://ignou.ac.in/userfiles/BLIS%20Syllabus.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadButton}
                >
                  View PDF
                </a>
              </td>
            </tr>

            <tr>
              <td>Food & Nutrition</td>
              <td>1 Year</td>
              <td>Graduation</td>
              <td>
                <a
                  href="https://ignou.ac.in/userfiles/DFN_Syllabus.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadButton}
                >
                  View PDF
                </a>
              </td>
            </tr>

            <tr>
              <td>ICT Application in Library</td>
              <td>1 Year</td>
              <td>Graduation</td>
              <td>
                <a
                  href="https://nielit.gov.in/content/courses-offered"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadButton}
                >
                  View Course
                </a>
              </td>
            </tr>

            <tr>
              <td>Computer Literacy Program</td>
              <td>1 Year</td>
              <td>Graduation</td>
              <td>
                <a
                  href="https://nielit.gov.in/content/basic-computer-course-bcc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadButton}
                >
                  View Course
                </a>
              </td>
            </tr>

            <tr>
              <td>Disaster Management</td>
              <td>1 Year</td>
              <td>Graduation</td>
              <td>
                <a
                  href="https://nidm.gov.in/PDF/modules/Disaster_Management_Syllabus.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadButton}
                >
                  View PDF
                </a>
              </td>
            </tr>

            <tr>
              <td>Industrial Safety</td>
              <td>1 Year</td>
              <td>Graduation</td>
              <td>
                <a
                  href="https://msbte.org.in/portal/curriculum-search/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadButton}
                >
                  View Syllabus
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DiplomaCourse;

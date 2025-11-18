
// import styles from "./Certificates.module.css";

// const Certificates = ({ onClose }) => {
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
//                             <td>Library & Information Science</td>
//                             <td>6 Months</td>
//                             <td>12 th Pass/ Equilvalent</td>
//                         </tr>
//                         <tr>
//                             <td>BPP</td>
//                             <td>1 Years</td>
//                             <td>Above 18 Years</td>
//                         </tr>
//                         <tr>
//                             <td>Hospital Management</td>
//                             <td>1 Years</td>
//                             <td>HSC</td>
//                         </tr>
//                         <tr>
//                             <td>Hotel Management & Catering Technology	</td>
//                             <td>1 Years</td>
//                             <td>HSC</td>
//                         </tr>
//                         <tr>
//                             <td>Information Technology</td>
//                             <td>1 Years</td>
//                             <td>HSC</td>
//                         </tr>
//                         <tr>
//                             <td>Tourism Management</td>
//                             <td>1 Years</td>
//                             <td>HSC</td>
//                         </tr>
//                         <tr>
//                             <td>Operation Management</td>
//                             <td>1 Years</td>
//                             <td>HSC</td>
//                         </tr>
//                         <tr>
//                             <td>Computer Application, Finance Management</td>
//                             <td>1 Years</td>
//                             <td>HSC</td>
//                         </tr>
                       
//                         <tr>
//                             <td>Human Resource Management </td>
//                             <td>1 Years</td>
//                             <td>HSC</td>
//                         </tr>
//                         <tr>
//                             <td>Business Management</td>
//                             <td>1 Years</td>
//                             <td>HSC</td>
//                         </tr>
//                         <tr>
//                             <td>Marketing Management</td>
//                             <td>1 Years</td>
//                             <td>HSC</td>
//                         </tr>
//                         <tr>
//                             <td>Adv. Cert. In Construction Management</td>
//                             <td>1 Years</td>
//                             <td>HSC</td>
//                         </tr>
//                         <tr>
//                             <td>Tourist Guide</td>
//                             <td>1 Years</td>
//                             <td>HSC</td>
//                         </tr>
//                         <tr>
//                             <td>Computer Teacher’s Training</td>
//                             <td>1 Years</td>
//                             <td>HSC</td>
//                         </tr>
//                         <tr>
//                             <td>Computer Application</td>
//                             <td>1 Years</td>
//                             <td>HSC</td>
//                         </tr>
//                         <tr>
//                             <td>Pre- Primary Teacher’s Training</td>
//                             <td>1 Years</td>
//                             <td>HSC</td>
//                         </tr>
//                         <tr>
//                             <td>Medical Transcription</td>
//                             <td>1 Years</td>
//                             <td>HSC</td>
//                         </tr>
//                         <tr>
//                             <td>Fire & Safety</td>
//                             <td>1 Years</td>
//                             <td>HSC</td>
//                         </tr>
//                         <tr>
//                             <td>Industrial Safety</td>
//                             <td>1 Years</td>
//                             <td>HSC</td>
//                         </tr>
//                         <tr>
//                             <td>Intellectual Property Rights</td>
//                             <td>1 Years</td>
//                             <td>HSC</td>
//                         </tr>
//                         <tr>
//                             <td>Journalism and Mass Communication’s</td>
//                             <td>1 Years</td>
//                             <td>HSC</td>
//                         </tr>
//                         <tr>
//                             <td>Rural Development</td>
//                             <td>1 Years</td>
//                             <td>HSC</td>
//                         </tr>
//                         <tr>
//                             <td>Hospital & Health Management</td>
//                             <td>1 Years</td>
//                             <td>HSC</td>
//                         </tr>
//                         <tr>
//                             <td>Maternal & Child Health</td>
//                             <td>1 Years</td>
//                             <td>HSC</td>
//                         </tr>
//                         <tr>
//                             <td>Medical Lab Technology	</td>
//                             <td>1 Years</td>
//                             <td>HSC</td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default Certificates;






import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Certificates.module.css";

// eslint-disable-next-line react/prop-types
const Certificates = ({ onClose }) => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch certificate courses from backend
  const fetchPrograms = async () => {
    try {
      const res = await axios.get("https://drushti-website-backend-1.onrender.com/certificate/getprogram"); // Update backend URL
      if (res.data.success) {
        setPrograms(res.data.programs);
      } else {
        setError("Failed to fetch certificate programs");
      }
    } catch (err) {
      console.error("Error fetching certificate programs:", err);
      setError("Server error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrograms();
  }, []);

  if (loading) {
    return (
      <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
          <p>{error}</p>
          <button className={styles.closeButton} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
        <h2>Certificate Courses</h2>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Program</th>
              <th>Duration</th>
              <th>Eligibility</th>
            </tr>
          </thead>
          <tbody>
            {programs.length === 0 && (
              <tr>
                <td colSpan="3" style={{ textAlign: "center" }}>
                  No certificate programs available
                </td>
              </tr>
            )}
            {programs.map((program) => (
              <tr key={program._id}>
                <td>{program.programName}</td>
                <td>{program.duration}</td>
                <td>{program.eligibility}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Certificates;

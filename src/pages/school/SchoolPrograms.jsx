// import styles from "./SchoolPrograms.module.css";

// // eslint-disable-next-line react/prop-types
// const SchoolPrograms = ({ onClose }) => {
//   return (
//     <div className={styles.modalOverlay}>
//       <div className={styles.modalContent}>
//         <button className={styles.closeButton} onClick={onClose}>
//           Close
//         </button>
//         <h2>School Programs</h2>

//         <table className={styles.table}>
//           <thead>
//             <tr>
//               <th>Program</th>
//               <th>Duration</th>
//               <th>Eligibility</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Junior Kindergarten (Jr. KG)</td>
//               <td>1 Year</td>
//               <td>Age 4+</td>
//             </tr>
//             <tr>
//               <td>Senior Kindergarten (Sr. KG)</td>
//               <td>1 Year</td>
//               <td>Age 5+</td>
//             </tr>
//             <tr>
//               <td>Primary School (Grade 1–5)</td>
//               <td>5 Years</td>
//               <td>Age 6+</td>
//             </tr>
//             <tr>
//               <td>Middle School (Grade 6–8)</td>
//               <td>3 Years</td>
//               <td>Completion of Primary School</td>
//             </tr>
//             <tr>
//               <td>High School (Grade 9–10)</td>
//               <td>2 Years</td>
//               <td>Completion of Middle School</td>
//             </tr>
//             <tr>
//               <td>Higher Secondary (Grade 11–12)</td>
//               <td>2 Years</td>
//               <td>Pass in Grade 10</td>
//             </tr>
//             <tr>
//               <td>Vocational Training Program</td>
//               <td>1–2 Years</td>
//               <td>Grade 10 Pass</td>
//             </tr>
//             <tr>
//               <td>Special Education Program</td>
//               <td>Custom Duration</td>
//               <td>Assessment-based Enrollment</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default SchoolPrograms;






import { useState, useEffect } from "react";
import styles from "./SchoolPrograms.module.css";
import axios from "axios";

const SchoolPrograms = ({ onClose }) => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🔹 Fetch School Programs from backend
  const fetchPrograms = async () => {
    try {
      const res = await axios.get("http://localhost:8000/schoolprogram/getprogram");

      // ✅ Handle both possible backend formats
      const data = Array.isArray(res.data)
        ? res.data
        : res.data.programs || [];

      setPrograms(data);
    } catch (err) {
      console.error("Error fetching programs:", err);
      setError("Failed to fetch school programs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrograms();
  }, []);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>

        <h2 className={styles.heading}>School Programs</h2>

        {loading ? (
          <p className={styles.loading}>Loading programs...</p>
        ) : error ? (
          <p className={styles.error}>{error}</p>
        ) : programs.length === 0 ? (
          <p className={styles.noData}>No programs found.</p>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Program</th>
                <th>Course</th>
                <th>Duration</th>
                <th>Eligibility</th>
                <th>Syllabus</th>
              </tr>
            </thead>
            <tbody>
              {programs.map((program, pIndex) =>
                program.courses.map((course, cIndex) => (
                  <tr key={`${pIndex}-${cIndex}`}>
                    <td>{program.programName}</td>
                    <td>{course.courseName}</td>
                    <td>{course.duration}</td>
                    <td>{course.eligibility || "—"}</td>
                    <td>
                      {course.hasSyllabusPdf && course.syllabusPdf ? (
                        <a
                          href={`http://localhost:8000/${course.syllabusPdf}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.downloadButton}
                        >
                          View PDF
                        </a>
                      ) : (
                        <span className={styles.noPdf}>Not Available</span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default SchoolPrograms;

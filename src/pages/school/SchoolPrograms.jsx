import styles from "./SchoolPrograms.module.css";

// eslint-disable-next-line react/prop-types
const SchoolPrograms = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
        <h2>School Programs</h2>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Program</th>
              <th>Duration</th>
              <th>Eligibility</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Junior Kindergarten (Jr. KG)</td>
              <td>1 Year</td>
              <td>Age 4+</td>
            </tr>
            <tr>
              <td>Senior Kindergarten (Sr. KG)</td>
              <td>1 Year</td>
              <td>Age 5+</td>
            </tr>
            <tr>
              <td>Primary School (Grade 1–5)</td>
              <td>5 Years</td>
              <td>Age 6+</td>
            </tr>
            <tr>
              <td>Middle School (Grade 6–8)</td>
              <td>3 Years</td>
              <td>Completion of Primary School</td>
            </tr>
            <tr>
              <td>High School (Grade 9–10)</td>
              <td>2 Years</td>
              <td>Completion of Middle School</td>
            </tr>
            <tr>
              <td>Higher Secondary (Grade 11–12)</td>
              <td>2 Years</td>
              <td>Pass in Grade 10</td>
            </tr>
            <tr>
              <td>Vocational Training Program</td>
              <td>1–2 Years</td>
              <td>Grade 10 Pass</td>
            </tr>
            <tr>
              <td>Special Education Program</td>
              <td>Custom Duration</td>
              <td>Assessment-based Enrollment</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SchoolPrograms;

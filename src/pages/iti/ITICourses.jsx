import styles from "./ITICourses.module.css";

// eslint-disable-next-line react/prop-types
const ITICourses = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
        <h2>ITI Courses</h2>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Duration</th>
              <th>Eligibility</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Electrician</td>
              <td>2 Years</td>
              <td>10th Pass</td>
            </tr>
            <tr>
              <td>Fitter</td>
              <td>2 Years</td>
              <td>10th Pass</td>
            </tr>
            <tr>
              <td>Welder</td>
              <td>1 Year</td>
              <td>8th Pass</td>
            </tr>
            <tr>
              <td>Mechanic (Motor Vehicle)</td>
              <td>2 Years</td>
              <td>10th Pass</td>
            </tr>
            <tr>
              <td>Plumber</td>
              <td>1 Year</td>
              <td>10th Pass</td>
            </tr>
            <tr>
              <td>Carpenter</td>
              <td>1 Year</td>
              <td>8th Pass</td>
            </tr>
            <tr>
              <td>Machinist</td>
              <td>2 Years</td>
              <td>10th Pass (Science & Math)</td>
            </tr>
            <tr>
              <td>Computer Operator & Programming Assistant (COPA)</td>
              <td>1 Year</td>
              <td>10th Pass</td>
            </tr>
            <tr>
              <td>Electronic Mechanic</td>
              <td>2 Years</td>
              <td>10th Pass (Science & Math)</td>
            </tr>
            <tr>
              <td>Refrigeration & Air Conditioning Mechanic</td>
              <td>2 Years</td>
              <td>10th Pass</td>
            </tr>
            <tr>
              <td>Diesel Mechanic</td>
              <td>1 Year</td>
              <td>10th Pass</td>
            </tr>
            <tr>
              <td>Turner</td>
              <td>2 Years</td>
              <td>10th Pass</td>
            </tr>
            <tr>
              <td>Instrument Mechanic</td>
              <td>2 Years</td>
              <td>10th Pass (Science & Math)</td>
            </tr>
            <tr>
              <td>Wireman</td>
              <td>2 Years</td>
              <td>8th Pass</td>
            </tr>
            <tr>
              <td>Surveyor</td>
              <td>2 Years</td>
              <td>10th Pass</td>
            </tr>
            <tr>
              <td>Painter (General)</td>
              <td>2 Years</td>
              <td>8th Pass</td>
            </tr>
            <tr>
              <td>Tool & Die Maker</td>
              <td>2 Years</td>
              <td>10th Pass (Science & Math)</td>
            </tr>
            <tr>
              <td>Health Sanitary Inspector</td>
              <td>1 Year</td>
              <td>10th Pass</td>
            </tr>
            <tr>
              <td>Stenography (English/Hindi)</td>
              <td>1 Year</td>
              <td>10th Pass</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ITICourses;

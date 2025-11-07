import styles from "./PostGraduate.module.css";

// eslint-disable-next-line react/prop-types
const UnderGraduate = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
        <h2>Post Graduate Courses</h2>
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
              <td>Master Of Arts (MA)</td>
              <td>2 Years</td>
              <td>Graduation</td>
            </tr>
            <tr>
              <td>MA - Social Work</td>
              <td>2 Years</td>
              <td>Any Degrees</td>
            </tr>
            <tr>
              <td>Master Of Commerce (M.Com)</td>
              <td>2 Years</td>
              <td>B.Com</td>
            </tr>
            <tr>
              <td>Master Of Science (M.sc.), Maths, Physics, Chemistry</td>
              <td>2 Years</td>
              <td>Graduation in Relevant Subject</td>
            </tr>
            <tr>
              <td>M. Sc. - Library information Science</td>
              <td>2 Years</td>
              <td>B. Lib</td>
            </tr>
            <tr>
              <td>Master of Business Administration (MBA)Marketing, Finance & Banking Systems, Human Resource,
                International Business, E- Commerce, Applied Management, Telecom Production Management,
                Retail Management, IT & System, Industrial Engineering, Logistic & Supply Chain Management,
                Material Management, Construction Management, Pharmaceutical Management, Operation Management</td>
              <td>2 Years</td>
              <td>Graduation</td>
            </tr>
            <tr>
              <td>MBA (Lateral/ Executive) Program*HR, Marketing, Finance & Banking, Hospital Management, International Business,
                Production Management, Retail Management, It & System, Industrial, Engineering, Logistic & Supply Chain Management,
                Material Management, Construction Management, Hospitality & Tourisment</td>
              <td>1 Year</td>
              <td>Special Eligibility: Direct entry to second year for PG Dip HRM/PG DMM2 Years Experience as manager after degree!5
                Years Experience as manager after Diploma</td>
            </tr>
            <tr>
              <td>Master of Social Works (M.S.W.)*</td>
              <td>2 Years</td>
              <td>Any Degree</td>
            </tr>
            <tr>
              <td>Master of Computer Application (M.C.A.)</td>
              <td>3 Years</td>
              <td>Any degree with Maths / IT / CS</td>
            </tr>
            
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default UnderGraduate;

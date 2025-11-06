import styles from "./PGDiploma.module.css";

// eslint-disable-next-line react/prop-types
const PGDiploma = ({ onClose }) => {
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
                        <tr>
                            <td>Material Management</td>
                            <td>1 Year</td>
                            <td>Graduation</td>
                        </tr>
                        <tr>
                            <td>English Language Teaching</td>
                            <td>1 Year</td>
                            <td>Graduation</td>
                        </tr>
                        <tr>
                            <td>International Business Teaching</td>
                            <td>1 Year</td>
                            <td>Graduation</td>
                        </tr>
                        <tr>
                            <td>Library Automation & Networking</td>
                            <td>1 Year</td>
                            <td>Graduation</td>
                        </tr>
                        <tr>
                            <td>Sports Management</td>
                            <td>1 Years</td>
                            <td>Graduation</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PGDiploma;

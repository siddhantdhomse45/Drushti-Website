import React from "react";
import styles from "./DiplomaCourse.module.css";

const DiplomaCourse = ({ onClose }) => {
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>
                    Close
                </button>
                <h2>Diploma Courses</h2>
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
                            <td>Computer Teacher Training</td>
                            <td>1 Years</td>
                            <td>Graduation</td>
                        </tr>
                        <tr>
                            <td>Computer Application</td>
                            <td>1 Years</td>
                            <td>Graduation</td>
                        </tr>
                        <tr>
                            <td>Business Management</td>
                            <td>1 Years</td>
                            <td>Graduation</td>
                        </tr>
                        <tr>
                            <td>Industrial Management</td>
                            <td>1 Years</td>
                            <td>Graduation</td>
                        </tr>
                        <tr>
                            <td>Marketing Management</td>
                            <td>1 Years</td>
                            <td>Graduation</td>
                        </tr>
                        <tr>
                            <td>Animation</td>
                            <td>1 Years</td>
                            <td>Graduation</td>
                        </tr>
                        <tr>
                            <td>House Keeping	</td>
                            <td>6 Months</td>
                            <td>HSC</td>
                        </tr>
                        <tr>
                            <td>Financial Management</td>
                            <td>6 Months</td>
                            <td>HSC</td>
                        </tr>
                        <tr>
                            <td>Fire Safety</td>
                            <td>1 Years</td>
                            <td>Graduation</td>
                        </tr>
                        <tr>
                            <td>Pre-primary Teacher Education</td>
                            <td>1 Years</td>
                            <td>Graduation</td>
                        </tr>
                        <tr>
                            <td>Montessori Teacher Education</td>
                            <td>1 Years</td>
                            <td>Graduation</td>
                        </tr>
                        <tr>
                            <td>Hotel Management & Catering Technology</td>
                            <td>1 Years</td>
                            <td>Graduation</td>
                        </tr>
                        <tr>
                            <td>Library Information Science</td>
                            <td>1 Years</td>
                            <td>Graduation</td>
                        </tr>
                        <tr>
                            <td>Food & Nutrition</td>
                            <td>1 Years</td>
                            <td>Graduation</td>
                        </tr>
                        <tr>
                            <td>ICT Application in Library</td>
                            <td>1 Years</td>
                            <td>Graduation</td>
                        </tr>
                        <tr>
                            <td>Computer Literacy Program</td>
                            <td>1 Years</td>
                            <td>Graduation</td>
                        </tr>
                        <tr>
                            <td>Disaster Management</td>
                            <td>1 Years</td>
                            <td>Graduation</td>
                        </tr>
                        <tr>
                            <td>Industrial Safety</td>
                            <td>1 Years</td>
                            <td>Graduation</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DiplomaCourse;

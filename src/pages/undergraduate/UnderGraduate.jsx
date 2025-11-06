import React from "react";
import styles from "./UnderGraduate.module.css";

const UnderGraduate = ({ onClose }) => {
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>
                    Close
                </button>
                <h2>Under Graduate Courses</h2>
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
                            <td>Bachelor of Arts (BA)</td>
                            <td>3 Years</td>
                            <td>10 + 2 Passed</td>
                        </tr>
                        <tr>
                            <td>Bachelor of Commerce (B.Com)</td>
                            <td>3 Years</td>
                            <td>10 + 2 Passed</td>
                        </tr>
                        <tr>
                            <td>Bachelor Of Science Maths, Physics, Chemistry, Biology</td>
                            <td>3 Years</td>
                            <td>10 + 2 Passed</td>
                        </tr>
                        <tr>
                            <td>B. Sc (MLT)</td>
                            <td>3 Years</td>
                            <td>10 + 2 Passed</td>
                        </tr>
                        <tr>
                            <td>B. Sc (Hotel Management)</td>
                            <td>3 Years</td>
                            <td>10 + 2 Passed</td>
                        </tr>
                        <tr>
                            <td>Bachelor of IT</td>
                            <td>3 Years</td>
                            <td>10 + 2 Passed</td>
                        </tr>
                        <tr>
                            <td>B. Sc (Library Science)</td>
                            <td>1 Year</td>
                            <td>Degree</td>
                        </tr>
                        <tr>
                            <td>Entrance Exam + BA</td>
                            <td>4 Years</td>
                            <td>Above 18 Years</td>
                        </tr>
                        <tr>
                            <td>Entrance Exam + B. Com</td>
                            <td>4 Years</td>
                            <td>Above 18 Years</td>
                        </tr>
                        <tr>
                            <td>Bachelor of Computer Application (BCA)</td>
                            <td>3 Years</td>
                            <td>10 + 2 Passed with Computer</td>
                        </tr>
                        <tr>
                            <td>BCA Lateral</td>
                            <td>2 Years</td>
                            <td>12th with 3 years Diploma in Computer</td>
                        </tr>
                        <tr>
                            <td>Bachelor Of Business Administration (BBA)</td>
                            <td>3 Years</td>
                            <td>10 + 2 Passed</td>
                        </tr>
                        <tr>
                            <td>Bachelor Of Social Work (BSW)</td>
                            <td>3 Years</td>
                            <td>10 + 2 Passed</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UnderGraduate;

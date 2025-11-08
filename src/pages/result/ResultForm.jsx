import { useState } from "react";
import styles from "./ResultForm.module.css";

const ResultForm = () => {
  const [formData, setFormData] = useState({
    motherName: "",
    seatNumber: "",
  });
  const [resultData, setResultData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResultData(null);

    try {
      const response = await fetch("http://localhost:8000/api/result/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        console.error("❌ Server responded with:", response.status);
        setResultData("notfound");
        return;
      }

      const data = await response.json();
      setResultData(data);
    } catch (error) {
      console.error("❌ Error fetching result:", error);
      setResultData("notfound");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({ motherName: "", seatNumber: "" });
    setResultData(null);
  };

  return (
    <div className={styles.resultContainer}>
      <h2 className={styles.title}>University Result Portal</h2>

      <form className={styles.resultForm} onSubmit={handleSubmit}>
        <input
          type="text"
          name="motherName"
          placeholder="Enter Mother's Name"
          value={formData.motherName}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <input
          type="text"
          name="seatNumber"
          placeholder="Enter Seat / Roll Number"
          value={formData.seatNumber}
          onChange={handleChange}
          required
          className={styles.input}
        />

        <button type="submit" className={styles.btnShow} disabled={loading}>
          {loading ? "Loading..." : "Show Result"}
        </button>
        <button type="button" className={styles.btnReset} onClick={handleReset}>
          Reset
        </button>
      </form>

      {resultData === "notfound" && (
        <div className={styles.resultCard}>
          <h3>No Result Found</h3>
          <p>Please check your details and try again.</p>
        </div>
      )}

      {resultData && resultData !== "notfound" && (
        <div className={styles.resultCard}>
          <h3>Examination Result</h3>
          <p><strong>Name:</strong> {resultData.name}</p>
          <p><strong>Mother&apos;s Name:</strong> {resultData.motherName}</p>
          <p><strong>Seat Number:</strong> {resultData.seatNumber}</p>
          <p><strong>Standard:</strong> {resultData.standard}</p>
          <p><strong>Branch:</strong> {resultData.branch}</p>

          <table className={styles.marksTable}>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Marks</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(resultData.subjects).map(([sub, mark]) => (
                <tr key={sub}>
                  <td>{sub}</td>
                  <td>{mark}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p><strong>Total Marks:</strong> {resultData.total}</p>
          <p><strong>Percentage:</strong> {resultData.percentage}%</p>
          <p
            className={
              resultData.status === "Pass"
                ? styles.passStatus
                : styles.failStatus
            }
          >
            Result: {resultData.status}
          </p>
        </div>
      )}
    </div>
  );
};

export default ResultForm;

import { useState } from "react";
import styles from "./EnquiryForm.module.css";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // simple validation
    if (!/^[0-9]{10}$/.test(formData.phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    alert("✅ Thank you! Your enquiry has been submitted successfully.");

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    });
  };

  return (
    <div className={styles.container1}>
      <div className={styles.formCard}>
        <h2 className={styles.title}>Course Enquiry Form</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Full Name */}
          <div className={styles.formGroup}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          {/* Phone */}
          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter 10-digit number"
            />
          </div>

          {/* Course */}
          <div className={styles.formGroup}>
            <label htmlFor="course">Course Interested In</label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            >
              <option value="">Select a course</option>
              <option value="BA">Bachelor of Arts (BA)</option>
              <option value="BCom">Bachelor of Commerce (B.Com)</option>
              <option value="BSc">Bachelor of Science (B.Sc)</option>
              <option value="BTech">Bachelor of Technology (B.Tech)</option>
              <option value="MBA">Master of Business Administration (MBA)</option>
            </select>
          </div>

          {/* Message */}
          <div className={styles.formGroup}>
            <label htmlFor="message">Message / Query</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your query here..."
            ></textarea>
          </div>

          {/* Submit */}
          <div className={styles.submitWrapper}>
            <button type="submit" className={styles.submitBtn}>
              Submit Enquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;

import { useState } from "react";
import { FaHeadset, FaTimes, FaSyncAlt } from "react-icons/fa";
import styles from "./HelpDesk.module.css";

// eslint-disable-next-line react/prop-types
const HelpDesk = ({ setIsHelpOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    hoNumber: "",
    comments: "",
    captchaInput: "",
  });

  // Captcha Generator
  function generateCaptcha() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    return Array.from({ length: 6 }, () =>
      chars[Math.floor(Math.random() * chars.length)]
    ).join("");
  }

  const refreshCaptcha = () => setCaptcha(generateCaptcha());

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.captchaInput.trim().toUpperCase() !== captcha) {
      alert("❌ Invalid captcha. Please try again!");
      refreshCaptcha();
      return;
    }
    alert("✅ Help Desk request submitted successfully!");
    setFormData({
      name: "",
      number: "",
      hoNumber: "",
      comments: "",
      captchaInput: "",
    });
    refreshCaptcha();
    closePopup();
  };

  const openPopup = () => {
    setIsOpen(true);
    setIsHelpOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setIsHelpOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button className={styles.floatingBtn} onClick={openPopup}>
        <FaHeadset size={26} />
      </button>

      {/* Popup */}
      {isOpen && (
        <div className={styles.overlay}>
          <div className={styles.popup}>
            <div className={styles.header}>
              <h2>
                Help Desk <span>(Free Support)</span>
              </h2>
              <button className={styles.closeBtn} onClick={closePopup}>
                <FaTimes size={22} />
              </button>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />

              <div className={styles.row}>
                <div>
                  <label>Number</label>
                  <input
                    type="text"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    placeholder="Enter number"
                    required
                  />
                </div>
                <div>
                  <label>HO Number</label>
                  <input
                    type="text"
                    name="hoNumber"
                    value={formData.hoNumber}
                    onChange={handleChange}
                    placeholder="Enter HO number"
                  />
                </div>
              </div>

              <label>Comments / Questions</label>
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                placeholder="Write your message..."
                required
              ></textarea>

              {/* Captcha Section */}
              <div className={styles.captchaSection}>
                <div className={styles.captchaBox}>
                  <span className={styles.captchaText}>{captcha}</span>
                  <button
                    type="button"
                    className={styles.refreshCaptcha}
                    onClick={refreshCaptcha}
                  >
                    <FaSyncAlt />
                  </button>
                </div>
              </div>

              <label>Enter Captcha</label>
              <input
                type="text"
                name="captchaInput"
                value={formData.captchaInput}
                onChange={handleChange}
                placeholder="Enter the code above"
                required
              />

              <button type="submit" className={styles.submitBtn}>
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default HelpDesk;

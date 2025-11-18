import React from "react";
import styles from "./WhatsAppFloat.module.css";

function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/918668231882?text=Hello! I want information about the courses."
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappBtn}
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
}

export default WhatsAppFloat;

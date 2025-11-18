import { FaBullhorn, FaUniversity, FaPhoneAlt, FaStar, FaBookOpen } from "react-icons/fa";
import styles from "./BroadcastBar.module.css";

const messages = [
  { text: "Admissions Open 2025!", icon: <FaBullhorn /> },
  { text: "New Programs Added!", icon: <FaStar /> },
  { text: "Apply Now for Distance Education!", icon: <FaBookOpen /> },
  { text: "Top Universities Now Onboarded!", icon: <FaUniversity /> },
  { text: "Contact Us for Free Counseling", icon: <FaPhoneAlt /> },
];

export default function BroadcastBar() {
  return (
    <div className={styles.broadcastBar}>
      <div className={styles.scrollContainer}>
        {messages.map((item, index) => (
          <span key={index} className={styles.message}>
            <span className={styles.icon}>{item.icon}</span>
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}

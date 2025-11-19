import { useEffect } from "react";
import styles from "./aboutUs.module.css";
import Right from "./right/Right";

const AboutUs = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(`.${styles.animate}`);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.show);
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((sec) => observer.observe(sec));
  }, []);

  return (
    <section className={`${styles.aboutSection} ${styles.animate}`}>
      {/* Left Side */}
      <div className={`${styles.left} ${styles.animate}`}>
        <Right />
      </div>

      {/* Right Side */}
      <div className={`${styles.right} ${styles.animate}`}>
        {/* Heading */}
        <div className={`${styles.headingWrapper} ${styles.animate}`}>
          <strong>
            <i className="fas fa-book-open-reader"></i> About Us
          </strong>
          <h2>
            Our <span>Education System</span> Inspires You More.
          </h2>
          <p>
            At Drushti, we believe education is the foundation of innovation.
            We provide world-class learning experiences that empower
            students to achieve their goals.
          </p>
        </div>

        {/* Services */}
        <div className={styles.services}>
          <div className={`${styles.serviceCard} ${styles.animate}`}>
            <div className={styles.icon}>
              <img src="https://live.themewild.com/eduka/assets/img/icon/open-book.svg" />
            </div>
            <div>
              <h3>Education Services</h3>
              <p>Comprehensive courses designed to enhance lifelong learning.</p>
            </div>
          </div>

          <div className={`${styles.serviceCard} ${styles.animate}`}>
            <div className={styles.icon}>
              <img src="https://live.themewild.com/eduka/assets/img/icon/global-education.svg" />
            </div>
            <div>
              <h3>International Hubs</h3>
              <p>Connect with global learning platforms and educators.</p>
            </div>
          </div>
        </div>

        {/* Quote Box */}
        <div className={`${styles.quoteBox} ${styles.animate}`}>
          <i className="fas fa-quote-right"></i>
          <p>
            “Learning never exhausts the mind — it fuels curiosity, growth,
            and endless possibilities.”
          </p>
        </div>

        {/* Actions */}
        <div className={`${styles.actions} ${styles.animate}`}>
          <button className={styles.discoverMore}>Discover More</button>
          <div className={styles.callNow}>
            <i className="fas fa-headset"></i> Call Now{" "}
            <span>+91 98765 43210</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

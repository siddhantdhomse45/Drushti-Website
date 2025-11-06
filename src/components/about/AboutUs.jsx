import React from "react";
import styles from "./aboutUs.module.css";
import Right from "./right/Right";

const AboutUs = () => {
  return (
    <div className={styles.main}>
      {/* Left Section */}
      <div className={styles.left}>
        <Right />
      </div>

      {/* Right Section */}
      <div className={styles.right}>
        {/* Heading Section */}
        <div className={styles.headingWrapper}>
        <strong className="site-title-tagline">
          <i className="fas fa-book-open-reader"></i> About Us</strong>

          <h2>
            Our Edukation System <span>Inspires</span> You More.
          </h2>
          <p>
            There are many variations of passages available, but the majority
            have suffered alteration in some form by injected humour or
            randomised words which don't look even slightly believable.
          </p>
        </div>

        {/* Services Section */}
        <div className={styles.services}>
          <div className={styles.service}>
            <div className={styles.icon}>
              <img src="https://live.themewild.com/eduka/assets/img/icon/open-book.svg" alt="icon" />
            </div>
            <div>
              <h3>Education Services</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by using content.
              </p>
            </div>
          </div>
          <div className={styles.service}>
            <div className={styles.icon}>
              <img src=" https://live.themewild.com/eduka/assets/img/icon/global-education.svg" alt="icon" />

            </div>
            <div>
              <h3>International Hubs</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by using content.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={styles.stats}>
          <p>
            It is a long established fact that a reader will be distracted by
            the content of a page when looking at its layout.
          </p>
          <div className={styles.statContainer}>
            <i className="fas fa-quote-right"></i> {/* Use "fas" for solid icons */}
          </div>
        </div>

        {/* Actions Section */}
        <div className={styles.actions}>
          <button className={styles.discoverMore}>Discover More →</button>
          <div className={styles.callNow}>
          <div className="icon"><i className="fas fa-headset"></i></div>
            Call Now <span>+2 123 654 7898</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

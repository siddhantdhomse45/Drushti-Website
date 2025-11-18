import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./hero.module.css";

const Hero = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);

  const handleLearnMore = () => {
    navigate("/about");
  };

  // ★ Scroll Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
  }, []);

  return (
    <section className={`${styles.heroSection}`} ref={heroRef}>
      {/* Background */}
      <div className={styles.heroBg}></div>

      <div className={styles.heroContent}>
        
        {/* LEFT TEXT BOX */}
        <div className={`${styles.textBox} ${styles.tilt3d}`}>
          <h2 className={styles.heading}>Drushti Education Society</h2>
          <h3 className={styles.subheading}>
            We offer full-time / Distance  education programs.
          </h3>
          <p className={styles.description}>
            We offer an opportunity to overcome the constraints of distance and time.
            Students can study anywhere with complete flexibility and repeat lessons 
            until they fully understand.
          </p>

          <button className={styles.learnButton} onClick={handleLearnMore}>
            LEARN MORE ›
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className={`${styles.imageBox} ${styles.tilt3d}`}>
          <img
            src="https://softkeyeducation.com/img/dummy/img-1.png"
            alt="Student"
            className={styles.personImage}
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;

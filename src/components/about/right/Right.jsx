import { useRef } from "react";
import styles from "./right.module.css";

function Right() {
  const parallaxRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = parallaxRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (-y / 25).toFixed(2);
    const rotateY = (x / 25).toFixed(2);

    parallaxRef.current.style.transform = `
      perspective(900px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.04)
    `;
  };

  const handleMouseLeave = () => {
    parallaxRef.current.style.transform = `
      perspective(900px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.parallaxBox}
        ref={parallaxRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.imageGrid}>
          <div className={styles.mainImageWrapper}>
            <img
              src="https://live.themewild.com/eduka/assets/img/about/01.jpg"
              alt="About Eduka"
              className={styles.mainImage}
            />
            <div className={styles.badge}>30 Years of Quality Service</div>
          </div>

          <div className={styles.sideImages}>
            <img
              src="https://live.themewild.com/eduka/assets/img/about/02.jpg"
              alt="Students"
            />
            <img
              src="https://live.themewild.com/eduka/assets/img/about/03.jpg"
              alt="Campus"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Right;

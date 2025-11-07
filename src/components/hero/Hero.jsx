// import  { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom"; // ✅ import navigate hook
// import styles from "./hero.module.css";

// const Hero = () => {
//   const navigate = useNavigate(); // ✅ initialize navigate

//   const images = [
//     "https://live.themewild.com/eduka/assets/img/slider/slider-3.jpg",
//     "https://live.themewild.com/eduka/assets/img/slider/slider-2.jpg",
//     "https://live.themewild.com/eduka/assets/img/slider/slider-1.jpg",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto change background every 3 seconds
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(intervalId);
//   }, []);

//   // ✅ Learn More navigation
//   const handleLearnMore = () => {
//     navigate("/about"); // <-- redirects to your About page route
//   };

//   return (
//     <div className={styles.banner}>
//       <img
//         src={images[currentIndex]}
//         alt={`Slide ${currentIndex + 1}`}
//         className={styles.bannerImage}
//       />
//       <div className={styles.overlay}></div>

//       <div className={styles.content}>
//         <p className={styles.welcomeText}>WELCOME TO DEVCONS</p>
//         <h1 className={styles.heading}>
//           Start Your Beautiful <br />
//           And <span className={styles.highlight}>Bright Future</span>
//         </h1>
//         <p className={styles.description}>
//           We offer an opportunity to overcome the constraints of distance & time.
//           Learners can plan their schedule & choose topics to study flexibly.
//           Learn, listen, and interact at your own pace until mastery.
//         </p>
//         <div className={styles.buttons}>
//           <button
//             className={`${styles.button} ${styles.learnButton}`}
//             onClick={handleLearnMore} // ✅ working navigation
//           >
//             Learn More →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;








import { useNavigate } from "react-router-dom";
import styles from "./hero.module.css";

const Hero = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/about");
  };

  return (
    <section className={styles.heroSection}>
      {/* Background Overlay */}
      <div className={styles.heroBg}></div>

      <div className={styles.heroContent}>
        {/* Left Content Box */}
        <div className={styles.textBox}>
          <h2 className={styles.heading}>Drushti Education Society</h2>
          <h3 className={styles.subheading}>
            We offer distance education programs.
          </h3>
          <p className={styles.description}>
            We offer an opportunity to overcome the constraints of distance and
            time. We let program-takers plan their own schedule & choose
            subjects, topics, and places to study. We offer flexibility in
            learning as students can read, listen, or see interactive and live
            lessons repeatedly until they comprehend them fully.
          </p>

          <button className={styles.learnButton} onClick={handleLearnMore}>
            LEARN MORE ›
          </button>
        </div>

        {/* Right Image Box */}
        <div className={styles.imageBox}>
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
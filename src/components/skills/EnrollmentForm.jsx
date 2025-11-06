import React, { useEffect } from 'react';
import styles from "./EnrollmentForm.module.css";

const EnrollmentForm = () => {

useEffect(() => {
  // Function to start the animation when the progress bar is in view
  const startProgressAnimation = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        if (bar.classList.contains(styles.progressFill1)) {
          bar.style.width = '85%';
        } else if (bar.classList.contains(styles.progressFill2)) {
          bar.style.width = '65%';
        } else if (bar.classList.contains(styles.progressFill3)) {
          bar.style.width = '75%';
        }

        observer.unobserve(bar); 
      }
    });
  };

  // Create IntersectionObserver
  const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.1, // Trigger when 10% of the element is visible
  };

  const observer = new IntersectionObserver(startProgressAnimation, observerOptions);

  // Get all progress bars
  const progressBars = document.querySelectorAll(
    `.${styles.progressFill1}, .${styles.progressFill2}, .${styles.progressFill3}`
  );

  // Start observing each progress bar
  progressBars.forEach(bar => {
    observer.observe(bar);
  });

  // Clean up the observer on component unmount
  return () => {
    progressBars.forEach(bar => {
      observer.unobserve(bar);
    });
  };
}, []);



  return (
    <div className={styles.container1}>
    {/* Left Section: Enrollment Form */}
    <div className={styles.leftSection}>
    <div className={styles.head}>
      <h3>Start Your Enrollment</h3>
      <p>We are variations of passages the have suffered.</p>
      </div>
      <form>
        <input type="text" placeholder="Your Name" className={styles.input} />
        <input type="email" placeholder="Email Address" className={styles.input} />
        <select className={styles.input}>
          <option value="">Choose Course</option>
          <option value="course1">Health And Medicine</option>
          <option value="course2">Business And Finance</option>
          <option value="course3">Art & Design</option>
          <option value="course4">Law And Criminology</option>
          <option value="course5">IT And Data Science</option>
        </select>
        <textarea
          placeholder="Type Message"
          className={styles.textarea}
        ></textarea>
        <button type="submit" className={styles.button}>
          Enroll Now ➔
        </button>
      </form>
    </div>

    <div className={styles.rightSection}>
      <h2>
        Explore Your <span className={styles.highlight}>Creativity</span> And{' '}
        <span className={styles.highlight}>Talent</span> With Us
      </h2>
      <p>
        There are many variations of passages available but the majority have
        suffered alteration in some form by injected humour randomised words
        which don't look even slightly believable.
      </p>
      <div className={styles.progressBars}>
        <div>
          <label>Our Students</label>
          <div className={styles.progress}>
            <div
              className={styles.progressFill1}
              style={{ width: '0%' }} // Start at 0% and animate when in view
            >
              <span className={styles.progressText}>85%</span>
            </div>
          </div>
        </div>
        <div>
          <label>Our Teachers</label>
          <div className={styles.progress}>
            <div
              className={styles.progressFill2}
              style={{ width: '0%' }} // Start at 0% and animate when in view
            >
              <span className={styles.progressText}>65%</span>
            </div>
          </div>
        </div>
        <div>
          <label>Our Courses</label>
          <div className={styles.progress}>
            <div
              className={styles.progressFill3}
              style={{ width: '0%' }} // Start at 0% and animate when in view
            >
              <span className={styles.progressText}>75%</span>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.button}>Learn More ➔</button>
</div>
</div>
);
};

export default EnrollmentForm;

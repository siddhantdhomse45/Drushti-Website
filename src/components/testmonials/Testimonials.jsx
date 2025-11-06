import React, { useEffect } from "react";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    id: 1,
    name: "Edward Miles",
    role: "Student",
    rating: 5,
    feedback:
      "The course transformed my skills and confidence. I loved the clarity, structure, and the mentors' constant support!",
    image: "https://live.themewild.com/eduka/assets/img/testimonial/04.jpg",
  },
  {
    id: 2,
    name: "Ninal Gordon",
    role: "Student",
    rating: 5,
    feedback:
      "Such an engaging experience! The platform design, lessons, and community made learning so enjoyable.",
    image: "https://live.themewild.com/eduka/assets/img/testimonial/05.jpg",
  },
  {
    id: 3,
    name: "Anthony Nicoll",
    role: "Student",
    rating: 5,
    feedback:
      "I gained real-world knowledge and built strong foundations. Highly recommended for serious learners!",
    image: "https://live.themewild.com/eduka/assets/img/testimonial/01.jpg",
  },
  {
    id: 4,
    name: "Richard Lock",
    role: "Student",
    rating: 5,
    feedback:
      "Superb course content and easy-to-follow explanations. I feel confident applying what I’ve learned.",
    image: "https://live.themewild.com/eduka/assets/img/testimonial/02.jpg",
  },
  {
    id: 5,
    name: "Randal Grand",
    role: "Student",
    rating: 5,
    feedback:
      "The instructors are so supportive. Every concept was explained clearly and with great real-life examples!",
    image: "https://live.themewild.com/eduka/assets/img/testimonial/03.jpg",
  },

  {
    id: 6,
    name: "Andan Miles",
    role: "Student",
    rating: 5,
    feedback:
      "There are many variations of tend to repeat chunks some all form necessary injected for the going are humour words.",
    image:
      "data:image/jpeg;base64,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",
  },
];

const Testimonials = () => {
  // Fade-in animation on scroll
  useEffect(() => {
    const cards = document.querySelectorAll(`.${styles.card}`);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.2 }
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.testimonialsSection}>
      <strong>
        <i className="fas fa-book-open-reader"></i> Testimonials
      </strong>
      <h3 className={styles.heading}>
        What Our Students <span className={styles.highlight}>Say's</span>
      </h3>
      <p className={styles.description}>
        Hear what our learners have to say about their experience. We take pride
        in delivering quality education and real transformation.
      </p>

      <div className={styles.cardsContainer}>
        {testimonials.map((t) => (
          <div key={t.id} className={styles.card}>
            <div className={styles.quoteIcon}>
              <i className="fas fa-quote-right"></i>
            </div>
            <div className={styles.rating}>{"★".repeat(t.rating)}</div>
            <p className={styles.feedback}>{t.feedback}</p>
            <div className={styles.footer}>
              <img src={t.image} alt={t.name} className={styles.image} />
              <div>
                <h4 className={styles.name}>{t.name}</h4>
                <span className={styles.role}>{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

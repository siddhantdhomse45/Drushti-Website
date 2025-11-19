


// import { useEffect, useState } from "react";
// import axios from "axios";
// import styles from "./Testimonials.module.css";

// const Testimonials = () => {
//   const [testimonials, setTestimonials] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   // Fetch Testimonials
//   useEffect(() => {
//     const fetchTestimonials = async () => {
//       try {
//         const res = await axios.get("https://drushti-website-backend-1.onrender.com/api/testimonial/");
//         setTestimonials(res.data.data || []);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to load testimonials");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTestimonials();
//   }, []);

//   // Fade-in animation on scroll
//   useEffect(() => {
//     if (!testimonials.length) return;

//     const cards = document.querySelectorAll(`.${styles.card}`);
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add(styles.visible);
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     cards.forEach((card) => observer.observe(card));
//     return () => observer.disconnect();
//   }, [testimonials]);

//   if (loading) return <p className={styles.loading}>Loading testimonials...</p>;
//   if (error) return <p className={styles.error}>{error}</p>;

//   return (
//     <div className={styles.testimonialsSection}>
//       <strong>
//         <i className="fas fa-book-open-reader"></i> Testimonials
//       </strong>

//       <h3 className={styles.heading}>
//         What Our Students <span className={styles.highlight}>Say&apos;s</span>
//       </h3>

//       <p className={styles.description}>
//         Hear what our learners have to say about their experience.
//       </p>

//       <div className={styles.cardsContainer}>
//         {testimonials.map((t) => (
//           <div key={t._id} className={styles.card}>
//             <div className={styles.quoteIcon}>
//               <i className="fas fa-quote-right"></i>
//             </div>

//             {/* Rating */}
//             <div className={styles.rating}>
//               {"★".repeat(t.rating || 5)}
//             </div>

//             {/* Feedback */}
//             <p className={styles.feedback}>{t.feedback}</p>

//             <div className={styles.footer}>
//               {/* IMAGE FIX — Cloudinary URL will load correctly */}
//               <img
//                 src={
//                   t.image && t.image.startsWith("http")
//                     ? t.image
//                     : "https://via.placeholder.com/80?text=No+Image"
//                 }
//                 alt={t.name}
//                 className={styles.image}
//                 onError={(e) => {
//                   e.target.src =
//                     "https://via.placeholder.com/80?text=No+Image";
//                 }}
//               />

//               {/* Name + Role */}
//               <div>
//                 <h4 className={styles.name}>{t.name}</h4>
//                 <span className={styles.role}>{t.role}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Testimonials;





import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_URL =
    " https://drushti-website-backend-1.onrender.com/api/testimonial";

  // Fetch Testimonials
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        // Wake up Render (prevents first-time Network Error)
        await fetch(" https://drushti-website-backend-1.onrender.com");

        const res = await axios.get(API_URL);
        const list = res?.data?.data;

        if (Array.isArray(list)) {
          setTestimonials(list);
        } else {
          setTestimonials([]);
          console.error("Invalid testimonials API response", res.data);
        }
      } catch (err) {
        console.error("Testimonials error:", err);
        setError("Failed to load testimonials");
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Scroll Reveal Animation
  useEffect(() => {
    if (!testimonials.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.25 }
    );

    const cards = document.querySelectorAll(`.${styles.card}`);
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [testimonials]);

  if (loading) return <p className={styles.loading}>Loading...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className={styles.testimonialsSection}>
      <strong>
        <i className="fas fa-book-open-reader"></i> Testimonials
      </strong>

      <h3 className={styles.heading}>
        What Our Students <span className={styles.highlight}>Say's</span>
      </h3>

      <p className={styles.description}>
        Hear what our learners have to say about their experience.
      </p>

      <div className={styles.cardsContainer}>
        {testimonials.map((t) => (
          <div key={t._id} className={styles.card}>
            <div className={styles.quoteIcon}>
              <i className="fas fa-quote-right"></i>
            </div>

            <div className={styles.rating}>
              {"★".repeat(t.rating || 5)}
            </div>

            <p className={styles.feedback}>{t.feedback}</p>

            <div className={styles.footer}>
              <img
                src={
                  t.image?.startsWith("http")
                    ? t.image
                    : "https://via.placeholder.com/80?text=No+Image"
                }
                alt={t.name}
                className={styles.image}
                onError={(e) =>
                  (e.target.src = "https://via.placeholder.com/80?text=No+Image")
                }
              />

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

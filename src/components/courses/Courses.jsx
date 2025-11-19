// import  { useEffect, useRef, useState } from "react";
// import CourseCard from "./CourseCard";
// import styles from "./Courses.module.css";

// const Courses = () => {
//   const [courses, setCourses] = useState([]);
//   const cardsRef = useRef([]);

//   // ⭐ Fetch courses from backend
//   const fetchCourses = async () => {
//     try {
//       const res = await fetch("https://drushti-website-backend-1.onrender.com/api/courses/all");
//       const data = await res.json();

//       // ⭐ FIX: Ensure data is always an array
//       if (Array.isArray(data)) {
//         setCourses(data);
//       } else if (Array.isArray(data.data)) {
//         setCourses(data.data);
//       } else {
//         console.error("Invalid API response:", data);
//         setCourses([]); // prevent crash
//       }
//     } catch (error) {
//       console.error("Failed to load courses:", error);
//       setCourses([]); // prevent crash
//     }
//   };

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   // ⭐ Scroll Animation
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add(styles.showCard);
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     cardsRef.current.forEach((card) => card && observer.observe(card));
//   }, [courses]);

//   // ⭐ 3D Hover Animation
//   const handleMouseMove = (e, index) => {
//     const card = cardsRef.current[index];
//     if (!card) return;

//     let rect = card.getBoundingClientRect();
//     let x = e.clientX - rect.left - rect.width / 2;
//     let y = e.clientY - rect.top - rect.height / 2;

//     card.style.transform = `rotateY(${x / 25}deg) rotateX(${-y / 25}deg)`;
//   };

//   const resetCard = (index) => {
//     const card = cardsRef.current[index];
//     if (!card) return;
//     card.style.transform = "rotateY(0deg) rotateX(0deg)";
//   };

//   return (
//     <div className={styles.courses}>
//       <h2 className={styles.heading}>
//         <i className="fas fa-book-open-reader"></i> Our Courses
//       </h2>

//       <p className={styles.subtitle}>
//         It is a long established fact that a reader will be distracted.
//       </p>

//       <div className={styles.grid}>
//         {courses.length === 0 ? (
//           <p>No Courses Found</p>
//         ) : (
//           courses.map((course, index) => (
//             <div
//               key={course._id || index}
//               ref={(el) => (cardsRef.current[index] = el)}
//               className={styles.cardWrapper}
//               onMouseMove={(e) => handleMouseMove(e, index)}
//               onMouseLeave={() => resetCard(index)}
//             >
//               <CourseCard {...course} />
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Courses;





import { useEffect, useRef, useState } from "react";
import CourseCard from "./CourseCard";
import styles from "./Courses.module.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const cardsRef = useRef([]);

  const API_URL =
    "https://drushti-website-backend-1.onrender.com/api/courses/all";

  const fetchCourses = async () => {
    try {
      // Wake up Render
      await fetch("https://drushti-website-backend-1.onrender.com");

      const res = await fetch(API_URL, { method: "GET" });

      if (!res.ok) throw new Error("Courses API failed");

      const data = await res.json();

      if (Array.isArray(data)) {
        setCourses(data);
      } else if (Array.isArray(data.data)) {
        setCourses(data.data);
      } else {
        console.error("Invalid course API response", data);
        setCourses([]);
      }
    } catch (err) {
      console.error("Failed to load courses:", err);
      setCourses([]);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // Scroll animation
  useEffect(() => {
    if (!courses.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.showCard);
          }
        });
      },
      { threshold: 0.25 }
    );

    cardsRef.current.forEach((card) => card && observer.observe(card));

    return () => observer.disconnect();
  }, [courses]);

  // 3D hover animation
  const handleMouseMove = (e, index) => {
    const card = cardsRef.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    card.style.transform = `rotateY(${x / 25}deg) rotateX(${-y / 25}deg)`;
  };

  const resetCard = (index) => {
    if (cardsRef.current[index])
      cardsRef.current[index].style.transform =
        "rotateY(0deg) rotateX(0deg)";
  };

  return (
    <div className={styles.courses}>
      <h2 className={styles.heading}>
        <i className="fas fa-book-open-reader"></i> Our Courses
      </h2>

      <p className={styles.subtitle}>
        It is a long established fact that a reader will be distracted.
      </p>

      <div className={styles.grid}>
        {courses.length === 0 ? (
          <p>No Courses Found</p>
        ) : (
          courses.map((course, index) => (
            <div
              key={course._id || index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={styles.cardWrapper}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => resetCard(index)}
            >
              <CourseCard {...course} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Courses;

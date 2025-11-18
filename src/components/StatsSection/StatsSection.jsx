
import { useEffect, useRef, useState } from "react";
import styles from "./statsSection.module.css";

const StatsSection = () => {
  const stats = [
    {
      id: 1,
      imgSrc: "https://live.themewild.com/eduka/assets/img/icon/course.svg",
      number: 500,
      suffix: "+",
      label: "Total Courses",
    },
    {
      id: 2,
      imgSrc: "https://live.themewild.com/eduka/assets/img/icon/graduation.svg",
      number: 1900,
      suffix: "+",
      label: "Our Students",
    },
    {
      id: 3,
      imgSrc: "https://live.themewild.com/eduka/assets/img/icon/teacher-2.svg",
      number: 750,
      suffix: "+",
      label: "Skilled Lecturers",
    },
    {
      id: 4,
      imgSrc: "https://live.themewild.com/eduka/assets/img/icon/award.svg",
      number: 30,
      suffix: "+",
      label: "Win Awards",
    },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [started, setStarted] = useState(false);
  const sectionRef = useRef(null);

  // Animate numbers only when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setStarted(true);
          animateNumbers();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [started]);

  const animateNumbers = () => {
    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.number;
      const duration = 2000;
      const step = Math.ceil(end / (duration / 16));

      const timer = setInterval(() => {
        start += step;
        if (start >= end) {
          clearInterval(timer);
          start = end;
        }
        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = start;
          return updated;
        });
      }, 16);
    });
  };

  return (
    <section ref={sectionRef} className={styles.statsSection}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        {stats.map((stat, index) => (
          <div key={stat.id} className={styles.statCard}>
            <div className={styles.iconWrapper}>
              <img
                src={stat.imgSrc}
                alt={stat.label}
                className={styles.statImage}
              />
            </div>
            <h3 className={styles.statNumber}>
              {counts[index]}
              {stat.suffix}
            </h3>
            <p className={styles.statLabel}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;





// import { useEffect, useRef, useState } from "react";
// import axios from "axios";
// import styles from "./statsSection.module.css";

// const StatsSection = () => {
//   const [stats, setStats] = useState([]);
//   const [counts, setCounts] = useState([]);
//   const [started, setStarted] = useState(false);
//   const sectionRef = useRef(null);

//   // Fetch backend stats
//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         const res = await axios.get("http://localhost:8000/api/stats/all");
//         setStats(res.data.data);
//         setCounts(res.data.data.map(() => 0));
//       } catch (error) {
//         console.error("Error fetching stats", error);
//       }
//     };

//     fetchStats();
//   }, []);

//   // Start animation on scroll
//   useEffect(() => {
//     if (!stats.length) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting && !started) {
//           setStarted(true);
//           animateNumbers();
//         }
//       },
//       { threshold: 0.4 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, [stats, started]);

//   // Number animation
//   const animateNumbers = () => {
//     stats.forEach((stat, index) => {
//       let start = 0;
//       const end = stat.number;
//       const duration = 2000;
//       const step = Math.ceil(end / (duration / 16));

//       const timer = setInterval(() => {
//         start += step;
//         if (start >= end) {
//           clearInterval(timer);
//           start = end;
//         }

//         setCounts((prev) => {
//           const updated = [...prev];
//           updated[index] = start;
//           return updated;
//         });
//       }, 16);
//     });
//   };

//   return (
//     <section ref={sectionRef} className={styles.statsSection}>
//       <div className={styles.overlay}></div>

//       <div className={styles.container}>
//         {stats.map((stat, index) => (
//           <div key={stat._id} className={styles.statCard}>
//             <div className={styles.iconWrapper}>
//               <img
//                 src={`http://localhost:8000/uploads/${stat.image}`}
//                 alt={stat.label}
//                 className={styles.statImage}
//               />
//             </div>

//             <h3 className={styles.statNumber}>
//               {counts[index]}
//               {stat.suffix}
//             </h3>

//             <p className={styles.statLabel}>{stat.label}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default StatsSection;

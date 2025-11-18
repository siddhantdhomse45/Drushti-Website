// import React from "react";
// import { Link } from "react-router-dom";
// import styles from "./Programs.module.css";

// const Programs = () => {
//   const courses = [
//     { name: "POST GRADUATE COURSES", path: "/programs/postgraduate" },
//     { name: "MASTER COURSES", path: "/programs/master" },
//     { name: "UNDER GRADUATE COURSES", path: "/programs/undergraduate" },
//     { name: "BACHELOR COURSES", path: "/programs/technology" },
//     { name: "DIPLOMA COURSES", path: "/programs/diplomacourse" },
//     { name: "CERTIFICATE COURSES", path: "/programs/certificate" },
//     { name: "DIPLOMA ENGINEERING", path: "/programs/diploma" },
//     { name: "P.G. DIPLOMA COURSES", path: "/programs/pg-diploma" },
//   ];

//   return (
//     <div className={styles.container}>
//       <div className={styles.imageContainer}>
//         <img
//           src="https://img.freepik.com/free-photo/science-dna-research-development-human_53876-121145.jpg?ga=GA1.1.296228764.1729021107&semt=ais_incoming"
//           alt="Graduation"
//           className={styles.image}
//         />
//       </div>
//       <div className={styles.courseList}>
//         {courses.map((course, index) => (
//           <div key={index} className={styles.courseItem}>
//             <span className={styles.checkmark}>✔</span>
//             <Link to={course.path} className={styles.courseLink}>
//               {course.name}
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Programs;






import { Link } from "react-router-dom";
import styles from "./Programs.module.css";

const Programs = () => {
  const courses = [
    { name: "UNDER GRADUATE COURSES", path: "/programs/undergraduate" },
    { name: "POST GRADUATE COURSES", path: "/programs/postgraduate" },
    { name: "DIPLOMA ENGINEERING", path: "/programs/diploma" },
    { name: "BACHELOR OF TECHNOLOGY", path: "/programs/technology" },
    { name: "MASTER OF TECHNOLOGY", path: "/programs/master" },
    { name: "DIPLOMA COURSES", path: "/programs/diplomacourse" },
    { name: "CERTIFICATE COURSES", path: "/programs/certificate" },
    { name: "P. G. DIPLOMA COURSES", path: "/programs/pg-diploma" },
     { name: "SCHOOL PROGRAMS", path: "/programs/school" },
      { name: "I.T.I COURSES", path: "/programs/iti" },
  ];

  return (
    <div className={styles.programsSection}>
      <div className={styles.programGrid}>
        {courses.map((course, index) => (
          <Link to={course.path} key={index} className={styles.card}>
            {course.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Programs;

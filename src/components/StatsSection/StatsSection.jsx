import React from "react";
import styles from "./statsSection.module.css";

const StatsSection = () => {
  const stats = [
    {
      id: 1,
      imgSrc: "https://live.themewild.com/eduka/assets/img/icon/course.svg",
      number: "500",
      label: "+ Total Courses",
    },
    {
      id: 2,
      imgSrc: "https://live.themewild.com/eduka/assets/img/icon/graduation.svg",
      number: "1900",
      label: "+ Our Students",
    },
    {
      id: 3,
      imgSrc: "https://live.themewild.com/eduka/assets/img/icon/teacher-2.svg",
      number: "750",
      label: "+ Skilled Lecturers",
    },
    {
      id: 4,
      imgSrc: "https://live.themewild.com/eduka/assets/img/icon/award.svg",
      number: "30",
      label: "+ Win Awards",
    },
  ];

  return (
    <section className={styles.statsSection}>
      <div className={styles.container}>
        {stats.map((stat) => (
          <div key={stat.id} className={styles.statCard}>
            <div className={styles.iconWrapper}>
              <img src={stat.imgSrc} alt={stat.label} className={styles.statImage} />
            </div>
            <h3 className={styles.statNumber}>{stat.number}</h3>
            <p className={styles.statLabel}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;

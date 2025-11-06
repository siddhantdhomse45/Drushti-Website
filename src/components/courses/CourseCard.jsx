import React from "react";
import styles from "./CourseCard.module.css";

const CourseCard = ({ image, tag, title, description, lessons, seats, years, price, rating }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />
        <span className={`${styles.tag} ${styles[tag.toLowerCase()]}`}>{tag}</span>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.details}>
          <span>{lessons} Lessons</span>
          <span>{seats} Seats</span>
          <span>{years} Years</span>
        </div>
        <div className={styles.footer}>
          <span className={styles.price}>${price}</span>
          <span className={styles.rating}>⭐ {rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

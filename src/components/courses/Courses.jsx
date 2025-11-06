import React from "react";
import CourseCard from "./CourseCard";
import styles from "./Courses.module.css";

const Courses = () => {
  const courses = [
    {
      image: "https://live.themewild.com/eduka/assets/img/course/01.jpg",
      tag: "Drama",
      title: "Acting And Drama",
      description: "There are many variations of passages orem psum available but the majority have suffer alteration in some form by injected.",
      lessons: 10,
      seats: 75,
      years: 4,
      price: 750,
      rating: 4.0,
    },
    {
      image: "https://live.themewild.com/eduka/assets/img/course/02.jpg",
      tag: "Design",
      title: "Art And Design",
      description: "There are many variations of passages orem psum available but the majority have suffer alteration in some form by injected.",
      lessons: 10,
      seats: 75,
      years: 4,
      price: 750,
      rating: 4.0,
    },
    {
      image: "https://live.themewild.com/eduka/assets/img/course/03.jpg",
      tag: "Science",
      title: "Biology And Conservation",
      description: "There are many variations of passages orem psum available but the majority have suffer alteration in some form by injected.",
      lessons: 10,
      seats: 75,
      years: 4,
      price: 750,
      rating: 4.0,
    },
    {
      image: "https://live.themewild.com/eduka/assets/img/course/04.jpg",
      tag: "Science",
      title: "Science And Engineering",
      description: "There are many variations of passages orem psum available but the majority have suffer alteration in some form by injected.",
      lessons: 10,
      seats: 75,
      years: 4,
      price: 750,
      rating: 4.0,
    },
    {
      image: "https://live.themewild.com/eduka/assets/img/course/05.jpg",
      tag: "Health",
      title: "Health Administration",
      description: "There are many variations of passages orem psum available but the majority have suffer alteration in some form by injected.",
      lessons: 10,
      seats: 75,
      years: 4,
      price: 750,
      rating: 4.0,
    },
    {
      image: "https://live.themewild.com/eduka/assets/img/course/01.jpg",
      tag: "Finance",
      title: "Accounting And Finance",
      description: "There are many variations of passages orem psum available but the majority have suffer alteration in some form by injected.",
      lessons: 10,
      seats: 75,
      years: 4,
      price: 750,
      rating: 4.0,
    },
  ];

  

  return (
    <div className={styles.courses}>
      <h2 className={styles.heading}>
      <i className="fas fa-book-open-reader"></i>Our Courses</h2>
      <p className={styles.subtitle}>
        It is a long established fact that a reader will be distracted.
      </p>
      <div className={styles.grid}>
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>

      

    </div>
  );
};

export default Courses;

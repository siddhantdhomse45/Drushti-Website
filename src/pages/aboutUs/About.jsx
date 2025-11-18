

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./About.module.css";

function About() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <>
      {/* Hero Section */}
      <div
        className={`${styles.aboutBanner} ${
          scrolled ? styles.scrolledBanner : ""
        }`}
      >
        <div className={styles.bannerText}>
          <h2>About Us</h2>
        </div>
      </div>

      {/* Welcome Section */}
      <section className={styles.head}>
        <h2>Welcome to Drushti Education Society</h2>
      </section>

      {/* About Content */}
      <section className={styles.aboutContent}>
        <p>
          We take pleasure in introducing our organization Drushti Education.
          Drushti was started in the year 1997 and established with the sole aim
          of nurturing the budding desire of aspiring students in the field of
          engineering and management. Drushti is Educational in content,
          Philanthropical in spirit, Scientific in temper, and humanitarian in
          outlook.
        </p>
        <p>
          SES in a short span of its existence created its own fair image due to
          dedicated efforts and always keeping in mind the benefits of students.
          So, at this stage it won’t be an exaggeration to say that we are one
          of the best institutes specializing in providing guidance and coaching
          for different courses conducted by reputed universities.
        </p>
        <p>
          The job market is ripe to absorb thousands if not lacs of individuals.
          Therefore the young generation must have diplomas & degrees, even if
          they are working full time and this can only be possible by distance
          education.
        </p>
        <p>
          This can only be possible by distance education earning and learning.
          SEIL has joined hands with PRIST University to conduct various
          Educational & Research Programs in the field of Engineering and
          management. The key features of the SEIL are its focus on emerging
          markets, its multi-disciplinary character, and the partnership mode in
          which it runs many of its projects. SEIL has enjoyed excellent
          visibility in India, it has co-operated with national and domestic
          agencies. We are proud to play a significant role to address the great
          diversity in social, cultural and economic environments in the world,
          bringing the best IT solutions relevant to the context in all
          geographies.
        </p>
      </section>

      {/* === 🎓 Programs Image + List Section (New) === */}
      <section className={styles.programsSection}>
        <div className={styles.programsContainer}>
          <div className={styles.programImage}>
            <img
              src="	https://softkeyeducation.com/img/dummy/img-1.jpg"
              alt="Graduates throwing hats"
            />
          </div>
          <div className={styles.programList}>
            {courses.map((course, index) => (
              <div key={index} className={styles.programItem}>
                <span className={styles.checkmark}>✔</span>
                <Link to={course.path} className={styles.programLink}>
                  {course.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className={styles.sectionContainer}>
        <div className={styles.sectionBox}>
          <div className={styles.imageSide}>
            <img
              src="https://t3.ftcdn.net/jpg/04/18/52/88/360_F_418528804_xgyFvVsMSHeWk1UgDtR9aoccqSC7BrHy.jpg"
              alt="Our Vision"
            />
          </div>
          <div className={styles.textSide}>
            <h3>Our Vision</h3>
            <p>
              We believe that improving education is the key to the survival of
              the human race. We envision a world where students become lifelong
              learners and develop 21st-century skills.
            </p>
            <p>
              It’s a world where innovation is the rule, not the exception —
              where schools provide project-based learning, emotional growth,
              and access to technology that empowers every learner.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={`${styles.sectionContainer} ${styles.reverse}`}>
        <div className={styles.sectionBox}>
          <div className={styles.textSide}>
            <h3>Our Mission</h3>
            <p>
              Education is the most powerful tool to transform the world. We aim
              to create learning environments where students thrive, think
              critically, and innovate.
            </p>
            <p>
              Our mission is to empower educators and learners by providing
              tools that foster creativity, curiosity, and lifelong learning.
            </p>
          </div>
          <div className={styles.imageSide}>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/003/396/738/small/businessman-clicks-on-virtual-screen-mission-photo.jpg"
              alt="Our Mission"
            />
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className={styles.gallery}>
        <img
          src="https://i.pinimg.com/736x/77/8c/96/778c9616e9d4cc032b8ef83ac7998274.jpg"
          alt="Students collaborating"
        />
        <img
          src="https://i.pinimg.com/736x/35/47/48/354748471cbad482eccf036d1db1a86c.jpg"
          alt="Teamwork"
        />
        <img
          src="https://i.pinimg.com/736x/17/72/84/177284b07fded8ad7bce419fc514039e.jpg"
          alt="Modern classroom"
        />
      </section>
    </>
  );
}

export default About;

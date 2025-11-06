
import styles from "./features.module.css";

const features = [
  {
    id: 1,
    title: "Scholarship Facility",
    description: "Access financial aid and scholarships to support your education dreams.",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135736.png",
  },
  {
    id: 2,
    title: "Expert Mentors",
    description: "Learn from experienced and certified professionals across domains.",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135789.png",
  },
  {
    id: 3,
    title: "Digital Library",
    description: "Explore thousands of eBooks, journals, and research materials online.",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135791.png",
  },
  {
    id: 4,
    title: "Affordable Tuition",
    description: "Quality education with budget-friendly and flexible payment plans.",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135805.png",
  },
  {
    id: 5,
    title: "Global Learning",
    description: "Connect with learners and mentors from around the world.",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
  },
  {
    id: 6,
    title: "Career Support",
    description: "Guidance and resources to help you achieve your professional goals.",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135780.png",
  },
  {
    id: 7,
    title: "Flexible Timings",
    description: "Learn at your own pace with flexible class schedules.",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135812.png",
  },
  {
    id: 8,
    title: "Community Access",
    description: "Be part of a supportive and engaging learning community.",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135815.png",
  },
];

const Features = () => {
  return (
    <section className={styles.featuresSection}>
      <h2 className={styles.sectionTitle}>Our Key Features</h2>
      <p className={styles.sectionSubtitle}>
        Discover what makes our institution stand out from the rest
      </p>

      <div className={styles.gridContainer}>
        {features.map((feature) => (
          <div key={feature.id} className={styles.card}>
            <div className={styles.iconWrapper}>
              <img src={feature.image} alt={feature.title} className={styles.icon} />
            </div>
            <h3 className={styles.title}>{feature.title}</h3>
            <p className={styles.description}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

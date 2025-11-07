// import styles from "./right.module.css";

// function Right() {
//   return (
//     <div className={styles.container}>
//       <section className={styles.mainright}>
//         <div className={styles.leftmain}>
//         <div className={styles.imageWrapper}>
//                 <img src='	https://live.themewild.com/eduka/assets/img/about/01.jpg' alt="Image 1" className={styles.image1} />
//         </div>
//         <div className={styles.bottomBadge}>30 Years Of Quality Service</div>
//         </div>
//         <div className={styles.rightmain}>
//           <div className={styles.imageWrapper1}>

//             <img src='https://live.themewild.com/eduka/assets/img/about/02.jpg' alt="Image 2" className={styles.image2} />
//             <img src='https://live.themewild.com/eduka/assets/img/about/03.jpg' alt="Image 3" className={styles.image3} />
//           </div>

//         </div>
//       </section>
//  </div>
//   );
// }

// export default Right;






import styles from "./Right.module.css";

function Right() {
  return (
    <div className={styles.container}>
      <div className={styles.imageGrid}>
        <div className={styles.mainImageWrapper}>
          <img
            src="https://live.themewild.com/eduka/assets/img/about/01.jpg"
            alt="About Eduka"
            className={styles.mainImage}
          />
          <div className={styles.badge}>30 Years of Quality Service</div>
        </div>

        <div className={styles.sideImages}>
          <img
            src="https://live.themewild.com/eduka/assets/img/about/02.jpg"
            alt="Students"
          />
          <img
            src="https://live.themewild.com/eduka/assets/img/about/03.jpg"
            alt="Campus"
          />
        </div>
      </div>
    </div>
  );
}

export default Right;

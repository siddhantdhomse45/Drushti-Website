// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaYoutube,
//   FaPhoneAlt,
//   FaMapMarkerAlt,
//   FaEnvelope,
// } from "react-icons/fa";
// import styles from "./Footer.module.css";
// import logo from "../../assets/logo.png"; 

// const Footer = () => {
//   return (
//     <footer className={styles.footer}>
//       <div className={styles.container3}>
//         {/* Brand section */}
//         <div className={styles.brand}>
//           {/* === LOGO + BRAND NAME === */}
//           <div className={styles.logoContainer}>
//               <img src={logo} alt="Drushti Logo" className={styles.logoImage} />
            
//           </div>

//           <p className={styles.description}>
//             We are many variations of passages available but the majority have
//             suffered alteration in some form by injected humour words
//             believable.
//           </p>

//           <div className={styles.contact}>
//             <p>
//               <FaPhoneAlt className={styles.icon} />{" "}
//               <span>+2 123 654 7898</span>
//             </p>
//             <p>
//               <FaMapMarkerAlt className={styles.icon} />{" "}
//               <span>25/B Milford Road, New York</span>
//             </p>
//             <p>
//               <FaEnvelope className={styles.icon} />{" "}
//               <span>info@example.com</span>
//             </p>
//           </div>
//         </div>

//         {/* Quick Links section */}
//         <div className={styles.links}>
//           <h3>Quick Links</h3>
//           <ul>
//             <li>About Us</li>
//             <li>FAQs</li>
//             <li>Testimonials</li>
//             <li>Terms of Service</li>
//             <li>Privacy Policy</li>
//             <li>Update News</li>
//           </ul>
//         </div>

//         {/* Campus Info section */}
//         <div className={styles.links}>
//           <h3>Our Campus</h3>
//           <ul>
//             <li>Campus Safety</li>
//             <li>Student Activities</li>
//             <li>Academic Department</li>
//             <li>Planning & Administration</li>
//             <li>Office of the Chancellor</li>
//             <li>Facility Services</li>
//           </ul>
//         </div>

//         {/* Newsletter section */}
//         <div className={styles.newsletter}>
//           <h3>Newsletter</h3>
//           <p>Subscribe to our newsletter to get the latest updates and news.</p>
//           <form>
//             <input
//               type="email"
//               placeholder="Your Email"
//               className={styles.input}
//             />
//             <button className={styles.button}>Subscribe Now</button>
//           </form>
//         </div>
//       </div>

//       {/* Bottom section */}
//       <div className={styles.bottom}>
//         <p>© Copyright 2025 Drushti. All Rights Reserved.</p>

//         <div className={styles.socialIcons}>
//           <FaFacebookF className={styles.socialIcon} />
//           <FaInstagram className={styles.socialIcon} />
//           <FaLinkedinIn className={styles.socialIcon} />
//           <FaYoutube className={styles.socialIcon} />
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import styles from "./Footer.module.css";
import logo from "../../../public/assests/logo.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        
        <div className={styles.brand}>
          <img src={logo} alt="Logo" className={styles.logo} />

          <p className={styles.desc}>
            We are many variations of passages available but most have suffered
            alteration in some form by injected humour.
          </p>

          <div className={styles.contact}>
            <p><FaPhoneAlt /> +2 123 654 7898</p>
            <p><FaMapMarkerAlt /> 25/B Milford Road, New York</p>
            <p><FaEnvelope /> info@example.com</p>
          </div>
        </div>

        <div className={styles.col}>
          <h3>Quick Links</h3>
          <ul>
            <li>About Us</li>
            <li>FAQs</li>
            <li>Testimonials</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Update News</li>
          </ul>
        </div>

        <div className={styles.col}>
          <h3>Our Campus</h3>
          <ul>
            <li>Campus Safety</li>
            <li>Student Activities</li>
            <li>Academic Department</li>
            <li>Planning & Administration</li>
            <li>Office of the Chancellor</li>
            <li>Facility Services</li>
          </ul>
        </div>

        <div className={styles.newsletter}>
          <h3>Newsletter</h3>
          <form>
            <input type="email" placeholder="Your Email" />
            <button>Subscribe</button>
          </form>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2025 Drushti. All Rights Reserved.</p>

        <div className={styles.socials}>
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
          <FaYoutube />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import styles from "./navbar.module.css";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   // Toggle menu open/close
//   const toggleMenu = () => setIsOpen(!isOpen);
//   const closeMenu = () => setIsOpen(false);

//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.navContainer}>
//         {/* ==== LOGO SECTION ==== */}
//         <div className={styles.logo}>
//           <Link to="/" onClick={closeMenu}>
//             <img
//               src="https://www.devconsoftware.com/devcons%20New%20logo.png"
//               alt="EduLogo"
//             />
//             <span className={styles.logoText}>Devcons</span>
//           </Link>
//         </div>

//         {/* ==== NAVIGATION LINKS ==== */}
//         <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
//           <li>
//             <Link to="/" onClick={closeMenu}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" onClick={closeMenu}>
//               About Us
//             </Link>
//           </li>
//           <li>
//             <Link to="/universities" onClick={closeMenu}>
//               Universities
//             </Link>
//           </li>
//           <li>
//             <Link to="/programs" onClick={closeMenu}>
//               Programs
//             </Link>
//           </li>
//           <li>
//             <Link to="/help" onClick={closeMenu}>
//               Help Desk
//             </Link>
//           </li>
//         </ul>

//         {/* ==== HAMBURGER MENU ==== */}
//         <div className={styles.hamburger} onClick={toggleMenu}>
//           <div className={styles.bar}></div>
//           <div className={styles.bar}></div>
//           <div className={styles.bar}></div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle menu open/close
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ""}`}
    >
      <div className={styles.navContainer}>
        {/* ==== LOGO SECTION ==== */}
        <div className={styles.logo}>
         <Link to="/" onClick={closeMenu}>
            <img
              src="https://www.devconsoftware.com/devcons%20New%20logo.png"
             alt="EduLogo"
             />
             <span className={styles.logoText}>Drushti</span>
           </Link>
        </div>

        {/* ==== NAVIGATION LINKS ==== */}
        <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/universities" onClick={closeMenu}>
              Universities
            </Link>
          </li>
          <li>
            <Link to="/programs" onClick={closeMenu}>
              Programs
            </Link>
          </li>
          <li>
            <Link to="/help" onClick={closeMenu}>
              Help Desk
            </Link>
          </li>
        </ul>

        {/* ==== HAMBURGER MENU ==== */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

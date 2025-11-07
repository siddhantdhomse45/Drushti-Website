
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import styles from "./navbar.module.css";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   // Toggle menu open/close
//   const toggleMenu = () => setIsOpen(!isOpen);
//   const closeMenu = () => setIsOpen(false);

//   // Detect scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 80) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ""}`}
//     >
//       <div className={styles.navContainer}>
//         {/* ==== LOGO SECTION ==== */}
//         <div className={styles.logo}>
//          <Link to="/" onClick={closeMenu}>
//             {/* <img
//               src="https://www.devconsoftware.com/devcons%20New%20logo.png"
//              alt="EduLogo"
//              /> */}
//              <span className={styles.logoText}>Drushti</span>
//            </Link>
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




import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ""}`}>
      <div className={styles.navContainer}>
        {/* === LOGO === */}
        <div className={styles.logo}>
          <Link to="/" onClick={closeMenu}>
            <span className={styles.logoText}>Drushti</span>
          </Link>
        </div>

        {/* === NAV LINKS === */}
        <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
          {["/", "/about", "/universities", "/programs", "/result", "/photo"].map((path, i) => {
            const labels = ["Home", "About Us", "Universities", "Programs", "Result", "Photo"];
            const active = location.pathname === path;
            return (
              <li key={path} className={active ? styles.activeLink : ""}>
                <Link to={path} onClick={closeMenu}>
                  {labels[i]}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* === HAMBURGER MENU === */}
        <div
          className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
          onClick={toggleMenu}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

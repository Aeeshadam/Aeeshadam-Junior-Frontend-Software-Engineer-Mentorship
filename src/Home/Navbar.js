import React, { useState } from "react";
import styles from "./style.module.css";
import { links } from "../constants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.LogoAndMenuContainer}>
        <a className={styles.logo} href="/" aria-label="Logo">
          <img src="/logo.png" alt="Logo" />
        </a>
        <div
          className={styles.menu}
          onClick={handleMenuClick}
          aria-label="Menu Toggle"
        >
          <img src="/menu.svg" alt="Menu-icon" />
        </div>
      </div>
      <ul
        className={`${styles.navLinks} ${
          isMenuOpen ? styles.show : styles.hide
        }`}
        role="menu"
      >
        {links.map((link) => (
          <li key={link.href} role="menuitem">
            <a href={link.href} onClick={handleLinkClick}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;

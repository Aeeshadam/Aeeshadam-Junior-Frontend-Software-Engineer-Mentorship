import React from "react";
import styles from "./style.module.css";
import { navLinks } from "../../constants";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <a href="/" aria-label="Logo">
          <img src="/random.svg" alt="Logo" />
        </a>
      </div>
      <ul className={styles.navLinks}>
        {navLinks?.map((link) => (
          <li key={link.id}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;

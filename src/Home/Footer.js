import React from "react";
import styles from "./style.module.css";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerColumns}>
        {footerLinks.map((category) => (
          <ul className={styles.footerLinks} key={category.title}>
            {category.links.map((link) => (
              <li key={link.title}>
                <a href={link.url}>{link.title}</a>
              </li>
            ))}
          </ul>
        ))}
      </div>
      <p>
        &copy; {new Date().getFullYear()} Your Company Name. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;

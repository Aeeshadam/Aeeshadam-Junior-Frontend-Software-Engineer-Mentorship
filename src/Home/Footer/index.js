import React from "react";
import styles from "./style.module.css";
import { footerLinks } from "../../constants";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerColumns}>
        {footerLinks?.map(({ id, links }) => (
          <ul className={styles.footerLinks} key={id}>
            {links?.map(({ id, title: linkTitle, url }) => (
              <li key={id}>
                <a href={url}>{linkTitle}</a>
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

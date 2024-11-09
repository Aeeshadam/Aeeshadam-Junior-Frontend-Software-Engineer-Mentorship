import React from "react";
import styles from "./style.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <header>
        <h1>Random Page - See all sort of things</h1>
        <p aria-label="header description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          blanditiis nesciunt ad ratione reiciendis. Reprehenderit et cum atque
          at aperiam nesciunt, beatae voluptatem laudantium eveniet odit fuga
          earum tenetur ad?
        </p>
        <a className={styles.button} href="/about">
          Learn More
        </a>
      </header>
      <figure>
        <img className={styles.heroImage} src="/hero.jpg" alt="hero-image" />
      </figure>
    </section>
  );
};
export default Hero;

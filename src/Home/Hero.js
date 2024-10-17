import React from "react";
import styles from "./style.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <header className={styles.heroHeader}>
        <h1>Random Page - See all sort of things</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          blanditiis nesciunt ad ratione reiciendis. Reprehenderit et cum atque
          at aperiam nesciunt, beatae voluptatem laudantium eveniet odit fuga
          earum tenetur ad?
        </p>
        <button>
          <a href="/about">Learn More</a>
        </button>
      </header>
      <figure className={styles.heroImage}>
        <img src="/hero.jpg" alt="hero-image" />
      </figure>
    </section>
  );
};
export default Hero;

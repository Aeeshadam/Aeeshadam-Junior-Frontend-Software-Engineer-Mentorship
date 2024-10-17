import React from "react";
import styles from "./style.module.css";
import { serviceData } from "../constants";

const Services = () => {
  return (
    <>
      <section className={styles.serviceContainer}>
        <h2>Learn More About Our Services</h2>
        <div className={styles.cardContainer}>
          {serviceData.map((service) => (
            <article className={styles.card} key={service.title}>
              <h4 className={styles.cardTitle}>{service.title}</h4>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.serviceContainer}>
        <h2>Deepen your financial Knowledge</h2>
        <div className={styles.cardContainer}>
          {serviceData.map(
            (service) =>
              service.image && (
                <article className={styles.card} key={service.title}>
                  <img src={service.image} alt={service.title} />
                  <h4 className={styles.cardTitle}>{service.title}</h4>
                  <p>{service.description}</p>
                </article>
              )
          )}
        </div>
      </section>
    </>
  );
};
export default Services;

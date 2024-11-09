import React from "react";
import styles from "./style.module.css";
import { serviceData } from "../../constants";

const Services = () => {
  return (
    <>
      <section className={styles.serviceContainer}>
        <h2>Learn More About Our Services</h2>
        <div className={styles.cardContainer}>
          {Array.isArray(serviceData) && serviceData.length > 0 ? (
            serviceData.map((service) => (
              <article className={styles.card} key={service.id}>
                <h4 className={styles.cardTitle}>{service.title}</h4>
                <p>{service.description}</p>
              </article>
            ))
          ) : (
            <p> No services available</p>
          )}
        </div>
      </section>

      <section className={styles.serviceContainer}>
        <h2>Deepen your financial Knowledge</h2>
        <div className={styles.cardContainer}>
          {Array.isArray(serviceData) && serviceData.length > 0 ? (
            serviceData.map(
              (service) =>
                service.image && (
                  <article className={styles.card} key={service.id}>
                    <img src={service.image} alt={service.title} />
                    <h4 className={styles.cardTitle}>{service.title}</h4>
                    <p>{service.description}</p>
                  </article>
                )
            )
          ) : (
            <p>No Services Available</p>
          )}
        </div>
      </section>
    </>
  );
};
export default Services;

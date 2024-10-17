import React from "react";
import styles from "./style.module.css";
import Footer from "./Footer";
import Services from "./Services";
import Hero from "./Hero";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </div>
  );
};
export default Home;

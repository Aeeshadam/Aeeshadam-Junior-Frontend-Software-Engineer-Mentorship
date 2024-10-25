import React from "react";
import Footer from "./Footer/Footer";
import Services from "./Services/Services";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </div>
  );
};
export default Home;

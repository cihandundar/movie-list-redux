import { TrendingMovies } from "components";
import Footer from "components/Footer";
import Hero from "components/Hero";
import Info from "components/Info";
import React from "react";

const Home = () => {
  return (
    <main>
      <section>
        <Hero />
        <TrendingMovies />
        <Info />
        <Footer />
      </section>
    </main>
  );
};

export default Home;

import { TrendingMovies } from "components";
import Footer from "components/Footer";
import Hero from "components/Hero";
import React from "react";

const Home = () => {
  return (
    <main>
      <section>
        <Hero />
        <TrendingMovies />
        <Footer />
      </section>
    </main>
  );
};

export default Home;

import { TrendingMovies } from "components";
import Hero from "components/Hero";
import React from "react";

const Home = () => {
  return (
    <main>
      <section>
        <Hero />
        <TrendingMovies />
      </section>
    </main>
  );
};

export default Home;

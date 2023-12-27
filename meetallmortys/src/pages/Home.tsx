import React from "react";
import Cards from "../components/Cards/Cards";
import { CardsContextProvider } from "../context/CardsContext";
import HeroSection from "../components/HeroSection/HeroSection";

function Home() {
  return (
    <div>
      <div className="font-primary relative">
        <HeroSection />
        <CardsContextProvider>
          <Cards />
        </CardsContextProvider>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Cards from "../components/Cards/Cards";
import { CardsContextProvider } from "../context/CardsContext";
import HeroSection from "../components/HeroSection/HeroSection";

function Home() {
  return (
    <div>
      <div className="font-primary relative">
        <Navbar />
        <HeroSection />
        <CardsContextProvider>
          <Cards />
        </CardsContextProvider>
      </div>
    </div>
  );
}

export default Home;

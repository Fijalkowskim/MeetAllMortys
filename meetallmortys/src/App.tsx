import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Cards from "./components/Cards/Cards";
import { CardsContextProvider } from "./context/CardsContext";

function App() {
  return (
    <div className="font-primary">
      <Navbar />
      <CardsContextProvider>
        <Cards />
      </CardsContextProvider>
    </div>
  );
}

export default App;

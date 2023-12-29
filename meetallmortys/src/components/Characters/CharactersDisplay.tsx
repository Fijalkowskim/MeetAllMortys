import React, { useEffect } from "react";
import { useCharactersContext } from "../../context/CharactersContext";
import CharacterCard from "./CharacterCard";
import { motion } from "framer-motion";

function CharactersDisplay() {
  const { characters, loadCharacters } = useCharactersContext();
  useEffect(() => {
    loadCharacters(1);
  }, []);
  return (
    <motion.div className="flex flex-wrap gap-x-6 w-full py-20 px-6 mx-auto justify-center cursor pointer">
      {characters?.map((char) => (
        <CharacterCard key={char.id} data={char} />
      ))}
    </motion.div>
  );
}

export default CharactersDisplay;

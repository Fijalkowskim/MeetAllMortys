import React, { useEffect } from "react";
import { useCharactersContext } from "../../context/CharactersContext";
import CharacterCard from "./CharacterCard";
import { motion } from "framer-motion";
import PageSwitchPanel from "./PageSwitchPanel";

function CharactersDisplay() {
  const { characters, loadCharacters } = useCharactersContext();
  useEffect(() => {
    loadCharacters(1);
  }, []);
  return (
    <>
      <motion.div className="flex flex-wrap gap-x-12 w-full pt-20 px-4 mx-auto justify-center cursor pointer">
        {characters?.map((char) => (
          <CharacterCard key={char.id} data={char} />
        ))}
      </motion.div>
      <PageSwitchPanel />
    </>
  );
}

export default CharactersDisplay;

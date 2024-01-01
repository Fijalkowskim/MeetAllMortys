import React, { useEffect } from "react";
import {
  CharactersContextProvider,
  useCharactersContext,
} from "../context/CharactersContext";
import CharactersDisplay from "../components/Characters/CharactersDisplay";
import { useNavigate, useParams } from "react-router-dom";

function Characters() {
  const navigate = useNavigate();
  const { id } = useParams();
  const page = id || "1";
  const isValidId = /^[1-9]\d*$/.test(page) && parseInt(page, 10) <= 47;

  useEffect(() => {
    if (!isValidId) {
      navigate("/characters/1");
    }
  }, [page, isValidId, navigate]);

  return (
    <CharactersContextProvider>
      <CharactersDisplay />
    </CharactersContextProvider>
  );
}

export default Characters;

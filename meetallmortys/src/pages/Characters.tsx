import React, { useEffect } from 'react'
import { CharactersContextProvider, useCharactersContext } from '../context/CharactersContext'
import CharactersDisplay from '../components/Characters/CharactersDisplay';

function Characters() {
  return (
    <CharactersContextProvider>
        <CharactersDisplay/>
    </CharactersContextProvider>
  )
}

export default Characters
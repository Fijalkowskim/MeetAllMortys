import React, {useEffect} from 'react'
import { useCharactersContext } from '../../context/CharactersContext';

function CharactersDisplay() {
    const {characters,loadCharacters} = useCharactersContext();
    useEffect(()=>{
        loadCharacters(1);
    },[])
  return (
    <div>CharactersDisplay</div>
  )
}

export default CharactersDisplay
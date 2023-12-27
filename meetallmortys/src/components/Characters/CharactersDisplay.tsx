import React, {useEffect} from 'react'
import { useCharactersContext } from '../../context/CharactersContext';

function CharactersDisplay() {
    const {characters,loadCharacters} = useCharactersContext();
    useEffect(()=>{
        loadCharacters(1);
    },[])
    return (
        <div>
          {characters?.map((char, idx) => (
            <div key={idx}>{char.name}</div>
          ))}
        </div>
      );
}

export default CharactersDisplay
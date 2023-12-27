import React, {useEffect} from 'react'
import { useCharactersContext } from '../../context/CharactersContext';
import CharacterCard from './CharacterCard';

function CharactersDisplay() {
    const {characters,loadCharacters} = useCharactersContext();
    useEffect(()=>{
        loadCharacters(1);
    },[])
    return (
        <div className='flex flex-wrap gap-6 w-full pt-20 px-6 mx-auto justify-center'>
          {characters?.map((char) => (
            <CharacterCard key={char.id} data={char}/>
          ))}
        </div>
      );
}

export default CharactersDisplay
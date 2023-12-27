import {
    ReactNode,
    createContext,
    useContext,
    useState,
    useEffect,
  } from "react";
  import axios from "axios";
  import { CharacterData } from "../model/CharacterData";
  
  interface CharactersContextProviderProps {
    children: ReactNode;
  }
  interface CharactersContext {
    characters: CharacterData[] | undefined;
    loadCharacters: (page: number) => void;
  }
  const CharactersContext = createContext({} as CharactersContext);
  
  export function useCharactersContext() {
    return useContext(CharactersContext);
  }
  
  export function CharactersContextProvider({ children }: CharactersContextProviderProps) {
    const [characters, setCharacters] = useState<CharacterData[]>();
    const loadCharacters = (page: number) => {
      //setCharacters([]);
        axios
        .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then((res) => {
          console.log(res.data);
        })
        
    } 
    return (
      <CharactersContext.Provider value={{characters,loadCharacters}}>
        {children}
      </CharactersContext.Provider>
    );
  }
  
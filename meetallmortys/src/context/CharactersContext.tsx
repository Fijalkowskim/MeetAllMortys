import {
    ReactNode,
    createContext,
    useContext,
    useState,
    useEffect,
  } from "react";
  import axios from "axios";
  
  interface CharactersContextProviderProps {
    children: ReactNode;
  }
  interface CharactersContext {

  }
  const CharactersContext = createContext({} as CharactersContext);
  
  export function useCharactersContext() {
    return useContext(CharactersContext);
  }
  
  export function CharactersContextProvider({ children }: CharactersContextProviderProps) {
    return (
      <CharactersContext.Provider value={{}}>
        {children}
      </CharactersContext.Provider>
    );
  }
  
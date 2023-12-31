import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import axios from "axios";
import { CharacterData } from "../model/CharacterData";
import { PageData } from "../model/PageData";

interface CharactersContextProviderProps {
  children: ReactNode;
}
interface CharactersContext {
  characters: CharacterData[] | undefined;
  loadCharacters: (page: number) => void;
  pageData: PageData | undefined;
}
const CharactersContext = createContext({} as CharactersContext);

export function useCharactersContext() {
  return useContext(CharactersContext);
}

export function CharactersContextProvider({
  children,
}: CharactersContextProviderProps) {
  const [characters, setCharacters] = useState<CharacterData[]>();
  const [pageData, setPageData] = useState<PageData>();
  const loadCharacters = (page: number) => {
    setCharacters([]);
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response: { data?: { info?: any; results?: any[] } }) => {
        const newPageData: PageData = {
          pages: response.data?.info.pages,
          next: response.data?.info.next,
          prev: response.data?.info.prev,
        };
        const loadedCharacters: CharacterData[] = (
          response.data?.results || []
        ).map((res: any) => ({
          id: res.id,
          name: res.name,
          status: res.status,
          species: res.species,
          image: res.image,
          gender: res.gender,
          from: res.origin.name,
        }));
        setCharacters(loadedCharacters);
        setPageData(newPageData);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <CharactersContext.Provider
      value={{ characters, loadCharacters, pageData }}
    >
      {children}
    </CharactersContext.Provider>
  );
}

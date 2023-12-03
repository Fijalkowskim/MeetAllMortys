import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import axios from "axios";
import { CardData } from "../model/CardData";
import { GetRandomNumbers } from "../helpers/helpers";

interface CardsContextProviderProps {
  children: ReactNode;
}
interface CardsContext {
  randomCards: CardData[];
}
const CardsContext = createContext({} as CardsContext);

export function useCardsContext() {
  return useContext(CardsContext);
}

export function CardsContextProvider({ children }: CardsContextProviderProps) {
  const [randomCards, setRandomCards] = useState<CardData[]>([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => {
        const charactersAmount = res.data.info.count;

        const ids = GetRandomNumbers(5, 1, charactersAmount);
        if (ids === undefined) return null;
        const requests = ids.map((id) =>
          axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        );

        Promise.all(requests)
          .then((responses) => {
            const newCards: CardData[] = responses.map((res) => ({
              id: res.data.id,
              name: res.data.name,
              species: res.data.species,
              image: res.data.image,
            }));
            setRandomCards(newCards);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getRandomCards = () => {
    return randomCards;
  };
  return (
    <CardsContext.Provider value={{ randomCards }}>
      {children}
    </CardsContext.Provider>
  );
}
